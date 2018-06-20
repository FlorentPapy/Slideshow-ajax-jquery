$(function(){

	getJSON();

});

function getJSON(){

	$.getJSON('assets/json/mySlideShow.json',function(data){

		console.log(data);
		$('#inputTime').attr('value', data.slideshow.delayBetweenSlides)
		$('#urlSong').attr('value', data.slideshow.sound);

		for(var i = 0; i < data.slideshow.slides.length; i++){

			prepareForms(i, data);

		};

		$('#submitGen').click(function(){
			changeSettings(data);
			console.log(data);

			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'save_json.php');
			xhr.send('data=' + JSON.stringify(data));
			console.log(JSON.stringify(data))
			xhr.addEventListener('readystatechange', function() {
			    if (xhr.readyState === 4 && xhr.status === 200) {
			        alert('Données envoyées et sauvegardées');
			        console.log(xhr.status);
			    }
			});

		});

	});

};

function changeSettings(data){

		data.slideshow.delayBetweenSlides = $('#inputTime').val();
		data.slideshow.animation = $('#selectDefaultAnimation').val();
		data.slideshow.sound = $('#urlSong').val();

		for (var i = 0; i < data.slideshow.slides.length; i++) {
			data.slideshow.slides[i].delay = $('#inputTimeEachSlide' + i + '').val();
			data.slideshow.slides[i].transition = $('#selecttAnimation' + i + '').val();
			data.slideshow.slides[i].image.URL = $('#urlImage' + i + '').val();
			data.slideshow.slides[i].image.animation.type = $('#selecttAnimationImg' + i + '').val();
			data.slideshow.slides[i].image.animation.from = $('#animationImgFrom' + i + '').val();
			data.slideshow.slides[i].image.animation.to = $('#animationImgTo' + i + '').val();
			data.slideshow.slides[i].text.content = $('#content' + i + '').val(); 
			data.slideshow.slides[i].text.animation.type = $('#selecttAnimationTxt' + i + '').val();
			data.slideshow.slides[i].text.animation.from = $('#animationTxtFrom' + i + '').val();
			data.slideshow.slides[i].text.animation.to = $('#animationTxtTo' + i + '').val();
		};

};


