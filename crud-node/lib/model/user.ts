import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

 const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number
})

export const UserModel = mongoose.models['user'] || mongoose.model('user', UserSchema)
