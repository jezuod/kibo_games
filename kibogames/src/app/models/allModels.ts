import mongoose from "mongoose";
import { IVideoGame, VideoGameSchema } from "./videogame";
import { ChatSchema, IChat } from "./chat";
import { IUser, UserSchema } from "./user";
import { CategorySchema, ICategory } from "./category";


mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
const VideoGame = mongoose.models.VideoGame || mongoose.model<IVideoGame>("VideoGame", VideoGameSchema);
const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);
const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);




export { User, VideoGame, Chat, Category};