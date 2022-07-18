const users = [];

const index = (req, res) => {
  res.send(users);
}

const create = (req, res) => {
  const user = req.body;
  users.push(user);
  return res.status(201).json( )
}
const read = (req, res) => { }
const update = (req, res) => { }
const remove = (req, res) => { }


export default { index, create, read, update, remove };
