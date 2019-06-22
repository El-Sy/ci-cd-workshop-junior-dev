const getNameFromParam = () => 'Tom Riddle';

const registerName = req => getNameFromParam(req);

module.exports = {
  registerName,
};
