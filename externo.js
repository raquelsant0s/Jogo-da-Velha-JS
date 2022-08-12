var player = "patolino";
var numJog = 0;

var audio = new Audio("audio/Abertura Baby Looney Tunes.mp3");
audio.loop = true;

var fim = false;

function checkjogo(id) {
    alert("OK");
}

function checkjogo(id) {
    alert(id);
}


var player = "patolino";
function checkjogo(id) {
    audio.play()
    if (fim == true){
        return false;
    }
    var opt = verificaSrc(id);
    var pc = document.getElementById('pc').checked;
    if (opt == "transp.png") {
        numJog++;
        document.getElementById(id).src = "img/" + player + ".png";

        if (winchek()) {
            document.getElementById('msg').innerHTML = ("<h4><marquee behavior='scroll' direction='left' scrollamount='15' height='150' width='250' > Fim de jogo!!! Vitória do " + player + " !!! </marquee></h4>");
            fim = true;
            return false;
            //location.reload();
        }

        if (!winchek() && numJog == 9) {
            document.getElementById('msg').innerHTML = ("<h4><marquee behavior='scroll' direction='left' scrollamount='15' height='150' width='250' > Fim de Jogo!! Deu velha!! </marquee></h4>");
            return false;
            //location.reload();
        }

        if (player == "patolino") {
            player = "pernalonga";
        } else {
            player = "patolino";
        }

        }
        if(pc && player == "pernalonga"){
            checkjogo(jogoDoPc());
        }
}

function jogoDoPc(){
    if(verificaSrc('c5') == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random() * 9) + 1);
}

function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function winchek() {
    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png")){
        return true;
    }
    if (((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png")){
        return true;
        
    }
    if (((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png")){
        return true;
    }
    return false;
}


