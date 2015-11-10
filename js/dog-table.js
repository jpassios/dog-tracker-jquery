/**
 * Created by timmalesky on 11/9/15.
 */

var xmlRequest = new XMLHttpRequest();
xmlRequest.onreadystatechange = function(){
    if (xmlRequest.readyState===4 && xmlRequest.status===200) {
        var dogs = JSON.parse(xmlRequest.responseText);
        console.log(dogs.length);
        var pt = document.getElementById("petable");
        for (var x = 0; x < dogs.length; x++) {

             var row = pt.insertRow();
             var cell1 = row.insertCell();
             var cell2 = row.insertCell();
             var cell3 = row.insertCell();
             var cell4 = row.insertCell();
             var cell5 = row.insertCell();
             var cell6 = row.insertCell();

            cell1.innerHTML= dogs[x].name;
            cell2.innerHTML= dogs[x].breed;
            cell3.innerHTML= dogs[x].weight;
            cell4.innerHTML= dogs[x].age;
            cell5.innerHTML= dogs[x].sex;
            if(dogs[x].is_spayed_or_neutered) {
                cell6.innerHTML= "Yes";
            } else {
                cell6.innerHTML= "No";
            }

      
        }
    }

};

xmlRequest.open("GET","http://dog-tracker-api.herokuapp.com/dogs",true);
xmlRequest.send();

