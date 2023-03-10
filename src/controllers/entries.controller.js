const entriesService = require('../services/entries.services');

const getAllEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const entries = await entriesService.getAllEntries(id);
    res.status(200).json({ data: entries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { fields, values } = req.body;
    const entry = await entriesService.addEntry(id, fields, values);
    if (entry === 0)
      return res.status(400).json({ message: 'Entry already exists' });
    else res.status(201).json({ data: entry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { index } = req.body;
    const entries = await entriesService.deleteEntry(id, index);
    if (entries === 0)
      return res.status(400).json({ message: 'Entry cannot be deleted' });
    else res.status(200).json({ data: entries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, fields, values } = req.body;
    const entries = await entriesService.updateEntry(id, index, fields, values);
    if (entries === 0)
      return res.status(400).json({ message: 'Entry cannot be updated' });
    else res.status(200).json({ data: entries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEntries,
  addEntry,
  deleteEntry,
  updateEntry,
};
