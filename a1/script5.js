function msg()
{
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    let output = document.getElementById('op');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!emailPattern.test(email)) {
                output.style.color = "red";
                output.innerHTML = "Invalid email format.";
            } else if (pass.length < 6) {
                output.style.color = "red";
                output.innerHTML = "Password must be at least 6 characters.";
            } else {
                output.style.color = "green";
                output.innerHTML = "Login successful!<br>Email: " + email+"<br> Password is :"+pass;
            }
}