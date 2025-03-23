function calculate() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    document.getElementById('bmi').innerText = bmi;

    let category = '';
    let position = 0;

    if (bmi < 18.5) {
        category = 'Underweight';
        position = 0;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        position = 20;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Pre-obesity';
        position = 40;
    } else if (bmi >= 30 && bmi < 34.9) {
        category = 'Obese I';
        position = 60;
    } else if (bmi >= 35 && bmi < 39.9) {
        category = 'Obese II';
        position = 80;
    } else if (bmi >= 40){
        category = 'Obese III';
        position = 100;
    }
    else {
        category = 'NaN';
        position = 0;
    }

    document.getElementById('category').innerText = category;
    document.getElementById('indicator').style.left = `calc(${position}% - 10px)`;
}

function convertHeight() {
    const feet = document.getElementById('feet').value;
    const cm = (feet * 30.48).toFixed(2);
    document.getElementById('heightResult').innerText = `Height in cm: ${cm}`;
}

function convertWeight() {
    const pounds = document.getElementById('pounds').value;
    const kg = (pounds * 0.453592).toFixed(2);
    document.getElementById('weightResult').innerText = `Weight in kg: ${kg}`;
}