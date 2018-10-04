console.log('hello from javascript!')
/* name(string)
age(number)
gender(string / binary ? )
allergies(boolean)
sleep_apnea(boolean)
heart_disease(boolean) */


// var bob  = new User('bob');
// console.log('bob.name is: ', bob.name)

var form = document.getElementById("myForm");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let user = createNewUserFromForm()
  console.warn('user is: ', user)
  let price = getPrice(user)
  console.warn('price is: ', price)
  addResultToPage(user, price)
  //fillArray();
});

function addResultToPage(user, price) {
  var resultDiv = document.getElementById('result');
  let outputMessage = `${user.name}, your annual life insurance policy estimate is: ${price}.` //NOTE: fix if age is under 18...
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

/* function refreshPage(){
window.location.reload();
}  */


//class

class User {
  constructor(name, age, gender, allergies, sleep_apnea, heart_disease) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.allergies = allergies;
    this.sleep_apnea = sleep_apnea;
    this.heart_disease = heart_disease;
    // this.makeSound = () => `The ${this.type} named ${this.name} goes ${this.sound}!`;
  }
}

//pricing engine NOTE: all below could be moved to a backend api...

// var em = new User('em', 23, 'male', 'false')
// var bob = new User('bob', 29, 'male', 'true')
// var susan = new User('susan', 87, 'female', 'false')
//
// console.log('em is: ', em)
// console.log('bob is: ', bob)
// console.log('susan is: ', susan)


var kelly = new User('Kelly', 50, 'female', 'true', 'false', 'false')
var josh = new User('Josh', 40, 'male', 'false', 'true', 'false')
var brad = new User('Brad', 20, 'male', 'false', 'false', 'true')


function applyAgePremium(price, user) {
  const baseAge = 18
  const errorMessage = "ERROR! Must be over 18 to purchase this life insurance policy. Sorry!"
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
  console.log('final price is: ', price)
  return price
}

// let emPrice = getPrice(em)
// let bobPrice = getPrice(bob)
// let susanPrice = getPrice(susan)
//
// console.log('emPrice is: ', emPrice)
// console.log('bobPrice is: ', bobPrice)
// console.log('susanPrice is: ', susanPrice)

let kellyPrice = getPrice(kelly)
let joshPrice = getPrice(josh)
let bradPrice = getPrice(brad)

console.log('kellyPrice is: ', kellyPrice)
console.log('joshPrice is: ', joshPrice)
console.log('bradPrice is: ', bradPrice)
