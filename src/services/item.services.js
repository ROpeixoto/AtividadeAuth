import Item from '../models/Item.js';

export const createItem = async ({ name, quantity, userId }) => {
    return await Item.create({ name, quantity, userId });
};

export const getUserItems = async (userId) => {
    // Retorna apenas o campo 'name'
    return await Item.find({ userId }).select('name -_id');
};

export const getItemDetails = async (userId, itemId) => {
    // Busca o item pelo id e pelo usuário dono
    return await Item.findOne({ _id: itemId, userId });
};

export const updateItemService = async (userId, itemId, data) => {
    return await Item.findOneAndUpdate(
        { _id: itemId, userId },
        data,
        { new: true }
    );
};