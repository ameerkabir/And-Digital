

/**
 * A function that takes Array of candidates & a skill
 * 
 * Then iterate over candidates and returns a list of
 * 
 * Candidates with skill being passed
 * @param  {Array} candidates
 * @param  {String} skill
 */
export  function filterCandidateBySkill(candidates, skill) {
    console.log('it worked')
  // Iterate over candidates array and return candidates with specific skill

  const filterBySkill = candidates.filter(candidate =>
    // The include method will determines whether a candidate has a particular skill or not.
    candidate.skills.includes(skill)
  );
  return filterBySkill;
};

export const newCandidates = [
    { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
    { name: 'Mario', skills: ['Python', 'AWS'] },
    { name: 'Jacquline', skills: ['JavaScript', 'Azure'] },
    { name: 'Kathy', skills: ['JavaScript', 'Java'] },
    { name: 'Anna', skills: ['JavaScript', 'AWS'] },
    { name: 'Matt', skills: ['PHP', 'AWS'] },
    { name: 'Matt', skills: ['PHP', '.Net', 'Docker'] }
  ];
  