function submitAppt() {

    var appt = {};
    appt.appointment = {};

    appt.appointment.dog_id = params[0].split('=')[1];
    appt.appointment.appointment_date = document.getElementById("appointment_date").value;
    appt.appointment.location = document.getElementById("location").value;
    appt.appointment.vet_name = document.getElementById("vet_name").value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
        }
    };

    xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/appointments',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');
    xmlRequests.send(JSON.stringify(appt));
}

