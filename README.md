! Despre Proiect
Acest script a fost creat pentru a oferi utilizatorilor feedback instantaneu asupra complexității parolelor pe care le aleg.
Scopul este de a încuraja crearea unor parole mai sigure prin indicarea vizuală a punctelor forte și a celor slabe. 
! Funcționalități Principale
Evaluare în Timp Real: Complexitatea este recalculată la fiecare caracter introdus.
Lungime Minimă: Verifică dacă parola are cel puțin 8 caractere.
Varietate de Caractere:
Detectează prezența literelor mici (a-z).
Detectează prezența literelor mari (A-Z).
Detectează prezența cifrelor (0-9).
Detectează prezența simbolurilor (ex: !@#$%^&*).
Detecție Secvențe: Penalizează parolele care conțin secvențe simple de litere (ex: "abc", "qwe") sau cifre (ex: "123", "789"), atât crescătoare, cât și descrescătoare.
Feedback Vizual:
Afișează un mesaj textual: "FOARTE SLABA", "SLABA", "MEDIE", "PUTERNICA".
Aplică o clasă CSS elementului de rezultat pentru a schimba culoarea de fundal în funcție de complexitate.
! Tehnologii Folosite
JavaScript (ES6+): Pentru logica de evaluare și manipularea DOM.
HTML5: Pentru structura de bază a paginii de demo.
CSS3: Pentru stilizarea feedback-ului vizual.
! Cum Funcționează 
Input: Scriptul ascultă evenimentul input pe câmpul de parolă.
Lungime:
Dacă parola este goală, afișează "Introduceți o parolă.".
Dacă parola are mai puțin de 8 caractere (dar nu e goală), este marcată direct ca "FOARTE SLABA (Prea scurta)".
Analiza Caracterelor: Se verifică prezența literelor mici, mari, cifrelor și simbolurilor folosind expresii regulate.
Detecția Secvențelor:
Se iterează prin parolă pentru a căuta secvențe de 3 caractere consecutive.
O secvență este considerată dacă cele 3 caractere sunt fie toate litere, fie toate cifre, și sunt consecutive în ordine alfabetică/numerică (ex: abc, 876).
Dacă se găsește o secvență, se setează un flag hasSequence.
Calculul Criteriilor Îndeplinite:
Se numără câte tipuri de caractere diferite sunt prezente (litere mici, mari, cifre, simboluri). Acest număr este stocat în criteriaMet.
Penalizare pentru Secvențe: Dacă a fost detectată o secvență (hasSequence) și parola îndeplinea deja mai mult de un criteriu de varietate (criteriaMet > 1), numărul de criterii îndeplinite este redus cu 1.
Aceasta penalizează parolele care, deși diverse, conțin și puncte slabe evidente.
Determinarea Nivelului de Complexitate:
PUTERNICA: criteriaMet >= 4
MEDIE: criteriaMet === 3
SLABA: criteriaMet === 2
FOARTE SLABA: criteriaMet < 2 (sau dacă a fost prea scurtă inițial)
Afișare Rezultat: Mesajul corespunzător și clasa CSS sunt aplicate elementului strengthResult.
