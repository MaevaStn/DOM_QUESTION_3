let heure = document.getElementById('heure');
let minutes = document.getElementById('minutes');
let secondes = document.getElementById('secondes');
let affichage = document.getElementById('affichage');

function calcHeure() {

    heure = heure.value;
    minutes = minutes.value;
    secondes = secondes.value;

    if (heure == 24 && minutes == 59 && secondes == 59) {
        heure = 0;
      }

      if (minutes == 59 && secondes == 59) {
        minutes = 0;
        heure++;
      } 
      if (secondes == 59) {
        secondes = 0;
      } else {
        secondes++
      }



      //alert("Il est " + heure + "h " + minutes + " min " + secondes + " secondes");
      affichage.innerText = "Il est " + heure + "h " + minutes + " min " + secondes + " secondes"

}

btn.addEventListener('click', calcHeure, false);
