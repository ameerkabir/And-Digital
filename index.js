const newCandidates = [
  { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
  { name: "Mario", skills: ["Python", "AWS"] },
  { name: "Jacquline", skills: ["JavaScript", "Azure"] },
  { name: "Kathy", skills: ["JavaScript", "Java"] },
  { name: "Anna", skills: ["JavaScript", "AWS"] },
  { name: "Matt", skills: ["PHP", "AWS"] },
  { name: "Matt", skills: ["PHP", ".Net", "Docker"] }
];

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName("tr");

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(", "));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate =>
    insertCandidate(table, candidate.name, candidate.skills)
  );
}

function filterCandidateBySkill(candidates, skill) {
  console.log({ candidates }, { skill });
  // Iterate over candidates array and return candidates with javascript skill

  const filterBySkill = candidates.filter(candidate =>
    // Using includes will check every element of an  array and return the once that are meeting the condition.
    candidate.skills.includes(skill)
  );
  return filterBySkill;
}

const candidatesTable = document.getElementById("candidates_example");
const newCandidatesTable = candidatesTable.cloneNode(true);
const withPythonSkill = candidatesTable.cloneNode(true);

removeRowsFromTable(newCandidatesTable);
removeRowsFromTable(withPythonSkill);
const newTbody = newCandidatesTable.getElementsByTagName("tbody")[0];
const pythonTable = withPythonSkill.getElementsByTagName("tbody")[0];

const filteredCandidates = filterCandidateBySkill(newCandidates, "JavaScript");
const candidateWithPythonSkill = filterCandidateBySkill(
  newCandidates,
  "Python"
);
addCandidatesToTable(newTbody, filteredCandidates);
addCandidatesToTable(pythonTable, candidateWithPythonSkill);

document.body.appendChild(newCandidatesTable);
document.body.appendChild(withPythonSkill);
