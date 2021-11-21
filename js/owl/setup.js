// This is what makes the corousel effect works
$('.owl-carousel').owlCarousel({
    // The loop option set to 'true' makes a non-stop line of images.
    // If you set it to false, when it reaches the last image you will have to go back to see all of them again.
    loop: true,
    //Puts side margins between the div/images
    margin: 4,
    //The nav option reffers to those little round buttons. When set to false
    //you won't need to keep clicking on the to make the images move
    nav: false,

    responsive: {
        //When the scrren is near 0, displays 1 image at a time
        0: {
            items: 1
        },
        //This says that when the screen is 600px or more it can display 3 images
        600: {
            items: 3
        },
        //This says that when the screen is 1000px or more it can display 5 images
        1000: {
            items: 5
        }
    }
})