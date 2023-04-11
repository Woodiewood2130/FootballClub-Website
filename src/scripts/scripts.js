
//Fucntion for the login popup.
function openForm() {
    document.getElementById("loginform").classList.toggle("show");
}

function login_redirect() {

}


//Funtion for the ticket
function renderTicket() {
    var selected = document.getElementById("ticket_group");
    var imgUrl = "";
    if (selected.value == 'vip') {
        imgUrl = "https://static.vecteezy.com/system/resources/previews/013/319/823/original/golden-yellow-vip-ticket-illustration-vector.jpg";
    } 
    else if (selected.value == 'gold') {
        imgUrl = "https://img.freepik.com/premium-vector/golden-ticket-design-vip-invitation-vector-illustration_527912-22.jpg?w=2000";
    } 
    else if (selected.value == 'silv') {
        imgUrl = "https://www.shutterstock.com/image-vector/silver-ticket-vector-illustration-websites-260nw-2216357835.jpg";
    } 
    else if (selected.value == 'brnz') {
        imgUrl = "https://www.citizenadvocacycenter.org/uploads/8/8/4/0/8840743/s986954959238854464_p10_i8_w500.png";
    } 
    else if (selected.value == 'default'){
        imgUrl = "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }

    document.getElementById("ticket_img").src = imgUrl;
}

function reset_img() {
    var reset = document.getElementById("rest");
    var restimg = "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    if (reset.value == 'Reset') {
        document.getElementById("ticket_img").src = restimg;
    }
}


//counter for the products
const display = document.getElementById("display");

function counter_add() {
    document.getElementById("plus");
    const number = display.innerText;
    display.innerText = parseInt(number, 10) + 1;
}

function counter_minus() {
    document.getElementById("minus");
    const number = display.innerText;
    display.innerText = parseInt(number, 10) - 1;
    if (display.innerText < 0 ) {
        display.innerText = 0;
    }
}

//Signup functions
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       
       forms.classList.toggle("show-signup");
    })
})

//left and right move for players items
// function right_players () {
//     document.getElementById('items_flex_container_players').scrollLeft += 210;
//   };
//   function left_players () {
//     document.getElementById('items_flex_container_players').scrollLeft -= 210;
//   };

//left and right move for shop items
function right_shop () {
  document.getElementById('items_flex_container_shop').scrollLeft += 335;
};
function left_shop () {
  document.getElementById('items_flex_container_shop').scrollLeft -= 335;
};