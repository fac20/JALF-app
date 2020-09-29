function Calculate(BG, CP, ratio, min, max, exercise, intensity, duration, ill) {
    //range = [4,10]
    let correctionDose = 0;
    if (BG>max) {
        correctionDose = Math.ceil((BG-max)/3);
    } else if (BG<min) {
        return 'message';
        //display warning message that blood sugar is too low, eat 20 grams of quick acting sugar - don't do any insulin until your blood glucose is within a safe range 
    } 
    let units = CP / ratio;
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
    if (ill === true){
        totalUnits = totalUnits * 1.2;
        return totalUnits;
    }
    return totalUnits;
    
}

export default Calculate;