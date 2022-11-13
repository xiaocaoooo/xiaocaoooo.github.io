var get = function (selector) {
    return document.querySelector(selector);
};

var $_GET = (function () {
    var url = window.document.location.href.toString();
    var u = url.split('?');
    if (typeof (u[1]) == 'string') {
        u = u[1].split('&');
        var get = {};
        for (var i in u) {
            var j = u[i].split('=');
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();


get('main').innerHTML = `<p>1145141919810</p>`


if ($_GET.path == '/') {
    $.ajax({
        url: `https://xiaocaoooo.github.io/data/home.json`,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            get('main').innerHTML = `<style>${res.style}</style>${res.data}`;
            // get('body').innerHTML +=`<script>window.onload = function () {${res.script}}</script>`;
            eval(res.script);
        }
    });
} else {
    $.ajax({
        url: `https://xiaocaoooo.github.io/data${$_GET.path}.json`,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            get('main').innerHTML = `<style>${res.style}</style>${res.data}<script>${res.script}</script>`;
            // get('body').innerHTML +=`<script>window.onload = function () {${res.script}}</script>`;
            eval(res.script);
        }
    });
}
