import mongoose from 'mongoose';
import moment from 'moment-timezone';

const qualityCheckSchema = new mongoose.Schema({
    sName: {
        type: String,
    },
    newWeight: {
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

export const QualityCheck = mongoose.model('QualityCheck', qualityCheckSchema);