<template>
    <div class="popupexit_box" id="popupexit_box">
        <div class="content-pop">
             <a href="https://www.sonocaps.com.br/produtos?utm_source=Pop%20Up&utm_medium=Popup-Frete-Gratis&utm_campaign=Guilherme">
                <img src="@/assets/exit.jpg" style="width:679px; height:480px;border-radius:32px;border:0 !important;">
            </a>
            <div class="popupexit_fechar"><i id="popupexit_fechar" class="fa fa-times-circle"></i></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ExitPop',
    mounted(){
    function addEvent(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    }
    addEvent(document, 'mouseout', function (evt) {
        if (getCookie("cookiePopupexit") === "true") {
            return;
        }
        if (evt.toElement == null && evt.relatedTarget == null) {
            setCookie("cookiePopupexit", true, 3);
            document.getElementById("popupexit_box").style.display = "block";
        }
    });

    document.getElementById("popupexit_fechar").addEventListener('click', () => {
        document.getElementById("popupexit_box").style.display = 'none';
    });

    function setCookie(nomeCookie, valorGravado, diasExpira) {
        var d = new Date();
        d.setTime(d.getTime() + (diasExpira * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = nomeCookie + "=" + valorGravado + ";" + expires + ";path=/";
    }

    function getCookie(nomeCookie) {
        var name = nomeCookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    }
}
</script>


<style scoped>
@media screen and (max-width: 768px) {
.popupexit_box {
    display: none !important;
}
}

.popupexit_box {
display: none;
position: fixed;
z-index: 99999999;
text-align: center;
border: none;
box-shadow: none !important;
padding-top: 7%;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
}

.popupexit_fechar {
position: fixed;
left: 70.5%;
top: 11%;
font-size: 45px;
color: #ffffff;
text-align: center;
cursor: pointer;
}

.popupexit_eu_quero {
position: relative;
top: 360px;
color: #000000;
font-size: 20px;
text-align: center;
background-color: #cffe5a;
cursor: pointer;
font-weight: bold;
padding: 5px 15px 5px 15px;
}

.popupexit_eu_quero:hover {
background-color: #000000;
color: #cffe5a;
font-size: 22px;
}
</style>