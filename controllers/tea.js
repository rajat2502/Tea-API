const multer = require('multer');
const Tea = require('../models/tea');

// for uploading the image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

exports.uploadImg = multer({ storage }).single('image');

// Get All Tea
exports.getAllTea = async (req, res) => {
  const data = await Tea.find();

  res.json({ status: 'success', results: data.length, data });
};

// Create a new Tea
exports.addTea = async (req, res) => {
  let tea = await Tea.findOne({ name: req.body.name });

  if (!tea) {
    tea = await Tea.create({ ...req.body, image: req.file.path });
    res.status(201).json({ status: 'success', data: tea });
  } else res.json({ msg: 'Tea already exists!' });
};

// Delete all Tea
exports.deleteAllTea = async (req, res) => {
  await Tea.deleteMany();

  res.json({ status: 'success', msg: 'All Tea Deleted!' });
};

// Get one Tea
exports.getOneTea = async (req, res) => {
  const { name } = req.params;

  const data = await Tea.findOne({ name });
  if (!data) res.json({ msg: "Tea doesn't exists!" });
  else {
    res.json({ status: 'success', data });
  }
};

// Add new comment
exports.addNewComment = async (req, res) => {
  const { name } = req.params;
  const comment = {
    text: req.body.comment,
    date: new Date().toISOString(),
  };
  const tea = await Tea.findOne({ name });

  if (!tea) res.json({ msg: "Tea doesn't exists!" });
  else {
    tea.comments.push(comment);
    await tea.save();

    res.json({ status: 'success', data: tea });
  }
};

// Delete one tea
exports.deleteOneTea = async (req, res) => {
  const { name } = req.params;

  const data = await Tea.deleteOne({ name });
  if (!data) res.json({ msg: "Tea doesn't exists!" });
  else {
    res.status(204).json({ status: 'success', msg: 'Tea deleted!' });
  }
};
