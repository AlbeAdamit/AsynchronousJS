// const button = document.querySelector("button")
// const body = document.querySelector("body")

// button.addEventListener('click', () => {
//     const request = fetch('becode.txt')
//     const response = request.then(response => response.text())
//     const list = document.createElement('ul')
//     const listS = document.createElement('li')
//     response.then(text => {
//         listS.textContent = text
//     })
//     list.textContent = response
//     body.appendChild(list)
//     list.appendChild(listS)
// })



//Exo 1
// let button = document.querySelector("button")
// pattern = /- ((\w)(.)?( )?)/gi;
 
// const async = ()=> {
//     fetch("becode.txt")
//   .then((response) => response.text())
//   .then((text) => {
//     const ul = document.createElement("ul");
//     let regexResult = text.match(pattern);
//     console.log(regexResult);

//     for (let elem of regexResult ){

//     let li = document.createElement("li");
//     li.textContent=elem;
//     ul.appendChild(li)
//     }

//     document.body.appendChild(ul);
//   })
//   .catch((error) => {
//     console.log("There was an error!", error);
//   });}

// button.addEventListener("click", async)
// console.log(button)

//Exo 2

let button = document.querySelector("button")

 const async = ()=> {
    fetch("becode.json")
  .then((response) => response.json())  
  .then((becode) => {
    const ul = document.createElement("ul");
console.log(becode)

    for (let elem of becode ){
    
    let li = document.createElement("li");
    li.textContent=elem;
    ul.appendChild(li)
    }

    document.body.appendChild(ul);
  })

  .catch((error) => {
    console.log("There was an error!", error);
  });}

button.addEventListener("click", async)
