import mongoose from 'mongoose';


export interface IMessage {
  sender: mongoose.Schema.Types.ObjectId;
  sendDate: Date;
  messageType: 'videoGameShare' | 'highlightedMessage' | 'gameInvitation' | 'normal';
  content: string;

  
}

export interface IChat {
  participants: mongoose.Schema.Types.ObjectId[];
  chatType: 'private' | 'game';
  messages: IMessage[];
  time: Date;


  _id?: mongoose.Types.ObjectId | string;

}


const ChatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  chatType: { type: String, required: true, enum: ['private', 'game'], default: 'private' },
  messages: [{
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sendDate: { type: Date, required: true },
    messageType: { type: String, required: true, enum: ['videoGameShare', 'highlightedMessage', 'gameInvitation', 'normal'], default: 'normal'},
    content: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
  }],
});

export {ChatSchema};