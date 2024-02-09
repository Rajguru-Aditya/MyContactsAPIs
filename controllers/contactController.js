const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "All contacts fetched",
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "abc@gmail.com",
        phone: "111-111-1111",
      },
    ],
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
  res.status(200).json({
    message: "Create contact",
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "abc@gmail.com",
        phone: "111-111-1111",
      },
    ],
  });
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access Public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "abc@gmail.com",
        phone: "111-111-1111",
      },
    ],
  });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "abc@gmail.com",
        phone: "111-111-1111",
      },
    ],
  });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "abc@gmail.com",
        phone: "111-111-1111",
      },
    ],
  });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
