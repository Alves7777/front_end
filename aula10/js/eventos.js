let currentStep = 1;
let totalSteps = 3;

$('#phone').mask('(00) 0 0000-0000');
$('#cep').mask('00.000-000');

function showStep(stepNumber) {
  document.getElementById(`step-${stepNumber}`).classList.remove('d-none');
}

function hideStep(stepNumber) {
  document.getElementById(`step-${stepNumber}`).classList.add('d-none');
}

function updateProgress() {
  document.getElementById('form-progress').innerHTML = `${currentStep}/${totalSteps}`;
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
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;
      let cep = document.getElementById('cep').value;
      let street = document.getElementById('street').value;
      let number = document.getElementById('number').value;
      let district = document.getElementById('district').value;
      let city = document.getElementById('city').value;
      let uf = document.getElementById('uf').value;

      document.getElementById('client-data').innerHTML = `
        <li><strong>Nome: </strong>${name}</li>
        <li><strong>Email: </strong>${email}</li>
        <li><strong>Telefone: </strong>${phone}</li>
      `;

      document.getElementById('address-data').innerHTML = `
        <li><strong>CEP: </strong>${cep}</li>
        <li><strong>Logradouro: </strong>${street}</li>
        <li><strong>Número: </strong>${number}</li>
        <li><strong>Distrito: </strong>${district}</li>
        <li><strong>Cidade: </strong>${city}</li>
        <li><strong>UF: </strong>${uf}</li>
      `;

      document.getElementById('btn-confirm').addEventListener('click', function () {
          let data = {
            client: [name, email, phone],
            address: [cep, street, number, district, city, uf],
          };

          let contatinhos = JSON.parse(
              localStorage.getItem('contatinhos') || '[]'
          );

          contatinhos.push(data);

          localStorage.setItem('contatinhos', JSON.stringify(contatinhos));

          location.href="listar.html";
      });

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
