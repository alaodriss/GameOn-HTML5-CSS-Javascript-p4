
let form = document.querySelector("#reserve");

//////////////////////////////Prenom////////////////////////////

//Ecouter la modification.

form.first.addEventListener('change',function(){
  validPrenom(this);
});

const validPrenom = function(inputPrenom){

  // Ceration de de la regxp pour valide le prenom;
  let prenomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  let testPrenom = prenomRegExp.test(inputPrenom.value);

  // recuperer la balise small
  let small = inputPrenom.nextElementSibling;
  // condition de verification 
  if(testPrenom){
    small.innerHTML= ''
  }else {
    small.innerHTML= "Saisissez un prénom qui contient au moins deux caractères alphabétiques";
  }
};

