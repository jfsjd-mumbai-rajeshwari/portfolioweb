// functions
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

//to top

const toTop = () => windows.scrollTo({top: 0, behavior: 'smooth'});
 
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
//promise
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Thank You for visiting my portfolio !!");}, 5000);
    });
    document.getElementById("greeting").innerHTML = await myPromise;
  }
  
  myDisplay();

//handlebar

const source =this.document.getElementById('form').innerHTML;
const clickButton =this.document.getElementById('submit')
clickButton.addEventListener('click', getResponse);
function getResponse()
{
const template =  Handlebars.compile(source);
 var v1 = document.getElementById('name').value;

const replace = {};
replace.Name = v1;


const compiledHtml = template(replace);
const result = document.getElementById('msg');
 result.innerHTML = compiledHtml;
}