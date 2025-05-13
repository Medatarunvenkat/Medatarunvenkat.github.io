const add=()=>
{
    var n1=document.getElementById('n1').value;
    var n2=document.getElementById('n2').value;
    var sum=parseFloat(n1)+parseFloat(n2);
    var sub=parseFloat(n1)-parseFloat(n2);
    var mul=parseFloat(n1)*parseFloat(n2);
     var div=parseFloat(n1)/parseFloat(n2);
     document.getElementById('res').innerHTML = 
        "Sum is: " + sum + "<br>" +
        "Sub is: " + sub + "<br>" +
        "Mul is: " + mul + "<br>" +
        "Div is: " + div;
}