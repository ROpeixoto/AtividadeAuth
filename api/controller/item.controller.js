import { createItem, getUserItems, getItemDetails, updateItemService } from '../services/item.services.js';

const addItem = async (req, res) => {
    const { name, quantity } = req.body;
    const userId = req.userId;

    if (!name) {
        return res.status(400).json({ message: 'Item name is required' });
    }

    try {
        const item = await createItem({ name, quantity, userId });
        return res.status(201).json(item);
    } catch (error) {
        return res.status(500).json({ message: 'Error adding item', error: error.message });
    }
};

const getItems = async (req, res) => {
    const userId = req.userId;
    try {
        const items = await getUserItems(userId);
        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching items', error: error.message });
    }
};

const getItemDetail = async (req, res) => {
    const userId = req.userId;
    const itemId = req.params.id;

    try {
        const item = await getItemDetails(userId, itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching item details', error: error.message });
    }
};

const updateItem = async (req, res) => {
    const userId = req.userId;
    const itemId = req.params.id;
    const { name, quantity, prioridade } = req.body;

    try {
        const item = await updateItemService(userId, itemId, { name, quantity, prioridade });
        if (!item) {
            return res.status(404).json({ message: 'Item not found or not authorized' });
        }
        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating item', error: error.message });
    }
};

export default { addItem, getItems, getItemDetail, updateItem };