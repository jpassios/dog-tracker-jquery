function svbttn() {

    var dietaryrestObj = {};
    dietaryrestObj.dog_id = params[0].split("=")[1];
    dietaryrestObj.food_name = $("#drname")[0].value;
    dietaryrestObj.comment = $("#drcomments")[0].value;

    $.post(
        "http://dog-tracker-api.herokuapp.com/dietary_restrictions",
        {dietary_restriction: dietaryrestObj},
        function(){
            document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
        });
}
