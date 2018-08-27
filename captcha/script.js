function inject() {
	var img = document.createElement(img);
	img.src="img/fakecaptcha.png";
	img.class="captcha"
	document.body.appendChild(img);
}

inject();