console.log("ok");
var express = require ('express');
var router = express.Router ();
var bodyParser = require ('body-parser');

router.use (bodyParser.urlencoded ({ extended:true}));
router.use (bodyParser.json ());
var User = require ('./User');
//Creates  new user
router.post('/', function(req,res){
  console.log("ok");
  User.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  },
  function (err, user){
    if (err) return res.status(500).send("dell vao duoc nha.");
    res.status(200).send(user);
  });
});
// tra ve cac user trong database
router.get('/',function (req, res){
  console.log("ok");
  User.find({}, function(err, users){
    if(err) return res.status(500).send("khong co nha m");
    res.status(200).send(users);
  });
});
//tra ve 1 user
router.get('/:id',function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) return res.status(500).send("khong tim thay trong database");
    if(!user) return res.status(404).send("khoong co");
    res.status(200).send(user);
  });
});

// router.get('/:name',function(req, res){
//   User.findByName(req.params.name, function(err, user){
//     if(err) return res.status(500).send("khong tim thay trong database");
//     if(!user) return res.status(404).send("khoong co");
//     res.status(200).send(user);
//   });
// });

module.exports = router;