import React, { useEffect, useMemo, useState } from "react";
import { ReactTyped as Typed } from "react-typed";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import NavBar from "../../components/NavBar/NavBar";

import "./Home.css";

function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => undefined;

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#95c7fb",
        },
        links: {
          color: "#95c7fb",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  if (init) {
    return (
      <main className="home">
        <NavBar />
        <section className="text-container" aria-label="Presentación principal">
          <Particles
            id="tsparticles"
            className="particles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <h1 className="text-title">
            <Typed
              strings={["Hi, I'm Gregory Gonzalez"]}
              typeSpeed={50}
              backSpeed={30}
              startDelay={1000}
              backDelay={1500}
              loopCount={1}
              showCursor={false}
              className="title-typed"
            />
          </h1>
          <p className="text-description">
            <Typed
              strings={[
                "I'm a passionate Software Developer!",
                "I love creating stunning Frontend experiences.",
                "Let's turn ideas into reality together!",
                "Full Stack Developer | Development Enthusiast | Lifelong Learner | Problem Solver",
                "Welcome to my portfolio!",
              ]}
              typeSpeed={30}
              backSpeed={30}
              startDelay={1000}
              backDelay={1500}
              loop
              showCursor
              cursorChar="|"
              className="text-typed"
            />
          </p>
        </section>
      </main>
    );
  }
  return null;
}

export default Home;
