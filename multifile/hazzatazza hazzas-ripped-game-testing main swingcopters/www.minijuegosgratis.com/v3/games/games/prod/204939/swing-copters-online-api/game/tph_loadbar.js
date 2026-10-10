function RenderLoadingBar_Standard(_graphics, _width, _height, _total, _current, _loadingscreen) {
	var canvasobj = document.getElementById("loading_screen");
	var room_width  = _width;
	var room_height = _height;
	var ratio = (room_height/room_width);
	if (typeof(window.innerWidth)=='number') {
		browser_width = window.innerWidth;
		browser_height = window.innerHeight;
	} else if (document.documentElement&&document.documentElement.clientWidth) {
		browser_width = document.documentElement.clientWidth;
		browser_height = document.documentElement.clientHeight;
	} else if (document.body&&document.body.clientWidth) {
		browser_width = document.body.clientWidth;
		browser_height = document.body.clientHeight;
	}
	var multi = (browser_height / room_height);
	var new_width = (room_width * multi);
	var new_height = browser_height;
	if (new_width > browser_width) {
		multi = (browser_width / room_width);
		new_width = (room_width * multi);
		new_height = (room_height * multi);
	}
	canvasobj.width = new_width;
	canvasobj.height = new_height;
	canvasobj.style.left = browser_width/2-new_width/2+"px";
	canvasobj.style.top = browser_height/2-new_height/2+"px";
	if (_loadingscreen) {
		_graphics.drawImage(_loadingscreen, 0, 0, new_width, new_height);
		if (_loadingscreen.style.display == "block") {
			_loadingscreen.style.display = "none";
		}
	}
	var perc = (bar_img_w/_total)*_current;
	var bar_x = bar_img_x*multi;
	var bar_y = bar_img_y*multi;
	var bar_w = perc*multi;
	var bar_h = bar_img_h*multi;
	var yy = 116 * multi;
	var ww = 416 * multi;
	if (_current != 0) {
		if (loadbarobj) {
			_graphics.drawImage(loadbarobj, 0, 0, perc, bar_img_h, bar_x, bar_y, bar_w, bar_h);
		}
	}
}

function customurl(url)
{
var win=window.open(url,"_blank");
win.focus();
}
