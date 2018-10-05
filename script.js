console.log('hello from javascript!')

//for HTML form input and output:
var form = document.getElementById("myForm");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let user = createNewUserFromForm()
  console.warn('user is: ', user)
  let price = getPrice(user)
  console.warn('price is: ', price)
  addResultToPage(user, price)
});

function addResultToPage(user, price) {
  var resultDiv = document.getElementById('result');
  let outputMessage
  if (isNaN(price)) {
    outputMessage = errorMessage
  } else {
    outputMessage = `${user.name}, your annual life insurance policy estimate is: $${price}.`
  }
  resultDiv.innerText = outputMessage
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
const errorMessage = "ERROR! Must be over 18 to purchase this life insurance policy. Sorry!"


//class
class User {
  constructor(name, age, gender, allergies, sleep_apnea, heart_disease) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.allergies = allergies;
    this.sleep_apnea = sleep_apnea;
    this.heart_disease = heart_disease;
  }
}


//pricing functionality

var kelly = new User('Kelly', 50, 'female', 'true', 'false', 'false')
var josh = new User('Josh', 40, 'male', 'false', 'true', 'false')
var brad = new User('Brad', 20, 'male', 'false', 'false', 'true')

function applyAgePremium(price, user) {
  const baseAge = 18
  if (user.age < baseAge) {
    return errorMessage
  } else {
    console.log(`${user.name}'s age is ${user.age}...`)
    let ageRisk = user.age - baseAge
    let agePremium = Math.floor(ageRisk/5) * 20
    price = price + agePremium
    console.warn('price is now: ', price)
    return price
  }
}

function applyDiscounts(price, user) {
  if (user.gender === 'female') {
    price = price - 12
    console.warn('female discount - price is now: ', price)
  }
  return price
}

function applyHealthPremiums(price, user) {
  if (user.allergies === 'true') {
    price = price * (1 + 0.01)
    console.warn('allergies - price is now: ', price)
  }
  if (user.sleep_apnea === 'true') {
    price = price * (1 + 0.06)
    console.warn('sleep_apnea - price is now: ', price)
  }
  if (user.heart_disease === 'true') {
    price = price * (1 + 0.17)
    console.warn('heart_disease - price is now: ', price)
  }
  return price
}

function getPrice(user) {
  console.log('getPrice, user is: ', user)
  const baseCost = 100
  let price = baseCost
  console.log('price is now: ', price)
  price = applyAgePremium(price, user)
  price = applyHealthPremiums(price, user)
  price = applyDiscounts(price, user)
  // price = price.toFixed(2) //toFixed makes it a string with only two decimal places
  console.log('final price is: ', price)
  return price
}

//testing here and in InsuranceSpecRunner in testing folder...
let kellyPrice = getPrice(kelly)
let joshPrice = getPrice(josh)
let bradPrice = getPrice(brad)

console.log('kellyPrice is: ', kellyPrice)
console.log('joshPrice is: ', joshPrice)
console.log('bradPrice is: ', bradPrice)
