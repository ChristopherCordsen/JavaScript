var person = {
    firstname:"Christopher",
    middlename:"Reagan",
    lastname:"Wytho",
    age:37,
    eyecolor:"blue",
  };
  
  delete person.age;
  document.getElementById("demo").innerHTML =
  person.firstname + person.middlname + person.lastname + " is " + person.age + " years old.";
