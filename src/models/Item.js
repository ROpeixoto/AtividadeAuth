import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
},

    quantity: { 
        //string para quilos ou litros ou quantidade
        type: String, 
        default: 1 
},

    prioridade: {
        type: String,
        enum: ['baixa', 'media', 'alta'],
        default: 'media'
    },

    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
}
});

const Item = mongoose.model('Item', itemSchema);

export default Item;