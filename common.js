var _titleSllipsis=null;
var _loadFbSDk=null;
jQuery(document).ready(function(){
	//--Menu
	try{
		jQuery('#mega-menu-1').dcMegaMenu({
			speed: 'fast',
			effect: 'slide'
		});
	}catch(err){
		console.error(err.message);
	}
	//Thanh cuộn top phim tuần+tháng
	try{
		jQuery('#list-top-movie-week, #list-top-film-week').slimScroll({
			height: '477px',
			railVisible: true,
			alwaysVisible: true
		});
	}catch(err){
		console.error(err.message);
	}

	// Cuộn qua lại các box phim mới của từng mục
	try{
		jQuery('.last-film-box').each(function(){
			var currentId=jQuery(this).attr('id');
			var categoryId=jQuery(this).attr('data-categoryid');
			if(typeof currentId=='string' && typeof categoryId=='string')
			{
				jQuery('#'+currentId).carouFredSel({
					auto: false,
					prev: '#prev'+categoryId,
					next: '#next'+categoryId
				});
			}
		});
		//--Cuộn lại top phim mới ở home
		if(typeof topSliderInit=="undefined" && (typeof FX_DEVICE_SMALL=="undefined" || !FX_DEVICE_SMALL || typeof FX_DEVICE_TOUTCH=="undefined" || !FX_DEVICE_TOUTCH))
		{
			jQuery('#movie-carousel-top').carouFredSel({
				auto: false,
				prev: '#prevTop',
				next: '#nextTop',
			});
			window.topSliderInit=true;
			eval('console.log("topSliderInit")');
		}
	}catch(err){
		console.error(err.message);
	}
	
	//--Tab phim mới cập nhật
	try{
		jQuery("#tabs-movie").tabs();
	}catch(err){
		console.error(err.message);
	}
	
	
	//hiện ... ở tên phim
	_titleSllipsis=function(){
		//--Nếu trình duyệt đời mới hỗ trợ HTML5 và CSS3 thì khỏi
		if(typeof window.localStorage!='undefined')
			return true;
		jQuery(".movie-title-1, .movie-title-2, .news-title-1 a, .name-en a").ellipsis();
	}
	jQuery(window).load(function(){
		setTimeout("_titleSllipsis()",1000);
	});
	
	//Facebook SDK
	jQuery('body').append('<div id="fb-root"></div>');
	_loadFbSDk=function(){
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&version=v2.3";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
	jQuery(window).load(function(){
		setTimeout("_loadFbSDk()",100);
	});
	
});