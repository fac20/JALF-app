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
      title: 'Blood Glucose too low, do not take any insulin!',
      text:
        'Eat 20g of quick-acting sugar and check your blood glucose levels again in 20 minutes.',
      icon: 'warning',
      iconColor: 'hsl(191, 73%, 43%)',
      confirmButtonColor: 'hsl(191, 73%, 43%)',
      confirmButtonText: 'Pronto, Sugar Wizard!',
      background: 'hsl(354, 100%, 89%)',
      backdrop: `hsl(190, 93%, 84%)`,
    });
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
