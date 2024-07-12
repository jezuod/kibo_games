import VideoGameCategoryRow from "@/app/componentes/videoGameCategoryRow";
import { Category } from "@/app/models/allModels";
import { ICategory } from "@/app/models/category";
import { IVideoGame } from "@/app/models/videogame";
import connectToDatabase from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function CategoriaXPage({
  params,
}: {
  params: { categoria: string };
}) {

  const name = params.categoria.replace("%20", ' ');
  console.log(name);
  await connectToDatabase();
  const result = await Category.findOne({ name: name }).populate('videoGames');
  var cate = JSON.parse(JSON.stringify(result)) as ICategory;

  if (!cate) {
    notFound();
  }

  return <VideoGameCategoryRow key={cate._id} titulo={cate.name} videoGames={cate.videoGames as IVideoGame[]} />
}
