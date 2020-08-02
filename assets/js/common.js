$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".experience.hidden").removeClass('open');
    });
    $('a.experience').click(function() {
    	$(this).parent().parent().find(".abstract.hidden").removeClass('open');
        $(this).parent().parent().find(".experience.hidden").toggleClass('open');
    });

    $('a.featured_content').click(function() {
    	$(this).parent().parent().find(".featured_content.hidden").toggleClass('open');
    });

    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
