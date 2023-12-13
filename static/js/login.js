function login(username, passwd){
    endpoint = "https://nueva-api-344c8029d97b.herokuapp.com"
    const token = `${username}:${passwd}`;
    const tokenBase64 = btoa(token);
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${tokenBase64}`
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    })
    .then(data => {
        sessionStorage.setItem('token', data.token);
        console.log('Inicio de sesión exitoso. Token:', data.token);
        window.location.href = "https://nueva-api-344c8029d97b.herokuapp.com/templates/todos.html?token="+data.token;
        //window.location.href = "http://localhost:8080/templates/todos.html"
        //window.location.href = "https://nueva-api-344c8029d97b.herokuapp.com/?token="+data.token;
    })
    .catch(error => {
        alert(error.message);
    });
}
