import React, { ReactElement, useEffect } from "react";
import "./BookSection.css";
import { ReactComponent as Front } from "../../assets/book_section/front_first_page.svg";
import { ReactComponent as Back } from "../../assets/book_section/back.svg";
import PageTitle from "../PageTitle/PageTitle";

interface Props {
  title: string;
  variant?: "primary" | "accent";
  type?: "bottom" | "side";
  className?: string;
  id?: string;
  children?: any;
  infiniteAnimation?: boolean;
}

export default function BookSection({
  title,
  variant = "primary",
  type = "bottom",
  className = "",
  id = "",
  children,
  infiniteAnimation = false,
}: Props): ReactElement {
  const containerRef = React.useRef<HTMLHtmlElement>(null!);
  const [bookIsVisible, setBookIsVisible] = React.useState<Boolean>(false);
  const [intersectionRatio, setIntersectionRatio] = React.useState<Number>(0);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;

    setIntersectionRatio(entry.intersectionRatio);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
        observer.disconnect();
      }
    };
  }, [containerRef]);

  useEffect(() => {
    if (intersectionRatio >= 0.5 && !bookIsVisible) {
      setBookIsVisible(true);
    }
    if (intersectionRatio <= 0.1 && bookIsVisible && infiniteAnimation) {
      setBookIsVisible(false);
    }
  }, [intersectionRatio]);

  return (
    <section
      id={id}
      className={`book-section ${
        type === "side" && !bookIsVisible ? "book-section--rotate-20" : ""
      } ${className}`}
      ref={containerRef}
    >
      <Back
        className={`book-section__back ${
          variant === "primary"
            ? "book-section__back--primary"
            : "book-section__back--accent"
        } ${bookIsVisible && type === "side" ? "move-out-left" : ""}`}
      />

      <div
        className={`book-section__page ${
          bookIsVisible && type === "bottom"
            ? "book-section__page--bottom-out"
            : ""
        } ${bookIsVisible && type === "side" ? "move-to-right" : ""}`}
      >
        <PageTitle title={title} />
        <div className="book-section__content">{children}</div>
      </div>

      <div
        className={`book-section__front_wrapper ${
          bookIsVisible && type === "side" ? "move-out-left" : ""
        }`}
      >
        <Front
          className={`book-section__front ${
            variant === "primary"
              ? "book-section__front--primary"
              : "book-section__front--accent"
          }`}
        />
        <h1 className="book-section__title">{title}</h1>
      </div>
    </section>
  );
}
