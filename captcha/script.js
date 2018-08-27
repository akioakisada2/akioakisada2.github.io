function inject() {
	var img = document.createElement(img);
	img.src="img/fakecaptcha.PNG";
	img.class="captcha"
	document.body.appendChild(img);
}

inject();