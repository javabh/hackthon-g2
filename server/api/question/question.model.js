'use strict';

import mongoose from 'mongoose';

var QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: { type: Date, default: Date.now },
  url: String,
  author: { type: 'ObjectId', ref: 'User', require: true },
  active: Boolean
});

export default mongoose.model('Question', QuestionSchema);
