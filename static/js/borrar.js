function borrar(email){
    confirmacion = confirm("¿Estás seguro de que quieres borrar el usuario " + email + "?");
    if (confirmacion) {

        const token = sessionStorage.getItem('token');
        console.log(email)
        console.log(token)
        var requestToken = new XMLHttpRequest();
        requestToken.open('GET', 'https://nueva-api-344c8029d97b.herokuapp.com/contactos/' + email);
        requestToken.setRequestHeader('Authorization', 'Bearer ' + token);
        requestToken.send();

        requestToken.onload = () => {
            if (requestToken.status === 200) {
                console.log('token válido')
                var request = new XMLHttpRequest();
                request.open('DELETE', "https://nueva-api-344c8029d97b.herokuapp.com/contactos/" + email);
                request.setRequestHeader('Authorization', 'Bearer ' + token);
                request.send();
                alert('Contacto borrado correctamente')
                window.location.href = 'https://nueva-api-344c8029d97b.herokuapp.com/templates/todos.html?token=' + token;
            }else{
                alert('Token inválido, inicia sesión de nuevo')
                window.location.href = 'https://nueva-api-344c8029d97b.herokuapp.com/login';
            }
        }
    }
}
