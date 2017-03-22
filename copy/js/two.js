window.onload = function() {

	var aaa = getParameter("?")

}

function getParameter(param) {
	var query = window.location.href;
	console.log(query)
	var iLen = param.length;
	var iStart = query.indexOf(param);
	if(iStart == -1)
		return "";
	iStart += iLen;
	var iEnd = query.indexOf("&", iStart);
	if(iEnd == -1)
		return query.substring(iStart);
	return query.substring(iStart, iEnd);
}

function load() {
	var list = 
	[12, 
	32, 
	54, 
	68, 
	45, 
	67, 
	31, 
	04, 
	785];
	var cparent = document.getElementById("container");
	for(var i = 0; i < list.length; i++) {
		var ccontent = document.createElement("a");
		ccontent.className = "item"
		ccontent.href = "two.html?" + i
		cparent.appendChild(ccontent);
		var ctext = document.createElement("div");
		ctext.className = "address";
		ctext.innerHTML = list[i]
		ccontent.appendChild(ctext);
		var cimg = document.createElement("img");
		cimg.className = "img";
		cimg.src = "img/dianjixialaa.png";
		ccontent.appendChild(cimg);

	}

}