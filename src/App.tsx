import React from "react";
import "./App.css";
import Bookrain from "./Components/Bookrain/Bookrain";
import BookSection from "./Components/BookSection/BookSection";
import BookmarkSection from "./Components/BookmarkSection/BookmarkSection";
import PageTitle from "./Components/PageTitle/PageTitle";
import streetwaste from "./assets/street_waste.jpg";
import packages from "./assets/packages.jpg";
import { ReactComponent as Person } from "./assets/Person.svg";

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
        <Person className="person" />
        <p>
          👋 Hi there! Do you love to read books 📚? Do you like free books? Do
          you want to support the environment 🌱? Or do you simply want to
          declutter your bookshelf, then you will love ❤️ storyswap!
        </p>
      </section>

      <nav>
        <a href="#paper" className="btn btn--variant-white">
          paper shortage
        </a>
        <a href="#street-waste" className="btn btn--variant-white">
          environment
        </a>
        <a href="#sharing" className="btn btn--variant-white">
          sharing
        </a>
        <a href="#about" className="btn btn--variant-white">
          about
        </a>
        <a href="https://storyswap.app" className="btn btn--variant-primary">
          Get storyswap
        </a>
      </nav>

      <div className="sections">
        <BookSection title="Paper Shortage" id="paper">
          <PageTitle title="Covid & Online Shopping" />
          <p>
            In 2020 the Corona Virus 🦠 started to spread around the world.
            Within the first month, every government in the world enforced
            quarantine 😷 and told the people to stay at home to reduce the
            infection rate.
          </p>

          <p>
            Every store that was not necessary for daily life had to close
            temporarily. The stores shifted their business to the online world
            if they hadn't already.
          </p>

          <div className="w-full mt-4">
            <img
              src={packages}
              className="rounded"
              alt="Packages in a delivery truck."
              height="200"
            />
            <p className="text-xs text-medium-700 text-center">
              by https://unsplash.com/@purzlbaum
            </p>
          </div>

          <p>
            The high demand for online shipping led to all-time high 📈 demand
            for packing materials 📦. Paper manufacturer switched their
            production over to packing materials. The spike in packing material
            led to the current paper shortage and finally led to a book
            shortage.
          </p>

          <p>
            It becomes more important to share your books after you have
            finished them.
          </p>
        </BookSection>

        <BookSection
          title="environment"
          id="street-waste"
          variant="accent"
          type="side"
        >
          <PageTitle title="street waste" />
          <p>
            Every citizen of a big town knows the problem of street waste. You
            walk down a street 🏘, and there will be some mattresses, random
            furniture, and a lot of boxes with random stuff and books.
          </p>
          <p>
            After the first rain, the books are ruined, and no one can take them
            to read them. Every item that doesn't look newish will be left on
            the street until the garbage collector 🗑 comes and throws it away.
          </p>
          <p>
            So in order to keep your neighborhood in a good shape start sharing
            your books!
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
          <article className="flex flex-col gap-4">
            <PageTitle title="sharing" />

            <p>
              How often do you look into your books on your bookshelf? How often
              have you read them? Once? Twice maximum? A library always looks
              nice, but imagine you are a person who can't afford many books.
            </p>

            <p>
              The only option you will have is to go to the library and rent a
              book. Usually, the state libraries will not have the latest books.
              In addition, not every topic is curated in every library, which
              makes it all the more difficult to develop in certain niches.
            </p>

            <p>
              Therefore start sharing your books to help other people who could
              not afford a new book.
            </p>
          </article>
        </BookmarkSection>
      </div>

      <div className="my-16">
        <a href="https://storyswap.app" className="btn btn--variant-primary">
          Get storyswap
        </a>
      </div>

      <section>
        <article id="about">
          <PageTitle title="About" className="" />
          <p>
            Hi there! My name is Stephan, and this is my final MERN project at
            the Code Academy Berlin. You can get more technical information on
            my{" "}
            <a
              href="https://github.com/FocusCookie/storyswap-frontend"
              target="_blank"
              rel="noreferrer"
              className="text-primary-500 font-bold"
            >
              Github page
            </a>
            .
          </p>

          <p>
            The idea of storyswap was born in 2021. Back then, I started the
            year with a habit of reading every day a book for a minimum of 30
            minutes. I ended up reading 53 books during the year. Each time I
            finished a book, I looked for a new one and researched the regular
            book retailers for a new book.
          </p>

          <p>
            At the same time, I have a lot of finished books that I can't leave
            on my shelf forever. As I walked my usual route with the stroller, I
            noticed that people were putting their books on the street to give
            away. Unfortunately, the books were mostly already destroyed by the
            weather, or the best ones were already taken out.
          </p>

          <p>
            So I thought it would be nice to have an app where users can put
            their books online for a giveaway and discover new books for free.
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
