import { IVideoGame } from '@/app/models/videogame';
import mongoose from 'mongoose';

export interface ICategory {
  _id?: mongoose.Types.ObjectId | string;
  name: string;
  videoGames: string[] | IVideoGame[];
}


const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  videoGames: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VideoGame' }],
});

export { CategorySchema };