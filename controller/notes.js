// @desc Get all notes
// @route GET /api/v1/notes
// @access Public

exports.getNotes = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all notes",
  });
};
// @desc Get note with ID
// @route GET /api/v1/notes/:id
// @access Public

exports.getNote = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Display note with ${req.params.id}`,
  });
};
// @desc add a note
// @route POST /api/v1/notes
// @access Public

exports.addNote = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "create a note",
  });
};
// @desc Update a note with id
// @route PUT /api/v1/notes/:id
// @access Public

exports.updateNote = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update note with ${req.params.id}`,
  });
};
// @desc Delete a note with id
// @route DELETE /api/v1/notes/:id
// @access Public

exports.deleteNote = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete note with ${req.params.id}`,
  });
};
