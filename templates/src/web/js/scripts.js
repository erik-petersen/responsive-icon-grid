$(function() {
  "use strict";

  // hover event will change background colors and colors of icon and text to the opposite
  $( ".second-box" ).hover(
    // when hovered
    function() {
      $(this).find( ".line" ).css( "top", ".15em" );
      $(this).css( "background-color", "#47a3da" );
      // I know there is a way to do this in one call but for now, this will have to do
      $(this).find( ".fa" ).css( "color", "#fff" );
      $(this).find( "h3" ).css( "color", "#fff" );
      $(this).find( ".hover-heading" ).show();
      $(this).find( ".hover-heading" ).css( "color", "#fff" );
      $(this).find( ".line" ).css( "background-color", "#fff" );
      console.log( "Hello" );
    },
    // when unhovered
    function() {
      $(this).find( ".line" ).css( "top", "-2.25em" );
      $(this).css( "background-color", "#fff" );
      // I know there is a way to do this in one call but for now, this will have to do
      $(this).find( ".fa" ).css( "color", "#47a3da" );
      $(this).find( "h3" ).css( "color", "#47a3da" );
      $(this).find( ".hover-heading" ).hide();
      $(this).find( ".line" ).css( "background-color", "#47a3da" );
    }
  ); // end hover event
}); // outmost function
