var points=[43,51,35,70,100,57,45,77];
document.getElementById("results").innerHTML = points;
function ascending() {
    points.sort(function(a,b){return(a-b)});
    document.getElementById("results").innerHTML = points;
}
function descending() {
    points.sort(function(a,b){return(b-a)});
    document.getElementById("results").innerHTML = points;
}