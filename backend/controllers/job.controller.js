// controllers/job.controller.js
const db = require('../models');
const Job = db.jobs;

exports.create = async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;
    const job = await Job.create({ title, description, location, salary });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findByCompany = async (req, res) => {
  try {
    const companyId = req.userId; // Assume company ID is available as userId in the request
    const jobs = await Job.findAll({ where: { companyId } });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
