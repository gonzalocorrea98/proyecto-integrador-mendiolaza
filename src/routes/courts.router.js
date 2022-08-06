const express = require('express');
const router = express.Router();
const {getAllCourts, getCourtById, newCourt, deleteCourt, patchCourt} = require('../controllers/courts.controlers')

router.get('/', getAllCourts);
router.get("/:id", getCourtById);
router.post('/', newCourt);
router.delete('/:id', deleteCourt);
router.patch('/:id', patchCourt)

module.exports = router;