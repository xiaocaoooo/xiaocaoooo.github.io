transferAPI = function (api) {
    console.log(1)
    $.ajax({
        url: api,
        type: 'get',
        dataType: 'json',
        success: function (response) {
            var res = response
        }
    });
};
