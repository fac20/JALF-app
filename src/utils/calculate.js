import Swal from 'sweetalert2';

function Calculate(
  bloodGlucose,
  carbPortion,
  insulinRatio,
  carbRatio,
  min,
  max,
  exercise,
  intensity,
  duration,
  unwell,
) {
  let ratio = parseFloat(carbRatio) / parseFloat(insulinRatio);
  let correctionDose = 0;
  if (parseFloat(bloodGlucose) > parseFloat(max)) {
    correctionDose = Math.ceil((parseFloat(bloodGlucose) - parseFloat(max)) / 3);
  } else if (bloodGlucose < 4) {
    Swal.fire({
      title: 'Blood Glucose too low!',
      text:
        'Do not take any insulin and eat 20g of quick-acting sugar and check your blood glucose levels again in 20 minutes!',
      icon: 'warning',
      iconColor: '#A2E9FF',
      confirmButtonColor: 'hsl(354, 100%, 89%)',
      confirmButtonText: 'Pronto, Sugar Wizard!',
      padding: '3em',
      background: 'hsl(354, 100%, 89%)',
      backdrop: `
      #ADEBE2
      url("/images/nyan-cat.gif")
      left top
      no-repeat`,
    });
    // window.alert('Blood Glucose too low!');
    //display warning message that blood sugar is too low, eat 20 grams of
    //quick acting sugar - don't do any insulin until your blood glucose is within a safe range
  }
  let units = carbPortion / ratio;
  let totalUnits = correctionDose + units;

  if (exercise === true) {
    if (intensity === 'low' && duration < 30) {
      return totalUnits;
    } else if (intensity === 'low' && duration < 60) {
      totalUnits = totalUnits * 0.9;
      return totalUnits;
    } else if (intensity === 'high' && duration > 60) {
      totalUnits = totalUnits * 0.5;
      return totalUnits;
    } else if (intensity === 'med' && duration > 60) {
      return (totalUnits = totalUnits * 0.7);
    } else if (intensity !== 'low' && duration > 30) {
      return (totalUnits = totalUnits * 0.8);
    }
  }
  if (unwell === true) {
    totalUnits = totalUnits * 1.2;
    return totalUnits;
  }
  return totalUnits;
}

export default Calculate;
