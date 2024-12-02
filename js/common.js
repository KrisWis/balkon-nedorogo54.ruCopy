
$(function(){
//**********************

// маски
$(".tel_mask").inputmask("+7 (999) 999-99-99");


//*****************************

 // с остеклением вы получите
var bannerCarousel1 = $(".carousel-ogal");
bannerCarousel1.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                960:{
                    items:3
                },

            }
});


var vpodCarousel1 = $(".carousel-vpod");
vpodCarousel1.owlCarousel({
        items : 6,
        loop:true, 
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                960:{
                    items:4
                },
                1200:{
                    items:6
                }

            }
});

var d4Carousel1 = $(".carousel-d4");
d4Carousel1.owlCarousel({
        items : 6,
        loop:true, 
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                960:{
                    items:3
                },
                1200:{
                    items:4
                }

            }
});

 // текстуры
var bannerCarousel1 = $(".carousel-texgal");
bannerCarousel1.owlCarousel({
        // items : 6,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                960:{
                    items:3 //4
                },
                1300:{
                    items:3 //6
                },

            }
});

 // текстуры
var ostCarousel1 = $(".carousel-ost");
ostCarousel1.owlCarousel({
        // items : 6,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:2
                },
                960:{
                    items:2 
                },
                1300:{
                    items:3 
                },

            }
});


// дизайн
var gal1Carousel = $(".carousel-design");
gal1Carousel.owlCarousel({
        items : 1,
        loop:true,
        dots:false, 
        nav:true,
       /* autoHeight: true,*/
        navText: ['',''],
});




// практичность
var gal2Carousel = $(".carousel-prak");
gal2Carousel.owlCarousel({
        items :3,
        loop:true,
        dots:false,
        nav:true,

        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                998:{
                    items:3
                },

                

            }
});

var rdCarousel = $(".carousel-rd");
rdCarousel.owlCarousel({
        items :3,
        loop:true,
        dots:false,
        nav:true,

        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:4
                },
                998:{
                    items:5
                },
                1200:{
                    items:6
                }, 
                1400:{
                    items:6
                },

                

            }
});

var accCarousel = $(".carousel-acc");
accCarousel.owlCarousel({
        items :4,
        loop:true,
        dots:false,
        nav:true,

        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                998:{
                    items:3
                },
                1200:{
                    items:4
                }, 

            }
});

// галерея
var galCarousel = $(".carousel-pro");
galCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],

});

// видеоотзывы
var vorzCarousel = $(".carousel-video");
vorzCarousel.owlCarousel({
        items : 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        loop:true,
        dots:true,
        nav:false,
        animateOut: 'fadeOut',
        navText: ['',''],

});


 // готовые решения
var bannerCarousel1 = $(".carousel-resh");
bannerCarousel1.owlCarousel({
        items : 2,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                992:{
                    items:2
                },


            }
});


// комплектация
var compCarousel = $(".carousel-comp");
compCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],

});


// 
var vorzCarousel = $(".carousel-otd");
vorzCarousel.owlCarousel({
        items : 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        loop:true,
        dots:true,
        nav:false,
        animateOut: 'fadeOut',
        navText: ['',''],

});

var bannerCarousel1 = $(".carousel-dop");
bannerCarousel1.owlCarousel({
        items : 4,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                960:{
                    items:3
                },
                1200:{
                    items:4
                },

            }
});

var vbbCarousel1 = $(".carousel-vbb");
vbbCarousel1.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                960:{
                    items:3
                },
                1200:{
                    items:3
                },

            }
});


/*************************************/

    $('.close-button').click(function(){
        $('.modal-overlay').toggleClass("closed");
        
        $(this).parent().addClass("closed");
        
        //$('.callback_form').addClass("closed");
        //$('.f_spasibo').addClass("closed");

    })
  
    $('#s_close').click(function(){

        $('.f_spasibo').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

        //$(".f_spasibo p").html('Мы приняли вашу заявку, наш менеджер скоро с вами свяжется!');

    })    


