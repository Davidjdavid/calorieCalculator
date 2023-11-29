function calculateCalories() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let BMR = ((height*12.7)+(weight*6.23)+(age*6.23) + 66);
    let caloriesRounded = document.getElementById("weightMaintain").innerHTML = Math.round(BMR * 100) / 100;
    document.getElementById("weightLose").innerHTML = caloriesRounded - 500;
    document.getElementById("weightMaintain").innerHTML = caloriesRounded;
    document.getElementById("weightGain").innerHTML = caloriesRounded + 500;

}