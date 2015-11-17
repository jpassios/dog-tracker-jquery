function svbttn() {

    var dietaryrestObj = {};
    dietaryrestObj.dog_id = params[0].split("=")[1];
    dietaryrestObj.food_name = document.getElementById("drname").value;
    dietaryrestObj.comment = document.getElementById("drcomments").value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = 'yourDog.html?id=' + params[0].split("=")[1];
        }
    };

    xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/dietary_restrictions',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');
    xmlRequests.send(JSON.stringify({dietary_restriction: dietaryrestObj}));
}
