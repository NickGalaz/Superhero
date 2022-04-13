jQuery.fn.parpadea = function () {
    this.each(function () {
        elem = $(this);
        elem.fadeOut(250, function () {
            $(this).fadeIn(250);
        });
    });
    return this;
};