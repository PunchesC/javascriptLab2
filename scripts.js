//3.
// function deleteSubmissionByIndex(array,index){
//   array.splice(index, 1);
// }

const submissions = [
  { name: 'Jane', score: 90, date: '2020-01-24', passed: true },
  { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
  { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
  { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  });
}

addSubmission(submissions, 'Annie', 80, '2021-04-14');


function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);

function deleteSubmissionByName(array, name) {
  let index = array.findIndex(x => x.name === name);
  array.splice(index, 1);
}

deleteSubmissionByName(submissions, 'Jack');


function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}

editSubmission(submissions, 2, 20);

function findSubmissionByName(array, name) {
  return array.find(x => x.name === name);
  
}

console.log(findSubmissionByName(submissions, 'Jill'));

function findLowestScore(array) {
  let lowest = null;
  array.forEach((x) => {
    if (lowest == null) {
      lowest = x;
    } else if (x.score < lowest.score) {
      lowest = x;
    }
  });
  return lowest;
}

console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let total = 0;
  for (const x of array){
    total += x.score;
  }
  return total / array.length;
}

console.log(findAverageScore(submissions));

function filterPassing(array){
  return array.filter(x => x.passed);
}

console.log(filterPassing(submissions));

function filter90AndAbove(array){
  return array.filter(x => x.score >= 90);
}

console.log(filter90AndAbove(submissions));


