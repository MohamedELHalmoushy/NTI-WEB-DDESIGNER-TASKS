var users = [];
var form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var email = e.target.elements.email.value;
    var user = { name: name, email: email, };
    users.push(user);
    console.log(users);
    form.reset();



    const messageDiv = document.createElement('div');
    messageDiv.className = 'alert alert-success position-fixed top-50 start-50 translate-middle';
    messageDiv.innerHTML = '<strong>Success!</strong> Form submitted successfully. <br>';
    messageDiv.innerHTML += ' <img src="images/done.png" alt="Success" style="width:300px;height:300px;">';
    document.body.appendChild(messageDiv);
    setTimeout(() => { messageDiv.remove(); }, 3000);


    var displayDiv = document.getElementById("displayDiv");
    displayDiv.innerHTML = `<h3>Users:</h3>`;
    users.forEach((user, index) => {
        displayDiv.innerHTML +=
            `<p>
            ${index + 1}.<br> 
            Name: ${user.name} <br>
            Email: ${user.email}
        </p>`;
    });

});