function slidesBody() {
    const aleBanner = (Math.random() * 6).toFixed(0,1);
   
    
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
    }else {
        bannerPromo6();
    }
   
    
}
function backgroundB() {
    document.getElementById('bodyNatura').style.backgroundImage = 'url(https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg)'
    document.getElementById('bodyNatura')
}

function bannerPromo1() {
    const urlR = "https://static.natura.com/cdn/ff/WxKfZSgFKOSvAZTXm04eQgvxsp81uw4zzq3AefwJiRw/1642603843/public/styles/banner_full_desktop/public/2022-01/ekos-tukuma-novidades-desk.jpg?itok=146UfBEq"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo2() {
    const urlR = "https://static.natura.com/cdn/ff/ZECm0O2diLkw0zXixnj1Q8POBR6TUWxl891qy_BFUHY/1643060748/public/styles/banner_full_desktop/public/2022-01/humor-liberta-desk_2.jpg?itok=vsBnvc_4"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
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
    const urlR = "https://static.natura.com/cdn/ff/LnwnJMeki-ZhiDL4Jw_ZwaW6rF0q_gB4dKDTapEEs68/1643061017/public/styles/banner_full_desktop/public/2022-01/essencial-refil-mask-desk_2.jpg?itok=x8yDn1Bg"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
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
    const urlR = "https://static.natura.com/cdn/ff/X2xnM5J9QNjhlS6HFFfbS-jVGgyErriJK7UuZmZdJnA/1643060748/public/styles/banner_full_desktop/public/2022-01/essencial-supreme-feminino-desk.jpg?itok=WsFWGHBN"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}
function bannerPromo7() {
    const urlR = "https://static.natura.com/cdn/ff/X2xnM5J9QNjhlS6HFFfbS-jVGgyErriJK7UuZmZdJnA/1643060748/public/styles/banner_full_desktop/public/2022-01/essencial-supreme-feminino-desk.jpg?itok=WsFWGHBN"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}