const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdOneEl = document.getElementById("pwd-one-el")
let pwdTwoEl = document.getElementById("pwd-two-el")

function generatePwd() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    
    for(let i = 0; i < 16; i++) {
      randomNumber = Math.floor(Math.random() * characters.length)
      randomPasswordOne += characters[randomNumber]
    }
    pwdOneEl.textContent = randomPasswordOne

    for(let i = 0; i < 16; i++) {
        randomNumber = Math.floor(Math.random() * characters.length)
        randomPasswordTwo += characters[randomNumber]
      }
      pwdTwoEl.textContent = randomPasswordTwo
  }

// let pwdOne = []
// let pwdTwo = []

// let pwdOneEl = document.getElementById("pwd-one-el")
// let pwdTwoEl = document.getElementById("pwd-two-el")

// function generatePwd() {

//     pwdTwoEl.textContent = ""
//     pwdOneEl.textContent = ""

//     for (let i = 0; i < 16; i++) {
//         let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
//         pwdOne.push(randomCharacter)
//     }

//     pwdOneEl.textContent += pwdOne.join("")

//     for (let i = 0; i < 16; i++) {
//         let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
//         pwdTwo.push(randomCharacter)
//     }

//     pwdTwoEl.textContent += pwdTwo.join("")

// }