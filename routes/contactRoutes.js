const express = require('express');
const { getContact, createContact, getSingleContact, updateContact, deleteContact } = require('../controllers/contactControllers');

const router = express.Router();

router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getSingleContact).put(updateContact).delete(deleteContact);

module.exports = router;