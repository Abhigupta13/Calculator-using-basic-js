function myFunction(){
    let x= parseInt(document.getElementById('fir').value);
    let y= parseInt(document.getElementById('sec').value);
    let z=parseInt(x+y);
    document.getElementById('res').value=z;
}