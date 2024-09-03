function openTab(event, tab) {
    // Get all elements with class="tab-content" and hide them
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    // Get all elements with class="tab-link" and remove the class "active"
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    document.getElementById(tab).classList.add("active");
    event.currentTarget.classList.add("active");
}

function createResultTab(input, result, fromUnit, toUnit, tabName) {

    // Get all elements with class="tab-content" and hide them
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    // Create new content for the result
    var resultContent = document.createElement("div");
    resultContent.id = tabName;
    resultContent.className = "tab-content active";
    resultContent.style.display = "block";
    resultContent.innerHTML = "<h2>Result of your calculation</h2><h1>" + input + " " + fromUnit + " = " + result + toUnit + "</h1>";

    // Create a reset button
    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.id = "reset"
    resetButton.onclick = function() {
        reset();
    }
    resultContent.appendChild(resetButton);

    // Add the new active result tab content
    document.body.appendChild(resultContent);
}

function reset() {
    console.log("Reset");
}

function lengthConvert(event) {
    const input = parseFloat(document.getElementById("lengthInput").value);
    const fromUnit = document.getElementById("lengthFrom").value;
    const toUnit = document.getElementById("lengthTo").value;
    let result = input;

    // Conversion factors to meters
    var conversionToMeters = {
        "Millimeter": 0.001,
        "Centimeter": 0.01,
        "Meter": 1,
        "Kilometer": 1000,
        "Inch": 0.0254,
        "Foot": 0.3048,
        "Yard": 0.9144,
        "Mile": 1609.34
    };

    // Convert input value to meters
    var valueInMeters = input * conversionToMeters[fromUnit];

    // Convert meters to the target unit
    var conversionFromMeters = {
        "Millimeter": 1000,
        "Centimeter": 100,
        "Meter": 1,
        "Kilometer": 0.001,
        "Inch": 39.3701,
        "Foot": 3.28084,
        "Yard": 1.09361,
        "Mile": 0.000621371
    };

    // Calculate the result
    result = valueInMeters * conversionFromMeters[toUnit];
    console.log(`Convert ${input} ${fromUnit} to ${result} ${toUnit}`);
    createResultTab(input, result, fromUnit, toUnit, "lengthResult");
}

function weightConvert(event) {
    const input = parseFloat(document.getElementById("weightInput").value);
    const fromUnit = document.getElementById("weightFrom").value;
    const toUnit = document.getElementById("weightTo").value;
    let result = input;

    // Conversion factors to kilograms
    var conversionToKilograms = {
        "Milligram": 0.000001,
        "Gram": 0.001,
        "Kilogram": 1,
        "Ounce": 0.0283495,
        "Pound": 0.453592
    };

    // Convert input value to kilograms
    var valueInKilograms = input * conversionToKilograms[fromUnit];

    // Convert kilograms to the target unit
    var conversionFromKilograms = {
        "Milligram": 1000000,
        "Gram": 1000,
        "Kilogram": 1,
        "Ounce": 35.274,
        "Pound": 2.20462
    };

    // Calculate the result
    result = valueInKilograms * conversionFromKilograms[toUnit];
    console.log(`Convert ${input} ${fromUnit} to ${result} ${toUnit}`);
    createResultTab(input, result, fromUnit, toUnit, "weightResult");
}

function tempConvert(event) {
    const input = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("tempFrom").value;
    const toUnit = document.getElementById("tempTo").value;
    let result = input;

    // Conversion logic goes here
    if (fromUnit == "Celcius") {
        if (toUnit == "Celcius") {
            result = input;
        } else if (toUnit == "Fahrenheit") {
            result = (input * 9 / 5) + 32;
        } else {
            result = input + 273.15;
        }
    } else if (fromUnit == "Fahrenheit") {
        if (toUnit == "Celcius") {
            result = (input - 32) * 5 / 9;
        } else if (toUnit == "Fahrenheit") {
            result = input;
        } else {
            result = (input - 32) * 5 / 9 + 273.15;
        }
    } else {
        if (toUnit == "Celcius") {
            result = input - 273.15;
        } else if (toUnit == "Fahrenheit") {
            result = (input - 273.15) * 9 / 5 + 32;
        } else {
            result = input;
        }
    }
    console.log(`Convert ${input} ${fromUnit} to ${result} ${toUnit}`);
    createResultTab(input, result, fromUnit, toUnit, "tempResult");
}