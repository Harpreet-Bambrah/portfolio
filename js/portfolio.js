


// on scroll header-shadow

 window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("header").className = "header-fixed";
    } else {
        document.getElementById("header").classList.remove("header-fixed");
    }
   
}



// download cv
