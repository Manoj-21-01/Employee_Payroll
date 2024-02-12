
$('#submit').click(function () {
        f1();
        window.location.href="dashboard.html";
    
    });
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

    let notes = $("#notes").val();

    const data = {
        Name: name,
        Gender: gender ? "Male" : "Female",
        Department: [],
        Salary: salary,
        Start_Date: start_date,
        // deleteIcon: action1,
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

//GET Method
$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:3000/data',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            data.forEach(function(employee) {                
                var newRow = "<tr><td>" + employee.Name + "</td><td>" 
                    + employee.Gender + "</td><td>" + employee.Department + "</td><td>" + 
                    employee.Salary + "</td><td>" + employee.Start_Date 
                    + "</td><td> <img src='/assests/delete.jpg' alt='Delete' class='delete' width='30px' data-id='" 
                    + employee.id + "'> <img src='/assests/pencil.png' alt='edit' class='edit' width='30px' data-id='" 
                    + employee.id + "'> </td></tr>";
                    $("#table").append(newRow);
            });
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
});
$('#table').on('mouseover', '.delete', function() {
    $(this).css('cursor', 'pointer');
    $(this).fadeTo('fast', 0.7);
});
$('#table').on('mouseout', '.delete', function() {
    $(this).fadeTo('fast', 1); 
});             

//DELETE Method

$('#table').on('click', '.delete', function() {
    var employeeId = $(this).data('id');
    var $row = $(this).closest('tr');

    $.ajax({
        url: 'http://localhost:3000/data/' + employeeId,
        type: 'DELETE',
        success: function(response) {
            console.log('Item deleted successfully:', response);
            $row.remove();
        },
        error: function(xhr, status, error) {
            console.error('Error deleting item:', xhr.responseText);
        }
    });
});

//UPDATE Method
$(document).ready(function() {
    $('#table').submit(function() {
        var formData = $(this).serialize();
        var $updateRow = $(this).closest('tr');
        $.ajax({
            url: 'http://localhost:3000/data/' + employeeId,
            type: 'PUT',
            data: formData,
            success: function(response) {
                console.log('Employee data updated successfully:', response);
                $updateRow.response();
            }
        });
    });


    $('#table').on('click', '.edit', function() {
        var employeeId = $(this).data('id');
        $.ajax({
            url: 'http://localhost:3000/data/' + employeeId,
            type: 'GET',
            success: function(employee) {
                populateForm(employee); 
                $('#table').data('id', employeeId);
            }
        });
    });

    function populateForm(employee) {
        $('#name').val(employee.Name);
        $('#male').val(employee.Gender);
        $('#department').val(employee.Department);
        $('#salary').val(employee.Salary);
        $('#date').val(employee.Start_Date);
    }
});