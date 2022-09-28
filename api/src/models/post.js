import mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;

const PostSchema = new Schema({
  seq: Number,
  title: String,
  body: String,
  tags: [String], //문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, //현재 날짜를 기본값으로 지정
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

PostSchema.plugin(AutoIncrement, { inc_field: 'no' });

const Post = mongoose.model('Post', PostSchema);
export default Post;
