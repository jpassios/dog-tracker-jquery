function addDog() {

    var dogObj = {};
    dogObj.name = $("#name")[0].value;
    dogObj.breed = $("#breed")[0].value;
    dogObj.weight = $("#weight")[0].value;
    dogObj.age = $("#age")[0].value;

    if ($("#male")[0].checked) {
        dogObj.sex = $("#male")[0].value;
    } else {
        dogObj.sex = $("#female")[0].value;
    }

    if ($("#fixed")[0].checked) {
        dogObj.is_spayed_or_neutered = true;
    } else {
        dogObj.is_spayed_or_neutered = false;
    }

    $.post(
        "http://dog-tracker-api.herokuapp.com/dogs",
        {dog: dogObj},
        function(){
            document.location.href = 'dog-table.html';
        });
}



