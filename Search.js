function searchFunction() {
    var input, filter, i, a, ul, li;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase().replace(/(\s*)/g,"");
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');

    for(i = 0; i<li.length ; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }

}
