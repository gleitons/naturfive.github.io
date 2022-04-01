
var consultor = "?consultoria=naturfive"
function slidesBody() {
    const aleBanner = (Math.random() * 9).toFixed(0,1);
   
    
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
    } else if (aleBanner == 6){
        bannerPromo6();
    } else if (aleBanner == 7){
        bannerPromo7();
    }
    else if (aleBanner == 8){
        bannerPromo8();
    }else {
        bannerPromo9();
    }
   
    
}
function backgroundB() {
    document.getElementById('bodyNatura').style.backgroundImage = 'url(https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg)'
    document.getElementById('bodyNatura')
}

function bannerPromo1() {
    const urlR = localStorage.getItem('b1_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = `https://www.natura.com.br/a-casa-de-perfumaria-do-brasil?consultoria=naturfive&iprom_creative=lp_conheca_acasadeperfumariadobrasil&iprom_id=home_bannerprincipal&iprom_name=destaque1_desejotemcheiro_cpb_10022022&iprom_pos=4`
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo2() {
    const urlR = localStorage.getItem('b2_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/c/semana-especial?consultoria=naturfive&iprom_creative=cat_euquero_semanaespecial&iprom_id=home_bannerprincipal&iprom_name=destaque1_liquida-perfumaria_14022022&iprom_pos=2"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo3() {
    const urlR = localStorage.getItem('b3_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo4() {
    
    const urlR = localStorage.getItem('b4_naturfive');
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/c/gerais/promocao-exclusiva?consultoria=naturfive&iprom_creative=cat_euquero_promocaoexclusiva&iprom_id=home_bannerprincipal&iprom_name=destaque1_mesdoconsumidor_ultimachance_29032022&iprom_pos=1"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo5() {
    const urlR = localStorage.getItem('b5_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo6() {
    const urlR = localStorage.getItem('b6_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22tododia%20tamara%20e%20canela%22&consultoria=naturfive&iprom_creative=busca_vejatodalinha_tododia&iprom_id=home_bannerprincipal&iprom_name=destaque1_tododia_tamaraecanela_09022022&iprom_pos=2"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo7() {
    const urlR = localStorage.getItem('b7_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22Tododia%20Capim%20Limao%20e%20Hortela%22&iprom_creative=busca_comprar_tododia&iprom_id=home_bannerprincipal&iprom_name=destaque1_tododia_capimlimao_23022022&iprom_pos=1?&consultoria=naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo8() {
    const urlR = localStorage.getItem('b8_naturfive') 
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/s/produtos?busca=%22essencial%20unico%22&iprom_creative=busca_euquero_essencialunico&iprom_id=home_bannerprincipal&iprom_name=destaque1_essencial_unico_23022022&iprom_pos=2?&consultoria=naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo9() {
    const urlR = "https://rogresph.sirv.com/Naturfive/CDN%20Sirv/ultima-chance-mes-consumidor-desk-home.jpeg"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/c/gerais/promocao-exclusiva?consultoria=naturfive&iprom_creative=cat_euquero_promocaoexclusiva&iprom_id=home_bannerprincipal&iprom_name=destaque1_mesdoconsumidor_ultimachance_29032022&iprom_pos=1"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}