

$(document).ready(function() {

    initilizeSmoothScroll()


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