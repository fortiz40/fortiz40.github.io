$(document).ready(function() {

    initilizeSmoothScroll()
    setupIntersectionObserver();
    initializeTooltips();
    initalizeEmail();

})


function initilizeSmoothScroll() {

    var scrollLinks = $('.scroll-link');

    scrollLinks.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top,
        
        }, 1000
        )
    })

}

function setupIntersectionObserver() {

    const nav = document.querySelector('.navbar');
    const socialIcons = document.querySelectorAll('.social-link');
    const introContent = document.querySelector('#intro');

    const options = {
        rootMargin: "-500px 0px 0px 0px"
    }

    const introContentObserver = new IntersectionObserver(function(entries, introContentObserver) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav.classList.remove('navbar-light')
                nav.classList.add('navbar-dark')
                nav.classList.remove('bg-light')
                nav.classList.add('bg-transparent')
                socialIcons.forEach(icon => {
                    icon.classList.add('light');
                })
                
            }
            else{
                nav.classList.add('navbar-light')
                nav.classList.remove('navbar-dark')
                nav.classList.remove('bg-transparent')
                nav.classList.add('bg-light')
                socialIcons.forEach( icon => {
                    icon.classList.remove('light')
                })
                
            }
        })
    }
    ,options
    );

    introContentObserver.observe(introContent)

}

function initializeTooltips(){
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    })

}

function initalizeEmail() {
    $(function () {
        $('.email-sender').click(function (event) {
          var email = 'fortiz40.fo@gmail.com';
          document.location = "mailto:"+email
        });
      });
}