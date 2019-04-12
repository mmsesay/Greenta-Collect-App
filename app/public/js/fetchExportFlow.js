var interval = 1000;  // 1000 = 1 second, 3000 = 3 seconds
function doAjax() {
    $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/admin/exportFlow',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (data) {
                    $('.js-exportable').val(data);// first set the value     
            },
            complete: function (data) {
                    // Schedule the next
                    setTimeout(doAjax, interval);
            }
    });
}
setTimeout(doAjax, interval);