
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
  


if(getCookie("비켜라운명아") == ""){
    setCookie("비켜라운명아","0",365);
}

if(getCookie("비켜라운명아") == "0"){
    document.getElementById("비켜라운명아_like").src = "images/icons/like.png";
}else if(getCookie("비켜라운명아") == "1"){
    document.getElementById("비켜라운명아_like").src = "images/icons/like_click.png";
}

function 비켜라운명아_like(){
    
    var check = getCookie("비켜라운명아");

    if(getCookie("비켜라운명아") == "1"){
        document.getElementById("비켜라운명아_like").src = "images/icons/like.png";
        setCookie("비켜라운명아","0",365);
    }else if(getCookie("비켜라운명아") == "0"){
        document.getElementById("비켜라운명아_like").src = "images/icons/like_click.png";
       setCookie("비켜라운명아", "1", 365);
    }
}