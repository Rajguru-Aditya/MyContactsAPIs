// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = (req, res) => {
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
};

// @desc Create new contact
// @route POST /api/contacts
// @access Public

const createContact = (req, res) => {
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
};

// @desc Get single contact
// @route GET /api/contacts/:id
// @access Public

const getContact = (req, res) => {
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
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public

const updateContact = (req, res) => {
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
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = (req, res) => {
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
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
