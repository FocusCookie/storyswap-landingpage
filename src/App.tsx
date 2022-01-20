import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bookrain from "./Components/Bookrain/Bookrain";
import BookSection from "./Components/BookSection/BookSection";

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

      <BookSection />
    </div>
  );
}

export default App;
