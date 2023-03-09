const { collections } = require('../../database/models');
const stringUtils = require('../utils/stringUtils');

const getAllEntries = async (id) => {
  const entries = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  if (!entries) return [];
  return entries;
};

const addEntry = async (id, fields, values) => {
  const entry = [];
  fields.forEach((item, index) => {
    entry.push(`${item}:${values[index]}`);
  });
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  const entries = temp.dataValues.values.map((item) =>
    stringUtils.stringToArray(item)
  );
  entries.push(entry);

  const data = await collections.update(
    {
      values: entries,
    },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

const deleteEntry = async (id, index) => {
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  if (!temp) return 0;
  const entries = temp.dataValues.values.map((item) =>
    stringUtils.stringToArray(item)
  );
  if (index >= entries.length) return 0;
  entries.splice(index, 1);
  const data = await collections.update(
    {
      values: entries,
    },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

const updateEntry = async (id, index, fields, values) => {
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  if (!temp) return 0;
  const entries = temp.dataValues.values.map((item) =>
    stringUtils.stringToArray(item)
  );
  if (index >= entries.length) return 0;
  const newEntry = [];
  fields.forEach((item, index) => {
    newEntry.push(`${item}:${values[index]}`);
  });
  entries[index] = newEntry;
  const data = await collections.update(
    {
      values: entries,
    },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

module.exports = {
  getAllEntries,
  addEntry,
  deleteEntry,
  updateEntry,
};
