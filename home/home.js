value = ['', '', '', '', '', '', '', ''];
ret = '';

function Check2A() {
	value[2] = 'A';
	document.getElementById("2").innerHTML = "A";
}

function Check2B() {
	value[2] = 'B';
	document.getElementById("2").innerHTML = "B";
}

function Check3A() {
	value[3] = 'A';
	document.getElementById("3").innerHTML = "A";
}

function Check3B() {
	value[3] = 'B';
	document.getElementById("3").innerHTML = "B";
}

function Check4A() {
	value[4] = 'A';
	document.getElementById("4").innerHTML = "A";
}

function Check4B() {
	value[4] = 'B';
	document.getElementById("4").innerHTML = "B";
}

function Check5A() {
	value[5] = 'A';
	document.getElementById("5").innerHTML = "A";
}

function Check5B() {
	value[5] = 'B';
	document.getElementById("5").innerHTML = "B";
}

function Check6A() {
	value[6] = 'A';
	document.getElementById("6").innerHTML = "A";
}

function Check6B() {
	value[6] = 'B';
	document.getElementById("6").innerHTML = "B";
}

function aid_check() {
	for (let a = 2; a <= 6; ++a) {
		if (value[a] == '') {
			return false;
		}
	}
	return true;
}

function Check() {
	jd = "";
	if (!aid_check()) {
		alert("请答完后提交");
		return;
	}
	if (value[6] == 'A') {
		ret = 'A';
	} else {
		ret = 'B';
	}
	for (let x = 2; x < 6; ++x) {
		if (value[x] == 'A') {
			ret += '1';
		} else {
			ret += '0';
		}
	}
	document.getElementById("8").innerHTML = ret;
	document.getElementById("9").innerHTML = "A代表男生，B代表女生，后面的四位二进制代表2、3、4、5题目的选项，1是选A，2是选B";
	var result ="<?php php_func(); ?>"
	document.getElementById("8").innerHTML.write(result);
}
