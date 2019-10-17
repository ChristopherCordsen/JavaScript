var x = 10 
function Add_numbers_1() {
    document.write (20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1;
Add_numbers_2;

/*break*/

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(x = 100);
}
Add_numbers_1;
Add_numbers_2;

/*break*/

function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

/*break*/

function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Hey").innerHTML = "How are you today handsome?";
    }
}

/*break*/

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are my type!";
    }
    else {
        Vote = "You are not not my type!";
    }
    document.getElementById("How_old_are_you").innerHTML = Date?;
}