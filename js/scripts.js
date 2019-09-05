$(document).ready(function() {

    initilizeSmoothScroll()
    setupIntersectionObserver();
    initializeTooltips();
    initalizeEmail();
    initializeSchools();

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
                // nav.classList.remove('navbar-dark')
                // nav.classList.add('navbar-light')
                nav.classList.remove('bg-light')
                nav.classList.add('bg-transparent')
                nav.classList.remove('scrolled-navbar')
                socialIcons.forEach(icon => {
                    icon.classList.add('dark');
                })
                
            }
            else{
                // nav.classList.add('navbar-dark')
                // nav.classList.remove('navbar-light')
                nav.classList.remove('bg-transparent')
                nav.classList.add('bg-light')
                nav.classList.add('scrolled-navbar')
                // socialIcons.forEach( icon => {
                //     icon.classList.remove('dark')
                // })
                
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

function initializeSchools() {

    $('.school').click(function (event){
        document.querySelector('.school.active').classList.remove('active');
        event.target.classList.add('active')

        $('.school-details').each( function(i) {
            $(this).removeClass('school-hidden')
        })

        const school = event.target.getAttribute('id')


        if (school === 'uci'){
            document.querySelector('#sac-details').classList.add('school-hidden')
        }
        else if (school === 'sac') {
            document.querySelector('#uci-details').classList.add('school-hidden')
        }

    })

}