const emptyInput = `<div class="empty-input"><img class="section-output-illustration" src="images/Muñeco.png"alt="illustration"/>
<h4 class="section-output-title">Ningún mensaje fue encontrado</h4>
<span>Ingresa el texto que desees encriptar o desencriptar</span></div>`;
const textAreaOutput = `<textarea class="textarea-output" cols="20" rows="10"></textarea>
<div><button class="btn-secondary btn-copy">Copiar</button></div>`;

const $textareaInput = document.getElementById('textarea-input');
const $sectionOutput = document.getElementById('section-output');

const $btnEncryp = document.getElementById('btn-encrypt');
const $btnDecryp = document.getElementById('btn-decrypt');

const encryptRules = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufet'],
];

$btnEncryp.onclick = () => {
  const resultEncrypt = encrypt($textareaInput.value);
  $sectionOutput.innerHTML = `<textarea class="textarea-output" cols="20" rows="10">${resultEncrypt}</textarea>
  <div><button class="btn-secondary btn-copy" id="btn-copy">Copiar</button></div>`;
  document.getElementById('btn-copy').onclick = (e) => {
    navigator.clipboard.writeText(resultEncrypt);
    e.target.innerHTML = `<div class="btn-copy-clicked"><span>Copiado</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--blue-dark);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg></div>`;
    setTimeout(() => {
      e.target.innerHTML = `Copiar`;
    }, 2000);
  };
};
$btnDecryp.onclick = () => {
  const resultDecrypt = decrypt($textareaInput.value);
  $sectionOutput.innerHTML = `<textarea class="textarea-output" cols="20" rows="10">${resultDecrypt}</textarea>
  <div><button class="btn-secondary btn-copy" id="btn-copy">Copiar</button></div>`;
  document.getElementById('btn-copy').onclick = (e) => {
    navigator.clipboard.writeText(resultDecrypt);
    e.target.innerHTML = `<div class="btn-copy-clicked"><span>Copiado</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--blue-dark);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg></div>`;
    setTimeout(() => {
      e.target.innerHTML = `Copiar`;
    }, 2000);
  };
};

function encrypt(stringInput) {
  stringInput = stringInput.toLowerCase();

  for (let i = 0; i < encryptRules.length; i++) {
    if (stringInput.includes(encryptRules[i][0])) {
      stringInput = stringInput.replaceAll(
        encryptRules[i][0],
        encryptRules[i][1]
      );
    }
  }
  return stringInput;
}
function decrypt(stringInput) {
  stringInput = stringInput.toLowerCase();

  for (let i = 0; i < encryptRules.length; i++) {
    if (stringInput.includes(encryptRules[i][1])) {
      stringInput = stringInput.replaceAll(
        encryptRules[i][1],
        encryptRules[i][0]
      );
    }
  }
  return stringInput;
}
