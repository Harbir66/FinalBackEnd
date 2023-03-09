const stringToArray = (input) => {
  const output = input
    .replace(/"/g, '')
    .replace(/]/g, '')
    .replace(/\[/g, '')
    .split(',');
  return output;
};

module.exports = { stringToArray };
