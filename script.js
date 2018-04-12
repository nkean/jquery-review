$(document).ready(onReady);

console.log( 'jQuery Lecture' );

function onReady() {
    console.log( 'jQuery is ready' );
    $('h1').addClass('funny');
    $('h1').css('color', 'red');

    // Getters and Setters
    console.log( $('h2').text() ); // get the text of h2
    $('h2').text('You have been set!'); // set the text of h2
    console.log( $('h2').text() );

    // Inputs (also, getter and setter)
    $('#nameInput').val('Nathan'); // set value of #nameInput
    console.log($('#nameInput').val()); // get value of #nameInput

    // Events
    $('#clickableButton').on('click', function() { // event handler with anonymous function (no name)
        console.log($('#nameInput').val());
    });
    
    $('#wasClicked').on('click', function() {
        console.log('I Was Clicked!');
    });
}

