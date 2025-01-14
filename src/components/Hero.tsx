import { useState } from "react";
import Button from "./Button";

const Hero = () => {
  const heroText =
    "Det här är en hemsida med ett enda syfte - att lära sig skapa webbapplikationer med React. Följ resan!";

  const [count, setCount] = useState(0);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-h1">En lekstuga för React.js</h1>
        <p className="hero-p">{heroText}</p>
        <Button
          text="Klicka mig"
          onClick={() => setCount(count + 1)}
          styleClass="hero-button"
        ></Button>
        <span className="count">{count}</span>
      </div>
    </section>
  );
};

export default Hero;
