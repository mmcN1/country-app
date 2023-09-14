import React, { useState } from "react";
import "../styles/content.scss";
import Card from "../components/Card";

const Content = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="content">
      {data.map((item) => (
        <Card
          item={item}
          activeItem={activeItem}
          onChangeActiveItem={setActiveItem}
          key={`card-${item.name}`}
        />
      ))}
    </div>
  );
};

export default Content;
