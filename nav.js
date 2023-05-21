var get = function (selector) {
    return document.querySelector(selector);
};

var i;

var host = document.location.href.toString().split("//")[0] + "//" + document.location.host.toString();

$.ajax({
    url: `${host}/nav.json`,
    type: 'get',
    dataType: 'json',
    success: function (res) {
        for(i = 0; i<res.data.length;i++){
            get('nav>div').innerHTML+=`
                <a href="${res.data[i].link}&type=new_page" target="_blank">
                    <li class="nav-1">
                        ${res.data[i].title}
                    </li>
                </a>
            `;
        }
    }
});
