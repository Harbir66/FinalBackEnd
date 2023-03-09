const collectionsService = require('../services/collections.services');

const getAllCollections = async (req, res) => {
  try {
    const data = await collectionsService.getAllCollections();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await collectionsService.getSingleCollection(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCollection = async (req, res) => {
  try {
    const { contentType, fields, values } = req.body;
    const data = await collectionsService.createCollection(
      contentType,
      fields,
      values
    );
    if (data === 0) {
      res
        .status(400)
        .json({ message: 'Collection already exists', data: false });
    } else {
      res
        .status(201)
        .json({ message: 'Collection created successfully', data });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const renameCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { contentType } = req.body;
    const data = await collectionsService.renameCollection(id, contentType);
    if (data === 0) {
      res
        .status(400)
        .json({ message: 'Collection does not exist', data: false });
    } else {
      res
        .status(200)
        .json({ message: 'Collection renamed successfully', data: true });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCollections,
  getSingleCollection,
  createCollection,
  renameCollection,
};
