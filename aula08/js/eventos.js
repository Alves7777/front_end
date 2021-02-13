let currentStep = 1;
let totalSteps = 3;

function showStep(stepNumber) {
  document.getElementById(`step-${stepNumber}`).classList.remove('d-none');
}

function hideStep(stepNumber) {
  document.getElementById(`step-${stepNumber}`).classList.add('d-none');
}

function updateProgress() {
  document.getElementById('form-progress').innerHTML = currentStep+'/'+totalSteps;
}

function nextStep() {
  if (currentStep === totalSteps) {
    return;
  }

  document.getElementById('btn-previous').removeAttribute('disabled');

  hideStep(currentStep);
  currentStep++;
  showStep(currentStep);

  if (currentStep === totalSteps) {

      document.getElementById('blabla').innerHTML = 'XXX';
      $('#blabla').html('xxx')

      $('#btn-next').fadeOut();
      document.getElementById('btn-next').classList.add('d-none');
      document.getElementById('btn-confirm').classList.remove('d-none');
  }

  updateProgress();
}

function backStep() {
  if (currentStep === 1) {
    return;
  }

  document.getElementById('btn-next').classList.remove('d-none');
  document.getElementById('btn-confirm').classList.add('d-none');

  hideStep(currentStep);
  currentStep--;
  showStep(currentStep);

  updateProgress();
}
