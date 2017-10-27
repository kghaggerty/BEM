//<(^ -^)>
const carParse = JSON.parse(localStorage.getItem("carArray"))
//Getting 'article__one' class from the DOM
let carEl = document.getElementsByClassName("article__one")[0]
//Looping through the car array
    for (var index = 0; index < carParse.length; index++) {
        var carFinal = carParse[index];
        console.log(carFinal)
        
//Writing into the DOM 
carEl.innerHTML += `
<article class="article__car">
<section class="article__make">${carFinal.make}</section>
<section class="article__model">${carFinal.model}</section>
<section class="article__price">${carFinal.price}</section>
<img class="article__picture" src="${carFinal.picture}" alt="Car-image" height=100px width= 120px>
<section class="article__year">${carFinal.year}</section>
<section class="article__color">${carFinal.color}</section>
<section class="article__mileage">${carFinal.mileage}</section>
<section class="article__engine">${carFinal.engine}</section>
</article>
<br>
`    
    }  
