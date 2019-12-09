const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CD =  "showing";

function saveName(myName){
  localStorage.setItem(USER_LS,myName);
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paingGreeting(currentValue);
  saveName(currentValue);
}
function askFormName(){
  form.classList.add(SHOWING_CD);
  form.addEventListener("submit", handleSubmit);
}

function paingGreeting(text){
  form.classList.remove(SHOWING_CD);
  greeting.classList.add(SHOWING_CD);
  greeting.innerText = `Hello ${text}`;
}
function loadName(){
  const currnetUser = localStorage.getItem(USER_LS);
  if (currnetUser=== null){
      // she is not
      askFormName();
  }else{
      // she is
      paingGreeting(currnetUser);
  }
}

function init(){
  loadName();
}

init();