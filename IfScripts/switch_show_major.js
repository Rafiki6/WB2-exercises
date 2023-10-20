const majorCode ="ENG"
let nameOfMajor =""
let departOffice =""

switch(majorCode){
    case "ENG":
        nameOfMajor = "English"
        departOffice ="Kerr Hall #201" 
    break

    case "CSDI":
        nameOfMajor ="Computer Science"
        departOffice = "Sheppard Hall #314"  
    break
    default:
        nameOfMajor = "INVALID NAME"
        departOffice ="INVALID NAME"
}
console.log(nameOfMajor,departOffice)

