const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  invitedMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  declineMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Group', GroupSchema);