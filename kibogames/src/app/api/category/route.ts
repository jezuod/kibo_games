import { Category } from "@/app/models/allModels";
import connectToDatabase from "@/lib/mongodb";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function POST (request: NextApiRequest) {
  const { name } = request.body;
  await connectToDatabase();
  await Category.create({ name, videoGames: [] });

  return NextResponse.json({ message: "Category created successfully" });
}


export async function GET (request: NextApiRequest) {
    await connectToDatabase();
    const categorias = await Category.find();
  
    return NextResponse.json(categorias);
  }