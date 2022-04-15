import mongoose, { Schema } from 'mongoose';

const linkSchema = new Schema({
    longUrl: String,
    shortUrl: String,
    date: Number,
});

const LinkSchema = mongoose.model('Link', linkSchema);

export default LinkSchema