/* Calcul d'ammortisment */
  function controle()
  {
    var id = document.getElementById("id-recu").value;
    var code = document.getElementById("code-recu").value;
    var text = "";
    if(isNaN(id) || isNaN(code)) {
      text = "Vérifier les valeurs que vous entrez ? ";
    }
    else {
      text = "Vrai numerique !";
    }
    
    
    document.getElementById('content').innerHTML = text;
  }
