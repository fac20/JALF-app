function Calculate(bloodGlucose, carbPortion, insulinRatio, carbRatio, min, max, exercise, intensity, duration, unwell) {
    //range = [4,10]
    let ratio = parseInt(carbRatio) / parseInt(insulinRatio);
    let correctionDose = 0;
    if (bloodGlucose>max) {
        correctionDose = Math.ceil((parseInt(bloodGlucose) - parseInt(max))/3);
    } else if (bloodGlucose<min) {
        return 'message';
        //display warning message that blood sugar is too low, eat 20 grams of quick acting sugar - don't do any insulin until your blood glucose is within a safe range 
    } 
    let units = carbPortion / ratio;
    let totalUnits = correctionDose + units;  

    if (exercise === true) {
        if (intensity === "low" && duration<30) {
            return totalUnits;
        } else if (intensity === "low" && duration < 60) {
                totalUnits = totalUnits * 0.9;
                return totalUnits;
        } else if (intensity === "high" && duration > 60) {
            totalUnits = totalUnits * 0.5 // double check numbers;
            return totalUnits;
        } else if (intensity === "med" && duration > 60) {
            return totalUnits = totalUnits * 0.7
        } else if (intensity !== "low" && duration > 30) {
            return totalUnits = totalUnits * 0.8
        }
    }
    if (unwell === true){
        totalUnits = totalUnits * 1.2;
        return totalUnits;
    }
    return totalUnits;
    
}

export default Calculate;