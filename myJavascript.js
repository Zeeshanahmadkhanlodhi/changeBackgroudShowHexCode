function rand(min,max){
    let randome = Math.random() * (max-min) + min;
    return Math.round(randome);
}


document.getElementById('show').innerHTML = "HEX color:";
function genarateColor(){
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var color = '#';

    for(let i=0;i<6;i++){
        let index = rand(0,15);
        color += hex[index];
    }
    data = "HEX color: ";
    data += color;
    document.getElementById('show').innerHTML = data;
    return color;
}

var btn  = document.getElementsByClassName('mybtn');
function setcolor(){
    var col = genarateColor();
    document.body.style.backgroundColor = col;
}