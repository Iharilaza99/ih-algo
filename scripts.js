
	function isCode(a,b){var is=0; if(a>99999999999 && b>99999999999 && a<1000000000000000 && b<1000000000000000){ is=1;} return is;}
	function mk(k) { 
		let k1 = Math.floor((k/(100000000))); 
		let k2 = Math.floor(((k-k1*100000000)/10000)); 
		let k3 = Math.floor(((k-k1*100000000)-k2*10000)); 
		let t=[k1,k2,k3]; 
		return t;  
	}
    function gtc(i,c){ 
    	let k = myKey(c); 
    	let code = Math.floor((i/10000)*10000); 
    	return (k[1]-(i-code))/5; 
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
      document.getElementById('content').innerHTML = text;
      alert(getCode(id,code));
      
    } 
  }
