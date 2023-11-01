import mongoose from 'mongoose';
import moment from 'moment-timezone';

const finalProductionSchema = new mongoose.Schema({
    grade: {
        type: String,
    },
    finalWeight: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: () => {
            const now = moment.tz('Asia/Colombo');
            const offset = now.utcOffset();
            return now.add(offset, 'minutes').format();
        },
    },
});

export const FinalProduction = mongoose.model('FinalProduction', finalProductionSchema);