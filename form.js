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

// Seletores dos botões
const step1NextBtn = document.querySelector('[data-current-step="1"]');
const step2NextBtn = document.querySelector('[data-current-step="2"]');
const step2BackBtn = document.querySelector('[data-back-from="2"]');

const step3SNextBtn = document.querySelector('[data-current-step="3S"]');
const step3SBackBtn = document.querySelector('[data-back-from="3S"]');

const step4SNextBtn = document.querySelector('[data-current-step="4S"]');
const step4SBackBtn = document.querySelector('[data-back-from="4S"]');

const step5SNextBtn = document.querySelector('[data-current-step="5S"]');
const step5SBackBtn = document.querySelector('[data-back-from="5S"]');

const step6SNextBtn = document.querySelector('[data-current-step="6S"]');
const step6SBackBtn = document.querySelector('[data-back-from="6S"]');

const step7SNextBtn = document.querySelector('[data-current-step="7S"]');
const step7SBackBtn = document.querySelector('[data-back-from="7S"]');

const step8SENextBtn = document.querySelector('[data-current-step="8SE"]');
const step8SEBackBtn = document.querySelector('[data-back-from="8SE"]');

const step8SSNextBtn = document.querySelector('[data-current-step="8SS"]');
const step8SSBackBtn = document.querySelector('[data-back-from="8SS"]');

const step3NNextBtn = document.querySelector('[data-current-step="3N"]');
const step3NBackBtn = document.querySelector('[data-back-from="3N"]');

const step4NNextBtn = document.querySelector('[data-current-step="4N"]');
const step4NBackBtn = document.querySelector('[data-back-from="4N"]');

const step5NNextBtn = document.querySelector('[data-current-step="5N"]');
const step5NBackBtn = document.querySelector('[data-back-from="5N"]');


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

// Função para lidar com o evento de clique do botão step-1-next
function handleStep1NextClick(event) {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  showStep(STEP_2);
}

// ... Insira funções adicionais para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
// ... Adicione event listeners para os outros botões e campos de entrada

// Função para lidar com o evento de clique do botão step-2-back
function handleStep2BackClick(event) {
  event.preventDefault();
  showStep(STEP_1);
}

// Função para lidar com o evento de clique do botão step-2-next
function handleStep2NextClick(event) {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="step-2-option"]:checked').value;
  
  if (selectedOption === 'sim') {
    showStep(STEP_3S);
  } else {
    showStep(STEP_3N);
  }
}

// ... Insira funções adicionais para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
// ... Adicione event listeners para os outros botões e campos de entrada


// Função para lidar com o evento de clique do botão step-3S-back
function handleStep3SBackClick(event) {
  event.preventDefault();
  showStep(STEP_2);
}

// Função para lidar com o evento de clique do botão step-3S-next
function handleStep3SNextClick(event) {
  event.preventDefault();
  // ... Adicione a lógica para tratar a opção selecionada e mostrar a etapa correspondente
}

// ... Insira funções adicionais para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
// ... Adicione event listeners para os outros botões e campos de entrada

// Função para lidar com o evento de clique do botão step-4S-back
function handleStep4SBackClick(event) {
  event.preventDefault();
  showStep(STEP_3S);
}

// Função para lidar com o evento de clique do botão step-4S-next
function handleStep4SNextClick(event) {
  event.preventDefault();
  // ... Adicione a lógica para a etapa seguinte e/ou ação específica para esta etapa

  showStep(STEP_5S); // Exemplo: Ir para a etapa 5S
}

// ... Continue criando funções para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
// ... Adicione event listeners para os outros botões e campos de entrada
// Função para lidar com o evento de clique do botão step-5S-back
function handleStep5SBackClick(event) {
  event.preventDefault();
  showStep(STEP_4S);
}

// Função para lidar com o evento de clique do botão step-5S-next
function handleStep5SNextClick(event) {
  event.preventDefault();
  // ... Adicione a lógica para a etapa seguinte e/ou ação específica para esta etapa

  showStep(STEP_6S); // Exemplo: Ir para a etapa 6S
}

// ... Continue criando funções para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
step5SBackBtn.addEventListener('click', handleStep5SBackClick);
step5SNextBtn.addEventListener('click', handleStep5SNextClick);
// ... Adicione event listeners para os outros botões e campos de entrada
// Função para lidar com o evento de clique do botão step-7S-back
function handleStep7SBackClick(event) {
  event.preventDefault();
  showStep(STEP_6S);
}

// Função para lidar com o evento de clique do botão step-7S-next
function handleStep7SNextClick(event) {
  event.preventDefault();
  showStep(STEP_8SE);
}

// ... Continue criando funções para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
step5SBackBtn.addEventListener('click', handleStep5SBackClick);
step5SNextBtn.addEventListener('click', handleStep5SNextClick);
step6SBackBtn.addEventListener('click', handleStep6SBackClick);
step6SNextBtn.addEventListener('click', handleStep6SNextClick);
step7SBackBtn.addEventListener('click', handleStep7SBackClick);
step7SNextBtn.addEventListener('click', handleStep7SNextClick);
// ... Adicione event listeners para os outros botões e campos de entrada
// Função para lidar com o evento de clique do botão step-8SE-back
function handleStep8SEBackClick(event) {
  event.preventDefault();
  showStep(STEP_7S);
}

