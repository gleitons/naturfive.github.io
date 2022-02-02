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

function encurtarLink(urlE) {
    const valor = urlE;
    $.getJSON( "https://is.gd/create.php?callback=?", {
      url: valor,
      format: "json"
  }).done(function( data ) {
      linkCurto = data.shorturl;
      if (linkCurto !== undefined) {
          document.getElementById('ImagemDoProduto').innerHTML += `<div class="miniaturaProduto DFlex">
          <img src="${valor}" alt="imagem min"> 
          <p>${linkCurto}</p>
      </div>linkCurto`; 
      } else {
        document.getElementById('ImagemDoProduto').innerHTML = "Erro ao criar link"
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
        
        
        const linkC = encurtarLink(DeProduto.image);
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
        
        const valoT = parseFloat(DeProduto.Preco);
        
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
          //  qtdParcelaReal =  qtdParcela.replace('.' ,',')
        // ${LocalizacaoPage}
        // ${exibeProdutos}
        //const linkImagemC = document.getElementById('ImagemDoProduto');
        if(DeProduto.SoHoje == 0){
            qtdParcelaReal =  qtdParcela.replace('.' ,',');
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}\n a imagem do produto é esta: \n${DeProduto.link}" target="_blank">
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
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}\n a imagem do produto é esta: \n${DeProduto.link}" target="_blank">
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