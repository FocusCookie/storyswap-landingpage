import React from "react";
import "./BookmarkSection.css";

import { ReactComponent as Book } from "../../assets/book_section/book.svg";
import { ReactComponent as Front } from "../../assets/book_section/front_first_page.svg";
import { ReactComponent as Back } from "../../assets/book_section/back.svg";

type Props = {
  title: string;
  children?: any;
  className?: string;
  id?: string;
};

export default function BookSection({
  children,
  className = "",
  title,
  id = "",
}: Props): React.ReactElement {
  return (
    <div className={`bookmark-section ${className}`} id={id}>
      <Book className="bookmark-section__staplebook" />
      <Book className="bookmark-section__staplebook" />
      <section className={`bookmark-section ${className}`}>
        <Back className="bookmark-section__back" />

        <div className="bookmark-section__content-wrapper">
          <div className="bookmark-section__content__bookmark">
            <div
              className="bookmark-section__content__bookmark__stripe"
              role="img"
            ></div>
            <div className="bookmark-section__content__bookmark__end"></div>
          </div>
          <div className="bookmark-section__content">{children}</div>
        </div>

        <div className="bookmark-section__front-wrapper">
          <Front className="bookmark-section__front" />
          <h1 className="bookmark-section__title">{title}</h1>
        </div>
      </section>
    </div>
  );
}
