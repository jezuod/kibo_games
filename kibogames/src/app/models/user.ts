import mongoose from "mongoose";
import { Document, Schema, model } from 'mongoose';
import { use } from "react";

export interface IGameHistory {
  gameName: string;
  playDate: Date;
  playDuration: number;
}

export interface IRanking {
  gameName: string;
  level: string;
  score: number;
  playCount: number;
}

export interface IUser {
  username: string;
  name: string;
  email: string;
  Image: string;
  reputation: number;
  registeredAt: Date;
  password: string; // Consider using hashing for storing passwords
  favoriteGames: string[];
  gameHistory: IGameHistory[];
  rankings: IRanking[];
  nivelPerfil: number;
  friends: string[] | IUser[]; // References to other User documents

  //Campos de mongo:
  _id?: string | mongoose.Types.ObjectId | any;
  createdAt?: Date;
  updatedAt?: Date;
}



// var schemaAuthUser = mongoose.model("users")
// console.log("schemaAuthUser")
// console.log("schemaAuthUser")
// console.log("schemaAuthUser")
// console.log(schemaAuthUser)


const UserSchema: Schema = new Schema({
  // ...schemaAuthUser,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false },
  image: { type: String, required: false, default: "https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg"},
  reputation: { type: Number, required: true },
  registeredAt: { type: Date, required: true },
  password: { type: String, required: true },
  favoriteGames: [{ type: String }],
  gameHistory: [{
    gameName: String,
    playDate: Date,
    playDuration: Number,
  }],
  rankings: [{
    gameName: String,
    level: String,
    score: Number,
    playCount: Number,
  }],
  nivelPerfil: {type: Number, default: 1},
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}
  , { timestamps: true });


//Si no tiene nombre, se le asigna el email
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.name) {
    this.name = this.email;
  }
  if (!this.username)
    this.username = this.email;
  next();
});


export {UserSchema};
