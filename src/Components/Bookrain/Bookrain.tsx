import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Bookrain.css";
import BookrainItem from "../BookrainItem/BookrainItem";

interface RainItem {
  id: string;
  animation: string;
  duration: number;
  display: "cover" | "page";
  style?: object;
}

const MIN_DURATION = 2000;
const MAX_DURATION = 10000;
const INIT_DURATION = 1000;
const ADD_ITEM_INTERVAL = 1000;

function randomIntBetweenMinMax(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Bookrain({ ...props }) {
  const initRainItems: RainItem[] = [
    {
      id: "init",
      animation: "spin-90",
      duration: INIT_DURATION,
      display: "page",
    },
  ];
  const [rain, setRain] = useState(initRainItems);

  useEffect(() => {
    const rainInterval = setInterval(() => {
      const duration = randomIntBetweenMinMax(MIN_DURATION, MAX_DURATION);
      let id = "";
      setRain((current) => {
        id = `${current.length - 1 + 1} - ${Math.random()}`;
        return [
          ...current,
          {
            id: id,
            animation: "spin-90",
            duration: duration,
            display: Date.now() % 6 ? "page" : "cover",
            style: {
              transform: `translateX(${randomIntBetweenMinMax(0, 1000)}%)`,
            },
          },
        ];
      });

      setTimeout(() => {
        setRain((current) => current.filter((item) => item.id !== id));
      }, duration + 100); // ADD_INTERVAL will be the animation duration so after additional 500ms remove the item
    }, ADD_ITEM_INTERVAL);
    return () => {
      clearInterval(rainInterval);
    };
  }, []);

  // each 200ms add a page
  // each page will have a random animation duration time
  // each page will have a random animation from the animations array
  // the array of pages will look like this

  return (
    <div className="bookrain" {...props}>
      {rain.map((item) => (
        <BookrainItem
          className="bookrain__item"
          type={item.display}
          key={item.id}
          style={item.style}
        />
      ))}
    </div>
  );
}

Bookrain.propTypes = {};

export default Bookrain;
