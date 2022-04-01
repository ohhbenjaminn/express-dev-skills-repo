const skills = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkill
};

function index(req, res) {
  res.render('skills/index', {
    skills: skills.getAll()
  });
};

function show(req, res) {
    res.render('skills/show', {
      skillNum: req.params.id,
      skills: skills.getOne(req.params.id)
    });
  };

function create(req, res) {
  console.log(req.body)
  // The model is responsible for creating data
  skills.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}
  
function newSkills(req, res) {
  res.render('skills/new');
}

function deleteSkill(req, res) {
  console.log(req.params.id);
  skills.deleteSkill(req.params.id);
  res.redirect('/skills');
}