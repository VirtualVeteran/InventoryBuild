const express = require('express');
const router = express.Router();
const { Item } = require('../models/Item');

// Get all items
router.get('/', async (req, res) => {
    const items = await Item.find().select('name description quantity').limit(100);
    res.json(items.map(item => ({
        ...item.toObject(),
        description: item.description.length > 100 
            ? item.description.substring(0, 100) + '...' 
            : item.description
    })));
});

// Create an item (Authenticated)
router.post('/', authenticate, async (req, res) => {
    const newItem = new Item({
        ...req.body,
        userId: req.user.id
    });
    await newItem.save();
    res.status(201).send(newItem);
});

// Edit an item (Authenticated)
router.put('/:id', authenticate, async (req, res) => {
    const item = await Item.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Delete an item (Authenticated)
router.delete('/:id', authenticate, async (req, res) => {
    const item = await Item.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!item) return res.status(404).send('Item not found');
    res.send('Item deleted');
});
