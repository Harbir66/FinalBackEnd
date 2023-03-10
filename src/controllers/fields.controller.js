const fieldsService = require('../services/fields.services');

const getAllFields = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = await fieldsService.getAllFields(id);
    res.status(200).json({ data: fields });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteField = async (req, res) => {
  try {
    const { id } = req.params;
    const { field } = req.body;
    const fields = await fieldsService.deleteField(id, field);
    if (fields === 0)
      return res.status(400).json({ message: 'Field cannot be deleted' });
    else res.status(200).json({ data: fields });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addField = async (req, res) => {
  try {
    const { id } = req.params;
    const { field } = req.body;
    const fields = await fieldsService.addField(id, field);
    if (fields === 0)
      return res.status(400).json({ message: 'Field already exists' });
    else res.status(201).json({ data: fields });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const renameField = async (req, res) => {
  try {
    const { id } = req.params;
    const { field, newField } = req.body;
    const fields = await fieldsService.renameField(id, field, newField);
    if (fields === 0)
      return res.status(400).json({ message: 'Field cannot be renamed' });
    else res.status(200).json({ data: fields });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllFields,
  addField,
  deleteField,
  renameField,
};
