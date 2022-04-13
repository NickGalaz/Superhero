$(document).ready(function () {
    $('button').on('click', function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users",
            dataType: "json",
            success: function (datosApi) {
                console.log(datosApi.data);
            },
            error: function (error) {
                console.log(error)
            },
        });
    });
});