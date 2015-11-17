
var params = decodeURI(document.location.search);
    params = params.split('&');
        document.getElementById("name").innerHTML = params[1].split("=")[1];
        document.getElementById("breed").innerHTML = params[2].split("=")[1];
        document.getElementById("weight").innerHTML = params[4].split("=")[1];
        document.getElementById("age").innerHTML = params[5].split("=")[1];
        document.getElementById("sex").innerHTML = params[3].split("=")[1];

if (params[6].split("=")[1]) {
        document.getElementById("fixed").innerHTML = 'Yes';
}
else
{
        document.getElementById("fixed").innerHTML = 'No';
}

function bkbttn() {
        document.location.href = 'yourDog.html?id='+ params[0].split("=")[1];
}

function svbttn() {

    var vaccinationObj = {};
    vaccinationObj.dog_id = params[0].split("=")[1];
    vaccinationObj.name = document.getElementById("vname").value;
    vaccinationObj.last = document.getElementById("vlast").value;
    vaccinationObj.next = document.getElementById("vnext").value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
           document.location.href = 'yourDog.html?id=' + params[0].split("=")[1];
        }
    };

    xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/vaccinations',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');
    xmlRequests.send(JSON.stringify({vaccination: vaccinationObj}));
}



