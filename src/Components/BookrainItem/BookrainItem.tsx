import React, { ReactElement } from "react";
import { ReactComponent as Page } from "../../assets/book_page.svg";
import { ReactComponent as Cover } from "../../assets/book_cover.svg";

interface Props {
  type: "cover" | "page";
  className?: string;
  style?: object;
}

export default function BookrainItem({
  type,
  className,
  style,
}: Props): ReactElement {
  return (
    <>
      {type === "cover" ? (
        <Cover className={`${className}`} style={style} />
      ) : (
        <Page className={className} style={style} />
      )}
    </>
  );
}
