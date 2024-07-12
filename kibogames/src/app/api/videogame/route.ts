import { videoGamesRow1, videoGamesRow2 } from '@/app/constants/constants';
import { VideoGame } from '@/app/models/allModels';
import { IVideoGame } from '@/app/models/videogame';
import connectToDatabase from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


export async function GET() {
    await connectToDatabase();

    const result = await VideoGame.find();
    console.log(result);

    return NextResponse.json(result);
}