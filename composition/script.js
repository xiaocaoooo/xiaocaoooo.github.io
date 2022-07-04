var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split('?');
    if(typeof(u[1]) == 'string'){
        u = u[1].split('&');
        var get = {};
        for(var i in u){
            var j = u[i].split('=');
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();


$.ajax({
    url: 'https://xiaocaoooo.github.io/composition/composition.json',
    type: 'get',
    dataType: 'json',
    success: function (compositions) {
        // console.log(compositions[$_GET.title])
        document.getElementById('title').innerHTML = compositions[$_GET.title].title;
        document.getElementById('content').innerHTML = compositions[$_GET.title].content;
    }
});
