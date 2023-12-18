$(document).ready(function () {
    $('#opt_list').hide();
    $('#prob_list').hide();
    $('#recom_list').hide();
    $('#list').hide();

    $('#opt_btn').click(function () {
        if ($('#opt_list').is(':visible')) {
            $('#opt_list').hide();
        }
        else {
            $('#opt_list').show();
        }
    })
    $('#prob_btn').click(function () {
        if ($('#prob_list').is(':visible')) {
            $('#prob_list').hide();
        }
        else {
            $('#prob_list').show();
        }
    })
    $('#recom_btn').click(function () {
        if ($('#recom_list').is(':visible')) {
            $('#recom_list').hide();
        }
        else {
            $('#recom_list').show();
        }
    })
    $('#btn').click(function () {
        if ($('#list').is(':visible')) {
            $('#list').hide();
            $('#btn').css('color', 'black');
        }
        else {
            $('#list').show();
            $('#btn').css('color', 'blue');
            $('#list').css('color', 'black');
        }
    })


    $('#up').click(function () {
        $('html').animate({ scrollTop: 0 }, 400);
    })

    $('#down').click(function () {
        var foot = $('footer').offset();
        $('html').animate({ scrollTop: foot.top }, 400);
    })
})