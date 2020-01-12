const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route      GET    api/contacts
//@desc       Get all users contacts
//@access     Private
router.get('/', auth, async (req, res) => {
    //res.send('Get all contacts');
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route      POST    api/contacts
//@desc       Add new contact
//@access     Private
router.post('/', [ auth, [
    check('name', 'Name is required').not().isEmpty()
] ], async (req, res) => {
    //res.send('Add contact');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try{
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route      PUT    api/contacts/:id
//@desc       Update contact
//@access     Private
router.put('/:id', auth, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        await Contact.updateOne(
            {_id: req.params.id},
            {$set: 
                {
                    name,
                    email,
                    phone,
                    type,
                    user: req.user.id                    
                }
            },
            { "upsert": false}
        ); 
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.status(200).json(contacts);        
        //res.status(200).json({ msg: "User was updated succesfully!" });       
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
    //res.send('Update contact');
});

//@route      DELETE    api/contacts/:id
//@desc       Delete contact
//@access     Private
router.delete('/:id', auth, async (req, res) => {
    try {
        await Contact.findOneAndRemove({_id: req.params.id});
        res.status(200).json({ msg: "User was deleted succesfully!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');        
    }
    //res.send('Delete contact');
});

module.exports = router;