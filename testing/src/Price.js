function getPrice(user) {
  const baseCost = 100
  let price = baseCost
  price = applyAgePremium(price, user)
  price = applyHealthPremiums(price, user)
  price = applyDiscounts(price, user)
  return price
}

function applyAgePremium(price, user) {
  const baseAge = 18
  const errorMessage = "ERROR! Must be over 18 to purchase this life insurance policy. Sorry!"
  if (user.age < baseAge) {
    return errorMessage
  } else {
    let ageRisk = user.age - baseAge
    let agePremium = Math.floor(ageRisk/5) * 20
    price = price + agePremium
    return price
  }
}

function applyDiscounts(price, user) {
  if (user.gender === 'female') {
    price = price - 12
  }
  return price
}

function applyHealthPremiums(price, user) {
  if (user.allergies === 'true') {
    price = price * (1 + 0.01)
  }
  if (user.sleep_apnea === 'true') {
    price = price * (1 + 0.06)
  }
  if (user.heart_disease === 'true') {
    price = price * (1 + 0.17)
  }
  return price
}
