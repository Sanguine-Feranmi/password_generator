const passwordbox = document.getElementById("passwordbox")
const length = 10
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "/)(+-&_$##*:;!?£¢€¥^°={}\][✓™®©%<~`|•√π÷×¶∆]"
const allchars = uppercase + lowercase + number + symbol
const allchar = uppercase + lowercase + number
// alert("uuu")
let passwords = ""
  passwords += uppercase[Math.floor(Math.random() * uppercase.length)]
  passwords += lowercase[Math.floor(Math.random() * lowercase.length)]
  passwords += number[Math.floor(Math.random() * number.length)]
  
  while(length > passwords.length){
  passwords += allchar[Math.floor(Math.random() * allchar.length)]
  }
passwordbox.value = passwords
function select(){
  passwordbox.select()
}
function createpassword(){
  let password = ""
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += symbol[Math.floor(Math.random() * symbol.length)]
  password += number[Math.floor(Math.random() * number.length)]
  
  while(length > password.length){
  password += allchars[Math.floor(Math.random() * allchars.length)]
  }
passwordbox.value = password 
}
function copy(){
  passwordbox.select()
  document.execCommand("copy")
}