function prepareForms(i, data){
	var templateForm = 

	/*'<h3>' + data.slideshow.slides[i].name + '</h3>' +*/
	'<button type="button" class="btn btn-primary padding"  data-toggle="modal" data-target="#modal'+i+'">' +
	' ' + data.slideshow.slides[i].name +
	'</button>' +
	'<!-- Modal -->' +
	'<div class="modal fade" id="modal'+i+'" role="dialog">' +
	'<div class="modal-dialog" role="document">' +
	'<div class="modal-content">' +
	'<div class="modal-header">' +
	'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	'<span aria-hidden="true">&times;</span>' +
	'</button>' +
	'<h1> ' + data.slideshow.slides[i].name + '</h1>' +
	'</div>' +
	'<div class="modal-body">' +  
	'<div class="form-group form-row">' +
	'<label for="inputTimeEachSlide">Temps en millisecondes avant le prochain slide</label>' +
	'<input type="number" class="form-control" id="inputTimeEachSlide' + i + '" placeholder="Value" value=' + data.slideshow.slides[i].delay + ' >' +
	'</div>' +
	'<div class="form-group form-row">' +
	'<label for="id="selecttAnimation' + i + '">Animation pour le prochain slide</label>' +
	'<select class="form-control" id="selecttAnimation' + i + '" >' +
	'<option value ="' + data.slideshow.slides[i].transition + '" > ' + data.slideshow.slides[i].transition + ' </option> ' +
	
	'<optgroup label="Attention Seekers">' +
	'<option value="bounce">bounce</option>' +
	'<option value="flash">flash</option>' +
	'<option value="pulse">pulse</option>' +
	'<option value="rubberBand">rubberBand</option>' +
	'<option value="shake">shake</option>' +
	'<option value="swing">swing</option>' +
	'<option value="tada">tada</option>' +
	'<option value="wobble">wobble</option>' +
	'<option value="jello">jello</option>' +
	'</optgroup>' +

	'<optgroup label="Bouncing Entrances">' +
	'<option value="bounceIn">bounceIn</option>' +
	'<option value="bounceInDown">bounceInDown</option>' +
	'<option value="bounceInLeft">bounceInLeft</option>' +
	'<option value="bounceInRight">bounceInRight</option>' +
	'<option value="bounceInUp">bounceInUp</option>' +
	'</optgroup>' +

	'<optgroup label="Bouncing Exits">' +
	'<option value="bounceOut">bounceOut</option>' +
	'<option value="bounceOutDown">bounceOutDown</option>' +
	'<option value="bounceOutLeft">bounceOutLeft</option>' +
	'<option value="bounceOutRight">bounceOutRight</option>' +
	'<option value="bounceOutUp">bounceOutUp</option>' +
	'</optgroup>' +

	'<optgroup label="Fading Entrances">' +
	'<option value="fadeIn">fadeIn</option>' +
	'<option value="fadeInDown">fadeInDown</option>' +
	'<option value="fadeInDownBig">fadeInDownBig</option>' + 
	'<option value="fadeInLeft">fadeInLeft</option>' +
	'<option value="fadeInLeftBig">fadeInLeftBig</option>' +
	'<option value="fadeInRight">fadeInRight</option>' +
	'<option value="fadeInRightBig">fadeInRightBig</option>' +
	'<option value="fadeInUp">fadeInUp</option>' +
	'<option value="fadeInUpBig">fadeInUpBig</option>' + 
	'</optgroup>' +

	'<optgroup label="Fading Exits">' +
	'<option value="fadeOut">fadeOut</option>' +
	'<option value="fadeOutDown">fadeOutDown</option>' +
	'<option value="fadeOutDownBig">fadeOutDownBig</option>' +
	'<option value="fadeOutLeft">fadeOutLeft</option>' +
	'<option value="fadeOutLeftBig">fadeOutLeftBig</option>' +
	'<option value="fadeOutRight">fadeOutRight</option>' +
	'<option value="fadeOutRightBig">fadeOutRightBig</option>' +
	'<option value="fadeOutUp">fadeOutUp</option>' +
	'<option value="fadeOutUpBig">fadeOutUpBig</option>' +
	'</optgroup>' +

	'<optgroup label="Flippers">' +
	'<option value="flip">flip</option>' +
	'<option value="flipInX">flipInX</option>' +
	'<option value="flipInY">flipInY</option>' +
	'<option value="flipOutX">flipOutX</option>' +
	'<option value="flipOutY">flipOutY</option>' +
	'</optgroup>' +

	'<optgroup label="Lightspeed">' +
	'<option value="lightSpeedIn">lightSpeedIn</option>' +
	'<option value="lightSpeedOut">lightSpeedOut</option>' +
	'</optgroup>' +

	'<optgroup label="Rotating Entrances">' +
	'<option value="rotateIn">rotateIn</option>' +
	'<option value="rotateInDownLeft">rotateInDownLeft</option>' +
	'<option value="rotateInDownRight">rotateInDownRight</option>' +
	'<option value="rotateInUpLeft">rotateInUpLeft</option>' +
	'<option value="rotateInUpRight">rotateInUpRight</option>' +
	'</optgroup>' +

	'<optgroup label="Rotating Exits">' +
	'<option value="rotateOut">rotateOut</option>' +
	'<option value="rotateOutDownLeft">rotateOutDownLeft</option>' +
	'<option value="rotateOutDownRight">rotateOutDownRight</option>' +
	'<option value="rotateOutUpLeft">rotateOutUpLeft</option>' +
	'<option value="rotateOutUpRight">rotateOutUpRight</option>' +
	'</optgroup>' +

	'<optgroup label="Sliding Entrances">' +
	'<option value="slideInUp">slideInUp</option>' +
	'<option value="slideInDown">slideInDown</option>' +
	'<option value="slideInLeft">slideInLeft</option>' +
	'<option value="slideInRight">slideInRight</option>' +
	'</optgroup>' +

	'<optgroup label="Sliding Exits">' +
	'<option value="slideOutUp">slideOutUp</option>' +
	'<option value="slideOutDown">slideOutDown</option>' +
	'<option value="slideOutLeft">slideOutLeft</option>' +
	'<option value="slideOutRight">slideOutRight</option>' + 
	'</optgroup>' +
	
	'<optgroup label="Zoom Entrances">' +
	'<option value="zoomIn">zoomIn</option>' +
	'<option value="zoomInDown">zoomInDown</option>' +
	'<option value="zoomInLeft">zoomInLeft</option>' +
	'<option value="zoomInRight">zoomInRight</option>' +
	'<option value="zoomInUp">zoomInUp</option>' +
	'</optgroup>' +
	
	'<optgroup label="Zoom Exits">' +
	'<option value="zoomOut">zoomOut</option>' +
	'<option value="zoomOutDown">zoomOutDown</option>' +
	'<option value="zoomOutLeft">zoomOutLeft</option>' +
	'<option value="zoomOutRight">zoomOutRight</option>' +
	'<option value="zoomOutUp">zoomOutUp</option>' +
	'</optgroup>' +

	'<optgroup label="Specials">' +
	'<option value="hinge">hinge</option>' +
	'<option value="jackInTheBox">jackInTheBox</option>' +
	'<option value="rollIn">rollIn</option>' +
	'<option value="rollOut">rollOut</option>' +
	'</optgroup>' +
	
	'</select>' +
	'</div>' +
	'<legend>Image :</legend>'+
	'<div class="form-group form-row">'+
	'<label for="urlImage">Saisissez l\'url de votre image</label>'+
	'<input type="text" class="form-control" id="urlImage' + i + '" placeholder="urlImage" value=' + data.slideshow.slides[i].image.URL + '>' +
	'</div>' +
	'<div class="form-group form-row">' +
	'<label for="selecttAnimation">Animation pour l\'image</label>' +
	'<select class="form-control" id="selecttAnimationImg' + i + '" >' +
	/*'<option value=' + data.slideshow.slides[i].image.animation.type + '>' + data.slideshow.slides[i].image.animation.type + '</option>' +*/
	'<option value="zoom">zoom</option>' +
	'<option value="move">move</option>' +
	'</select>' +
	'</div>' +
	'<div class="form-group form-row">' +
	'<div class="col-md-6">'+
	'<label for="imgFrom">From</label>' +
	'<input type="number" class="form-control" id="animationImgFrom' + i + '" placeholder="Value" value=' + data.slideshow.slides[i].image.animation.from + '>' +
	'</div>' +
	'<div class="col-md-6">'+
	'<label for="imgTo">To</label>' +
	'<input type="number" class="form-control" id="animationImgTo' + i + '" placeholder="Value" value=' + data.slideshow.slides[i].image.animation.to + '>' +
	'</div>' +
	'</div>' +
	'<legend>Texte à afficher</legend>' +
	'<div class="form-group form-row">' +
	'<textarea id="content' + i + '" style="width: 100%;">' + data.slideshow.slides[i].text.content + '</textarea>' +
	'</div>' +
	'<div class="form-group form-row">' +
	'<label for="selecttAnimation">Animation pour le texte</label>' +
	'<select class="form-control" id="selecttAnimationTxt' + i + '">' +
	/*'<option value=' + data.slideshow.slides[i].text.animation.type + '>' + data.slideshow.slides[i].text.animation.type + '</option>' +*/
	'<option value="zoom">zoom</option>' +
	'<option value ="move">move</option>' +
	'</select>' +
	'</div>' +
	'<div class="form-group form-row">' +
	'<label for="txtFrom">From</label>' +
	'<input type="text" class="form-control" id="animationTxtFrom' + i + '" placeholder="Value" value = ' + data.slideshow.slides[i].text.animation.from + '>' +
	'<label for="txtTo">To</label>' +
	'<input type="text" class="form-control" id="animationTxtTo' + i + '" placeholder="Value" value = ' + data.slideshow.slides[i].text.animation.to + '>' +
	'<div>' +
	'<button id="submit'+i+'" class="btn btn-success center padding" data-dismiss="modal">Valider</button>' +
	/*'<button id="preview'+i+'" class="btn btn-success center padding">Aperçu</button>' +*/
	'</div>' +
	'</div>';
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>' ;  

	$('#zone').append(templateForm);
	$('#selecttAnimationTxt' + i + '').val(data.slideshow.slides[i].text.animation.type);
	$('#selecttAnimationImg' + i + '').val(data.slideshow.slides[i].image.animation.type);
	$('#selectDefaultAnimation').val(data.slideshow.animation);

};

