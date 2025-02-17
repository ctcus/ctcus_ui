const express = require('express');
const mongoose = require('mongoose');

const createCrudRoutes = model => {
  const router = express.Router();
  const Model = model;

  // Create a new document
  router.post('/', async (req, res) => {
    try {
      const document = new Model(req.body);
      const savedDocument = await document.save();
      res.status(201).send(savedDocument);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Read all documents
  router.get('/', async (req, res) => {
    try {
      const documents = await Model.find();
      res.status(200).send(documents);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Read a single document by ID
  router.get('/:id', async (req, res) => {
    try {
      const document = await Model.findById(req.params.id);
      if (!document) {
        return res.status(404).send();
      }
      res.status(200).send(document);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Update a document by ID
  router.put('/:id', async (req, res) => {
    try {
      const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!document) {
        return res.status(404).send();
      }
      res.status(200).send(document);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Delete a document by ID
  router.delete('/:id', async (req, res) => {
    try {
      const document = await Model.findByIdAndDelete(req.params.id);
      if (!document) {
        return res.status(404).send();
      }
      res.status(200).send(document);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return router;
};

module.exports = createCrudRoutes;
