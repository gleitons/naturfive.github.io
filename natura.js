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