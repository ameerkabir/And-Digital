import {filterCandidateBySkill, newCandidates} from './helper.js';

// const {filterCandidateBySkill = require('./helper');
console.log(newCandidates);

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName('tr');

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate =>
    insertCandidate(table, candidate.name, candidate.skills)
  );
}

const candidatesTable = document.getElementById('candidates_example');
const withJavaScriptSkill = candidatesTable.cloneNode(true);
const withPythonSkill = candidatesTable.cloneNode(true);
const withAwsSkill = candidatesTable.cloneNode(true);

removeRowsFromTable(withJavaScriptSkill);
removeRowsFromTable(withPythonSkill);
removeRowsFromTable(withAwsSkill);

const newTbody = withJavaScriptSkill.getElementsByTagName('tbody')[0];
const pythonTable = withPythonSkill.getElementsByTagName('tbody')[0];
const AwsTable = withAwsSkill.getElementsByTagName('tbody')[0];

const candidateWithJavaScriptSkill = filterCandidateBySkill(
  newCandidates,
  'JavaScript'
);
const candidateWithPythonSkill = filterCandidateBySkill(
  newCandidates,
  'Python'
);
const candidateWithAwsSkill = filterCandidateBySkill(newCandidates, 'AWS');

addCandidatesToTable(newTbody, candidateWithJavaScriptSkill);
addCandidatesToTable(pythonTable, candidateWithPythonSkill);
addCandidatesToTable(AwsTable, candidateWithAwsSkill);

document.body.appendChild(withJavaScriptSkill);
document.body.appendChild(withPythonSkill);
document.body.appendChild(withAwsSkill);
