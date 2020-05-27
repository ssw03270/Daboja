
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
  


if(getCookie("황후의품격") == ""){
    setCookie("황후의품격","0",365);
}

if(getCookie("황후의품격") == "0"){
    document.getElementById("황후의품격_like").src = "images/icons/like.png";
}else if(getCookie("황후의품격") == "1"){
    document.getElementById("황후의품격_like").src = "images/icons/like_click.png";
}

function 황후의품격_like(){
    
    var check = getCookie("황후의품격");

    if(getCookie("황후의품격") == "1"){
        document.getElementById("황후의품격_like").src = "images/icons/like.png";
        setCookie("황후의품격","0",365);
    }else if(getCookie("황후의품격") == "0"){
        document.getElementById("황후의품격_like").src = "images/icons/like_click.png";
       setCookie("황후의품격", "1", 365);
    }
}