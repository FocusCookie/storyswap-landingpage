import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bookrain from "./Components/Bookrain/Bookrain";
import BookSection from "./Components/BookSection/BookSection";
import streetwaste from "./assets/street_waste.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <Bookrain />
        <div className="header__title">
          <h1 className="highlight-title">storyswap</h1>
        </div>
      </header>
      <section className="welcome">
        <p>
          👋 Bibendum porttitor lectus id cursus dapibus 📖 lobortis risus.
          Lacinia diam posuere et, accumsan ♥ ornare cursus morbi. Sapien in
          orci id aliquam ultricies rhoncus aenean proin tristique.{" "}
        </p>
      </section>
      <nav>
        <button className="btn btn--variant-white">paper shortage</button>
        <button className="btn btn--variant-white">street waste</button>
        <button className="btn btn--variant-white">sharing</button>
        <button className="btn btn--variant-white">demo</button>
        <button className="btn btn--variant-primary">Get the app</button>
      </nav>

      <BookSection title="Online shopping">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt
          est dicta quas qui, cupiditate molestiae aperiam, soluta perspiciatis
          corrupti quo nam ea laudantium omnis in vitae corporis repudiandae
          sed.
        </p>
      </BookSection>

      <br />

      <BookSection title="street waste" variant="accent" type="side">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt
          est dicta quas qui, cupiditate molestiae aperiam, soluta perspiciatis
          corrupti quo nam ea laudantium omnis in vitae corporis repudiandae
          sed.
        </p>
      </BookSection>

      {/* //TODO weiter machen, wenn image in book section, geht die drehung nicht mehr */}

      <img src={streetwaste} alt="Book Street waste" height="200" />
      <p>by https://unsplash.com/@markusclemens</p>
    </div>
  );
}

export default App;
