let todos = []

// Create and Save a new Message
exports.create = (req, res) => {
  const todo = {...req.body, id: todos.length}

  todos = [...todos, todo]

  res.status(201).json(todo)
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  res.status(200).json(todos)
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  const id = Number(req.params.id)
  const todo = todos.find(t => t.id === id)

  res.status(200).json(todo)
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  const id = Number(req.params.id)
  todo = todos.find(t => t.id === id)
  todo = {...todo, ...req.body}

  todos = todos.filter(t => t.id !== id)
  todos.push(todo)
  
  res.status(200).json(todos)
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  const id = Number(req.params.id)
  todos = todos.filter(t => t.id !== id)

  res.status(200).json(todos)
};

