const majorCode ="CSC";
let nameOfMajor ="";
let departOffice ="";

    if (majorCode == "BIOL"){
        nameOfMajor = "Biology";
        departOffice = "Science Bld #310"
    }
    else if(majorCode == "CSCI"){
        nameOfMajor = "Computer Science"
        departOffice = "Sheppard Hall #314"    
    }
    else if(majorCode=="ENG"){
        nameOfMajor = "English"
        departOffice = "Kerr Hall #201"    
    }
    else if(majorCode=="HIST"){
        nameOfMajor = "History"
        departOffice = "Kerr Hall #114"    
    }
    else if(majorCode=="MKT" ){
        nameOfMajor = "Marketing"
        departOffice = "Westly Hall #310"    
    }else{ //DEFAULT
        nameOfMajor = "INVALID CODE"
        departOffice = "INVALID CODE"
    }
   

console.log(majorCode,nameOfMajor,departOffice)