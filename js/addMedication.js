function submitMedication() {

    var med = {};
    med.medication = {};

    med.medication.dog_id = params[0].split('=')[1];
    med.medication.name = document.getElementById("medicinename").value;
    med.medication.dose = document.getElementById("dose").value;
    med.medication.comment = document.getElementById("comment").value;

    var xmlRequests = new XMLHttpRequest();
    xmlRequests.onreadystatechange = function(){
        if (xmlRequests.status === 200 && xmlRequests.readyState === 4){
            document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
        }
    };

    xmlRequests.open('POST','http://dog-tracker-api.herokuapp.com/medications',true);
    xmlRequests.setRequestHeader('Content-Type', 'application/json');
    xmlRequests.send(JSON.stringify(med));
}
