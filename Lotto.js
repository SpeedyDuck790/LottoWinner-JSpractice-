
function myFunction() {
    var x = document.getElementById("num").value;
    x *=2;
    document.getElementById("num").value = x;
}   

// function validateForm() {
//     let x = document.forms["signin"]["FirstName"].value;
//      let y = document.forms["signin"]["LastName"].value;
//     let z = document.forms["signin"]["LuckNumber"].value;
//     let a = document.forms["signin"]["password"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }else if (y == "") {
//         alert("Name must be filled out");
//         return false;
//     }else if (z == "") {
//         alert("Name must be filled out");
//         return false;
//     }else if (a == "") {
//         alert("Name must be filled out");
//         return false;
//     }

// }

var bank = "Participants: <br>----------------------------------<br>";
var partnum = 0;
function save() {
    document.getElementById("c").className = ""
    var x = document.getElementById("signin");
    if (x.elements[0].value == "") {
        return false;
    }
    var text = "submitted info: <br>";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("c").className = "enter"
    
    bank += text+"----------------------------------<br>";
    document.getElementById("bank").innerHTML = bank;
    partnum++;
    
document.getElementById("Greet").innerHTML ="Participants:<br>"+partnum;
document.getElementById("chance").innerHTML ="Chance of winning:<br>"+(1/partnum)*100+"%";
document.getElementById("signin").reset();

}

const myImage = new Image(100,100);
myImage.src = "coin.png";
document.getElementById("c").appendChild(myImage);


