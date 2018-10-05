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
  // console.log('getPrice, user is: ', user)
  const baseCost = 100
  let price = baseCost
  console.log('base cost is: ', price)
  price = applyAgePremium(price, user)
  price = applyHealthPremiums(price, user)
  price = applyDiscounts(price, user)
  price = price.toFixed(2) //toFixed makes it a string with only two decimal places
  console.log('final price is: ', price)
  return price
}
