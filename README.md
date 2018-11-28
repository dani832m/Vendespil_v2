# Vendespil_v2
Memory Game udviklet med HTML5, CSS3 og JavaScript.

### Opbygningen
- Scriptet initialiserer et array med 8 par (16 billeder), putter det i et grid og blander billederne tilfældigt.
- I gitteret oprettes hvert kort med "front" og "back".
- Når der klikkes på et kort, tjekkes der, om det matcher med det næste klik.
- Hvis der er match, fjernes kortene (stikket) fra boardet. Hvis der ikke er match, vises bagsiden igen.
- Hvis der er match, så inkrementeres antallet af fundne par desuden med 1.
- Når vinduet loades, starter der en timer, som tæller ned fra 1 minut.
- Når tiden er gået, angives antal fundne par i en alert-box, siden reloades, og man kan begynde forfra igen.

## Screenshot
![alt text](https://i.imgur.com/f8DKw5q.png)
