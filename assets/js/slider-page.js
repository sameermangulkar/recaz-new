
    var slidePage = 1;
    showSlides(slidePage);

    function plusSlider(n) {
        showSlides(slidePage += n);
    }

    function currentSlider(n) {
        showSlides(slidePage = n);
    }


    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slider");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slidePage = 1;
        }
        if (n < 1) {
            slidePage = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "" );
        }
        slides[slidePage - 1].style.display = "block";
        dots[slidePage - 1].className += " active";
    }