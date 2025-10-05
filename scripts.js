(function(){
  const _s=["id","code","content","LEG Andilamena","27/06/2025","Vérifier les valeurs que vous entrez ?","INFORMATION DE VOTRE RECU","Entreprise ","Digital ID ","Numéro ","Date de fabrication "," VOTRE RECU EST INNCONNU !","sections","recu"];
  const _S=(i)=>_s[i];

  function _c(){
    var a=document.getElementById(_S(0)).value;
    var b=document.getElementById(_S(1)).value;
    var org=_S(3);
    var dt=_S(4);
    var out="";
    if(isNaN(a)||isNaN(b)||!_i(a,b)){
      alert(_S(5));
      document.getElementById(_S(2)).innerHTML = window[_S(12)] ? window[_S(12)][window[_S(13)]] : "";
    } else {
      var n=_f(_x(b,a));
      if(_e(n)){
        out=[
          '<div class="container">',
          '<h3>',_S(6),'</h3>',
          '<p>',_S(7),org,'</p>',
          '<p>',_S(8),b,'</p>',
          '<p>',_S(9),n,'</p>',
          '<p>',_S(10),dt,'</p><br><br>',
          '</div>'
        ].join('');
      } else out=_S(11);
      document.getElementById(_S(2)).innerHTML=out;
    }
  }

  function _k(k){
    const k1=Math.floor(k/100000000);
    const k2=Math.floor((k-k1*100000000)/10000);
    const k3=Math.floor((k-k1*100000000)-k2*10000);
    return {'1':k1,'2':k2,'3':k3};
  }

  function _e(n){
    const v=Math.floor(n);
    return (n-v)==0;
  }

  function _x(c,k){ const t=_k(k); const n0=t['1']-c*5; const n1=c*4+t['2']; const n2=c*3+t['3']; return ''+n2+''+n1+''+n0; }

  function _f(nb){ return String(nb).padStart(4,'0'); }

  function _g(id,key){
    const t=_k(key);
    let c=Math.floor(id/10000)*10000;
    c=(t['1']-(id-c))/5;
    return c;
  }

  function _i(a,b){
    var ok=0;
    if(a>99999999999 && b>99999999999 && a<1000000000000000 && b<1000000000000000) ok=1;
    return ok;
  }

  // export under original name so existing HTML onclick="controle()" keeps working
  window.controle=_c;
  // (optional) also expose obf names if needed
  window.__obf={_c,_k,_e,_x,_f,_g,_i};
})();
