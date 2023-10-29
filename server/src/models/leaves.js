import { Schema, model } from 'mongoose';

const leaveSchema = new Schema({
    username: {type: String, required: true},
    date: {type: String, required: true},
    type: {type: String, required: true},
    reason: {type: String, required: true}
});

export const leaveModel = model('leave', leaveSchema);