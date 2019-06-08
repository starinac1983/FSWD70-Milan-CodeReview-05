
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
        } else if (i = 1000000) {
            i = 0;
        }
        document.getElementById("display").innerHTML = i;
    }

    var k = 0;

    function incNumber1() {
        if (k < 10000) {
            k++;
        } else if (k = 1000000) {
            k = 0;
        }
        document.getElementById("display1").innerHTML = k;
    }

var m = 0;

function incNumber2() {
        if (m < 10000) {
            m++;
        } else if (m = 1000000) {
            m = 0;
        }
        document.getElementById("display2").innerHTML = m;
    }

var n = 0;

    function incNumber3() {
        if (n < 10000) {
            n++;
        } else if (n = 1000000) {
            n = 0;
        }
        document.getElementById("display3").innerHTML = n;
    }

var z = 0;
    function incNumber4() {
        if (z < 10000) {
            z++;
        } else if (z = 1000000) {
            z = 0;
        }
        document.getElementById("display4").innerHTML = z;
    }
var w = 0;
    function incNumber5() {
        if (w < 10000) {
            w++;
        } else if (w = 1000000) {
            w = 0;
        }
        document.getElementById("display5").innerHTML = w;
    }