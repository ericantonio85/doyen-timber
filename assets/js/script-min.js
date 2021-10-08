/*!
 * activenav v1.0.0
 * site for active navigation
 * (c) 2020 
 * ISC License
 * ssh://codeserver.dev.8882ce7d-2f48-4126-bbbf-e5bd5f7c6b42@codeserver.dev.8882ce7d-2f48-4126-bbbf-e5bd5f7c6b42.drush.in:2222/~/repository.git
 */
jQuery((function($){$(".slick-caroussel").slick({dots:!0}),$("#tabs li a:not(:first)").addClass("inactive"),$(".container-tab").hide(),$(".container-tab:first").show(),$("#tabs li a").click((function(){var a=$(this).attr("href");return $("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$("#tabs li").removeClass("active"),$(".container-tab").hide(),$(a).fadeIn("slow"),$(this).parent().addClass("active"),!1})),$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".container-tab").hide(),$(this).fadeIn("slow")),$(".hamburger").click((function(){$(".nav-main").toggleClass("active"),$(this).toggleClass("active")})),$("#accordion").accordion();var a=$(".accordion > dd").hide();$(".accordion > dt > a").click((function(){return $(this).hasClass("active")||($(".accordion a").removeClass("active"),$(this).addClass("active"),a.slideUp(),$(this).parent().next().slideToggle()),!1}))}));