/*eslint-env browser*/

var employeeList= [
    ["Sally Smith", "QA", 3423],
    ["Siva Preethi", "Web Dev", 1234],
    ["Alan Ramu", "Engg", 1235],
    ["Jack Daniel","CEO",1456],
    ["Sundar Pichai", "CFO", 1002]
];

function deleteEmployee(i) {
    console.log("Deleting..."+i.toString());
    employeeList.splice(i, 1);
    displayEmployee();
}

function displayEmployee(){
    var count = window.document.getElementById("disp_count");
    count.innerHTML = "Showing " + employeeList.length.toString() + " Employees";
    var display = window.document.getElementById("disp_emp");
    if (employeeList.length>0){
        var tableHTML = "<table><tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr>";
        for(var i=0; i<employeeList.length;i++){
            tableHTML += "<tr><td>" + employeeList[i][0] + "</td><td>" + employeeList[i][1] + "</td><td>" + employeeList[i][2].toString() + "</td><td><input type='button' id='delete_employee' value='Delete' onclick='deleteEmployee("+ i + ")' class='deleteEmp'></td></tr>";
        }
        tableHTML += "</table>";
        display.innerHTML = tableHTML;
    } else {
        display.innerHTML = "";
    }
}

window.addEventListener("load", function () {
    "use strict";
    displayEmployee();
    var add = window.document.getElementById("add_employee");
    add_employee.addEventListener("click", function() {
        var name = window.document.getElementById("emp_name");
        var title = window.document.getElementById("emp_title");
        var extension = window.document.getElementById("emp_extension");
        window.console.log(name.value);
        window.console.log(title.value);
        window.console.log(extension.value);
        if(name.value== "" || title.value == "" || extension.value == "") {
            if (name.value == "") {
            window.document.getElementById("nameError").innerHTML = "Please enter a Name";
            } else {
                window.document.getElementById("nameError").innerHTML="";
            }
            if (title.value == "") {
            window.document.getElementById("titleError").innerHTML = "Please enter a Title";
            }else {
                window.document.getElementById("titleError").innerHTML="";
            }
            if (extension.value == "") {
            window.document.getElementById("extensionError").innerHTML = "Please enter a Extension";
            } else {
                window.document.getElementById("extensionError").innerHTML="";
            }
        } else {
            // If NO Errors
            window.document.getElementById("nameError").innerHTML="";
            window.document.getElementById("titleError").innerHTML="";
            window.document.getElementById("extensionError").innerHTML="";
            
            console.log(employeeList);
            // Add the above 3 values to the employee list
            employeeList.push([name.value, title.value, extension.value]);
            name.value = "";
            title.value = "";
            extension.value="";
            // Print the emlpoyee list and verify
            console.log(employeeList);
            displayEmployee();
        }
    })
})
