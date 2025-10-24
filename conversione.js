//lunghezza
var m = ["mm","cm","dm","m","dam","hm","km"];
const america = {
  in: 1,          // 1 pollice = 1 pollice
  ft: 12,         // 1 piede = 12 pollici
  yd: 36,         // 1 yard = 36 pollici
  mi: 63360       // 1 miglio = 63360 pollici
};
//massa
var m = ["mg","cg","dg","g","dag","hg","kg"];
let diff = 0;
//prendo dal buttone l'unita da convertire
document.getElementById("mioBottone").onclick = function() {
    const base = document.getElementById("mioInput").value;
  };
  document.getElementById("mioBottone2").onclick = function() {
    const desiderata = document.getElementById("mioInput").value;
  };
  document.getElementById("mioBottone2").onclick = function() {
    const Atttuale = document.getElementById("mioInput").value;
  };


  function  conversioneTraM(misurabase,misuradesiderata,valoriAttuali) {
    const diff = unita.indexOf(misurabase) - unita.indexOf(misuradesiderata);
    return valoriAttuali * 10 ** diff;
}
function  conversioneTraInch(misurabase,misuradesiderata,valoriAttuali) {
  //lunghezzza 
  //tra lo stesso sistema
  //12,3,1760 
  const valoreInPollici = valore * america[misuraBase];
  const risultato = valoreInPollici / america[misuraDesiderata];

  return risultato;
}
const minP = 39.3701;

function conversioneMetriPollci(misurabase, misuradesiderata, valoriAttuali) {
  let risposta = valoriAttuali;
  if (misurabase === "m" && misuradesiderata === "in") {
    risposta = valoriAttuali * minP;
  } else if (misurabase === "in" && misuradesiderata === "m") {
    risposta = valoriAttuali / minP;
  } else {
    risposta = "Unità non supportata";
  }
  return risposta
}























//conversione tra un sistema e l'altro
//var conversione = true;
//let counter = 0;
//while(conversione){

}