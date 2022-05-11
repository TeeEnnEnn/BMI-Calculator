/* Done By: Theophilus Nyasha Nenhanga Date: 2022/05/10 */

function calculate_BMI(){
    /** 
     * Purpose: Calculates BMI from data taken from html form input.
     * Pre-Conditions: None.
     * Post-Conditions: Takes data from html form input.
     * Return: false (boolean).
     */

    height = document.bmi_data.height.value;
    mass = document.bmi_data.mass.value;
    
    var bmi = mass/(height**2);
    bmi = bmi.toFixed(2)
    document.getElementById("display_area").innerHTML = "Your BMI is: " + bmi; 
    return false;
}
