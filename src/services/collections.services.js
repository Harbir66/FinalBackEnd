const { collections } = require('../../database/models');

const getAllCollections = async () => {
  const data = await collections.findAll();
  if (!data) return [];
  return data;
};

const getSingleCollection = async (id) => {
  const data = await collections.findOne({
    where: {
      id,
    },
  });
  if (!data) return {};
  return data;
};

const createCollection = async (contentType, fields, values) => {
  const contentTypeAlreadyExist = await collections.findOne({
    where: {
      contentType,
    },
  });
  if (contentTypeAlreadyExist) return 0;
  const data = await collections.create({
    contentType,
    fields,
    values,
  });
  return data;
};

const renameCollection = async (id, contentType) => {
  const contentTypeAlreadyExist = await collections.findOne({
    where: {
      id,
    },
  });
  if (!contentTypeAlreadyExist) return 0;
  const data = await collections.update(
    {
      contentType,
    },
    {
      where: {
        id,
      },
    }
  );
  return data;
};

module.exports = {
  getAllCollections,
  getSingleCollection,
  createCollection,
  renameCollection,
};
