const getHomepage = (req, res) => {
  res.send('homepage');
};

const getIndex = (req, res) => {
  res.send('index');
};

module.exports = {
  getHomepage,
  getIndex,
};