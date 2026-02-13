function circle() {
    let value1 = document.getElementById("sub1").value;

    let sub2 = Math.PI * Number(value1) **2;
    
    document.getElementById("sub2").value = sub2.toFixed(2);
}