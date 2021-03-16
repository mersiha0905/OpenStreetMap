var express = require('express');
var bodyParser = require("body-parser");

var app = express();

const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var users = [{username : "belmin", password : "123"},
		{username : "emira", password : "321"}, 
		{username : "mersiha", password : "111"},
		{username : "ezudina", password : "222"}
		];

		

var objects_location = [{name : "Begova dzamija", latitude : 43.859214, longitude : 18.429283, description : "Gazi Husrev-begova džamija, također poznata i kao Begova džamija je izgrađena 1530. godine u Sarajevu i smatra se jednom od najvažnijih džamija u Bosni i Hercegovini i na Balkanu."},
					{name : "Vjecna vatra", latitude : 43.858830, longitude : 18.421862, description : "Vječna vatra je spomenik vojnim i civilnim žrtvama Drugog svjetskog rata u Sarajevu. Spomenik je napravljen 6. aprila 1946. godine na prvu godišnjicu oslobođenja Sarajeva od njemačke okupacije."},
					{name : "Narodno pozoriste", latitude : 43.857194, longitude : 18.420750, description : "Narodno pozorište Sarajevo najveća je pozorišna kuća u Bosni i Hercegovini i jedna od najznačajnijih u Jugoistočnoj Evropi. Otvoreno je 17. novembra 1921. godine."},
					{name : "Sebilj", latitude : 43.859715, longitude : 18.431223, description : "Sebilj na Baščaršiji je jedini objekt te vrste u Sarajevu, izgrađen 1891. godine, vjerojatno po projektu Josipa Vancaša."},
					{name : "Zuta tabija", latitude : 43.861449, longitude : 18.437681, description : "Žuta tabija, nalazi se na litici Jekovac, zbog čega je poznata i kao Jekovačka tabija. Jedna je od utvrda koje su činile odbrambeni bedem oko starog grada Vratnika.Pruža jedinstven doživljaj u panorami, pogledu i zvuku. Sagrađena je 1809. godine."},
					{name : "Bijela tabija", latitude : 43.859521, longitude : 18.444721, description : "Bijela tabija je tvrđava na cesti Dariva - Mošćanica, na istočnoj visinskoj koti sarajevske kotline. Podignuta je na mjestu srednjovjekovne tvrđave, sagrađene oko 1550. godine. Gornji dio Tabije u krupnim kamenim blokovima nastao je u austro-ugarskom periodu."},
					{name : "Inat kuca", latitude : 43.858522, longitude : 18.434331, description : "Inat kuća je objekat u Sarajevu nedaleko od Baščaršije koji je prvobitno izgrađen na mjestu gdje je trebala biti izgrađena Gradska vijećnica a trenutno stoji na drugoj strani rijeke Miljacke.Danas se inat kuća  koristi kao restoran sa tradicionalnom bosanskom kuhinjom."},
					{name : "Zemaljski muzej", latitude : 43.855079, longitude : 18.402622, description : "Zemaljski muzej Bosne i Hercegovine u Sarajevu, osnovan 1888. godine, za vrijeme Austro-Ugarske vladavine, i najstarija je moderna kulturna i naučna ustanova u Bosni i Hercegovini zapadnog tipa."},
					{name : "Stadion Kosevo", latitude : 43.873842, longitude : 18.408808, description : "Stadion „Asim Ferhatović Hase” višenamjenski je stadion u Sarajevu, u Bosni i Hercegovini. Nalazi se u četvrti Koševo po kojoj je dobio ime tijekom izgradnje, pa je i danas poznat kao stadion Koševo i Olimpijski stadion Koševo."},
					{name : "Vrelo Bosne", latitude : 43.818915, longitude : 18.269512, description : "Vrelo Bosne je izvor u središnjoj Bosni i Hercegovini. Kako samo ime kaže, na tom mjestu izvire rijeka Bosna, značajan vodotok za mikroregije kroz koje teče, a i za cijelu BiH. Vrelo Bosne je među najpoznatijim prirodnim atrakcijama Bosne i Hercegovine."},
					{name : "Kampus", latitude : 43.856127, longitude : 18.395424, description : "Sveučilište u Sarajevu je najveće i najstarije sveučilište u Bosni i Hercegovini sa sjedištem u Sarajevu osnovano 1949."},
					{name : "Vijecnica", latitude : 43.858934, longitude : 18.433465, description : "Gradska vijećnica se nalazi u Sarajevu nedaleko od Baščaršije na Mustaj-pašinom mejdanu i predstavlja najljepši i najreprezentativniji objekt iz austro-ugarskog perioda građen u pseudomaurskom stilu.Godine 2006. ova građevina proglašena je nacionalnim spomenikom Bosne i Hercegovine."}
					];



app.post('/authentication', function (req, res,next) {

	var user = req.body.username;
  	var pass = req.body.password;

  	var found = false;
  	for(var i = 0; i < users.length; i++){
  		if(users[i].username == user && users[i].password == pass){
  			found = true;
  			break;
  		}
  	}

  	if(found){
  		res.json({"success" : true})
  	}else{
  		res.json({"success" : false})
  	}


});


app.get('/objects-location', function (req, res,next) {

	res.send(objects_location);

});



app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

