function menuPrincipal() {
    
    
    document.getElementById('MenuPrincipal').innerHTML = `
    <div class="logoOn">
            <a href="/"><img src="https://www.naturfive.com/img/logo-naturfive-naturfive.png" alt="Logo naturfive natura Online"></a>
            <p><em>Somos representante oficial da <a href="https://www.natura.com.br/c/tudo-em-promocoes?consultoria=naturfive" target="_blank">Natura Cosméticos</a></em></p> 
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
        <li><a href="/contato/index.html">Contato</a></li>
        
    </nav>
    <a class="menuMobile" onclick="menumob()">
    <i class="bi  bi-list-ul" id="menum" ></i>
    </a>    
</div>`

    
}
function menuFooterIn() {
    document.getElementById('menuFooterR').innerHTML = `<div class="footerInfo">
    <div class="itensFoo">
        <div class="blocoFooter">
            <h3>INSTITUCIONAL</h3>
            <div class="institucionalFooter" id="menuInstitucional">
                <nav class="navFooter">
                    <li><a href="/quem-somos.html">+ Quem Somos</a></li>
                    <li><a href="/fale-conosco.html">+ Fale Conosco</a></li>
                    <li><a href="/onde-estamos.html">+ Onde estamos</a></li>
                    <li><a href="/indique.html">+ Indique nossa loja</a></li>
                    <li><a href="https://naturfive.com">+ Página inicial</a></li>
                    <li><a href="/mapa-do-site.html">+ Mapa do site</a></li>
                </nav>
            </div>
        </div>
        <div class="blocoFooter">
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <div class="institucionalFooter" id="menuInstitucional">
                <nav class="navFooter">
                    <li><a href="/como-comprar.html">+ Como comprar</a></li>
                    <li><a href="/politica-de-privacidade.html">+ Política de Privacidade</a></li>
                    <li><a href="/troca-e-devolucoes.html">+ Troca e devoluções</a></li>
                    <li><a href="/perguntas-frequentes.html">+ Perguntas frequentes</a></li>
                    <li><a href="/fretes-e-entregas.html">+ Fretes e entregas</a></li>
                    
                </nav>
            </div>
        </div>
        <div class="blocoFooter">
            <h3>ATENDIMENTO</h3>
            <div class="institucionalFooter" id="menuInstitucional">
                <nav class="navFooter">
                    <li><a href="#">+ (38) 99916-7841</a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5538999533296&text=Ol%C3%A1,%20gostaria%20de%20comprar%20o%20produto%20alguns%20produtos%20natura!%20Poderia%20me%20ajudar?" target="_blank">+ (38) 99916-7841 (Whatsapp)</a></li>
                    <p>Horário comercial: 8:00 as 18:00 hrs.</p>
                    
                </nav>
            </div>
        </div>
        <div class="blocoFooter">
            <h3>REDE SOCIAIS</h3>
            <div class="institucionalFooter" id="menuInstitucional">
                <nav class="navFooter">
                    <li><a href="https://www.instagram.com/naturfive_natura/" target="_blank"><i class="bi bi-instagram"> Instagram</i></a></li>
                    <li><a href="https://twitter.com/naturfive" target="_blank"><i class="bi bi-twitter"> Twitter</i></a></li>
                    <li><a href="/contato.html"><i class="bi bi-youtube"> Youtube</i></a></li>
                </nav>
            </div>
        </div>
    </div>

    <div class="itensFoo">
    <div class="blocoFooter">
        <h3>ENDEREÇO</h3>
        <div class="institucionalFooter" id="menuInstitucional">
            <nav class="navFooter">
                <p>Entregamos em todo o Brasil - <a href="">Naturfive Cosméticos parceiro Oficial Natura</a></p>
                
            </nav>
        </div>
    </div>
    <div class="blocoFooter">
        <h3>FORMAS DE PAGAMENTO</h3>
        <div class="institucionalFooter" id="menuInstitucional">
            <nav class="navFooter">
                <div class="formasP">
                    <img src="/natura-img/metodos-de-pagamento-natura.png" alt="">
                </div>
                
                
            </nav>
        </div>
    </div>
    <div class="blocoFooter">
        <h3>CERTIFICADO</h3>
        <div class="institucionalFooter" id="menuInstitucional">
            <nav class="navFooter">
                <div class="secureFoot">
                    <img src="https://34901.cdn.simplo7.net/static/34901/certificado/footer_142799667316543.gif" alt="">
                    <img src="https://34901.cdn.simplo7.net/static/34901/certificado/footer_155127405562491.png" alt="">
                </div>
                
                
            </nav>
        </div>
    </div>
    <div class="blocoFooter">
        <h3>NOVIDADES</h3>
        <div class="institucionalFooter" id="menuInstitucional">
            <nav class="navFooter">
                <p>Receba dicas e novidades direto no seu e-mail</p>
                <div class="envieFoo">
                    <div>        
                        <form action="https://formsquash.io/f/Yagn7W4tQ37gxRyhFa2T" method="POST">
                        <input type="text" placeholder="Seu Nome" name="" id="">
                        <input type="email" placeholder="Seu E-mail" name="" id="" required>
                        <input type="submit" value="CADASTRAR">
                        </form>                            
                        
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
</div>`
}