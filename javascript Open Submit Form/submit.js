document.getElementById("openFormBtn").addEventListener("click", function() {
    document.getElementById("formPopup").style.display = "block";
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const surname = document.getElementById("surname").value;


    alert(`Hello ${firstName}  , your form is submitted successfully!`);
    
    document.getElementById("userForm").reset();
    document.getElementById("formPopup").style.display = "none";
});
