document.getElementById("btn").onclick = function(){

    var x =document.getElementById("x").value ;
    var y =document.getElementById("y").value;
    var total = x*y;
    document.getElementById("res").innerHTML="The result is :" + total;
}

