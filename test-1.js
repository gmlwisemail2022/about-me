/*
var http = new XMLHttpRequest (); 

http.open("GET","data/file.json")

http.onreadystatechange = function {
    if(http.readyState != XMLHttpRequest.DONE){
        return;
    } else if (http.status = 200) {
        console.log (http.responseText);
    } else {
        console.log('error occured' + http.status);
    }
}

// on ready state change should be before http.send()
http.send();
*/

var http = new XMLHttpRequest();

http.open("GET", "https://api.publicapis.org/entries")

http.onreadystatechange = function () {
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {   /** can be http.status >= 200 && http.status < 300 */
        let parsedData = JSON.parse(http.responseText);
        console.log (parsedData);
         console.log (parsedData.entries[0].Category); 
    } else {
        console.log("error occur")
    }
}

http.send()



/* try this in the future 
const randomData = () => {
    const getData = fetch(
        `https.//restcountries.com/v3.1/name/japan?fullText=true`
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
};
randomData();
*/

/* try this in the future 
const randomData = () => {
    const getData = fetch(
        `https.//restcountries.com/v3.1/name/japan?fullText=true`
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
};
randomData();


*/






