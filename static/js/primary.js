function primary(email, nombre, telefono){
    //const URL = "http://localhost:8000/contactos";
    const URL = "https://nueva-api-344c8029d97b.herokuapp.com/contactos"
    var request = new XMLHttpRequest;
    request.open('GET',URL +"/" +email,true);
    request.send();

    request.onload = () => {
        if(request.status == 404){
            var request2 = new XMLHttpRequest;
            request2.open('POST',URL)
            request2.setRequestHeader("Content-Type", "application/json");
            post = JSON.stringify( {
                "email": email,
                "nombre": nombre,
                "telefono": telefono})
            console.log(post)
            request2.send(post)

            request2.onload = (e) => {
                const response = request2.responseText;
                const json = JSON.parse(response);
                console.log("response: " + response);
                console.log("json: " + json);
                console.log("status_code: " + request2.status);
                window.location.href = "https://nueva-api-344c8029d97b.herokuapp.com";
            }
        }else{
            alert("Email ya registrado")
        }
    }
}
