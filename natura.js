function onliad() {
    image1();
    //produtosID();
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

      
function produtosNatura() {
    var produtosNome = `[
        {
            "image": "http://static.natura.com.br/static/www/img/promocoes/17500.jpg", 
            "nomeProduto": "NomedoProduto",
            "categoria":"ma",
            "Preco":"80,00",            
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"LinkAfiliado"},
        {
            "image": "http://static.natura.com.br/static/www/img/promocoes/16869.jpg", 
            "nomeProduto": "Perfume Natura Ekos Frescor Buriti 150ml",
            "categoria":"fe",
            "Preco":"49,90",
            "DescontoPorcento":"40",
            "SoHoje": "1",
            "link":"LinkAfiliado"},
        {
            "image": "http://static.natura.com.br/static/www/img/promocoes/80839.jpg", 
            "nomeProduto": "NomedoProduto",
            "categoria":"in",
            "Preco":"24,50",
            "DescontoPorcento":"30",
            "SoHoje": "0",
            "link":"LinkAfiliado"},
        {
            "image": "linkImagem", 
            "nomeProduto": "NomedoProduto",
            "categoria":"ge",
            "Preco": "24,50",
            "DescontoPorcento":"30",
            "SoHoje": "1",
            "link":"LinkAfiliado"}
]`;
    //const qtdProdutos = produtosN.length;
    
    const todosProdutos = JSON.parse(produtosNome);
    
   
    todosProdutos.forEach(function (DeProduto) {
        const varDesconto = ((parseFloat(DeProduto.Preco) *100 ) / parseFloat(DeProduto.DescontoPorcento) / 2 ).toFixed(2);
        //const MaxDesconto = 

        if(DeProduto.SoHoje == 0){

            document.getElementById('oqtem').innerHTML += `<a href="/natura.html">
        <div class="produto" >
            
            <img src="${DeProduto.image}" alt="">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${DeProduto.categoria}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
            <button>Comprar</button>
        </div>
    </a>`;
        } else {
        document.getElementById('oqtem').innerHTML += `<a href="/natura.html">
        <div class="produto" >
            <h1>Só Hoje!</h1>
            <img src="${DeProduto.image}" alt="">
            <h2>${DeProduto.nomeProduto}</h2>
            <p class="categoria">${DeProduto.categoria}</p>
            <p class="precoVelho">De: <s >R$ ${varDesconto}</s></p>
            <p class="novoPreco">Por: <span>R$ ${DeProduto.Preco}</span></p>
            <button>Comprar</button>
        </div>
    </a>`;}
    });
    //alert('nada');
    

   
}
function image1() {
    document.getElementById('bannerHero').src = "/natura/infantil.jpg";
    setTimeout("image2()", 4000);
    document.getElementById('linkBanner').href = "/produtos/index.html";
}
function image2(){
    document.getElementById('bannerHero').src = "/natura/presente.jpg";
    setTimeout("image1()", 4000);
    document.getElementById('linkBanner').href = "/contato/index.html";
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