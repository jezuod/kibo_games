import { videoGamesRow1, videoGamesRow2 } from '@/app/constants/constants';
import { User } from '@/app/models/allModels';
import  { IVideoGame } from '@/app/models/videogame';
import connectToDatabase from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req:NextRequest) {
 

  
  await connectToDatabase();

  try {
    const result = await  User.find();
    console.log(result);
    return NextResponse.json(result);
  }
  catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }

}