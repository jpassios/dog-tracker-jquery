var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4){
        var dog = JSON.parse(xhr.responseText);

        var appointments = document.getElementById("appnt");

        for (var i = 0; i < dog.appointments.length; i++ ) {
            var containerDiv = document.createElement("div");
            containerDiv.className = "appointment-container";
            appointments.appendChild(containerDiv);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Date: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = new Date(dog.appointments[i].appointment_date).toDateString();
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);


            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel2 = document.createElement("label");
            newLabel2.innerHTML = "Location: ";
            var newSpan2 = document.createElement("span");
            newSpan2.innerHTML = dog.appointments[i].location;
            newDiv.appendChild(newLabel2);
            newDiv.appendChild(newSpan2);


            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel3 = document.createElement("label");
            newLabel3.innerHTML = "Vet Name: ";
            var newSpan3 = document.createElement("span");
            newSpan3.innerHTML = dog.appointments[i].vet_name;
            newDiv.appendChild(newLabel3);
            newDiv.appendChild(newSpan3);
        }
    }
};

var myId = document.location.search.split('=')[1];
xhr.open('GET','http://dog-tracker-api.herokuapp.com/dogs/' + myId, true);
xhr.send();
