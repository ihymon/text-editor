let pageStyle = {
    fontSize: 16,
    weight: false
};

$('#fontSizeChanger').change(function () {
    pageStyle.fontSize = $('#fontSizeChanger').val();
    $('.page').css('font-size', `${pageStyle.fontSize}px`)
})

$('#weightChanger').mouseenter(function () {
    $('#weightChanger').css('color', 'orange');
    $('.page').css('font-weight', `700`)
});

$('#weightChanger').mouseleave(function () {
    if (pageStyle.weight == false) {
        $('#weightChanger').css('color', '#000');
        $('.page').css('font-weight', 'normal');
    }
});

$('#weightChanger').click(function () {
    if (pageStyle.weight == false) {
        $('#weightChanger').css('color', 'orange');
        $('.page').css('font-weight', `700`)
        pageStyle.weight = true;
    } else if (pageStyle.weight == true) {
        $('#weightChanger').css('color', '#000');
        $('.page').css('font-weight', `normal`)
        pageStyle.weight = false;
    }
});
