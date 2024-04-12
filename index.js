const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdOneEl = document.getElementById("pwd-one-el")
let pwdTwoEl = document.getElementById("pwd-two-el")

let isPwdGenerated = false
console.log(isPwdGenerated)


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

    isPwdGenerated = true
    console.log(isPwdGenerated)

    showCopyBtn()

  }

function copyPwdOne() {
    console.log("clicked")

    let copyText = document.getElementById("pwd-one-el").innerText
    let el = document.createElement('textarea')

    el.value = copyText
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.body.removeChild(el)    

    // Copy the text inside the text field
    navigator.clipboard.writeText(el.value);

    // Alert the copied text
    // alert("Copied the text: " + el.value);
    document.getElementById("copy-confirmation-1").textContent = "Copied to clipboard!"
}

function copyPwdTwo() {
    console.log("clicked")

    let copyText = document.getElementById("pwd-two-el").innerText
    let el = document.createElement('textarea')

    el.value = copyText
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.body.removeChild(el)    

    // Copy the text inside the text field
    navigator.clipboard.writeText(el.value);

    // Alert the copied text
    // alert("Copied the text: " + el.value);
    document.getElementById("copy-confirmation-2").textContent = "Copied to clipboard!"
}

// FUNCTION TO DISPLAY THE COPY TO CLIPBOARD BUTTONS ONCE THE PASSWORDS ARE GENERATED

function showCopyBtn() {
  if (isPwdGenerated = true) {
    document.getElementById("copy-pwd-1").style.display="inline"
    document.getElementById("copy-pwd-2").style.display="inline"

  } else {
    document.getElementById("copy-pwd-1").style.display="none"
    document.getElementById("copy-pwd-2").style.display="none"
  }
}