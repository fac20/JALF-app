import React, { Component } from 'react';
import "./toggle.css";
import { InputBox } from "../components/formComponents";
import Calculator from "../components/calculator";

function Calculate(BG, CP, ratio, min, max, exercise, intensity, duration) {
    //range = [min,max]
    let correctionDose = 0;
    if (BG>max) {
        correctionDose = Math.ceil((BG-max)/3);
    } else if (BG<min) {
        //display warning message that blood sugar is too low, eat 20 grams of quick acting sugar - don't do any insulin until your blood glucose if within a safe range 
    } 
    let units = CP / ratio;
    let totalUnits = correctionDose + units;  
    
    if (exercise === true) {
        if (intensity === "low" && duration<30) {
            return totalUnits;
        } else if (intensity === "low" && duration < 60) {
                totalUnits = totalUnits * 0.9;
        } else if (intensity === "high" && duration > 60) {
            totalUnits = totalUnits * 0.5 // double check numbers
        } else if (intensity === "med" && duration > 60) {
            totalUnits = totalUnits * 0.7
        } else if (intensity !== "low" && duration > 30) {
            totalUnits = totalUnits * 0.8
        }
    }
    if (ill === true){
        totalUnits = totalUnits * 1.2;
    }
    return totalUnits
}

export default Calculate;