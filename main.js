$(document).ready(function() {
    function hideDrops() {
        $('#setup-drop').hide();
        $('#wireless-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    }
    // Large Nav bar drop down
    $('#setup').click(function() {
        $('#setup-drop').show();
        $('#wireless-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#setup-drop').mouseleave(hideDrops);

    $('#wireless').click(function() {
        $('#wireless-drop').show();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#wireless-drop').mouseleave(hideDrops);

    $('#security').click(function() {
        $('#security-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#security-drop').mouseleave(hideDrops);

    $('#access').click(function() {
        $('#access-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#access-drop').mouseleave(hideDrops);

    $('#administration').click(function() {
        $('#administration-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#status-drop').hide();
    })
    $('#administration-drop').mouseleave(hideDrops);

    $('#status').click(function() {
        $('#status-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
    })
    $('#status-drop').mouseleave(hideDrops);
    $('#hamburger').click(function() {
        if ($('#hamburger').hasClass('active')) {
            $('div.mobile-menu').animate({ height: '0%'});
            $('#mobile').css('opacity', '0');
            $('#hamburger').removeClass('active');
        } else {
            $('div.mobile-menu').animate({ height: '100%'});
            $('#mobile').css('opacity', '1');
            $('#hamburger').addClass('active');
        }
    });
    $('a#hamburger.active').click(function() {
        $('div.container').animate({ height: '100%'});
        $('#hamburger').removeClass('active');
    });
    $('.link').click(function() {
        alert('Please complete firmware update before continuing');
    });
});
