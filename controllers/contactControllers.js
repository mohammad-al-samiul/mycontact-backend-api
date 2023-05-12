const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get contact
//@route GET /api/contact
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id : req.user._id});
  res.status(200).json(contacts);
});

//@desc create contact
//@route POST /api/contact
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id,
  });

  // res.status(201).json(contact);

  res.status(201).json(contact);
});


//@desc get a single contact
//@route GET /api/contact/:id
//@access private
const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

//@desc update a single contact
//@route PUT /api/contact/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  if(contact.user_id.toString() !== req.user._id){
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc delete a single contact
//@route DELETE /api/contact/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  if(contact.user_id.toString() !== req.user._id){
    res.status(403);
    throw new Error("User don't have permission to delete other user contacts");
  }

  await Contact.deleteOne({_id : req.params.id});

  //await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
