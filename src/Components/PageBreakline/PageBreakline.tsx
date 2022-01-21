import React, { ReactElement } from "react";
import "./PageBreakline.css";

interface Props {
  className?: string;
}

export default function PageBreakline({ className }: Props): ReactElement {
  return (
    <div className={`page-breakline ${className ? className : ""}`}>
      <div className="page-breakline__double-line"></div>
      <div className="page-breakline__shape">
        <div className="page-breakline__shape__inner"></div>
      </div>
      <div className="page-breakline__double-line"></div>
    </div>
  );
}
