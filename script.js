console.log('hello from javascript!')
/* name(string)
age(number)
gender(string / binary ? )
allergies(boolean)
sleep_apnea(boolean)
heart_disease(boolean) */

var form = document.getElementById("myForm");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  console.log("name is: ", getInputValueById('name') );
  console.log("age is: ", getInputValueById('age') );
  //console.log("typeof Number(ageInput.value) is: ", typeof Number(ageInput.value) );
  console.log("gender is: ", getCheckedRadioValue('gender') )

  //fillArray();
});

function getInputValueById(id) {
  var input = document.getElementById(id);
  return input.value;
}

function getCheckedRadioValue(name) {
  var elements = document.getElementsByName(name);
  for (var i=0, len=elements.length; i<len; ++i) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
}

/* function refreshPage(){
window.location.reload();
}  */
