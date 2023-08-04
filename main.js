// //SECTION THREE
// let section2CardsContainer = document.getElementsByClassName("section2-cards")[0];
// let section2Card = document.getElementsByClassName("section2-card");
// let cards ='';
// let cardDetails = [
//     {
//         "logo" : `<i class="fas fa-location-arrow fa-2x">`,
//         "title" : "Easy Customizable",
//         "details" : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet!.`
//     },
//     {
//         "logo" : `<i class="fas fa-layer-group fa-2x"></i>`,
//         "title" : "Modern & Slick",
//         "details" : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet!.`
//     },
//     {
//         "logo" : `<i class="fas fa-shield-alt fa-2x"></i>`,
//         "title" : "Trusted and secure",
//         "details" : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet!.`
//     }
// ]

// for(let i=0; i<3; i++)
// {
//     cards += `<div class="section2-card">
//     ${cardDetails[i].logo}</i>
//     <h3> ${cardDetails[i].title} </h3>
//     <p>${cardDetails[i].details}</p>
// </div>`;
// }

// section2CardsContainer.innerHTML = cards;

//SECTION THREE
let section3img = document.getElementById("section3image");
let listImg = ["/img/1.png", "/img/2.png", "/img/3.png"]

document.getElementById("section3TitleOne").onclick = ()=>{
    section3img.src = `${listImg[0]}`;
}

document.getElementById("section3TitleTwo").onclick = ()=>{
    section3img.src = `${listImg[1]}`;
}

document.getElementById("section3TitleThree").onclick = ()=>{
    section3img.src = `${listImg[2]}`;
}


//SECTION 5

let imgscroll = document.getElementById("imgScroll");

document.getElementById("rightButton").onclick = ()=>{
    imgscroll.classList.toggle("scroll");
}

document.getElementById("leftButton").onclick = ()=>{
    imgscroll.classList.toggle("scrollLeft");
}