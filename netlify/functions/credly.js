/**
 * Credly badges proxy.
 *
 * Credly exposes a free, public JSON feed for a user's earned badges at
 * https://www.credly.com/users/<username>/badges.json — but it cannot be
 * fetched directly from the browser due to CORS. This serverless function
 * fetches it server-side and returns a trimmed, front-end friendly payload.
 *
 * Configure the username via the CREDLY_USERNAME environment variable
 * (Netlify: Site settings > Environment variables). Falls back to the
 * hardcoded default below if the variable is not set.
 */

const DEFAULT_USERNAME = "gregory-gonzalez-martinez";

exports.handler = async () => {
  const username = process.env.CREDLY_USERNAME || DEFAULT_USERNAME;

  const commonHeaders = {
    "Content-Type": "application/json",
    // Cache at the CDN for an hour; badges don't change often.
    "Cache-Control": "public, max-age=0, s-maxage=3600",
  };

  try {
    const url = `https://www.credly.com/users/${encodeURIComponent(
      username
    )}/badges.json`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        // Some edges reject requests without a UA.
        "User-Agent": "portfolio-credly-proxy",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: commonHeaders,
        body: JSON.stringify({
          success: false,
          message: `Credly responded with status ${response.status}.`,
          badges: [],
        }),
      };
    }

    const payload = await response.json();
    const rawBadges = Array.isArray(payload?.data) ? payload.data : [];

    // Map to a minimal, stable shape for the UI.
    const badges = rawBadges.map((badge) => {
      const template = badge?.badge_template || {};
      const issuer =
        badge?.issuer?.entities?.[0]?.entity?.name ||
        template?.issuer?.entities?.[0]?.entity?.name ||
        badge?.issuer?.summary ||
        "";

      return {
        id: badge.id,
        name: template.name || "",
        imageUrl: template.image_url || template?.image?.url || "",
        issuer,
        issuedAt: badge.issued_at_date || badge.issued_at || null,
        // Public verification page for the earned badge.
        url: badge.id ? `https://www.credly.com/badges/${badge.id}/public_url` : "",
      };
    });

    return {
      statusCode: 200,
      headers: commonHeaders,
      body: JSON.stringify({ success: true, count: badges.length, badges }),
    };
  } catch (error) {
    console.error("Error fetching Credly badges:", error.message);
    return {
      statusCode: 500,
      headers: commonHeaders,
      body: JSON.stringify({
        success: false,
        message: "Failed to fetch Credly badges.",
        badges: [],
      }),
    };
  }
};
