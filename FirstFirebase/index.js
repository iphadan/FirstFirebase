import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

let inputField=document.getElementById("input-field")
let buttonField=document.getElementById("add-button")
const appSetting={
    databaseURL:"https://firstfirebase-1c930-default-rtdb.europe-west1.firebasedatabase.app/"
}
// here we tried to connect our project on firebase and the app using the link inside appSetting
const app=initializeApp(appSetting);
//tried to get the db from the above connected app
const database =getDatabase(app)
const moviesInDb=ref(getDatabase,"movies");
console.log(app);

buttonField.addEventListener("click",function(){

    inputValue=inputField.value;
    console.log(inputValue);
});