/*!
 * activenav v1.0.0
 * site for active navigation
 * (c) 2020 
 * ISC License
 * ssh://codeserver.dev.8882ce7d-2f48-4126-bbbf-e5bd5f7c6b42@codeserver.dev.8882ce7d-2f48-4126-bbbf-e5bd5f7c6b42.drush.in:2222/~/repository.git
 */

jQuery(function($){
    $('.slick-caroussel').slick({
        dots: true,
    });


    $('#tabs li a:not(:first)').addClass('inactive');
    $('.container-tab').hide();
    $('.container-tab:first').show();
    $('#tabs li a').click(function(){
        var t = $(this).attr('href');
        $('#tabs li a').addClass('inactive');        
        $(this).removeClass('inactive');
        $('#tabs li').removeClass('active');
        $('.container-tab').hide();
        $(t).fadeIn('slow');
        $(this).parent().addClass('active');
        return false;
    })

    if($(this).hasClass('inactive')){ //this is the start of our condition 
        $('#tabs li a').addClass('inactive');         
        $(this).removeClass('inactive');
        $('.container-tab').hide();
        $(this).fadeIn('slow');    
    }

    $('.hamburger').click(function(){
        $('.nav-main').toggleClass('active');
        $(this).toggleClass('active');
    })

    $( "#accordion" ).accordion();

    var allPanels = $('.accordion > dd').hide();
    
    $('.accordion > dt > a').click(function() {
        if($(this).hasClass('active')){

        } else {
            $('.accordion a').removeClass('active');
            $(this).addClass('active');
            allPanels.slideUp();
            $(this).parent().next().slideToggle();
        }
        
        return false;
    });
});

