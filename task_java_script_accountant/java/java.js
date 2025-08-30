
var names = [];

function addUsers() {
    var count = Number(prompt("Enter number of users to add: "));
    alert("You can add " + count + " users.");

    for (var i = 0; i < count; i++) {
        var id = prompt("Enter ID of user " + (i + 1) + " (numbers only): ");
        var balance = Number(prompt("Enter BALANCE of user " + (i + 1) + ": "));
        names.push({ id: id, balance: balance });
    }
    console.log("Users added:", names);
}


function editUser() {
    var editId = prompt("Enter ID of user to edit: ");
    var user = names.find(user => user.id === editId);
    if (user) {
        var newBalance = Number(prompt("Enter new BALANCE: "));
        user.balance = newBalance;
        alert("User balance updated.");
    } else {
        alert("User not found.");
    }
    console.log("Users after edit:", names);
}



function deleteUser() {
    var deleteId = prompt("Enter ID to delete: ");
    var index = names.findIndex(user => user.id === deleteId);
    if (index !== -1) {
        names.splice(index, 1);
        alert("User deleted.");
    } else {
        alert("User not found.");
    }
    console.log("Users after deletion:", names);
}


function choose() {
    var action = prompt("What do you want to do? (add/edit/delete)").toLowerCase();

    if (action === "add") {
        addUsers();
    } else if (action === "edit") {
        if (names.length === 0) {
            alert("No users available to edit.");
        } else {
            editUser();
        }
    } else if (action === "delete") {
        if (names.length === 0) {
            alert("No users available to delete.");
        } else {
            deleteUser();
        }
    } else {
        alert("Invalid action. Please enter add, edit, or delete.");
    }
}
while (true) {
    choose();
}
