
var movies1 = JSON.parse(movies);

for (i=0;i<movies1.length;i++) {
document.getElementById("name"+i).innerHTML=movies1[i].movieName;  
document.getElementById("description"+i).innerHTML=movies1[i].shortDescription;
document.getElementById("foto"+i).src=movies1[i].moviePoster;
}

var i = 0;

function incNumber() {
    if (i < 10000) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("display").innerHTML = i;
    }

    var j = 0;

function incNumber1() {
        if (j < 10000) {
            j++;
        } else if (j = 10) {
           j = 0;
        }
        document.getElementById("display1").innerHTML = j;
    }

    function incNumber1() {
        if (i < 10000) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("display1").innerHTML = i;
    }

    function incNumber1() {
        if (i < 10000) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("display1").innerHTML = i;
    }

    function incNumber1() {
        if (i < 10000) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("display1").innerHTML = i;
    }