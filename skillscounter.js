// ========================================================================= //
//   skillsProgress
// ========================================================================= //

function skillsProgress() {
    var lang = {
        "html": "85%",
        "css": "80%",
        "javascript": "95%"
    };

    var multiply = 2;

    $.each(lang, function(language, pourcent) {

        var delay = 600;

        setTimeout(function() {
            $('#' + language + '-pourcent').html(pourcent);
            $('#progress-' + language).animate({
                'width': pourcent
            }, 600);
        }, delay * multiply);

        multiply++;

    });
}

if ($(window).scrollTop() >= $("#about").offset().top - 500) {
    skillsProgress();
}

$(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("#about").offset().top - 500) {
        skillsProgress();
    }
});