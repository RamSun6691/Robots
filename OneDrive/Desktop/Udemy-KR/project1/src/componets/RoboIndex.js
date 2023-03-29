import React from "react";
import Card from "./Card";
// import { robots } from "./RoboData";

const RoboIndex = ({ robots }) => {
  // const cardcomponents= robots.map((user,i) => {
  //   return  <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  // })
  return (
    <div>
      {/* {cardcomponents} */}
      {robots.map((user, i) => {
        return <Card 
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />;
      })}
    </div>
  );
};

export default RoboIndex;
