
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
  


if(getCookie("비밀과거짓말") == ""){
    setCookie("비밀과거짓말","0",365);
}

if(getCookie("비밀과거짓말") == "0"){
    document.getElementById("비밀과거짓말_like").src = "images/icons/like.png";
}else if(getCookie("비밀과거짓말") == "1"){
    document.getElementById("비밀과거짓말_like").src = "images/icons/like_click.png";
}

function 비밀과거짓말_like(){
    
    var check = getCookie("비밀과거짓말");

    if(getCookie("비밀과거짓말") == "1"){
        document.getElementById("비밀과거짓말_like").src = "images/icons/like.png";
        setCookie("비밀과거짓말","0",365);
    }else if(getCookie("비밀과거짓말") == "0"){
        document.getElementById("비밀과거짓말_like").src = "images/icons/like_click.png";
       setCookie("비밀과거짓말", "1", 365);
    }
}