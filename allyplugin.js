// ==UserScript==
// @name			Show ally data
// @description		Shows allied players data
// @author			aeinola & oho
// @include			http://planets.nu/home
// @include			http://planets.nu/games/*
// @include			http://*.planets.nu/*
// @include			http://planets.nu/*
// @version			0.1
// ==/UserScript==

function wrapper () {
	if (vgap.version < 3) {
		console.log("Show ally data needs Nu version 3 or above");
		return;
    }
	var plugin = {
        loaddashboard: function() {
            var menu = document.getElementById("DashboardMenu").childNodes[2];
            $("<li style=\"color:#FF0000\">Load ally data... »</li>").tclick(function () {
                // Load ally data
            }).appendTo(menu);
        },
        showsummary: function() {
            var summary_list = document.getElementById("TurnSummary").childNodes[0];
            var last_object = summary_list.children[summary_list.lenght];

            var node = document.createElement("li");
            node.setAttribute("style", "color:#00FF00");
            node.innerHTML = "<div class=\"iconholder\"><img src=\"http://plainicon.com/dboard/userprod/2805_fce53/prod_thumb/plainicon.com-52264-128px-ed1.png\"/></div>" + 
                " Load ally data";
            node.onclick = function() {
                // Load ally data
            };
            summary_list.insertBefore(node, last_object);
        },
	};
	vgap.registerPlugin(plugin, "PluginTest");
}

var script = document.createElement("script");
script.type = "application/javascript";
script.textContent = "(" + wrapper + ")();";

document.body.appendChild(script);