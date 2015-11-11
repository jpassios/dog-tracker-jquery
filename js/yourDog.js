var myId = document.location.search.split('=')[1];
var dogObj = new XMLHttpRequest();
dogObj.onreadystatechange = function() {
    if (dogObj.readyState == 4 && dogObj.status == 200) {
        var dog = JSON.parse(dogObj.responseText);
        document.getElementById("name").innerHTML = dog.name;
        document.getElementById("breed").innerHTML = dog.breed;
        document.getElementById("weight").innerHTML = dog.weight;
        document.getElementById("age").innerHTML = dog.age;
        document.getElementById("sex").innerHTML = dog.sex;

        if (dog.is_spayed_or_neutered) {
            document.getElementById("fixed").innerHTML = 'Yes';
        } else {
            document.getElementById("fixed").innerHTML = 'No';
        }

    }
};

function addAppmnt() {
    console.log ( '#Appointment Button was clicked' );
}
function addMeds() {
    console.log ( '#Medication Button was clicked' );
}
function addVacs() {
    console.log ( '#Vaccination Button was clicked' );
}
function addDiet() {
    console.log ( '#Diet Button was clicked' );
}

dogObj.open('GET', 'http://dog-tracker-api.herokuapp.com/dogs/' + myId, true);
dogObj.send();
