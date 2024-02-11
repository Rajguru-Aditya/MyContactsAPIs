const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    message: "All contacts fetched",
    data: contacts,
  });
});

// @desc Create new contact
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
  console.log("Request body: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }
  const contact = new Contact({
    name,
    email,
    phone,
  });

  const createdContact = await contact.save();

  res.status(200).json({
    message: "Create contact",
    data: createdContact,
  });
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access Public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
    data: contact,
  });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
    data: updatedContact,
  });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // delete user
  await contact.deleteOne();

  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
