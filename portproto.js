var jqueryMousewheel = require("jquery-mousewheel");

document.addEventListener('scroll', function (event) {
    //if (event.target.id === 'idOfUl') { // apply any filtering condition        
    //    console.log('scroll event', event.target);
    //}

}, true /*Capture event*/);

$('body').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
    alert("hey");//noup
});

$(document).ready(function(){
			
		}
	)

/*const LoadingAnimation = require('loading-animation');
let anim = new LoadingAnimation('Text before'); // animation starts automatically
setTimeout(()=>{
	anim.stop('Ok');
}, 3000);

anim = new LoadingAnimation(['Text before', 'and text after'], 'green')*/