// Get All Tea
exports.getAllTea = (req, res, next) => {
  res.json({ msg: 'Get all tea' });
};

// Create a new Tea
exports.addTea = (req, res, next) => {
  res.json({ msg: 'New Tea Created!' });
};

// Delete all Tea
exports.deleteAllTea = (req, res, next) => {
  res.json({ msg: 'Delete all tea' });
};

// Get one Tea
exports.getOneTea = (req, res, next) => {
  res.json({ msg: 'Get one Tea' });
};

// Add new comment
exports.addNewComment = (req, res, next) => {
  res.json({ msg: 'Add new comment' });
};

// Delete one tea
exports.deleteOneTea = (req, res, next) => {
  res.json({ msg: 'Delete one tea' });
};
