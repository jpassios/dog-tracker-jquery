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
