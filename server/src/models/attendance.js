import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
    userId: {type: String, required: true},
    date: {type: Date, required: true},
    inTime: {type: Date, required: true},
    outTime: {type: Date, required: true},
});

export const attendanceModel = model('attendance', attendanceSchema);