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

function download(filename, text) {
    console.log(filename, text);
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


// get('main').innerHTML = `<p>1145141919810</p>`

// var host=`https://xiaocaoooo.github.io`;
// var host=`http://127.0.0.1:5500`;
var host = document.location.href.toString().split("//")[0] + "//" + document.location.host.toString();


if ($_GET.path == '/' || $_GET.path==undefined) {
    $.ajax({
        url: `${host}/data/home.json`,
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
        url: `${host}/data${$_GET.path}.json`,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            get('main').innerHTML = `<style>${res.style}</style>${res.data}<script>${res.script}</script>`;
            // get('body').innerHTML +=`<script>window.onload = function () {${res.script}}</script>`;
            eval(res.script);
        }
    });
}
