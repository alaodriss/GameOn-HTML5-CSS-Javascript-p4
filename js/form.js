function validateForm()                                 
         { 
             var name = document.forms["myForm"]["name"];         
             if (name.value == ""){ 
                 document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
                 name.focus(); 
                 return false; 
             }else{
                 document.getElementById('errorname').innerHTML="";  
             }
         }