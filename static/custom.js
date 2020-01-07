/* Make sure to not show the hello-bar again if you have already closed it.
Inspired from https://stackoverflow.com/a/13699319/1428034 */

$('.close').click(function( e ){
    e.preventDefault();
    $.cookie('hellobar', 'closed', { path: '/' });
});

 // Check if alert has been closed
 if( $.cookie('hellobar') !== 'closed' ){
    $('#hello-bar').removeClass("d-none");
}