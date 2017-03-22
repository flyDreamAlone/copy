
		window.onload = function() {
			load()

		}

		function load() {
			var list = [
				15,
				54,
				68,
				45,
				67,
				31,
				04,
				785
			];
			var cparent = document.getElementById("container");
			for(var i = 0; i < list.length; i++) {
				var ccontent = document.createElement("a");
				ccontent.className = "item"
				ccontent.label = i;
				ccontent.id = i
				ccontent.setAttribute("data-clipboard-text",list[i]);
			
				cparent.appendChild(ccontent);
				var ctext = document.createElement("div");
				ctext.className = "address";
				ctext.innerHTML = list[i]

				ccontent.appendChild(ctext);
				var cimg = document.createElement("img");
				cimg.className = "img";
				cimg.src = "img/dianjixialaa.png";
				ccontent.appendChild(cimg);
				var tag = list[i];
				ccontent.onclick = function() {
					console.log("tiaomu:" + i)
//					new Clipboard('.content', {
//						text: function(trigger) {
//							console.log(trigger.getAttribute('aria-label'))
//							return list[i];
//						}
//					});
				};

			}
		}