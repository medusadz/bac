var menu = [
{
"url": "bacount.html",
"pht": "photo/clock.png"
},
{
"url": "zaman.html",
"pht": "photo/zaman.png"
},
{
"url": "tawarikh.html",
"pht": "photo/qst.png"
},
{
"url": "chakhday.html",
"pht": "photo/chakh.png"
},
{
"url": "chakhsiyat.html",
"pht": "photo/book.png"
}
] 
// header
    var out = "";
    var i;
    for(i = 0; i < 5; i++) {
		 out += '<li><a href="' + menu[i].url + '"><img src="'+ menu[i].pht + '" width="50px" onClick=""></li></a>';
    }
	var x= '<img src="photo/home.png" width="50px" style="position: absolute;top: 0;right: 0;border-left:#004838 solid 1px;" onClick="window.open(\'index.html\');">'+'<div id="menu"><ul>'+out+'</ul></div>'+'<div style="margin-top: -16px;"><div class="border" style="background-color: #1abc9c;"></div><div class="border" style="background-color: #3498db;"></div><div class="border" style="background-color: #9b59b6;"></div><div class="border" style="background-color: #34495e;"></div><div class="border" style="background-color: #e74c3c;"></div><div class="border" style="background-color: #95a5a6;"></div></div>';
	document.getElementById("header").innerHTML = x;
