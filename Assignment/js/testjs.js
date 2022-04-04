function displaymsg(msg) {
  document.getElementById('output').innerHTML = msg + " event";
}
function displaydate(msg) {
  document.getElementById('demo').innerHTML = msg + Date();
}

function closeMe() {
  x=document.getElementById('dem');
 x.className="closed";
  // x.style.display="none";
}

function openMe() {
  x=document.getElementById('dem');
x.className="opened";
  // x.style.display="block";
}


// function welcomeMsg(msg) {
//     alert(msg);
//     var name = prompt("What is your name?");
//     return name;
//   }

//   document.write("Welcome " + firstName);
  // var firstName = welcomeMsg("Hi");




        // var name = 5 % 2
      //   var today = Date();
      //   var location = window.location;
      // document.write(name);

      // document.write("<h1>" + name + "</h1>");
      // document.write(document.baseURI + "<br>");
      // document.write(document.title + "<br>");

      // document.write(name + 7 + "<br>");
      // document.write(document.title + "</h1>");

      // var pars = document.getElementsByTagName("p");
      // document.write(pars + "<br/>");
      // document.write(pars.length);
      // document.write(location);

      // document.write("Time to learn");

      // document.getElementById("test").innerHTML = "Hello World";

      // console.log("Hello World");