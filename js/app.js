function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const caLc = document.getElementById('typed-num');
    if (isNaN(number)) {
        if (number == 'C') {
            caLc.value = '';
        }
    }
    else {

        const prevCalc = caLc.value;
        const newCalc = prevCalc + number;
        caLc.value = newCalc;
    }

});
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-num').value;
    const success = document.getElementById('n-success');
    const fail = document.getElementById('n-fail');

    if (pin == typed) {

        success.style.display = 'block';
        fail.style.display = 'none';
    } else {
        fail.style.display = 'block';
        success.style.display = 'none';

    }
}