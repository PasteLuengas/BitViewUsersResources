var button = document.getElementById("button");

button.addEventListener("click", function() {
    let userInput = document.getElementById("userInput");
    if(!userInput.value == "") {
        console.log(userInput.value);
        
        //se hace la consulta
        let queryLink = "https://www.bitview.net/api.php?ty=user&ta=" + userInput.value +"&api_key=S5BsKv7mTs1hX5XYXqXjJxxwCAHq27zV";
        console.log(queryLink);
        $.getJSON(queryLink, function(data) {
            if (data.r == "success") {
                document.getElementById("error").style.display = "none";
                document.getElementById("resources").style.display = "block";
                document.getElementById("profileImage").src = "https://bitview.net/" + data.avatar;
                document.getElementById("backgroundImage").src = "https://bitview.net/u/bck/" + data.username + ".jpg?95";
            } else if (data.r == "fail" || data.code == 0) {
                document.getElementById("error").innerHTML = "User not found";
                document.getElementById("error").style.display = "block";
            }
        });

    } else {
        console.log("Empty");
        document.getElementById("error").innerHTML = "The Username value is empty";
        document.getElementById("error").style.display = "block";
    }
  });