// -----------------Task 1-------------------

// function sum_of(value1) {
//     return function(value2) {
//       return value1 + value2;
//     }
//   }
//   let callingFunction = sum_of(10);
//   console.log(callingFunction(5));  
    

// -----------------Task 2-------------------

// function searchArray(myName, value) {

//   if (myName.length === 0) {
//     return false;
//   }

//   if (myName[0] === value) {
//     return true;
//   }
  
//   else {
//     return searchArray(myName.slice(1), value);
//   }
// }

//   let myName = ["M" , "A" , "H" , "N" , "O" , "O" , "R"];
// console.log(searchArray(myName, "O"));  // prints true
// console.log(searchArray(myName, "S"));  // prints false

// -----------------Task 3-------------------

// function paragraph(sentence) {
//   document.getElementById("html-paragraph");
//   return sentence;   
//   }
//   let new_paragraph = paragraph("This is a new paragraph changed by using JS Dom.")
//     console.log(new_paragraph);

// function paragraph(sentence) {
//     document.querySelector('p');
//     return sentence;   
//   }
//   let new_paragraph = paragraph("This is a new paragraph changed by using JS Dom.")
//     console.log(new_paragraph);

// -----------------Task 4-------------------

// function changeListItems(items){
//   document.querySelector('li');
//   return items;
// }
// let new_list = changeListItems("Mus'haf");
// console.log(new_list);

// -----------------Task 5-------------------

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// } 

// const myElement = document.querySelector('ul');
// changeBackgroundColor(myElement, 'red');

// -----------------Task 6-------------------

// function saveObjectToLocalStorage(key, object) {
//   localStorage.setItem(key, JSON.stringify(object));
// }

// const aboutMe = {  name: "Mahnoor Khan",
//                    surname: "Yousaf zai pathan",
//                    contactNo: +92137854924
//                    };
                   
// saveObjectToLocalStorage("myKeyValues", aboutMe);

// -----------------Task 7-------------------

// function retrievedObject(){
//   JSON.parse(localStorage.getItem("myKeyValues")); // to retrieve the string value that we previously stored
// } 
// retrievedObject();

// -----------------Task 8-------------------

// function saveObjectToLocalStorage(propertyName, propertyValue) {
//   localStorage.setItem(propertyName, JSON.stringify(propertyValue));
// }

// const aboutMe = {  name: "Mahnoor Khan",
//                    surname: "Yousaf zai pathan",
//                    contactNo: +92137854924
//                    };
                   
// saveObjectToLocalStorage("myKeyValues", aboutMe);

// let retrievedObject = JSON.parse(localStorage.getItem("myKeyValues")); // to retrieve the string value that we previously stored


