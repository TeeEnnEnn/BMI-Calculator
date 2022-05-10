function calculate_BMI(){
    //document.bmi_data.action = "index.html";
    height = document.bmi_data.height.value;
    mass = document.bmi_data.mass.value;
    //alert(document.bmi_data.action);
    
    var bmi = mass/(height**2);
    bmi = bmi.toFixed(2)
    document.getElementById("display_area").innerHTML = "Your BMI is: " + bmi; 
    return false;
}
