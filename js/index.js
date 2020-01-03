$(document).ready(function() {

    $('.navbar-toggler').on('click', function(event) {
        event.stopImmediatePropagation()
        $(".navbar-collapse").toggleClass('open-menu');

    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.open-menu').length) {
            $(".navbar-collapse").removeClass('open-menu');
        }
    });

    $('#navbarSupportedContent .close').on('click', function(event) {
        $(".navbar-collapse").removeClass('open-menu');
    });

    // UPLOAD IMAGE
    var $fileInput = $('.file-input');
    var $droparea = $('.file-drop-area');

    // highlight drag area
    $fileInput.on('dragenter focus click', function() {
        $droparea.addClass('is-active');
    });

    // back to normal state
    $fileInput.on('dragleave blur drop', function() {
        $droparea.removeClass('is-active');
    });

    // change inner text
    $fileInput.on('change', function() {
        var filesCount = $(this)[0].files.length;
        var $textContainer = $(this).prev();

        if (filesCount === 1) {
            // if single file is selected, show file name
            var fileName = $(this).val().split('\\').pop();
            $textContainer.text(fileName);
        } else {
            // otherwise show number of files
            $textContainer.text(filesCount + ' files selected');
            $('.file-msg').css('display', 'block')
        }
    });

    $(".flag").on('click', function() {
        if ($(".flag").hasClass('checked')) {
            $(".flag").removeClass('checked')
            $(".flag i").removeClass('fas');
            $(".flag i").addClass('far');
        } else {
            $(".flag").addClass('checked')
            $(".flag i").removeClass('far');
            $(".flag i").addClass('fas');
        }


    })
});