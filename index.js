const requireRegex = require('require-regex');
const regex = new RegExp(requireRegex().source, 'gm');

module.exports = str => {
  const matches = str.match(regex);

  if (!Array.isArray(matches)) return [];

  return matches.map(el => {
    const req = requireRegex().exec(el);

    return {
      module: req[2],
      variable: req[1],
      input: req.input
    };
  });
};
