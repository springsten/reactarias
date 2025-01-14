import Button from "./Button";

const Hero = () => {
  const heroText =
    "Det här är en hemsida med ett enda syfte - att lära sig skapa webbapplikationer med React";

  const handleClick = () => {
    alert("Du klickade på knappen");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-h1">En lekstuga för React.js</h1>
        <p className="hero-p">{heroText}</p>
        <Button
          text="Läs mer"
          onClick={handleClick}
          styleClass="hero-button"
        ></Button>
      </div>
    </section>
  );
};

export default Hero;
