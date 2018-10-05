var form = document.getElementById("myForm");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let user = createNewUserFromForm()
  console.warn('user is: ', user)
  let price = getPrice(user)
  // console.warn('price is: ', price)
  addResultToPage(user, price)
});

function addResultToPage(user, price) {
  var resultDiv = document.getElementById('result');
  let outputMessage
  if (isNaN(price)) {
    outputMessage = errorMessage
  } else {
    outputMessage = `<h2>${user.name}, your annual life insurance policy estimate is: $${price}.</h2>`
  }
  resultDiv.innerHTML = outputMessage
}

function createNewUserFromForm() {
  let name = getInputValueById('name')
  let age = getInputValueById('age')
  let gender = getCheckedRadioValue('gender')
  let allergies = getCheckedRadioValue('allergies')
  let sleep_apnea = getCheckedRadioValue('sleep_apnea')
  let heart_disease = getCheckedRadioValue('heart_disease')
  var newUser = new User(name, age, gender, allergies, sleep_apnea, heart_disease)
  return newUser
}

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

//making this a global variable for now
const errorMessage = `<h2>ERROR! Must be over 18 to purchase this life insurance policy. Sorry!</h2>`
