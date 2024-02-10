function f1(){
    let name = $("#name").val();
    let gender = $("#male").is(':checked');

    let dept1 = $("#dept1").is(':checked');
    let dept2 = $("#dept2").is(':checked');
    let dept3 = $("#dept3").is(':checked');
    let dept4 = $("#dept4").is(':checked');
    let dept5 = $("#dept5").is(':checked');
    
    let salary = $("#salary").val();   
    let start_date = $("#date").val();

    let action1 = $("action1").attr('class');

    let notes = $("#notes").val();

    const data = {
        Name: name,
        Gender: gender ? "Male" : "Female",
        Department: [],
        Salary: salary,
        Start_Date: start_date,
        deleteIcon: action1,
        Notes: notes
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
    data.Department = dept_values;
    console.log(data);

    //POST Method
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/data', 
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            console.log('Success: ', response);
        },
        error: function(xhr, status, error) {
            console.error('Error: ', error);
        }
    });
}

$('#submit').click(function (event) {
    event.preventDefault();
    f1(); 
});

//GET Method
$(document).ready(function() {
        $.ajax({
            url: 'http://localhost:3000/data',
            type: 'GET',        
            success: function(data) {
                console.log(data);
                data.forEach(function(employee){
                    //let deleteIcon = <i class="ri-delete-bin-5-fill" id="action1"></i>
                    var newRow = "<tr><td>" + employee.Name + "</td><td>" 
                    + employee.Gender + "</td><td>" + employee.Department + "</td><td>" + 
                    employee.Salary + "</td><td>" + employee.Start_Date 
                    + "</td><td>" + employee.deleteIcon + "</td></tr>"
                    $("#table").append(newRow);
                })
              },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
});
