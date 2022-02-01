
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

//////////////////////////////Nom////////////////////////////


form.last.addEventListener('change',function(){
  validNom(this);
});

const validNom = function(inputNom){

  // Ceration de de la regxp pour valide le prenom;
  let nomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  let testNom = nomRegExp.test(inputNom.value);

  // recuperer la balise small
  let small = inputNom.nextElementSibling;
  // condition de verification 
  if(testNom){
    small.innerHTML= ''
  }else {
    small.innerHTML= '"Saisissez un nom qui contient au moins deux caractères alphabétiques";'
  }
};

//////////////////////////////Mail////////////////////////////


form.email.addEventListener('change',function(){
  validEmail(this);
});

const validEmail = function(inputEmail){

  // Ceration de de la regxp pour valide mail;
  let emailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  let testEmail = emailRegExp.test(inputEmail.value);

  // recuperer la balise small
  let small = inputEmail.nextElementSibling;
  // condition de verification 
  if(testEmail){
    small.innerHTML= ''
  }else {
    small.innerHTML= "Saisissez une adresse électronique valide";
  }
};

//////////////////////////////date////////////////////////////

form.birthdate.addEventListener('change',function(){
  validDate(this);
});

const validDate = function(inputDate){

  // Ceration de de la regxp pour valide date;
  let dateRegExp = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  let testDate = dateRegExp.test(inputDate.value);

  // recuperer la balise small
  let small = inputDate.nextElementSibling;
  // condition de verification 
  if(testDate){
    small.innerHTML= ''
  }else {
    small.innerHTML= "Saisissez une adresse électronique valide";
  }
};
