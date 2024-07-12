// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

import mongoose from "mongoose";
import { MongoClient } from "mongodb"


if (!process.env.MONGODB_URI && !process.env.MONGODB_URI_LOCAL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

//TODO: Cambiar entre MONGODB_URI y MONGODB_URI_LOCAL segun necesidad
const connectionString = process.env.MONGODB_URI || ""

export default async function connectToDatabase() {



  ///CONNECT TO MONGODB 
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB.");
    return 
  } catch (error) {
    console.log(error);
  }

  throw new Error('UNNABLE TO CONNECT TO MONGO DB. Invalid/Missing environment variable: "MONGODB_URI" or "MONGODB_URI_LOCAL')



}

export async function closeDatabase() {
  await mongoose.connection.close();
  console.log("Disconnected from MongoDB.");
}

export function getMongoClient(): Promise<MongoClient> {

  ///CONNECT TO MONGODB ATLAS
  try {
    var client = new MongoClient(connectionString)
    var clientPromise: Promise<MongoClient> = client.connect()
      console.log("getMongoClient ATLAS SUCCESSFUL.");
    return clientPromise

  } catch (error) {
    console.log(error);
  }

  throw new Error('UNNABLE TO CONNECT TO MONGO DB. Invalid/Missing environment variable: "MONGODB_URI" or "MONGODB_URI_LOCAL')

}

export async function dropAllCollections() {
  await connectToDatabase();


  try {
    // await mongoose.connection.dropCollection("sessions");
    console.log(`Dropped collection: sessions`);
  } catch (error) {
    console.log(`Failed drop collection: sessions`);
  }

  try {
    await mongoose.connection.dropCollection("videogames");
    console.log(`Dropped collection: videogames`);
  } catch (error) {
    console.log('Failed drop collection: videogames')
  }

  try {
    await connectToDatabase();
    await mongoose.connection.dropCollection("categories");
    console.log(`Dropped collection: categories`);
  } catch (error) {
    console.log('Failed drop collection: categories')

  }

  try {
    await connectToDatabase();
    // await mongoose.connection.dropCollection("users");
    console.log(`Dropped collection: users`);
  } catch (error) {
    console.log('Failed drop collection: users')

  }


  try {
    await connectToDatabase();
    // await mongoose.connection.dropCollection("accounts");
    console.log(`Dropped collection: accounts`);
  } catch (error) {
    console.log('Failed drop collection: accounts')

  }

  console.log(`Dropped collections: videogames, categories, users, sessions, accounts`);
}

