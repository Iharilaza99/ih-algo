  function isCode(a,b){var is=0; if(a>99999999999 && b>99999999999 && a<1000000000000000 && b<1000000000000000){ is=1;} return is;}
	
  function gtc(i,c){ 
    let k = Math.floor(c/100000000);
    let code = Math.floor(i/10000)*10000; 
    code = Math.floor((k-(i-code))/5);
    return code; 
  }

	function controle() {
    var id = document.getElementById("id").value;
    var code = document.getElementById("code").value;
    var text = "";
    if(isNaN(id) || isNaN(code) || !isCode(id, code)) { 
      alert("Vérifier les valeurs que vous entrez ?");
      document.getElementById("content").innerHTML = sections[recu];
    }
    else {
      text = "Vrai numerique !";
      alert(gtc(id,code));
      document.getElementById('content').innerHTML = text;
      
    } 
  }
