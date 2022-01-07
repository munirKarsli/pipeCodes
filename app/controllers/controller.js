const db = require("../models");
const Schema = db.schema;

exports.create = (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.featuredImage || req.body.published == null) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const row = new Schema({
    title: req.body.title,
    description: req.body.description,
    featuredImage: req.body.featuredImage,
    published: req.body.published ? req.body.published : false
  });

  row
    .save(row)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the record."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Schema.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving records."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Schema.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found record with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving record with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Schema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update record with id=${id}. Maybe record was not found!`
        });
      } else res.send({ message: "record was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating record with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Schema.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete record with id=${id}. Maybe record was not found!`
        });
      } else {
        res.send({
          message: "record was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Schema.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} records were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all records."
      });
    });
};
