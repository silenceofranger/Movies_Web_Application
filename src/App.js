import React from "react";
import Card from "./Card";
import Sdata from "./Data";

const fun = () => {
  return (
    <>
      <h1 className="heading_style"> MOVIES </h1>
      {Sdata.map(function ncard(val) {
        return <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} />;
      })}
    </>
  );
};

export default fun;
