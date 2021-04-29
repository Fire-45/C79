
var names_students = [];


function Submit(){
var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;
var name3 = document.getElementById("name3").value;
var name4 = document.getElementById("name4").value;
var name5 = document.getElementById("name5").value;
names_students.push(name1);
names_students.push(name2);
names_students.push(name3);
names_students.push(name4);
names_students.push(name5);
document.getElementById("output").innerHTML = names_students;
document.getElementById("sort_button").style.display = "inline-block";
document.getElementById("submit_button").style.display = "none";
};

function sorting(){
names_students.sort();
document.getElementById("output").innerHTML = names_students;


} 