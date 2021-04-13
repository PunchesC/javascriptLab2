//3.
// function deleteSubmissionByIndex(array,index){
//   array.splice(index, 1);
// }

const submissions = [
 {name: "Jane", score:90, date:"2020-01-24", passed:true},
 {name: "Joe", score:77, date:"2018-05-14", passed:true},
 {name: "Jack", score:59, date:"2019-07-05", passed:false},
 {name: "Jill", score:88, date:"2020-04-22", passed:true},
]




function addSubmission(array,newName,newScore,newDate){
  submissions.push({submissions:array,name:newName, score:newScore , date:newDate, passed:newScore >= 60? true:false})

 
}

addSubmission(submissions,"Annie", 80, "2021-04-14");
///NEED TO FIGURE OUT WHAT TO DO WITH ARRAY

function deleteSubmissionByIndex(array,index){
    array.splice(index, 1);
  }

deleteSubmissionByIndex(submissions,2);



function deleteSubmissionByName(array,name) {
  let index = array.findIndex((array) => array.name === name)
  array.splice(index,1);
  
}

deleteSubmissionByName(submissions, "Jack");



function editSubmission(array,index,score){
  array[index].score = score;
  array[index].passed = score >= 60;

}

editSubmission(submissions,2,20);




function findSubmissionByName(array,name){
  let person = array.find((array) => array.name === name);
  return person;
  
}

findSubmissionByName(submissions,"Jill")

function findLowestScore(array){
  let lowest = array.forEach(array) 


}


