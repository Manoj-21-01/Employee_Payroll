// alert("Hello");

function register_employee() {
    let name = document.getElementById("name").value;
    let notes = document.getElementById("notes").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("male").checked;
    let salary = document.getElementById("salary").value;
    
    let dept1 = document.getElementById("dept1").checked;
    let dept2 = document.getElementById("dept2").checked;
    let dept3 = document.getElementById("dept3").checked;
    let dept4 = document.getElementById("dept4").checked;
    let dept5 = document.getElementById("dept5").checked;
    
    const obj = {
        Name: name,
        Notes: notes,
        Gender: gender ? "male" : "female",
        Department: [],
        Salary: salary,
        Start_Date: date
    }
    let dept_values = []
    if (dept1){
        dept_values.push("HR")
    }
    if (dept2){
        dept_values.push("Sales")
    }
    if (dept3){
        dept_values.push("Finance")
    }
    if (dept4){
        dept_values.push("Engineer")
    }
    if (dept5){
        dept_values.push("Others")
    }
    obj.Department = dept_values;
    console.log(obj)
}
document.getElementById("submit").addEventListener("click",function(){
    register_employee();
});