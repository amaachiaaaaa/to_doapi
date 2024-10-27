import mongoose from 'mongoose';
import 'dotenv/config'


const  mongodb_uri = process.env.mongodb_uri

export const dbConnection = () => {
    mongoose.connect(mongodb_uri).then(() => {
        console.log('database is connected')
    })
};