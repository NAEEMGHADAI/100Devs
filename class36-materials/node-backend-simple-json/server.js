const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

function fsReadFileRes(contentType, fileName, res) {
	fs.readFile(fileName, function (err, data) {
		res.writeHead(200, { "Content-Type": contentType });
		res.write(data);
		res.end();
	});
}

const server = http.createServer((req, res) => {
	let reqUrl = url.parse(req.url);
	const page = reqUrl.pathname;
	const params = querystring.parse(reqUrl.query);
	console.log(page);
	if (page == "/") {
		fsReadFileRes("text/html", "index.html", res);
	} else if (page == "/otherpage") {
		fsReadFileRes("text/html", "otherpage.html", res);
	} else if (page == "/otherotherpage") {
		fsReadFileRes("text/html", "otherotherpage.html", res);
	} else if (page == "/api") {
		if ("student" in params) {
			if (params["student"] == "leon") {
				res.writeHead(200, { "Content-Type": "application/json" });
				const objToJson = {
					name: "leon",
					status: "Boss Man",
					currentOccupation: "Baller",
				};
				res.end(JSON.stringify(objToJson));
			} //student = leon
			else if (params["student"] != "leon") {
				res.writeHead(200, { "Content-Type": "application/json" });
				const objToJson = {
					name: "unknown",
					status: "unknown",
					currentOccupation: "unknown",
				};
				res.end(JSON.stringify(objToJson));
			} //student != leon
		} //student if
	} //else if
	else if (page == "/css/style.css") {
		fsReadFileRes("text/css", "css/style.css", res);
	} else if (page == "/js/main.js") {
		fsReadFileRes("text/javascript", "js/main.js", res);
	} else {
		figlet("404!!", function (err, data) {
			if (err) {
				console.log("Something went wrong...");
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(8000);
