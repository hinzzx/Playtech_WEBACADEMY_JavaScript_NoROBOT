let students = [
  { name: "Ivan", socre: 5 },
  { name: "Dimitar", socre: 5.5 },
  { name: "Kristian", socre: 4 },
  { name: "Valentin", socre: 6 },
  { name: "Veselin", socre: 3 },
  { name: "Genadi", socre: 5 },
  { name: "Yavor", socre: 3 },
  { name: "Marin", socre: 5.5 },
  { name: "Kalin", socre: 3 },
  { name: "Yavor", socre: 6 },
];



function getStudents(students) {
  // масив, в който ще записваме отличните студенти
  
  let excellentStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].socre > 5.5) {
      excellentStudents.push(students[i]);
    }
  }
  return excellentStudents;
}

console.log(getStudents(students)); // [ { name: 'Dimitar', socre: 5.5 }, { name: 'Marin', socre: 5.5 }, { name: 'Yavor', socre: 6 } ]
