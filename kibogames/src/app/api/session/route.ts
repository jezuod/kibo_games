import { authConfig } from '@/lib/auth';
import connectToDatabase from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req:NextRequest) {
 

  
  await connectToDatabase();

  try {
    const session = await getServerSession(authConfig)
    return NextResponse.json(session);
  }
  catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }

}