// Вам перезвонить?
 $('.callback1').click(function(){
        $(".callback_form #send").html('Отправить');
        $(".callback_form h2").html('Перезвонить Вам?');
        $(".callback_form .sender").html('call');
        $('.callback_form').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
// Вам перезвонить?
 $('.zamer').click(function(){
        $(".callback_form #send").html('Заказать');
        $(".callback_form h2").html('<span>Бесплатный</span><br>Вызов мастера');
        $(".callback_form .sender").html('zamer');
        $('.callback_form').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })



//*****************************


 $('#send').click(function(){

    var tel=$('#call_tel').val();
    var type=$('.sender').html();

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#call_tel').val('');
                     $('.callback_form').toggleClass("closed");
                     
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })

 $('#f100_send').click(function(){

    var tel=$('#f100_tel').val();
    var type='f100';

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#f100_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
    
 $('#f5min_send').click(function(){

    var name=$('#f5min_name').val();
    var tel=$('#f5min_tel').val();
    var type='f5min';

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'name': name,
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#f5min_name').val('');
                     $('#f5min_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
 $('#fsh_send').click(function(){

    var name=$('#fsh_name').val();
    var tel=$('#fsh_tel').val();
    var type='fsh';

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'name': name,
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#fsh_name').val('');
                     $('#fsh_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
    
 $('#ftp_send').click(function(){

    var name=$('#ftp_name').val();
    var tel=$('#ftp_tel').val();
    var type='ftp';

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'name': name,
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#ftp_name').val('');
                     $('#ftp_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
    
 $('#gift_send').click(function(){

    var tel=$('#gift_tel').val();
    var gift = $('.g_item.active span').text();
    var type='gift';

    $.ajax({
            type: "POST",
            url: "/forms.php",
            data: { 'gift': gift,
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#gift_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
    
 $('#dom_send').click(function(){

    var tel=$('#dom_tel').val();
    var type='dom';

    $.ajax({ 
            type: "POST",
            url: "/forms.php",
            data: { 
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#dom_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
 
 $('#cons_send').click(function(){

    var tel=$('#cons_tel').val();
    var type='cons';

    $.ajax({ 
            type: "POST",
            url: "/forms.php",
            data: { 
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#cons_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
 
    
 $('#time_send').click(function(){

    var tel=$('#time_tel').val();
    var type='time';

    $.ajax({ 
            type: "POST",
            url: "/forms.php",
            data: { 
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#cons_tel').val('');
                     
                     $('.modal-overlay').toggleClass("closed");
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })
    
 $('#pozdr_send').click(function(){

    var tel=$('#pozdr_tel').val();
    var type='pozdr';

    $.ajax({ 
            type: "POST",
            url: "/forms.php",
            data: { 
                    'tel': tel,
                    'f' : type
                  },
            success: function(data){ 
                 if (data=='ok')
                 {
                      SendComagic('',tel,type,'');
ym(55136671,'reachGoal','lead');
  gtag('event', 'conversion', {'send_to': 'AW-711350208/iDSpCPG10vcCEMCvmdMC'});
                     $('#pozdr_tel').val('');
                      $('.f_pozdr').toggleClass("closed");
                   
                     $('.f_spasibo').toggleClass("closed");
                 }
                 else
                 {
                     alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                 };

             } 
     });

    })

$('.pravo').click(function(){
    window.open('/info.pdf', '_blank');
})



if (!$.cookie('was')){

setTimeout(function(){
    
        $('.f_pozdr').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

$.cookie('was', true, {  
			expires: 1,  
			path: '/'  
		  });   

},30000);

}


})

function SendComagic(name,tel,type,txt){
    try {
        if (txt==''){		
            Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: type }]);
        }else{
            Comagic.push(['addOfflineRequest', {name: name,  phone: tel, email: txt , message: type }]);
        }

    } catch(err){
        return false;
    }	
}




$(function(){
	$('.menu li.mli a').click(function(event){
		const winWidth = window.innerWidth;
		if (winWidth<992){
			//console.log('ok');
			event.preventDefault();
			$(this).parent().css('background','#ccc');
			setTimeout(() => window.location.replace(event.target.href), 500)
		}
	})	
})


function alignCenter(elem) {
    elem.css({
    left: ($(window).width() - elem.width()) / 2  + 'px',
    top: 50 + 'px'   
    })
}

var a=0;

$(window).scroll(function() {
	if (($(this).scrollTop() > 500) && ($(this).scrollTop() < $(document).height()-1000) ) {
	//if (($(this).scrollTop() > 500)) {
		if (a==0){
		$('.scroll').animate({right:15});
		a=1;
		}
	} else {
		if (a==1)
		{
			$('.scroll').animate({right:-200});
			a=0;
		}
	}
});