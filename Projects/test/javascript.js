function myFunction() {
  let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}

function myFunction2() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace("Apple", "Tyler");
}

function myFunction3() {
    alert( 'A' > 'Z' ); // true
}

function myFunction4() {
    let age = 23;

    if (age >= 14 && age <= 90) {
    alert("Age is between 14 & 90");
    } else {
    alert("Age is not between 14 & 90");
}
}

function myFunction5() {
    let age = 98;

    if (! (age >= 14 && age <= 90)) {
        alert("Age is not between 14 & 90");
    } else {
        alert("Age is between 14 & 90")
    }
}

function SignIn() {
    const name = prompt("Who's There?");

    if name == "Admin";
        alert("Welcome ${name}!");

}
