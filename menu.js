function menuPrincipal() {
    
    
    document.getElementById('MenuPrincipal').innerHTML = `
    <div class="logoOn">
            <a href="/"><img src="https://www.naturfive.com/img/logo-naturfive-naturfive.png" alt="Logo naturfive natura Online"></a>
    </div>
    <div class="menuTop">
            
    <nav id="idMenu" class="opcoesMenu Dnone">
        
        <div class="iconF" onclick="menumob()">
        <i class="bi bi-x-square-fill"></i>
        </div>
        
        <li><a href="/">Inicio</a></li>
        <li><a href="/corpo-e-banho.html">Corpo</a></li>
        <li><a href="/maquiagem.html">Maquiagem</a></li>
        <li><a href="/feminina.html">Feminina</a></li>
        <li><a href="/masculina.html">Masculina</a></li>
        <li><a href="/infantil.html">Infantil</a></li>
        <li><a href="/depoimentos.html">Depoimentos</a></li>
        <li><a href="/quem-somos.html">Quem Somos</a></li>
        <li><a href="/contato.html">Contato</a></li>
        
    </nav>
    <a class="menuMobile" onclick="menumob()">
    <i class="bi  bi-list-ul" id="menum" ></i>
    </a>    
</div>`

    
}