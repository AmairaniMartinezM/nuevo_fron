function editar(email, nombre, telefono) {
    const token = urlParams.get('token');
    sessionStorage.setItem('token', token);
    console.log(token);
    console.log(email);
    console.log(nombre);
    console.log(telefono);
    if (confirm("Actualizar contacto?")) {
        var request = new XMLHttpRequest();
        request.open('PUT', "https://nueva-api-344c8029d97b.herokuapp.com/contactos" + email);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.setRequestHeader("Content-Type", "application/json");

        var updatedData = {
            email: email,
            nombre: nombre,
            telefono: telefono
        };

        request.send(JSON.stringify(updatedData));

        request.onload = (e) => {
            alert("Contacto actualizado exitosamente");
            window.location.href = 'https://nueva-api-344c8029d97b.herokuapp.com/templates/todos.html?token=' + token;
        };
    }
}
