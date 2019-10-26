function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Don't read on me; your name must be filled out");
      return false;
    }
  }
 