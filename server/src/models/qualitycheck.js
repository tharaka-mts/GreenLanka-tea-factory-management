import mongoose from 'mongoose';

const qualityCheckSchema = new mongoose.Schema({
    sName: {
        type: String,
    },
    newWeight: {
        type: Number,
        default: 0,
    },
});

export const QualityCheck = mongoose.model('QualityCheck', qualityCheckSchema);