// Função para lidar com o evento de clique do botão step-8SE-next
function handleStep8SENextClick(event) {
  event.preventDefault();
  // Realize ações específicas para esta etapa antes de prosseguir
  showStep(STEP_8SS);
}

// ... Continue criando funções para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
step5SBackBtn.addEventListener('click', handleStep5SBackClick);
step5SNextBtn.addEventListener('click', handleStep5SNextClick);
step6SBackBtn.addEventListener('click', handleStep6SBackClick);
step6SNextBtn.addEventListener('click', handleStep6SNextClick);
step7SBackBtn.addEventListener('click', handleStep7SBackClick);
step7SNextBtn.addEventListener('click', handleStep7SNextClick);
step8SEBackBtn.addEventListener('click', handleStep8SEBackClick);
step8SENextBtn.addEventListener('click', handleStep8SENextClick);
// ... Adicione event listeners para os outros botões e campos de entrada
// Função para lidar com o evento de clique do botão step-8SS-back
function handleStep8SSBackClick(event) {
  event.preventDefault();
  showStep(STEP_8SE);
}

// Função para lidar com o evento de clique do botão step-8SS-next
function handleStep8SSNextClick(event) {
  event.preventDefault();
  // Realize ações específicas para esta etapa antes de prosseguir
  // ...
}

// Função para lidar com o evento de clique do botão step-3N-back
function handleStep3NBackClick(event) {
  event.preventDefault();
  showStep(STEP_2);
}

// Função para lidar com o evento de clique do botão step-3N-next
function handleStep3NNextClick(event) {
  event.preventDefault();
  showStep(STEP_4N);
}

// ... Continue criando funções para lidar com eventos de clique e outras ações específicas para cada etapa

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
step5SBackBtn.addEventListener('click', handleStep5SBackClick);
step5SNextBtn.addEventListener('click', handleStep5SNextClick);
step6SBackBtn.addEventListener('click', handleStep6SBackClick);
step6SNextBtn.addEventListener('click', handleStep6SNextClick);
step7SBackBtn.addEventListener('click', handleStep7SBackClick);
step7SNextBtn.addEventListener('click', handleStep7SNextClick);
step8SEBackBtn.addEventListener('click', handleStep8SEBackClick);
step8SENextBtn.addEventListener('click', handleStep8SENextClick);
step8SSBackBtn.addEventListener('click', handleStep8SSBackClick);
step8SSNextBtn.addEventListener('click', handleStep8SSNextClick);
step3NBackBtn.addEventListener('click', handleStep3NBackClick);
step3NNextBtn.addEventListener('click', handleStep3NNextClick);
// ... Adicione event listeners para os outros botões e campos de entrada
// Função para lidar com o evento de clique do botão step-4N-back
function handleStep4NBackClick(event) {
  event.preventDefault();
  showStep(STEP_3N);
}

// Função para lidar com o evento de clique do botão step-4N-next
function handleStep4NNextClick(event) {
  event.preventDefault();
  showStep(STEP_5N);
}

// Função para lidar com o evento de clique do botão step-5N-back
function handleStep5NBackClick(event) {
  event.preventDefault();
  showStep(STEP_4N);
}

// Função para lidar com o evento de clique do botão step-5N-next
function handleStep5NNextClick(event) {
  event.preventDefault();
  // Realize ações específicas para esta etapa antes de prosseguir
  // ...
}

// Event listeners para os botões e campos de entrada
step1NextBtn.addEventListener('click', handleStep1NextClick);
step2BackBtn.addEventListener('click', handleStep2BackClick);
step2NextBtn.addEventListener('click', handleStep2NextClick);
step3SBackBtn.addEventListener('click', handleStep3SBackClick);
step3SNextBtn.addEventListener('click', handleStep3SNextClick);
step4SBackBtn.addEventListener('click', handleStep4SBackClick);
step4SNextBtn.addEventListener('click', handleStep4SNextClick);
step5SBackBtn.addEventListener('click', handleStep5SBackClick);
step5SNextBtn.addEventListener('click', handleStep5SNextClick);
step6SBackBtn.addEventListener('click', handleStep6SBackClick);
step6SNextBtn.addEventListener('click', handleStep6SNextClick);
step7SBackBtn.addEventListener('click', handleStep7SBackClick);
step7SNextBtn.addEventListener('click', handleStep7SNextClick);
step8SEBackBtn.addEventListener('click', handleStep8SEBackClick);
step8SENextBtn.addEventListener('click', handleStep8SENextClick);
step8SSBackBtn.addEventListener('click', handleStep8SSBackClick);
step8SSNextBtn.addEventListener('click', handleStep8SSNextClick);
step3NBackBtn.addEventListener('click', handleStep3NBackClick);
step3NNextBtn.addEventListener('click', handleStep3NNextClick);
step4NBackBtn.addEventListener('click', handleStep4NBackClick);
step4NNextBtn.addEventListener('click', handleStep4NNextClick);
step5NBackBtn.addEventListener('click', handleStep5NBackClick);
step5NNextBtn.addEventListener('click', handleStep5NNextClick);

}
document.addEventListener('DOMContentLoaded', initForm);