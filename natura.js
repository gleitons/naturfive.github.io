//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
function onliad() {
    menuPrincipal()
    image1();
    //produtosID();
    produtosNatura()
    //bodyP();
    
}

function links(){
    produtosNatura()
}
function menumob(){
    const menuMob = document.getElementById('idMenu');
    if (menuMob.className === "Dnone") {
        menuMob.className += "DBlock";        
      } else {
        menuMob.className = "Dnone";
      }
         
}

function encurtarLink(urlE, nomeP, codigoP, precoP) {
    const valor = urlE;
    const likMPago = `https://api.whatsapp.com/send?phone=5538999533296&text=Ol%C3%A1,%20*acabei%20de%20adquirir*%20o%20produto%20*${nomeP}*%20c%C3%B3digo%20${codigoP},%20R$%20${precoP},%20Gostaria%20de%20receber%20o%20produto%20o%20mais%20breve%20poss%C3%ADvel,%20segue%20informa%C3%A7%C3%B5es%20de%20entrega%20-%20Nome%20Completo:%20Rua:%20N%C2%BA:%20Bairro:%20Cidade:%20CEP:`;
    const linkAguardando = `https://api.whatsapp.com/send?phone=5538999533296&text=Ol%C3%A1,%20estou%20*aguardando%20comprovacao%20de%20pagamento*%20do%20produto%20*${nomeP}*%20c%C3%B3digo%20${codigoP},%20R$%20${precoP},%20Gostaria%20de%20receber%20o%20produto%20o%20mais%20breve%20poss%C3%ADvel,%20segue%20informa%C3%A7%C3%B5es%20de%20entrega%20-%20Nome%20Completo:%20Rua:%20N%C2%BA:%20Bairro:%20Cidade:%20CEP:`;
    lMercaP =  linkMercadoPago(likMPago);
    $.getJSON( "https://is.gd/create.php?callback=?", {
      url: valor,
      format: "json"
  }).done(function( data ) {
      linkCurto = data.shorturl;
      if (linkCurto !== undefined) {
          document.getElementById('ImagemDoProduto').innerHTML += `<div class="miniaturaProduto DFlex">
          <img src="${valor}" alt="imagem min"> 
          <p>${linkCurto}</p>
          <div id="linkMP">${nomeP}</div>  
          <div>
            <a style="margin: 10px;" href="${likMPago}" target="_blank">Completo</a></div>
            <a href="${linkAguardando}" target="_blank">Aguardando</a></div>
          </div>
          
      `; 
      } else {
        document.getElementById('ImagemDoProduto').innerHTML = "Erro ao criar link"
      }
      
      
  })
    
  }
  function linkMercadoPago(lMP) {
    const valor = lMP;
    $.getJSON( "https://is.gd/create.php?callback=?", {
      url: valor,
      format: "json"
  }).done(function( data ) {
      linkCurto = data.shorturl;
      if (linkCurto !== undefined) {
        document.getElementById('LinMP').innerHTML += `  
        <div>
          <a href="${linkCurto}" target="_blank">Link</a></div>
        </div>
    `; 
      ; 
      } else {
        document.getElementById('LinMP').innerHTML = "Erro ao criar link"
      }
      
      
  })
    
  }

function bodyP() {
    const li = "https://google.com";
    const mos = toString(encurtarLink(li).value);
    mostracon.innerHTML = `${mos}`
}
      
