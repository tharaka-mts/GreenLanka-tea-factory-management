import { Schema, model } from 'mongoose';

const teamsSchema = new Schema({
    supId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    supFirstname: { type: String, required: true },
    supLastname: { type: String, required: true },
    team: [
        {
            user: { type: Object, ref: 'users', required: true },
            firstname: { type: String, required: true },
            lastname: { type: String, required: true },
            nic: { type: String, required: true },
        }
    ],
});

export const teamsModel = model('teams', teamsSchema);