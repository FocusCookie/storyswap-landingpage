import React, { ReactElement } from "react";
import "./Bookrain.css";
import BookrainItem from "../BookrainItem/BookrainItem";

const MIN_ANIMATION_DURATION: number = 3;
const MAX_ANIMATION_DURATION: number = 8;
const MIN_ANIMATION_DELAY: number = 1;
const MAX_ANIMATION_DELAY: number = 10;

function randomIntBetweenMinMax(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface Props {
  className?: string;
}

export default function Bookrain({ className }: Props): ReactElement {
  const animationClasses: string[] = [
    "fallDown45",
    "fallDownMinus45",
    "fallDown90",
    "fallDownMinus90",
    "fallDown90ToRight",
    "fallDown90ToLeft",
    "fallDown180ToLeft",
    "fallDown180ToRight",
    "fallDown360",
    "fallDownMinus360",
  ];

  function randomAnimationClass(): string {
    const min: number = 0;
    const max: number = animationClasses.length - 1;
    return animationClasses[Math.floor(Math.random() * (max - min + 1) + min)];
  }

  function createBookRainItems(maxItems: number): any[] {
    const items: any[] = [];

    for (let i: number = 0; i <= maxItems; i++) {
      const type = i % 6 ? "page" : "cover";
      const isAccentCover = type === "cover" && i % 4 === 0;

      items.push(
        <BookrainItem
          className={`bookrain__item ${
            isAccentCover ? "bookrain__item--accent" : ""
          }`}
          style={{
            animationName: randomAnimationClass(),
            animationDuration: `${randomIntBetweenMinMax(
              MIN_ANIMATION_DURATION,
              MAX_ANIMATION_DURATION
            )}s`,
            animationDelay: `${randomIntBetweenMinMax(
              MIN_ANIMATION_DELAY,
              MAX_ANIMATION_DELAY
            )}s`,
            left: `${randomIntBetweenMinMax(0, 100)}vw`,
          }}
          key={"item-" + i}
          type={type}
        />
      );
    }

    return items;
  }

  return (
    <div className={`bookrain ${className ? className : ""}`}>
      {createBookRainItems(25)}
    </div>
  );
}

Bookrain.propTypes = {};
