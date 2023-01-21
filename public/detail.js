  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,
  ref,
set, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYFMJP-frc15fRLT6Uy0kxnGUAJhBr1R0",
    authDomain: "ajjandhoth.firebaseapp.com",
    projectId: "ajjandhoth",
    storageBucket: "ajjandhoth.appspot.com",
    messagingSenderId: "34571728943",
    appId: "1:34571728943:web:ad27423771f5e40e576eda",
    measurementId: "G-8FBFWSBPXN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const database = getDatabase();

var nameinp = document.getElementById('fullname');
var areainp = document.getElementById('area');
var mobilenuminp = document.getElementById('mobilenum');
var addressinp = document.getElementById('address');
var provinceinp = document.getElementById('province');
var cityinp = document.getElementById('city');

window.newCustomer = function (){
if(nameinp.value == "" || areainp.value == "" || mobilenuminp.value == "" ||addressinp.value == "")
{
  alert("Please Enter Value")
}else{
 
  var obj = {
    name: nameinp.value,
        area: areainp.value,
        mobilenum: mobilenuminp.value,
        address: addressinp.value,
        province: provinceinp.value,
        city: cityinp.value,
    };
   
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `Client/${obj.id}/`);
    set(reference, obj);
    


    console.log(obj);
  }
};







// var home = document.getElementById('home');
// var office = document.getElementById('office');

// function abc(){
//     if(name.value == "" && area.value == "" && mobilenum.value == "" && address.value == "" && province.value == "" && city.value == ""){
//         alert(`Please Fill `);

//     }else{
//        console.log(name.value,area.value,mobilenum.value,address.value,province.value,city.value);
//     }
    
// }
