/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Joann'
let currentYear = '2023'
let profilePicture = 'images/meAndLuther.png'

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name')
let foodElement = document.getElementById('food')
let yearElement = document.querySelector('#year')
let imageElement = document.querySelector('img[src="images/placeholder.png"][alt="Placeholder Image"]')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */

let foods = ['Jelly', 'Brownies', 'Lemonade', 'Spring rolls', 'Dumplings']
foodElement.textContent = foods

let anotherFood = 'Pizza'
foods.push(anotherFood)
foodElement.innerHTML += `<br>${foods}`

foods.shift()
foodElement.innerHTML += `<br>${foods}`

foods.pop()
foodElement.innerHTML += `<br>${foods}`