import express from 'express';
const router = express.Router();

// Get all items
router.get('/', (req, res) => {
  res.json({ message: 'Get all items' });
});

// Get item by ID
router.get('/:id', (req, res) => {
  const mockItem = {
    familyId: parseInt(req.params.id, 10),
    name: 'Cohen family',
    money: 14000,
  };
  res.json(mockItem);
});

export default router; 