// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-12345-6', 'auto');

    window.onload =  function page(){
    ga('send', 'pageview');
    
   }
      
   let ct = document.getElementById("contato");
         ct.addEventListener("click", ga('send','event','menu','entre_em_contato','link_externo'));
      
    let dw = document.getElementById("download");
        dw.onclick = ga('send','event','menu','download_pdf','download_pdf');


    function lorem(){
        let lorem = document.getElementById("lorem");
            lorem.onclick = ga('send','event','analise','ver_mais','Lorem');
    }
    function ipsum(){
        let ipsum = document.getElementById("ipsum");
            ipsum.onclick = ga('send','event','analise','ver_mais','Ipsum');

    }
        
    function dolor(){

        let dolor = document.getElementById("dolor");
            dolor.onclick = ga('send','event','analise','ver_mais','Dolor');

    }
        
    function valida_form()  
        {
            if(document.getElementById("nome").value != ""){
                ga('send','event','contato','nome','preencheu');
            }
            if(document.getElementById("email").value != ""){
                ga('send','event','contato','email','preencheu');
            }
            if(document.getElementById("telefone").value != ""){
                ga('send','event','contato','telefone','preencheu');
            }
            if(document.getElementById("aceito").value != ""){
                ga('send','event','contato','aceito','preencheu');
            }
            

        }

        window.contatoenviado = function(){
            ga('send','event','contato','enviado','enviado');
        }
    