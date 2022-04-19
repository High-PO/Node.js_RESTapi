let users = [
  {
    id: 1,
    name: 'Hyun'
  },
  {
    id: 2,
    name: 'Alice'
  },
  {
    id: 3,
    name: 'kelly'
  }
];
exports.getUserList = function (req, res) {
    return res.json(users);
}
exports.getUser = function (req,res) {
  const id = parseInt(req.params.id, 10);
  // 400 error message
  if(!id){
    return res.status(400).json({err: 'incorrect id'});
  }
  // user var change
  let user = users.filter(user => user.id === id)[0];
  // 404 error message
  if(!user){
    return res.status(404).json({err: 'Unknown user'});
  }
  // retrun
  return res.json(user);
};
exports.delUser = function (req,res) {
  const id = parseInt(req.params.id, 10);
  // if not same user id 400 error message print
  if(!id){
    return res.status(400).json({err: 'Incorrect id'});
  }
  // user var change
  const userIdx = users.findIndex(user => user.id === id);
  // if user id not found 404 error message print
  if (userIdx === -1) {
    return res.status(404).json({error: 'unknown user'});
  }
  // in the list delete user
  users.splice(userIdx, 1);
  // 204 code print
  res.status(204).send();
};
exports.pstUser = function (req, res) {
  const name = req.body.name || '';
  // if data string in none data print 400 error message print
  if(!name.length){
    return res.status(400).json({err: 'Incorrect name'});
  }
  // create new id
  const id = users.reduce((maxid, user) => {
    return user.id > maxid ? user.id : maxId
  }, 0) + 1;

  // user data input
  const newuser = {
    id: id,
    name: name
  };

  // plus userdata in the users
  users.push(newuser);

  // 201 status code return
  return res.status(201).json(newuser);
};
