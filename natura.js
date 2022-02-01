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
    var produtosNome = `[
        {
            "image": "https://static.natura.com/cdn/ff/kxD1A4LhUp7PtwaPceXqglgUH2-om-CfqfFAKtqMjk0/1642996431/public/products/68944_1_30.jpg", 
            "nomeProduto": "Kriska Shock Desodorante Colônia",
            "categoria":"fe",
            "Preco":"63,50",  
            "codigo":"68944",           
            "DescontoPorcento":"30",
            "SoHoje": "1",
            "link":"https://is.gd/PPVZXk"},
        {
            "image": "https://static.natura.com/cdn/ff/CC6AbvGfQvRWIbjjIajQuBS-4Zi7bP0HqmSLz8maqkM/1643665811/public/products/71600_1_17.jpg", 
            "nomeProduto": "Biografia Desodorante Colônia Feminino",
            "categoria":"fe",
            "Preco":"82,90",  
            "codigo":"71600",           
            "DescontoPorcento":"30",
            "SoHoje": "1",
            "link":"https://is.gd/Fdh5Is"},
        {
            "image": "https://static.natura.com/cdn/ff/Xr_X7DXf0S_4AJxBn0-UauDaVxU5_YwDa59wswpAjqo/1643665838/public/products/43135_1_2.jpg", 
            "nomeProduto": "Una Infinito Deo Parfum",
            "categoria":"fe",
            "Preco":"169,90",  
            "codigo":"43135",           
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"https://is.gd/JOzPmB"},
        {
            "image": "https://static.natura.com/cdn/ff/a4l4Vt4cuv65TE-nuyI7eAIulseQzH9AtJ9sj8tAapk/1643664607/public/products/76421_1_21.jpg", 
            "nomeProduto": "Essencial Deo Parfum Feminino",
            "categoria":"fe",
            "Preco":"124,90",  
            "codigo":"76421",           
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"https://is.gd/2KSw2h"},
        {
            "image": "https://static.natura.com/cdn/ff/xzrGt-DmkOcWgksG-KYjOSNTVJ95bvfXFn2QrcHxxQg/1642996300/public/products/102422_1_2.jpg", 
            "nomeProduto": "Humor Liberta Desodorante Colônia",
            "categoria":"hu",
            "Preco":"83,90",  
            "codigo":"102422",           
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"https://is.gd/6FZhb8"},
        {
            "image": "https://static.natura.com/cdn/ff/cVTmPdxNIk0ytBIzhHwKb5Ifd00aUsw9y2zkCNUBSe4/1642996349/public/products/2791_1_2.jpg", 
            "nomeProduto": "Refil Creme Desodorante Nutritivo para o Corpo Tododia Tâmara e Canela",
            "categoria":"TODODIA",
            "Preco":"22,90",  
            "codigo":"2791",                
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"https://is.gd/TDqhLM"},
        {
            "image": "http://static.natura.com.br/static/www/img/promocoes/16869.jpg", 
            "nomeProduto": "Perfume Natura Ekos Frescor Buriti 150ml",
            "categoria":"fe",
            "Preco":"49,90",
            "codigo":"4545",      
            "DescontoPorcento":"40",
            "SoHoje": "1",
            "link":"https://is.gd/LnGp9c"},
        {
            "image": "https://static.natura.com/cdn/ff/m0QdDCV9ofJv8qiMDjTNqOuzuKxqinnQk8KThaPFRuU/1643735477/public/products/76420_1_2.jpg", 
            "nomeProduto": "Essencial Deo Parfum Masculino",
            "categoria":"ma",
            "Preco":"124,90",
            "codigo":"5544",      
            "DescontoPorcento":"30",
            "SoHoje": "1",
            "link":"https://is.gd/VOn5Wr"},
        {
            "image": "https://static.natura.com/cdn/ff/WPX9yTbz-vx_BNQC-yFLozbpngNsDWcnaPLzRnSz-AI/1643735433/public/products/22557_1_3.jpg", 
            "nomeProduto": "Kaiak Aventura Desodorante Colônia Masculino",
            "categoria":"ma",
            "Preco":"63,45",
            "codigo":"22557",      
            "DescontoPorcento":"30",
            "SoHoje": "1",
            "link":"https://is.gd/67Nx9n"}
]`;
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

        // ${LocalizacaoPage}
        // ${exibeProdutos}
        //const linkImagemC = document.getElementById('ImagemDoProduto');
        if(DeProduto.SoHoje == 0){
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}\n a imagem do produto é esta: \n${DeProduto.link}" target="_blank">
        <div class="produto" >            
            <img src="${DeProduto.image}" alt="${DeProduto.nomeProduto} com desconto">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${categoriaP}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
            <button>Comprar</button>
           
            
        </div>
    </a></br></br>`;
        } else {
        document.getElementById(`${exibeProdutos}`).innerHTML += `<a href="https://api.whatsapp.com/send?phone=5538999533296&text=Olá, gostaria de comprar o produto *${DeProduto.nomeProduto}*\n código ${DeProduto.codigo}\n a imagem do produto é esta: \n${DeProduto.link}" target="_blank">
        <div class="produto" >
            <h1>Só Hoje!</h1>
            <img src="${DeProduto.image}" alt="${DeProduto.nomeProduto} com desconto">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${categoriaP}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
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