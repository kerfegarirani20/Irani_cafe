let menu = document.queryselector("#menu-icon");
let navbar = document.queryselector(".navbar");

menu.addEventListener("click",function(){
	navbar.classList.toggle("active");
});

window.onscroll=()=>{
	navbar.classList.remove("active")
};