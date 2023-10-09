/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Joann Valencia',
    photo: './images/meAndLuther.png',
    favoriteFoods: ['Jelly', 'Brownies', 'Lemonade', 'Spring rolls', 'Dumplings'],
    hobbies: ['Drawing', 'Dancing', 'Playing videogames'],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Lima, Perú',
    length: '17 years and 8 months'
}, {
    place: 'Trujillo, Perú',
    length: '4 months'
})

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo
document.querySelector('#photo').alt = myProfile.name


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li')
    li.textContent = food
    document.querySelector('#favorite-foods').appendChild(li)
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li')
    li.textContent = hobby
    document.querySelector('#hobbies').appendChild(li)
})

/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt')
    dt.textContent = placesLived.place

    let dd = document.createElement('dd')
    dd.textContent = placesLived.length

    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
})