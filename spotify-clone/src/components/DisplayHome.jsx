import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData.map((album, index) => (
          <AlbumItem
            key={index}
            image={album.image}
            name={album.name}
            desc={album.desc}
            id={album.id}
          />
        ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays's biggest hits</h1>
        <div className="flex overflow-auto">
        {songsData.map((items,index)=>(
            <SongItem image={items.image} id={items.id} name={items.name} desc={items.desc}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
