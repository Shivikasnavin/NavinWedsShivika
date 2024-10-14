$(window).load(function() {
    // shuffle
    var $main = $('#shuffle-wrapper');
    $main.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });


    /* reshuffle when user clicks a filter item */
    // $('#filter a').click(function (e) {
    //     e.preventDefault();

    //     // set active class
    //     $('#filter a').removeClass('active');
    //     $(this).addClass('active');

    //     // get group name from clicked item
    //     var groupName = $(this).attr('data-group');

    //     // reshuffle grid
    //     $main.shuffle('shuffle', groupName );
    // });
});



$(function() {

    // window.scroll menu ite activated    
    $(window).scroll(function() {
        activeMenuItem();
    });



    // function for active menuitem
    var sections = $('section'),
        nav = $('#nav'),
        nav_height = nav.outerHeight();

    function activeMenuItem() {
        var cur_pos = $(window).scrollTop() + 2;
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('ul > li > a').parent().removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
            } else if (cur_pos == 2) {
                nav.find('ul > li > a').parent().removeClass('active');
            }
        });
    }

    // smooth-scrolling click menu item
    $(function() {
        $('#navbar > ul > li > a').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                    return false;
                }
            }
        });
    });


    // home-slider
    $('.slider').owlCarousel({
        singleItem:true,
        autoPlay: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        mouseDrag: false
    });


    // event animation
    $('#event .content .row:first .col:first').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('#event #first-row .col:first').addClass('animated fadeInLeft');
        });
    });

    $('#event #second-row .col:last').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('#event #second-row .col:last').addClass('animated fadeInRight');
        });
    });

    $('#event #last-row .col:last').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('#event #last-row .col:first').addClass('animated fadeInLeft');
        });
    });


    // journal
    $('.journal .frame a').click(function(e) {
        e.preventDefault();
    })


    // gift-slider
    $('.gift-slider').owlCarousel({
        autoPlay: true,
        items: 3,
        itemsDesktop: [1199,3],  
        itemsDesktopSmall: [991, 2],
        itemsTabletSmall: [767, 1],
        pagination: false,
        mouseDrag: false
    });


    // about Lightbox pluging
    $('.gallery .col a').nivoLightbox();


    // video-bg Lightbox pluging
    $('.video-bg a').nivoLightbox();


    // set the google map
    // function map1() {
    //     var myLatLng = new google.maps.LatLng(24.8419102,79.9199375);
    //     var mapProp = {
    //         center: myLatLng,
    //         zoom: 14,
    //         scrollwheel: false,
    //         mapTypeId: google.maps.MapTypeId.ROAD
    //     };
    //     var map=new google.maps.Map(document.getElementById("googleMap-1"),mapProp);

    //     var marker=new google.maps.Marker({
    //         position: myLatLng,
    //         icon: 'images/home/marker.png'
    //     });

    //     marker.setMap(map);
    //     map.set('styles',
    //         [{
    //             "featureType": "water",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#d85665"
    //             }, {
    //                 "lightness": 17
    //             }]
    //         }, {
    //             "featureType": "landscape",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#f1dee2"
    //             }, {
    //                 "lightness": 20
    //             }]
    //         }, {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.fill",
    //             "stylers": [{
    //                 "color": "#fff"
    //             }, {
    //                 "lightness": 17
    //             }]
    //         }, {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.stroke",
    //             "stylers": [{
    //                 "color": "#fff"
    //             }, {
    //                 "lightness": 29
    //             }, {
    //                 "weight": 0.2
    //             }]
    //         }, {
    //             "featureType": "road.arterial",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#ffffff"
    //             }, {
    //                 "lightness": 18
    //             }]
    //         }, {
    //             "featureType": "road.local",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#d83547"
    //             }, {
    //                 "lightness": 16
    //             }]
    //         }, {
    //             "featureType": "poi",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#f5f5f5"
    //             }, {
    //                 "lightness": 21
    //             }]
    //         }, {
    //             "featureType": "poi.park",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#dedede"
    //             }, {
    //                 "lightness": 21
    //             }]
    //         }, {
    //             "elementType": "labels.text.stroke",
    //             "stylers": [{
    //                 "visibility": "on"
    //             }, {
    //                 "color": "#ffffff"
    //             }, {
    //                 "lightness": 16
    //             }]
    //         }, {
    //             "elementType": "labels.text.fill",
    //             "stylers": [{
    //                 "saturation": 36
    //             }, {
    //                 "color": "#333333"
    //             }, {
    //                 "lightness": 40
    //             }]
    //         }, {
    //             "elementType": "labels.icon",
    //             "stylers": [{
    //                 "visibility": "off"
    //             }]
    //         }, {
    //             "featureType": "transit",
    //             "elementType": "geometry",
    //             "stylers": [{
    //                 "color": "#f2f2f2"
    //             }, {
    //                 "lightness": 19
    //             }]
    //         }, {
    //             "featureType": "administrative",
    //             "elementType": "geometry.fill",
    //             "stylers": [{
    //                 "color": "#fefefe"
    //             }, {
    //                 "lightness": 20
    //             }]
    //         }, {
    //             "featureType": "administrative",
    //             "elementType": "geometry.stroke",
    //             "stylers": [{
    //                 "color": "#fefefe"
    //             }, {
    //                 "lightness": 17
    //             }, {
    //                 "weight": 1.2
    //             }]
    //         }]
    //     );
    // }; // end of map1

    // map1();






});