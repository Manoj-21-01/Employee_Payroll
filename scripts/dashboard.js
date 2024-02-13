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
}

    //POST Method
    // $.ajax({
    //     type: 'POST',
    //     url: 'http://localhost:3000/data', 
    //     data: JSON.stringify(data),
    //     contentType: 'application/json',
    //     success: function(response) {
    //         console.log('Success: ', response);
    //     },
    //     error: function(xhr, status, error) {
    //         console.error('Error: ', error);
    //     }
    // });
    $(document).ready(function () {
            
        var urlParams = new URLSearchParams(window.location.search);
        var editId = urlParams.get("id");
        console.log(editId);
    
    var method = editId ? 'PUT' : 'POST';
    var url = editId ? "http://localhost:3000/data/" + editId : "http://localhost:3000/data";

    $.ajax({
        url: url,
        method: method,
        data: jsonData,
        contentType: "application/json",
        success: function (data)
        {
            console.log("Success:", data);
            // Redirect back to the dashboard or show a success message
            window.location.href = "dashboard.html";
        },
        error: function (xhr, status, error)
        {
            console.error("Error submitting data:", status, error);
            console.log("Server response:", xhr.responseText);
         }
        });
    });

$('#submit').click(function (event) {
    f1(); 
});

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

    //updatwe...................
    $('#table').on('click', '.edit', function() {
        var employeeId = $(this).data('id'); 
        console.log(employeeId);        
        window.location.href = 'index.html?id=' + employeeId;
     });
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

$('#table').on('mouseover', '.delete', function() {
    $(this).css('cursor', 'pointer');
    $(this).fadeTo('fast', 0.7);
});
$('#table').on('mouseout', '.delete', function() {
    $(this).fadeTo('fast', 1); 
});

// //PUT Method
// $('#table').on('click', '.edit', function() {
//     var employeeID = $(this).data('id');
//     var $row = $(this).closest('tr');
  
//     // Get existing table cell elements before redirecting
//     var $nameCell = $row.find('#name');
//     var $genderCell = $row.find('#gender');
//     var $salaryCell = $row.find('#salary');
//     var $departmentCell = $row.find('#department');
//     var $startdateCell = $row.find('#date');
  
    
//     var originalName = $nameCell.text();
//     var originalGender = $genderCell.text();
//     var originalSalary = parseFloat($salaryCell.text());
//     var originalDepartment = $departmentCell.text();
//     var originalStartdate = $startdateCell.text();
  
//     // Collect updated data on redirection
//     window.location.href = 'http://127.0.0.1:5501/pages/index.html?id=' + employeeID;
  
//     // Handle successful update on return
//     window.onpopstate = function(event) {
//       if (event.state && event.state.updatedData) {
//         var updatedData = event.state.updatedData;
  
//         // Update table cell content
//         $nameCell.text(updatedData.Name); // Use updated or original
//         $genderCell.text(updatedData.Gender);
//         $salaryCell.text(updatedData.Salary); // Use updated or original
//         $departmentCell.text(updatedData.Department);
//         $startdateCell.text(updatedData.Start_Date);
  
//         // Clear the update state to prevent subsequent updates
//         history.replaceState({}, '', window.location.pathname);
//       }
//     };
  
//     // Send PUT request using AJAX
//     $.ajax({
//       url: 'http://localhost:3000/data/' + employeeID,
//       type: 'PUT',
//       data: JSON.stringify({
//       }),
//       contentType: 'application/json',
//       success: function(response) {
//         console.log('Item updated successfully:', response);
//         history.pushState({ updatedData: updatedData }, '', window.location.href);
//       },
//       error: function(xhr, status, error) {
//         console.error('Error updating item:', xhr.responseText);
//       }
//     });
//   });

//PUT Method
