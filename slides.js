
var consultor = "?consultoria=naturfive"
function slidesBody() {
    const aleBanner = (Math.random() * 8).toFixed(0,1);
   
    
    if (aleBanner == 1) {
        bannerPromo1();
    } else if (aleBanner == 2){
        bannerPromo2();
    } else if (aleBanner == 3){
        bannerPromo3();
    }else if (aleBanner == 4){
        bannerPromo4();
    }else if (aleBanner == 5){
        bannerPromo5();
    } else if (aleBanner == 5){
        bannerPromo6();
    } else if (aleBanner == 5){
        bannerPromo7();
    }else {
        bannerPromo8();
    }
   
    
}
function backgroundB() {
    document.getElementById('bodyNatura').style.backgroundImage = 'url(https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg)'
    document.getElementById('bodyNatura')
}

function bannerPromo1() {
    const urlR = "https://static.natura.com/cdn/ff/fii265E3jvD-Oh0TYE-3Hk_D-e2TmNsbvif3Qf6dwes/1644524379/public/styles/banner_full_desktop/public/2022-02/1920x695_v1_essencial.jpg?itok=ZkvD2JId"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = `https://www.natura.com.br/a-casa-de-perfumaria-do-brasil?consultoria=naturfive&iprom_creative=lp_conheca_acasadeperfumariadobrasil&iprom_id=home_bannerprincipal&iprom_name=destaque1_desejotemcheiro_cpb_10022022&iprom_pos=4`
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo2() {
    const urlR = "https://static.natura.com/cdn/ff/tAWFyt8HxtZjLQUf8EtW9CswTLmyiBDtKrS0nEA63kM/1644938071/public/styles/banner_full_desktop/public/2022-02/1920x500-cat_0.jpg?itok=Vy4ZIS5B"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/c/semana-especial?consultoria=naturfive&iprom_creative=cat_euquero_semanaespecial&iprom_id=home_bannerprincipal&iprom_name=destaque1_liquida-perfumaria_14022022&iprom_pos=2"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo3() {
    const urlR = "https://static.natura.com/cdn/ff/Ek_NGA_J4KVgTYZXg_iTvqp3cVugH7eStBQKhDkkW2w/1643060748/public/styles/banner_full_desktop/public/2022-01/essencial-refil-fem-desk_2.jpg?itok=PsLnlJ2P"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo4() {
    const urlR = "https://static.natura.com/cdn/ff/nxUPcPSteuv63ixr9ervJy971FZb6hP0Pbt0XtWKjSs/1644595263/public/styles/banner_full_desktop/public/2022-02/1920x695-Home-Desk_0.jpg?itok=UqtnN75-"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/una?consultoria=naturfive&iprom_creative=lp_conheca_una&iprom_id=home_bannerprincipal&iprom_name=destaque1_una_meuvermelho_ajustado_11022022&iprom_pos=1"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo5() {
    const urlR = "https://static.natura.com/cdn/ff/5QkWGr5ZwzFF73Uq2NPTm06UM0FyLXvBAFCOxCJwWiQ/1643060748/public/styles/banner_full_desktop/public/2022-01/kaiak-pulso-desk_0.jpg?itok=MYm2n4LG"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo6() {
    const urlR = "https://static.natura.com/cdn/ff/1IDiS2AGlPR0VyJegNy-T4O6DK013pl3lxX7SrBG_48/1644437488/public/styles/banner_full_desktop/public/2022-02/tododia-tamara-canela-desk.jpg?itok=QYi_i-j9"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22tododia%20tamara%20e%20canela%22&consultoria=naturfive&iprom_creative=busca_vejatodalinha_tododia&iprom_id=home_bannerprincipal&iprom_name=destaque1_tododia_tamaraecanela_09022022&iprom_pos=2"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo7() {
    const urlR = "https://static.natura.com/cdn/ff/ypktm3YBLg25TfEGrg3wxzpTW5YfmOU3fQgpf2FB-RA/1645638930/public/styles/banner_full_desktop/public/2022-02/1920x695%20-%20Tododia%20limao%20e%20hortel%C3%A3%20Casting.jpg?itok=_B3v-AQJ"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22Tododia%20Capim%20Limao%20e%20Hortela%22&iprom_creative=busca_comprar_tododia&iprom_id=home_bannerprincipal&iprom_name=destaque1_tododia_capimlimao_23022022&iprom_pos=1?&consultoria=naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo8() {
    const urlR = "https://static.natura.com/cdn/ff/GF8LSsRe0t3knKT4R0W00lJ8MYlmMGZHB8arCii6uV8/1645638931/public/styles/banner_full_desktop/public/2022-02/1920x695.jpg?itok=tcADSKgL"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22essencial%20unico%22&iprom_creative=busca_euquero_essencialunico&iprom_id=home_bannerprincipal&iprom_name=destaque1_essencial_unico_23022022&iprom_pos=2?&consultoria=naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo9() {
    const urlR = "https://static.natura.com/cdn/ff/X2xnM5J9QNjhlS6HFFfbS-jVGgyErriJK7UuZmZdJnA/1643060748/public/styles/banner_full_desktop/public/2022-01/essencial-supreme-feminino-desk.jpg?itok=WsFWGHBN"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}