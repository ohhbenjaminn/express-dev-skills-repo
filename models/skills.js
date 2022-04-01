const skills = [
    {id: 123, skills: 'mowing lawn', done: false},
    {id: 456, skills: 'washing dishes', done: false},
    {id: 789, skills: 'making dinner', done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
};

function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

function deleteSkill(id)  {
    const idx = skills.findIndex(skills => skills.id === parseInt(id))
    skills.splice(idx, 1);
}