var get = function (selector) {
    return document.querySelector(selector);
};
var i;
$.ajax({
    url: `https://xiaocaoooo.github.io/nav.json`,
    type: 'get',
    dataType: 'json',
    success: function (res) {
        for(i = 0; i<res.data.length;i++){
            get('nav>div').innerHTML+=`
                <a href="${res.data[i].link}" target="_blank">
                    <li class="nav-1">
                        ${res.data[i].title}
                    </li>
                </a>
            `;
        }
    }
});
