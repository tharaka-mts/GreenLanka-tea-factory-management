import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
    username: {type: String, required: true},
    date: {type: String, required: true},
    inTime: {type: String, required: true},
    outTime: {type: String, required: true},
});

export const attendanceModel = model('attendance', attendanceSchema);