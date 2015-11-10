function addDog() {

    var dogObj = {};
    dogObj.name = document.getElementById("name").value;
    dogObj.breed = document.getElementById("breed").value;
    dogObj.weight = document.getElementById("weight").value;
    dogObj.age = document.getElementById("age").value;

    if (document.getElementById("male").checked) {
        dogObj.sex = document.getElementById("male").value;
    } else {
        dogObj.sex = document.getElementById("female").value;
    }

    if (document.getElementById("fixed").checked) {
        dogObj.is_spayed_or_neutered = true;
    } else {
        dogObj.is_spayed_or_neutered = false;
    }

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = 'addDog.html';
        }
    };

    xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/dogs',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');

    xmlRequests.send(JSON.stringify({dog: dogObj}));

}
