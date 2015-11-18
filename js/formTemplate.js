var params = decodeURI(document.location.search);
params = params.split('&');

    document.getElementById("name").innerHTML = params[1].split('=')[1];
    document.getElementById("breed").innerHTML = params[2].split('=')[1];
    document.getElementById("sex").innerHTML = params[3].split('=')[1];
    document.getElementById("weight").innerHTML = params[4].split('=')[1];
    document.getElementById("age").innerHTML = params[5].split('=')[1];
    document.getElementById("fixed").innerHTML = params[6].split('=')[1];

        if (params[6].split('=')[1] === "true"){
            document.getElementById("fixed").innerHTML = "Yes";}
        else{
            document.getElementById("fixed").innerHTML = "No";
        }

    function back() {
                document.location.href = "yourDog.html?id=" + params[0].split('=')[1];
            }

    function home() {
                document.location.href = "home.html";
            }
