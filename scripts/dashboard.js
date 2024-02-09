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
        Gender: gender ? "male" : "female",
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