function produtosNatura() {
    var produtosNome = naturaOnline();
    //const qtdProdutos = produtosN.length;
    
    const todosProdutos = JSON.parse(produtosNome);
    todosProdutos.forEach(function (DeProduto) {
        
        
        const linkC = encurtarLink(DeProduto.image, DeProduto.nomeProduto, DeProduto.codigo, DeProduto.Preco);
        const varDesconto = ((parseFloat(DeProduto.Preco) *100 ) / parseFloat(DeProduto.DescontoPorcento) / 2 ).toFixed(2);
        
        //const LocalizacaoPage = window.location.pathname;
        
        //const catProdutoName = DeProduto.categoria;
        const exibeProdutos = 'oqtem'
        
        if (DeProduto.categoria == "ma") {
            categoriaP = "Masculina";
        } else if (DeProduto.categoria == "fe"){
            categoriaP = "Feminina";
        } else if (DeProduto.categoria == "in"){
            categoriaP = "Infantil";
        } else if (DeProduto.categoria == "mq"){
            categoriaP = "Maquiagem";                   
        } else if (DeProduto.categoria == "hu"){
            categoriaP = "Humor";                   
        }else {
            categoriaP = `${DeProduto.categoria}`;    
        };
        
        const valoT = parseFloat(DeProduto.Preco).toFixed(2,2);
        
        if (valoT <= 40 ) {
            qtdParcela = DeProduto.Preco;
            qtdX = "À vista em 1x de"
        } else if (valoT >= 41 && valoT <= 70) {
            qtdParcela = (valoT /1.95).toFixed(2,2);
            qtdX = "À vista ou em até <strong>2x de</strong>"
        } else if (valoT >= 71 && valoT <= 100) {
            qtdParcela = (valoT /2.95).toFixed(2,2);
            qtdX = "À vista ou em até <strong>3x de</strong>"
        } else {
            qtdParcela = (valoT /3.95).toFixed(2,2);
            qtdX = "À vista ou em até <strong>4x de</strong>"
        }
        const precoProduto = DeProduto.Preco;
        // ${LocalizacaoPage}
        // ${exibeProdutos}
        //const linkImagemC = document.getElementById('ImagemDoProduto');
        if(DeProduto.SoHoje == 0){
            qtdParcelaReal =  qtdParcela.replace('.' ,',');
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}, R$ ${precoProduto},\n a imagem do produto é esta: \n${DeProduto.link} \n- para *COMPRAR AGORA*, basta clicar aqui ${DeProduto.linkPagamento}" target="_blank">
        <div class="produto" >            
            <img src="${DeProduto.image}" alt="${DeProduto.nomeProduto} com desconto">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${categoriaP}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
            <p class="parcel">${qtdX} <span>R$ ${qtdParcelaReal}</span>.</p>
            <button>Comprar</button>
           
            
        </div>
    </a></br></br>`;
        } else {
        qtdParcelaReal =  qtdParcela.replace('.' ,',');
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}, R$ ${precoProduto},  a imagem do produto é esta: \n${DeProduto.link} \n- para *COMPRAR AGORA*, basta clicar aqui ${DeProduto.linkPagamento}" target="_blank">
        <div class="produto" >
            <h1>Só Hoje!</h1>
            <img src="${DeProduto.image}" alt="${DeProduto.nomeProduto} com desconto">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${categoriaP}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
            <p class="parcel">${qtdX} R$ <span>${qtdParcelaReal}</span>.</p>
            <button>Comprar</button>           
        </div>
    </a>`;}
    });



    
        //console.log(typeof linkC);
       
        



    //alert({urll});
    /*Categorias Abaixo */
    /* Categoria Feminina */
    
    

    
    
    
   
}
function categoriaFemininas() {
    document.getElementById('catFeminina').innerHTML = produtosNatura(2);
    
}



function image1() {
    document.getElementById('bannerHero').src = "/natura/infantil.jpg";
    setTimeout("image2()", 4000);
    document.getElementById('linkBanner').href = "https://www.natura.com.br/consultoria/naturfive";
}
function image2(){
    document.getElementById('bannerHero').src = "/natura/presente.jpg";
    setTimeout("image1()", 4000);
    document.getElementById('linkBanner').href = "https://www.natura.com.br/consultoria/naturfive";
}
function produtosID() {
    Produtos.innerHTML = `<a href="/natura.html" target="_blank" rel="nofollow">
    <div class="produto">
        <h1>Só Hoje!</h1>
        <img src="http://static.natura.com.br/static/www/img/promocoes/17500.jpg" alt="">
        <h2>Necessaire Kaiak Aventura Masc</h2>
        <p class="precoVelho">De: <s >R$ 64,00</s></p>
        <p class="novoPreco">Por: <span>R$ 31,00</span></p>
        <button>Comprar</button>
    </div>`
}
function preencheProduto(qp){

    return `<a href="/natura.html">
    <div class="produto">
        <h1>Só Hoje!</h1>
        <img src="http://static.natura.com.br/static/www/img/promocoes/17500.jpg" alt="">
        <h2>Necessaire Kaiak Aventura Masc</h2>
        <p class="precoVelho">De: <s >R$ 64,00</s></p>
        <p class="novoPreco">Por: <span>R$ 31,00</span></p>
        <button>Comprar</button>
    </div>
</a>`;
}
function contaProduto(qtdPruto) {
    return qtdPruto;
}
function menuPrincipal() {
    document.getElementById('MenuPrincipal').innerHTML = `<div class="menuTop">
            
    <nav id="idMenu" class="opcoesMenu Dnone">
        <li><a href="/natura.html">Inicio</a></li>
        <li><a href="/maquiagem.html">Maquiagem</a></li>
        <li><a href="/feminina.html">Feminina</a></li>
        <li><a href="/masculina.html">Masculina</a></li>
        <li><a href="/infantil.html">Infantil</a></li>
        
    </nav>
    <a class="menuMobile" onclick="menumob()"><i class="bi  bi-list-ul" id="menum" ></i>
    </a>    
</div>`
    
}