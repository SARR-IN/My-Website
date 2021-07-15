burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
           


})

const clc = document.querySelector(".cacel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", ()=>{
    arr.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});
clc.addEventListener("click", ()=>{
    arr.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

$(function () {
    //Check the validator errors
    $('#cform').validator();
    //After the form submission
    $('#cform').on('submit', function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
    var url = "contact.php";
    // POST values in the background the the script URL
    $.ajax({
    type: "POST",
    url: url,
    data: $(this).serialize(),
    success: function (data)
    {
    var successAlert = '<div class="alert alert-success alert-dismissable" role="alert"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + data + '</div>';
    $('#msg').html(successAlert);
    }
    });
    return false;
    }
    })
    });

    











