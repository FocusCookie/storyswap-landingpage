import React from "react";
import "./App.css";
import Bookrain from "./Components/Bookrain/Bookrain";
import BookSection from "./Components/BookSection/BookSection";
import BookmarkSection from "./Components/BookmarkSection/BookmarkSection";
import PageTitle from "./Components/PageTitle/PageTitle";
import streetwaste from "./assets/street_waste.jpg";

//TODO: Implement navigation jump to each section

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
        <a href="#test">got to test</a>
        <p>
          👋 Bibendum porttitor lectus id cursus dapibus 📖 lobortis risus.
          Lacinia diam posuere et, accumsan ♥ ornare cursus morbi. Sapien in
          orci id aliquam ultricies rhoncus aenean proin tristique.{" "}
        </p>
      </section>

      <nav className="my-32">
        <a href="#paper" className="btn btn--variant-white">
          paper shortage
        </a>
        <a href="#street-waste" className="btn btn--variant-white">
          street waste
        </a>
        <a href="#sharing" className="btn btn--variant-white">
          sharing
        </a>
        <a href="https://storyswap.app" className="btn btn--variant-primary">
          Get the app
        </a>
      </nav>

      <BookSection title="Paper Shortage" id="paper">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt
          est dicta quas qui, cupiditate molestiae aperiam, soluta perspiciatis
          corrupti quo nam ea laudantium omnis in vitae corporis repudiandae
          sed.
        </p>
      </BookSection>

      <br />

      <BookSection
        title="street waste"
        id="street-waste"
        variant="accent"
        type="side"
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt
          est dicta quas qui, cupiditate molestiae aperiam, soluta perspiciatis
          corrupti quo nam ea laudantium omnis in vitae corporis repudiandae
          sed.
        </p>
        <div className="w-full mt-4">
          <img
            src={streetwaste}
            className="rounded"
            alt="Book Street waste"
            height="200"
          />
          <p className="text-xs text-medium-700 text-center">
            by https://unsplash.com/@markusclemens
          </p>
        </div>
      </BookSection>

      <BookmarkSection title="sharing" id="sharing">
        <article>
          <PageTitle title="sharing" />
          <div className="mt-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              eveniet eaque aliquam delectus sint saepe vel aut perspiciatis.
              Non nesciunt quam aliquam libero ducimus ratione dicta mollitia
              unde laudantium nulla.
            </p>
          </div>
        </article>
      </BookmarkSection>
    </div>
  );
}

export default App;
