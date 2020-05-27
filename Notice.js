
function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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

//notice 0 = x, 1 = first, 2 = second, 3 = third

if(getCookie("notice") == ""){
    setCookie("notice","2",365);
}



if(getCookie("notice") == "1"){
    document.getElementById("first_btn").src = "images/icons/check_click.png";
}else{
    document.getElementById("first_btn").src = "images/icons/check.png";
}
if(getCookie("notice") == "2"){
    document.getElementById("second_btn").src = "images/icons/check_click.png";
}else{
    document.getElementById("second_btn").src = "images/icons/check.png";
}
if(getCookie("notice") == "3"){
    document.getElementById("third_btn").src = "images/icons/check_click.png";
}else{
    document.getElementById("third_btn").src = "images/icons/check.png";
}



function first_click(){
    var check = getCookie("notice");

    if(getCookie("notice") == "1"){
        document.getElementById("first_btn").src = "images/icons/check.png";
        setCookie("notice","0",365);
    }else{
        document.getElementById("first_btn").src = "images/icons/check_click.png";
        setCookie("notice", "1", 365);
        document.getElementById("second_btn").src = "images/icons/check.png";
        document.getElementById("third_btn").src = "images/icons/check.png";
    }
}

function second_click(){
    var check = getCookie("notice");

    if(getCookie("notice") == "2"){
        document.getElementById("second_btn").src = "images/icons/check.png";
        setCookie("notice","0",365);
        
    }else{
        document.getElementById("first_btn").src = "images/icons/check.png";
        document.getElementById("second_btn").src = "images/icons/check_click.png";
        setCookie("notice", "2", 365);
        document.getElementById("third_btn").src = "images/icons/check.png";
    }
}

function third_click(){
    var check = getCookie("notice");

    if(getCookie("notice") == "3"){
        document.getElementById("third_btn").src = "images/icons/check.png";
        setCookie("notice","0",365);
    }else{
        document.getElementById("first_btn").src = "images/icons/check.png";
        document.getElementById("second_btn").src = "images/icons/check.png";
        document.getElementById("third_btn").src = "images/icons/check_click.png";
        setCookie("notice", "3", 365);
    }
}


