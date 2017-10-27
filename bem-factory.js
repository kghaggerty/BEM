// <(^- ^)>
//Adding properties to each car in an object.  There will be three

let carOne = {

    "make": "Chevrolet",
    "model": "Geo-Tracker",
    "price": "$102,321",
    "picture": "image/geotracker1.jpg",
    "year": "1989",
    "color": "Yellow",
    "mileage": "680,009",
    "engine": "2.5L V6",
    }

    let carTwo = {
    "make": "Chevrolet",
    "model": "Geo-Tracker",
    "price": "$32,010",
    "picture": "image/geotracker2.jpeg",
    "year": "1992",
    "color": "Blue",
    "mileage": "1,009",
    "engine": "3L V6",
    }

    let carThree = {

    "make": "Chevrolet",
    "model": "Geo-Tracker",
    "price": "$1,239",
    "picture": "image/geotracker3.jpeg",
    "year": "1993",
    "color": "Blue",
    "mileage": "298,399",
    "engine": "5L V6",
    }

//Create array to move all car objects into.
let carArray = []
//Pushing the three car objects into a car array.
carArray.push(carOne, carTwo, carThree)


const carString = JSON.stringify(carArray);

localStorage.setItem('carArray', carString);


