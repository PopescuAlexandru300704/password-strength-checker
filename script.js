
const passwordInput = document.getElementById('passwordInput');
const strengthResult = document.getElementById('strengthResult');


passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    evaluatePassword(password);
});

function evaluatePassword(password) {
    let score = 0;
    const minLength = 8; 

  
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSymbol = false;
    let hasSequence = false;
    let lengthOk = password.length >= minLength;

    if (!lengthOk && password.length > 0) {
        strengthResult.textContent = "FOARTE SLABA (Prea scurta)";
        strengthResult.className = 'very-weak'; 
        return;
    } else if (password.length === 0) {
         strengthResult.textContent = "Introduceți o parolă.";
         strengthResult.className = '';
         return;
    }

  
    if (/[a-z]/.test(password)) hasLower = true;
    if (/[A-Z]/.test(password)) hasUpper = true;
    if (/\d/.test(password)) hasDigit = true;
  
    if (/[^a-zA-Z0-9]/.test(password)) hasSymbol = true;

    
    for (let i = 0; i < password.length - 2; i++) {
        let c1Code = password.charCodeAt(i);
        let c2Code = password.charCodeAt(i + 1);
        let c3Code = password.charCodeAt(i + 2);

       
        if ((c2Code === c1Code + 1 && c3Code === c2Code + 1) ||
            (c2Code === c1Code - 1 && c3Code === c2Code - 1))
        {
            
             let sub = password.substring(i, i + 3);
             if (/^[a-zA-Z]+$/.test(sub) || /^\d+$/.test(sub)) {
                  hasSequence = true;
                  break;
             }
        }
    }

   
    let criteriaMet = 0;
    if (hasUpper) criteriaMet++;
    if (hasLower) criteriaMet++;
    if (hasDigit) criteriaMet++;
    if (hasSymbol) criteriaMet++;

   
    if (hasSequence) {
        console.log("Secventa detectata!");
         if (criteriaMet > 1) criteriaMet--; 
    }

   
    let level = "";
    let cssClass = "";

    if (criteriaMet >= 4) { 
         level = "PUTERNICA";
         cssClass = 'strong';
    } else if (criteriaMet === 3) {
         level = "MEDIE";
         cssClass = 'medium';
    } else if (criteriaMet === 2) {
         level = "SLABA";
         cssClass = 'weak';
    } else { // 0 sau 1
         level = "FOARTE SLABA";
         cssClass = 'very-weak';
    }

    strengthResult.textContent = `Complexitate: ${level}`;
    strengthResult.className = cssClass; 
}


evaluatePassword("");