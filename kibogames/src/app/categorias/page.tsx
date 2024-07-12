import React from "react";
import { IVideoGame } from "../models/videogame";
import VideoGameCategoryRow from "../componentes/videoGameCategoryRow";
import connectToDatabase from "@/lib/mongodb";
import { ICategory } from "../models/category";
import { Category } from "../models/allModels";


export default async function CategoriaXPage() {


  const result = await Category.find().populate('videoGames');
  var cats = JSON.parse(JSON.stringify(result)) as ICategory[];




  return (
    <div>

      {cats.map((categoria) => (
        <VideoGameCategoryRow key={categoria._id} titulo={categoria.name} videoGames={categoria.videoGames as IVideoGame[]} />
      ))}
    </div>
  );
}
