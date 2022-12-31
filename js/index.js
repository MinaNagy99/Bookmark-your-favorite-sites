var submit = document.querySelector('button');
var names = document.querySelector('#name');
var weburl = document.querySelector('#url');
var websites = [];
var remove = document.getElementById('btn2');


submit.onclick = function ( ) { 
addProduct();
display();
clearForm();
}
function addProduct() {
  if(validation1() == true && validation2() == true){ 
  

    var site = {
    webname : names.value,
    url : weburl.value

  }
  
  websites.push(site);
}
  else{
alert('please check your data')  }
};
function display() {
  cartona='';
  for(var i =0 ;i<websites.length ; i++  ){
    cartona += `  <div class="cont d-flex justify-content-between my-1 bg-secondary w-75 m-auto p-1 align-items-center">
    <p class="fs-4 text-white">${websites[i].webname}</p>
    <div class="buttons">
    <button class="btn btn-info mx-5 px-3 "><a href="${websites[i].url}" target="_blank"class="text-decoration-none text-white">visite</a></button>
    <button class="btn btn-danger mx-5" onclick="deleteLine(${i})" "id="btn2">Delete</button>
  </div>
  </div>   `
  } 
  var dispaly = document.getElementById('displayy').innerHTML=cartona;
}

function deleteLine(index) {
websites.splice(index,1);


display();



}
function clearForm() {
  names.value=""
  weburl.value=""
}
 function validation1() {
  var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ ;  
  if(regex.test(weburl.value)==true){
  {return true ;}
}
  else {
  {return false ;}
 }
};

function validation2() {
  var regex = /^[a-z ,.'-]+$/i ;  
  if(regex.test(names.value)==true){
  {return true ;}
}
  else {
  {return false ;}
 }
};

