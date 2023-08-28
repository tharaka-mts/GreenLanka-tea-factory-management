import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    date: {type: Date, required: true},
    inTime: {type: String, required: true},
    outTime: {type: String, required: true},
});

export const attendanceModel = model('attendances', attendanceSchema);