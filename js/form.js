

let form = document.querySelector("#reserve");





//////////////////////////////Prenom////////////////////////////

//Ecouter la modification.

form.first.addEventListener('change',function(){
  validPrenom(this);
});

const validPrenom = function(prenomElt){
  let prenom = prenomElt.value;
  // Creation de de la regxp pour valide le prenom;
  let prenomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  let msgErreurPrenom = document.getElementById("first_error");
  
  // le message d'erreur doit etre vide à chaque validation à chaque click sur le boutton C'est parti.
  msgErreurPrenom.textContent = ""; 

  // annuler le border.
  prenomElt.dataset.errorVisible = "false"; 

  if (prenomRegExp.test(prenom) === false) {
    msgErreurPrenom.textContent = "Saisissez un prénom qui contient au moins deux caractères alphabétiques";
    prenomElt.dataset.errorVisible = "true";
    return false;
  }

  return true;

}
//////////////////////////////Nom////////////////////////////


form.last.addEventListener('change',function(){
  validNom(this);
});

const validNom = function(nomElt){
  let nom = nomElt.value;
  // Creation de de la regxp pour valide le prenom;
  let nomRegExp = new RegExp("^[a-zA-Z]{2,}$");
  let msgErreurNom = document.getElementById("last_error");

  msgErreurNom.textContent = "";
  nomElt.dataset.errorVisible = "false";

  if (nomRegExp.test(nom) === false) {
    msgErreurNom.textContent = "Saisissez un nom qui contient au moins deux caractères alphabétiques";
    nomElt.dataset.errorVisible = "true";
    return false;
  }

  return true;
}

//////////////////////////////Mail////////////////////////////

// 
form.email.addEventListener('change',function(){
  validEmail(this);
});

const validEmail = function(emailElt){
 let email = emailElt.value;
  // Creation de de la regxp pour valide mail;
  let emailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  let msgErrorEmail = document.getElementById("email_error");

  msgErrorEmail.textContent = "";
    emailElt.dataset.errorVisible = "false";
  
    if (emailRegExp.test(email) === false) {
      msgErrorEmail.textContent = "Saisissez une adresse électronique valide";
      emailElt.dataset.errorVisible = "true";
      return false;
    }
    return true;
  }

//////////////////////////////date////////////////////////////

form.birthdate.addEventListener('change',function(){
  validDate(this);
});

const validDate = function(dateNaissanceElt){
  let dateNaissance = dateNaissanceElt.value;

  // Creation de de la regxp pour valide date;
  let regexDateNaissance = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  let msgErrorDate = document.getElementById("birthdate_error");
    msgErrorDate.textContent = "";
    dateNaissanceElt.dataset.errorVisible = "false";
    if (regexDateNaissance.test(dateNaissance) === false) {          //si la valeur de la date de naissance est indefnie alors return false.  
      msgErrorDate.textContent = "Saisissez votre date de naissance";
      dateNaissanceElt.dataset.errorVisible = "true";
      return false;
    }
    return true;
  }

//////////////////////////////quantity////////////////////////////

form.quantity.addEventListener('change',function(){
  validQuantity(this);
});

const validQuantity = function(tournoisElt){

  let tournois = tournoisElt.value;
  // Creation de de la regxp pour valide quantity;
  let quantityRegExp = new RegExp("^[0-9]+$", "g");
  let msgErrorTournois = document.getElementById("quantity_error");

  // Par défaut vider le message d'erreur
  msgErrorTournois.textContent = "";
    
  // Par défaut on affecte à l'attribut data-error-visible la valeur = false pour supprimer le style d'erreur.
  tournoisElt.dataset.errorVisible = "false";
  // si le champs est vide ou bien la valeur du champ n'est pas un numbre alors return false >> erreur.
  if (quantityRegExp.test(tournois) === false) { 
    msgErrorTournois.textContent = "Saisissez un chiffre qui correspond au nombre de vos tournois";
    tournoisElt.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

//////////////////////////////check ville////////////////////////////


/**
   * Fonction qui permet de choisir une ville .
   * @param {*} radiosElt 
   * @return booleen :  true = une ville est cochée, false = aucune ville n'est choisie.
   */

let villeCheckbox = document.querySelectorAll("div.formData input[name='location']");
 
   for( let i = 0;i < villeCheckbox.length; i++){
     
     villeCheckbox[i].addEventListener("click",function(e){
       validateVille(villeCheckbox);    
     })
 
   }
   
  
   function validateVille(radiosElt) {
    let msgErrorVille = document.getElementById("radio_error");
    msgErrorVille.textContent = "";
    let nbrSelectedVille = 0;      // on va stocker le resulat 0 (ou bien false) dans la variable nbrSelectedVille.
  
    for (let i = 0; i < radiosElt.length; i++) {
      if (radiosElt[i].checked) {
        nbrSelectedVille += 1;
      }
    }
    if (nbrSelectedVille <= 0) {
      msgErrorVille.textContent = "Choisissez une ville";
      return false;
    } else {
      return true;
    }
  
  }



//////////////////////////////Cochez les conditions générales////////////////////////////

  let conditionsGeneral = document.getElementById("checkbox1");
  conditionsGeneral.addEventListener("change",function(e){
    validateCondGene(conditionsGeneral);
   })

 function validateCondGene(condGeneElt) { 
   let msgErrorCg = document.getElementById("conditions_generales_error");
   msgErrorCg.textContent = "";
   condGeneElt.dataset.errorVisible = "false";

   if (!condGeneElt.checked) {
     msgErrorCg.textContent = "Cochez les conditions générales d'utilisation est obligatoire";
     condGeneElt.dataset.errorVisible = "true";

     return false;
   }
   return true;
 }



 // function de validation de formilaire 

  function validate(form) {
    let isValidatePrenom = validPrenom(form.first);
    let isValidateNom = validNom(form.last);
    let isValidateEmail = validEmail(form.email);
    let isValidateTournois = validQuantity(form.quantity);
    let isValidateDate = validDate(form.birthdate);
    let isValidateVille = validateVille(form.location);
    let isValidateCg = validateCondGene(form.conditions_generales);
    
    return (isValidatePrenom && isValidateNom && isValidateEmail && isValidateTournois && isValidateDate && isValidateVille && isValidateCg);
     }


    
     //Ecouter la modification de  submit 

form.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event);
  if (validate(this)){
    
    form.reset();

    closeModal();
    openConfirmationMessage();
  } else{
  
  }


});