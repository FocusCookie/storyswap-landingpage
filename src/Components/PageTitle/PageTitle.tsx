import React, { ReactElement } from "react";
import "./PageTitle.css";
import PageBreakline from "../PageBreakline/PageBreakline";

interface Props {
  title: string;
  className?: string;
}

export default function PageTitle({ title, className }: Props): ReactElement {
  return (
    <div className="page-title">
      <h1 className="page-title__headline">{title}</h1>
      <PageBreakline />
    </div>
  );
}
