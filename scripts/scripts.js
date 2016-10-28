function submit() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    document.getElementById("firstnamespan").innerHTML = firstName;
    document.getElementById("lastnamespan").innerHTML = lastName;
    document.getElementById("agespan").innerHTML = age;
}