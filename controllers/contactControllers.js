const asynchandler = require('express-async-handler');
//@desc get contact
//@route GET /api/contact
//@access public
const getContact = asynchandler(async (req, res) => {
    res.status(200).json({message : 'Get all contact'});
})

//@desc create contact
//@route POST /api/contact
//@access public
const createContact = asynchandler(async(req,res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All feilds are mandatory");
    }
    res.status(201).json({message : "Create a new contact "});
})

//@desc get a single contact
//@route GET /api/contact/:id
//@access public
const getSingleContact = asynchandler(async(req,res) => {
    res.status(200).json({message : `Get contact by ${req.params.id}`});
})

//@desc update a single contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asynchandler(async(req,res) => {
    res.status(200).json({message : `Update contact by ${req.params.id}`});
})

//@desc delete a single contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asynchandler(async(req,res) => {
    res.status(200).json({message : `Delete contact by ${req.params.id}`});
})


module.exports = {
    getContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
}