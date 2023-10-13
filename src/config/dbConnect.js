import mongoose from "mongoose";


async function connectDataBase(){
    mongoose.connect("mongodb+srv://kathyellenromao15:K%40ty8551@cluster0.flh188f.mongodb.net/fourodonto?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;

