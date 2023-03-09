const { collections } = require('../../database/models');
const stringUtils = require('../utils/stringUtils');

const getAllFields = async (id) => {
  const fields = await collections.findOne({
    attributes: ['fields'],
    where: {
      id,
    },
  });
  if (!fields) return [];
  return fields;
};

const addField = async (id, field) => {
  const fields = await collections.findOne({
    attributes: ['fields'],
    where: {
      id,
    },
  });
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  const newFields = [];
  const newEntries = [];
  if (!fields) newFields.push(field);
  else {
    if (fields.dataValues.fields.includes(field)) return 0;
    const entries = temp.dataValues.values.map((item) =>
      stringUtils.stringToArray(item)
    );
    newFields.push(...fields.dataValues.fields, field);
    const newEntriesTemp = entries.map((item) => {
      item.push(`${field}:`);
      return item;
    });
    newEntries.push(...newEntriesTemp);
  }
  const data = await collections.update(
    {
      fields: newFields,
      values: newEntries,
    },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

const deleteField = async (id, field) => {
  const fields = await collections.findOne({
    attributes: ['fields'],
    where: {
      id,
    },
  });
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  if (!fields) return 0;
  const entries = temp.dataValues.values.map((item) =>
    stringUtils.stringToArray(item)
  );
  const newEntries = [];
  if (entries.length !== 0) {
    const newEntriesTemp = entries.map((item) => {
      return item.filter((i) => !i.startsWith(`${field}:`));
    });
    newEntries.push(...newEntriesTemp);
  }
  const newFields = fields.dataValues.fields.filter((item) => item !== field);
  const data = await collections.update(
    {
      fields: newFields,
      values: newEntries,
    },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

const renameField = async (id, field, newField) => {
  const fields = await collections.findOne({
    attributes: ['fields'],
    where: {
      id,
    },
  });
  const temp = await collections.findOne({
    attributes: ['values'],
    where: {
      id,
    },
  });
  if (!fields) return 0;

  const entries = temp.dataValues.values.map((item) =>
    stringUtils.stringToArray(item)
  );
  const newEntries = [];
  if (entries.length !== 0) {
    const newEntriesTemp = entries.map((item) => {
      return item.map((i) => {
        if (i.startsWith(`${field}:`)) {
          const temp = i.split(':');
          temp[0] = newField;
          return temp.join(':');
        }
        return i;
      });
    });
    newEntries.push(...newEntriesTemp);
  }

  const newFields = fields.dataValues.fields.map((item) => {
    if (item === field) return newField;
    return item;
  });
  const data = await collections.update(
    {
      fields: newFields,
      values: newEntries,
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
  getAllFields,
  addField,
  deleteField,
  renameField,
};
