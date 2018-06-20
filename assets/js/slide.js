$(function(){

	loadImage();

});

$.fn.extend({

	animateCss: function(animationName, callback) {

		var animationEnd = (function(el) {

			var animations = {

				animation: 'animationend',

				OAnimation: 'oAnimationEnd',

				MozAnimation: 'mozAnimationEnd',

				WebkitAnimation: 'webkitAnimationEnd',

			};


			for (var t in animations) {

				if (el.style[t] !== undefined) {

					return animations[t];

				}

			}

		})(document.createElement('div'));


		this.addClass('animated ' + animationName).one(animationEnd, function() {

			$(this).removeClass('animated ' + animationName);


			if (typeof callback === 'function') callback();

		});


		return this;

	},

});

function loadImage(){
	$.getJSON('assets/json/mySlideShow.json',function(data){
		var time = data.slideshow.delayBetweenSlides;
		data.slideshow.slides.forEach(slide=> {
			setTimeout(function(){
				$('.slide').animateCss(slide.transition);
				$('.img').attr('src', slide.image.URL);
				$('.txt').text(slide.text.content);
				$('.txt').css(slide.text.css);
				$('.txt').animateCss(slide.text.animation);

			}, time);
			time+= time;
		});
		var sound = new Howl({
			src: [data.slideshow.sound + '.webm', data.slideshow.sound + ' .mp3 '],
			html5: true,
			loop: true
		});
		sound.play();
		$('#fullscreen').click(function() {
			$('#slideshow').fullscreen();
			$('.img').width(screen.width);
			$('.img').height(screen.height);
		});

		$('#play').click(function(){
			sound.play();
		});

		$('#pause').click(function(){
			sound.pause();
		});

		$('#mute').click(function(){
			if(sound.mute() == true){
				sound.mute(false);
			}
			else{
				sound.mute(true);
			}
		});

		$('#slideshow').mouseout(function(){
			$('#btn-group').hide();
		});

		$('#slideshow').mouseover(function(){
			$('#btn-group').show();
		});

		$('#slideshow').click(function(){
			$.fullscreen.exit();
			$('.img').width(1280);
			$('.img').height(720);
		});

		$('#change').click(function(){
			location.href='forms.php';
		});
	});
}

