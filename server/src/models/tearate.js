import mongoose from 'mongoose';
import moment from 'moment-timezone';

const teaRateSchema = new mongoose.Schema({
    rateForRawTeaLeaves: {
        type: Number,
        default: 0,
    },
    rateForGradeAProduction: {
        type: Number,
        default: 0,
    },
    rateForGradeBProduction: {
        type: Number,
        default: 0,
    },
    rateForGradeCProduction: {
        type: Number,
        default: 0,
    },
    rateForGradeDProduction: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: "Request",
    },
    comment: {
        type: String,
        default: "",
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



export const TeaRate = mongoose.model('TeaRate', teaRateSchema);