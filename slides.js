function slidesBody() {
    //backgroundB();
    bannerPromo2();
}
function backgroundB() {
    document.getElementById('bodyNatura').style.backgroundImage = 'url(https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg)'
    document.getElementById('bodyNatura')
}

function bannerPromo1() {
    document.getElementById('bodyNatura').style.backgroundImage = 'url(https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg)'
    document.getElementById('heroPromo').href = "https://google.com"
    document.getElementById('imagePromo').src = 'https://tm.ibxk.com.br/2020/05/19/19153836816636.jpg'
    
}
function bannerPromo2() {
    const urlR = "https://static.natura.com/cdn/ff/WxKfZSgFKOSvAZTXm04eQgvxsp81uw4zzq3AefwJiRw/1642603843/public/styles/banner_full_desktop/public/2022-01/ekos-tukuma-novidades-desk.jpg?itok=146UfBEq"
    const imgFundo = document.getElementById('bodyNatura').style.backgroundImage = `url(${urlR})`
    const linkF = document.getElementById('heroPromo').href = "https://www.natura.com.br/consultoria/naturfive"
    const imgP = document.getElementById('imagePromo').src = `${urlR}`
    
    return (imgFundo, linkF, imgP)
}