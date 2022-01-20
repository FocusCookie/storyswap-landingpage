import React, { ReactElement, useState, useEffect, useRef } from "react";
import "./BookSection.css";
import { ReactComponent as Front } from "../../assets/book_section/front_first_page.svg";
import { ReactComponent as Back } from "../../assets/book_section/back.svg";

interface Props {
  variant?: "primary" | "accent";
  className?: string;
  style?: object;
}

export default function BookSection({
  variant = "primary",
  className,
  style,
}: Props): ReactElement {
  const containerRef = useRef(null);
  const [coverIsVisible, setCoverIsVisible] = useState(false);
  const [visibleRatio, setVisibleRatio] = useState(0);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setCoverIsVisible(entry.isIntersecting);
    setVisibleRatio(entry.intersectionRatio);
    console.log("intersectionRation", entry.intersectionRatio);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.4, 0.6, 0.8, 1],
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

  return (
    <section className="book-section">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos facere
        magnam nesciunt velit tempora, asperiores voluptates voluptatem non
        consequuntur esse aut sit sed molestiae molestias, excepturi quas, saepe
        tempore et!
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos facere
        magnam nesciunt velit tempora, asperiores voluptates voluptatem non
        consequuntur esse aut sit sed molestiae molestias, excepturi quas, saepe
        tempore et!
      </p>
      <p>{coverIsVisible ? " SICHTBAR " : " NICHT SICHTBAR"}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos facere
        magnam nesciunt velit tempora, asperiores voluptates voluptatem non
        consequuntur esse aut sit sed molestiae molestias, excepturi quas, saepe
        tempore et!
      </p>
      <div
        ref={containerRef}
        style={{
          maxHeight: "10rem",
          overflow: "hidden",
          fontSize: `${16 * (visibleRatio + 1)}px`,
        }}
      >
        ICH WACHSE!
      </div>
    </section>
  );
}
