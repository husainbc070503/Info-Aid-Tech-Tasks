var cel = document.getElementById('cel')
var far = document.getElementById('faren');
var kel = document.getElementById('kel');

const convertToFK = () => {
    var val = parseFloat(cel.value);
    far.value = ((val * 9) / 5 + 32).toFixed(2);
    kel.value = (val + 273.15).toFixed(2);
}

const convertToCK = () => {
    var val = parseFloat(far.value);
    cel.value = (((val - 32) * 5) / 9).toFixed(2)
    kel.value = (((val - 32) * 5) / 9 + 273.15).toFixed(2);
}

const convertToCF = () => {
    var val = parseFloat(kel.value);
    cel.value = (val - 273.15).toFixed(2);
    far.value = (((val - 273.15) * 9) / 5 + 32).toFixed(2);
}