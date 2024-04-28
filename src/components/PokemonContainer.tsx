import React from "react";
import balbasaur from "../assets/balbasaur.png";

interface PokemonContainerProps {
  image: string;
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({ image }) => {
  return (
    <div className="circle-container">
      <div className="outer-circle">
        <div className="inner-circle">
          <img src={image} alt="Pokemon" />
        </div>
        <div className="lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
