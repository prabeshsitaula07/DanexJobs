// routes/job.routes.js
const { Router } = require('express');
const jobController = require('../controllers/job.controller');
const { verifyToken } = require('../middleware/authJwt');

const router = Router();

router.post('/jobs', verifyToken, jobController.create);
router.get('/jobs', jobController.findAll);
router.get('/jobs/company', verifyToken, jobController.findByCompany);

module.exports = router;
