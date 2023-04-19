function initForm(){

  // Constantes para os nomes das etapas
  const STEP_1 = '1';
  const STEP_2 = '2';
  const STEP_3S = '3S';
  const STEP_4S = '4S';
  const STEP_5S = '5S';
  const STEP_6S = '6S';
  const STEP_7S = '7S';
  const STEP_8SE = '8SE';
  const STEP_8SS = '8SS';
  const STEP_3N = '3N';
  const STEP_4N = '4N';
  const STEP_5N = '5N';
  
  // ... Adicione constantes para todas as etapas
  
  // Seletores dos botões Avançar
  const step1NextBtn = document.querySelector('[data-current-step="1"]');
  const step2NextBtn = document.querySelector('[data-current-step="2"]');
  const step3SNextBtn = document.querySelector('[data-current-step="3S"]');
  const step4SNextBtn = document.querySelector('[data-current-step="4S"]');
  const step5SNextBtn = document.querySelector('[data-current-step="5S"]');
  const step6SNextBtn = document.querySelector('[data-current-step="6S"]');
  const step7SNextBtn = document.querySelector('[data-current-step="7S"]');
  const step8SENextBtn = document.querySelector('[data-current-step="8SE"]');
  const step8SSNextBtn = document.querySelector('[data-current-step="8SS"]');
  const step3NNextBtn = document.querySelector('[data-current-step="3N"]');
  const step4NNextBtn = document.querySelector('[data-current-step="4N"]');
  const step5NNextBtn = document.querySelector('[data-current-step="5N"]');
  
  // Seletores dos botões Voltar
  const step2BackBtn = document.querySelector('[data-back-from="2"]');
  const step3SBackBtn = document.querySelector('[data-back-from="3S"]');
  const step4SBackBtn = document.querySelector('[data-back-from="4S"]');
  const step5SBackBtn = document.querySelector('[data-back-from="5S"]');
  const step6SBackBtn = document.querySelector('[data-back-from="6S"]');
  const step7SBackBtn = document.querySelector('[data-back-from="7S"]');
  const step8SEBackBtn = document.querySelector('[data-back-from="8SE"]');
  const step8SSBackBtn = document.querySelector('[data-back-from="8SS"]');
  const step3NBackBtn = document.querySelector('[data-back-from="3N"]');
  const step4NBackBtn = document.querySelector('[data-back-from="4N"]');
  const step5NBackBtn = document.querySelector('[data-back-from="5N"]');

  

  // Adicione a linha para selecionar o campo de email
  const emailInput = document.querySelector('.email-input');
  
  // Adicione a linha aqui
  const steps = document.querySelectorAll('.step');
   
// Oculta todas as etapas
function hideAllSteps() {
  steps.forEach(step => step.style.display = 'none');
}

// Exibe uma etapa específica
function showStep(stepNumber) {
  hideAllSteps();
  document.querySelector(`.step-${stepNumber}`).style.display = 'block';
}

// Valida o formato de email
function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

  if (!validateEmail(emailInput.value)) {
    alert('Por favor, insira um email válido.');
    return;
  }

 //Função next para os botões
 function handleStepNextClick(event) {
  event.preventDefault();
  const currentStep = event.target.getAttribute('data-current-step');

  switch (currentStep) {
    case '1':
      showStep('step-2');
      break;
    default:
      const targetStep = getNextStep(currentStep);
      showStep(targetStep);
      break;
  }
}


 // Funções para lidar com o evento de clique do botão step-back
 function getPreviousStep(currentStep) {
  switch (currentStep) {
    case STEP_2:
      return STEP_1;
    case STEP_3S:
      return STEP_2;
    case STEP_3N:
      return STEP_2;
    case STEP_4N:
      return STEP_3N;
    case STEP_5N:
      return STEP_4N;
    case STEP_4S:
      return STEP_3S;
    case STEP_5S:
      return STEP_3S;
    case STEP_6S:
      return STEP_3S;
    case STEP_7S:
      return STEP_6S;
    case STEP_8SE:
      return STEP_7S; 
    // ... restante do código para os outros passos
  }
}

// Função para lidar com o evento de clique do botão step-back
function handleStepBackClick(event) {
  event.preventDefault();
  const backFrom = event.target.getAttribute('data-back-from');
  const targetStep = getPreviousStep(backFrom);
  showStep(targetStep);
}

hideAllSteps();
showStep(STEP_1);

const stepNextButtons = document.querySelectorAll('.step-next');
stepNextButtons.forEach((button) => {
  button.addEventListener('click', handleStepNextClick);
});

}

document.addEventListener('DOMContentLoaded', initForm);
