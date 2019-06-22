const getNameFromParam = () => 'Tom Riddle';

const registerName = (req) => { return getNameFromParam(req); };

module.exports = {
  registerName,
};
