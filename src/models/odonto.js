import mongoose from "mongoose";

const odontoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    valor:{type: String}
}, {versionKey:false}
);

const odonto = mongoose.model("odonto", odontoSchema);

export default odonto;