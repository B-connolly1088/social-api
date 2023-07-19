const { Schema, model } = require('mongoose');
const reactionsSchema = require('reactionsSchema');
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
     type: Date,
     default: Date.now,
     get: (timestamp) => timestamp.toLocaleDateString(),

    },
    userName: 
      {
        type: String,
        required: true,
      },
    reactions: [
        reactionsSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;