
const LoadingAnimation = require('loading-animation');
let anim = new LoadingAnimation('Text before'); // animation starts automatically
setTimeout(()=>{
    anim.stop('Ok');
}, 3000);

anim = new LoadingAnimation(['Text before', 'and text after'], 'green')