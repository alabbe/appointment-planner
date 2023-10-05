import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {

  const tiles = data.map((item, index) => { 
    const {name, ...object} = item;
    return <Tile key={index} name={name} description={object}></Tile>
  });

  return (
    <div>
      {tiles}
    </div>
  );
};
