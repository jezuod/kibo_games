import mongoose,{ Document, Schema } from "mongoose";


export interface IVideoGame{
  name: string;
  images: string[];
  mainImage: string;
  description: string;
  averageRating: number;
  tutorial: string;
  videoUrl: string;
  gameUrl: string;
  categories: string[];
  availableToPlay?: boolean;
  rankingExplanation?: string;

  //Campos de mongo:
  _id?: string | mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  
}



const VideoGameSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true},
  images: [{ type: String }],
  mainImage: { type: String, required: true },
  description: { type: String, required: true },
  averageRating: { type: Number, required: true },
  tutorial: { type: String, required: true },
  videoUrl: { type: String, required: true },
  gameUrl: { type: String, required: true },
  categories: [{ type: String }],
  rankingExplanation: [{ type: String }],  
  availableToPlay: { type: Boolean, default: false }
},
  { timestamps: true }
  );

export {VideoGameSchema};
