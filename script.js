
function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let result = document.getElementById("result");

    result.classList.remove("show-result");

    if (weight <= 0 || height <= 0 ||
        !Number.isFinite(weight) || !Number.isFinite(height)) {
        result.innerHTML = " Enter valid weight and height";
        result.className = "text-center mt-4 fw-bold text-danger";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    result.innerHTML =
        `<div class="show-result">
            <p class="text-secondary mb-1">Your BMI</p>
            <h2 class="display-5 fw-bold">${bmi.toFixed(1)}</h2>
            <span class="badge rounded-pill text-bg-primary p-2">
                ${category}
            </span>
        </div>`;

    result.className = "text-center mt-4 fw-bold";
}
