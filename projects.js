var projects_container = $('.container-projects');
var projects_wrapper = $('.projects-wrapper');

var appendable = "";

var projects_obj = {
  // Watgrid
  winegrid:{
    code: "winegrid",
    title: "Winegrid",
    sub_title: "The Winegrid platform for the company Watgrid",
    time_text: "2019",
    description: 
    "The platform to be developed for Winegrid was quite challenging as it encompassed a complex information architecture "+
    "which generated a gap with the user's mental model. In order to test and allow common ground of understanding between the team members "+
    "a hi-fi prototype was made in Adobe XD. This made it easier to guess implementation efforts and the validity of some of the functionalities.",
    badges: 
    [
      "UI design",
      "Adobe XD",
      "fast prototyping",
      "usability testing"
    ],
    images:[
    {
      src: "res/img/loading-giffer.gif",
      text: 'Animated loading logo',
      class: 'b-white b-center b-size-75'
      //,
      //alt: "Image of Banco de Tempo de Feira"
    },
    {
      src: "res/img/winegrid-adobe-logo.png",
      alt: "Winegrid product logo",
      text: "Adobe XD Link",
      link: {
        type:"axd",
        href: "https://xd.adobe.com/view/25bdfd92-4b17-4a25-71a9-c02c1daecb0c-538c/",
        icon:"fa fa-external-link-alt"
      }
    }]
  },
  // BDT Feira
  bdtfeira:{
    code: "bdtfeira",
    title: "Banco de Tempo de Santa Maria da Feira",
    sub_title: "Project for Master's dissertation",
    time_text: "2019",
    description: 
    "This project studied the potential contribution of multimedia technology"+
    "for a timebanking community in Santa Maria da Feira, Portugal. "+
    "As a proof of concept, two prototypes were developed for a majorly senior community.",
    full_description: 
      "The important detail to note in this project is the way the users actually see and use their system. "+
      "A system with an alternative currency mechanism based on time, promises more financial resilience to the individual, "+
      "and recognition of their values in a more equilitarian way. "+
      "Maybe a strong stroke against the current of selfish capitalism and consumerism. "+
      "However, this might not be the case. "+
      "In this community's motivation, underlies a different mentality, not to obtain goods and services, but to contribute. "+
      "There's a true sense of colaboration, not so much in the production of value, but in being part of the community."+
      "<hr>"+
      "Originally, the notion was that it was necessary to improve on efficiency, since there was no online platform to mediate the exchanges."+
      " As research was carried out, it became clear that it functions efficiently enough. Even without the platform. "+
      "Nevertheless, there is a imbalance in the credits because the participants felt unease "+
      "with the idea of requesting for help. Because these projects are born from the intention "+
      "to help and build the community, the framing of the activity establishes the exhanged services as voluntary work or solidarity."+
      "<blockquote class='blockquote my-4 mx-5'>"+
      "\"If I need a ride somewhere, I don't request from the TimeBank, I take a cab.\""+
      "<footer class='blockquote-footer'>a timebank participant*</footer>"+
      "</blockquote>"+
      "With this issue nailed down, it was clear that a catalogue website to easily choose and request services, "+
      "could go a long way in establishing a new perspective and to dismantle some prejudice."+
      "Although resources were short to fulfill the final product, the usability tests were a positive proof of concept."+
      "<blockquote class='blockquote my-4 mx-5'>"+
      "\"I never make any requests, but since it's this easy, I'll definitely start making some.\""+
      "<footer class='blockquote-footer'>another timebank participant*</footer>"+
      "</blockquote>"+
      "<hr>"+
      "The intial purpose of this project was to explore in which ways could technolgy contribute "+
      "to these intitiatives. In that sense, research started from querying participants "+
      "and coordinators to understand what are their motivations, "+
      "what technology they use and have interst in using, and what difficulties they could identify. "+
      "This questionaires and interviews unveiled the most important information."+
      "A prototype was developed to validate the conclusions obtained, as well..."+
      "<p><br><i style='font-size:80%'>*not verbatim</i></p>",
    badges: 
    [
      "UI design", 
      "Wordpress",
      "Adobe XD",
      "User Research",
      "fast prototyping",
      "usability testing"
    ],
    thumbnail_src: "res/img/bdt-feira-2.jpg",
    thumbnail_alt: "Image of Banco de Tempo de Feira",
    images:[
    {
      src: "res/img/bdt-feira-2.jpg",
      alt: "Image of Banco de Tempo de Feira"
    }
    //,{
    //  src: "",
    //  alt: "about the project",
    //  text: "Read More +"
    //  //,
    //  //link: {
    //  //  type: "txt",
    //  //  href: "https://xd.adobe.com/view/25bdfd92-4b17-4a25-71a9-c02c1daecb0c-538c/",
    //  //  icon: "fa fa-external-link-alt"
    //  //}
    //}
    ]
  },
  //  Notify Me
  notifyme:{
    code: "notifyme",
    title: "Notify Me",
    sub_title: "Application for Master's",
    time_text: "2017",
    description: "The final year of the master's implemented a method in which different classes/disciplines colaborated in a single project. "+
    "Notify Me was a project that experimented with detecting user's TV usage. This was exploited using a Bluetooth Beacon to detect proximity using an App. "+
    "This App promised better TV suggestions made by algorythms and the user's history. "+
    "An additional gamification concept was developed where users could bet on some TV show's content against each other, "+
    "using custom currency and applying for monthly prizes.",
    badges: 
    [
      "UI design", 
      "HTML/ CSS/ Javascript", 
      "React+Redux",
      "Arduino",
      "Bluetooth",
      "fast prototyping",
      "usability testing"
    ],
    thumbnail_src: "res/img/web_hi_res_512.png",
    thumbnail_alt: "Notify Me project logo",
    images:[
    {
      src: "res/img/logo_notifyme_x300.png",
      big_src: "res/img/big/logo_notifyme_x512.png",
      alt: "Notify Me project logo",
      text: "Notify Me project logo"
    },{
      src: "res/img/notifier_3d_screenshot_x300.JPG",
      big_src: "res/img/big/notifier_3d_screenshot_x554.JPG",
      alt: "image of the 3D object for the bluetooth beacon",
      text: "3D object for the bluetooth beacon"
    },{
      src: "res/img/BetTV_aposta_x300.jpg",
      big_src: "res/img/big/BetTV_aposta_x720.jpg",
      alt: "screenshot of a screen from BetTV concept",
      text: "BetTV bet screen"
    },{
      src: "res/img/easyTv_watching.jpg",
      alt: "screenshot of a screen from concept EasyTV app",
      text: "EasyTV watching screen"
     }]
  },
  //  Babel Rock
  babelrock:{
    code: "babelrock",
    title: "Babel Rock",
    sub_title: "Interactive Music-Playing Physical-Globe",
    time_text: "2017",
    description: "Project for a master's class, with the purpose of exploiting physical objects for digital interactions. "+
    "Here the sphere was studied to be used as an interface."+
    "A prototype was developed using two potentiometers, with which users can select a country "+
    "and listen to it's music.",
    badges: 
    [
      "Arduino",
      "3D printing"
    ],
    thumbnail_src: "res/img/default.jpg",
    thumbnail_alt: "placeholder image",
    images:[{
      src: "res/img/default.jpg",
      alt: "placeholder image"
     }]
  },
  //  Tilt Game
  tiltgame:{
    code: "tiltgame",
    title: "Tilt Game - Feira de Março",
    sub_title: "Video Game with Lampwave Studio",
    time_text: "2015",
    description: "A colaboration with Lampwave Studio to develop a video-game for a special event. It used the gyroscope to generate a ball-in-a-maze game.",
    badges: 
    [
      "vector design",
      "video-game design",
      "UI design"
    ],
    images:[
    {
      src: "res/img/tilt_game_x300.jpg",
      big_src: "res/img/big/tilt_game_x543.jpg",
      alt: "screenshot of the gameplay",
      text: "screenshot of the gameplay"
    }]
  },
  // Geo Freita
  geofreita:{
    code: "geofreita",
    title: "Geo Freita",
    sub_title: "Application for Bachelor's",
    time_text: "2014",
    description: "",
    badges: 
    [
      "vector design",
      "digital composition",
      "UI design HTML/ CSS/ Javascript",
      "PhoneGap",
      "Geolocation"
    ],
    images:[
    {
      src: "res/img/geofreita_x300.jpg",
      big_src: "res/img/big/geofreita_x1024.jpg",
      alt: "preview image for 'Gea Freita' project"
    }] 
  },
  //  8 80
  oitoouoitenta:{
    code: "oitoouoitenta",
    title: "8/80",
    sub_title: "Photography Director in a Shortmovie for bachelor's",
    time_text: "2013",
    badges: 
    [
      "Video capture and editing", 
      "Script writing"
    ],
    thumbnail_src: "res/img/8 80 thumbnail x720.png",
    thumbnail_alt: "thumbnail image of the title screen",
    images:[
    {
      src: "res/img/8_80_thumbnail_x300.png",
      big_src: "res/img/big/8_80_thumbnail_x720.png",
      alt: "thumbnail image of the title screen",
      text: "Title Screen"
    },
    {
      src: "res/img/8_80_thumbnail_2_x300.png",
      big_src: "res/img/big/8_80_thumbnail_2_x720.png",
      alt: "thumbnail image of a character lighting a cigar",
      text: "badass #1"
    },
    {
      src: "res/img/8_80_thumbnail_3_x300.png",
      big_src: "res/img/big/8_80_thumbnail_3_x720.png",
      alt: "thumbnail image of a man looking surprised at a script",
      text: "badass #3"
    },
    {
      src: "res/img/8_80_thumbnail_x300.png",
      alt: "thumbnail image of the title screen",
      text: "Youtube",
      link: {
        type:"yt",
        href: "https://youtu.be/JrcJihn8ID8",
        icon:"fa fa-play-circle"
      }
    }]
  }
};


//external-link-square-alt
//external-link-alt
//youtube
//adobe
/*
 * picture
 * external link
 * * youtube  -yt
 * * Adobe XD -axd
 * * website  -web
 * 
*/

/*
  {
    src: "res/img/8_80_thumbnail_3_x300.png",
    big_src: "res/img/big/8_80_thumbnail_3_x720.png",
    alt: "thumbnail image of a man looking surprised at a script",
    text: "badass #3"
  },
  {
    src: "res/img/8_80_thumbnail_x300.png",
    alt: "thumbnail image of the title screen",
    text: "Youtube",
    link: {
      type:"yt",
      href: "https://youtu.be/JrcJihn8ID8",
      icon:"fa fa-play-circle"
    }

*/
var temporary_content_class = 'cgc';
function openText(ref){
  var tracker = null;
    if ("ga" in window) {
        tracker = ga.getAll()[0];
    }else{
      console.log("ga error");
    }
    if(tracker)
        tracker.send('event', 'Interaction', 'bdtfeira', 'Read More');


  projects_container.addClass('fade-background fade-background-t');
  projects_container.children().addClass('o-t');
  projects_container.children().addClass('o-0');
  var content ="";

  content +=
  "<div class='"+temporary_content_class+" absolute-wrapper py-5 px-2 o-t o-0'>"+
  "<h2>"+projects_obj[ref].title+"</h2>"+
  "<p>"+projects_obj[ref].description+"</p>"+
  "<p class='text-center' style='font-size:25px'>§</p>"+
  "<p>"+projects_obj[ref].full_description+"</p>"+
  "<div class='text-right'><button class='btn btn-light' onclick='closeText()'>Cool</button></div>"+
  "</div>";
  
  projects_container.append(content);
  setTimeout(function(){
    projects_container.children(':not(.'+temporary_content_class+')').hide();
    //projects_container.addClass('ovf-hidden');
    $('.'+temporary_content_class).removeClass('o-0');
    window.scrollTo(0,0);
  },500);
}
function closeText(){
  //d-flex flex-column justify-content-between
  $('.'+temporary_content_class).addClass('o-0');
  //Reinstante visibility in the previous content
  projects_container.children().removeClass('o-t o-0');
    projects_container.removeClass('fade-background');
  setTimeout(function(){
    projects_container.children().show();
    //projects_container.removeClass('ovf-hidden');
    //destroy temporary children
    $('.'+temporary_content_class).remove();
    projects_container.removeClass('fade-background-t');
  },300);
}


$.each(projects_obj, function(k,proj){
  appendable += "<section id='proj-"+k+"' data-depth='0.4'>";
  /* vv STICKY HEADER vv */
  appendable += "<div class='row sticky-header-wrapper'>";

  appendable += 
  "<div class='col-12 col-md-10 pt-2'>"+
  "<h3># "+proj.title+"</h3>"+
  "</div>";

  /*appendable += (i+1 === projects_obj.length) ?
  "<div class='d-none d-md-block col-md-2 pt-3 text-right'>"+
  "<a class='btn btn-sm btn-default'href='#top'>top ↑</a>"+
  "</div>" :*/
  appendable += 
  "<div class='d-none d-md-block col-md-2 pt-3 text-right'>"+
  "<span class='float-right mb-2 text-muted'>"+proj.time_text+"</span>"+
  "</div>";
  //"<a class='btn btn-sm btn-default'href='#proj-"+projects_obj[i+1].code+"'>next ↓</a>"+
  //"<span class='col-12 white-fade'>"+
  //"</span>"+

  appendable += "</div>";

  /* ^^ END STICKY HEADER ^^ */

  appendable += "<div class='row conteudo'>";

  /* vv LEFT COLUMN vv */
  appendable += "<div class='col-12 col-sm-6 coluna-esq'>";
  appendable += "<div class='row'>"+ 
  "<div class='col-9 col-md-12'>"+
  "<h6>"+proj.sub_title+"</h6>"+
  "</div>"+
  "<div class='col-3 d-md-none'>"+
  "<span class='float-right mb-2 text-muted'>"+proj.time_text+"</span>"+
  "</div>"+
  "</div>";

  appendable+="<p class='badge-list'>";
  $.each(proj.badges, function(k, b){
    appendable+="<span class='badge badge-pill badge-dark'>"+b+"</span>";
  });
  appendable+="</p>";

  if(proj.hasOwnProperty("description") && proj.description.length > 2)
    appendable += "<p>"+proj.description+"</p>";
  

  appendable+="</div>";
  /* ^^ END LEFT COLUMN ^^ */

  /* vv RIGHT COLUMN vv */
  appendable+="<div class='col-12 col-sm-6 coluna-dir'>"+
  "<div class='card-columns text-right card-group-xs-1-lg-2'>";

  /* Items */
  $.each(proj.images, function(i, img){
    var classer = img.hasOwnProperty('class') ? " "+img.class : '';
    
    appendable+="<div class='card'>";
    //if(img.no_lightbox){

    var href = "href='" + (img.link ? img.link.href : (img.big_src || img.src))+"'"+(img.link?" target='_blank' rel='noopener noreferrer'":"");

    if(img.src){
      appendable+=
      "<a "+href+" class='card-img no-lb faux-img-cards"+classer+"' style=\"background-image: url('"+img.src+"')\" title='"+img.alt+"'>"+
      "<img src='"+img.src+"' alt='"+img.alt+"'>";
    }else{
      appendable+=
      "<a class='card-img no-lb faux-img-cards"+classer+"' title='"+img.alt+"'>";
    }
    if(img.link){
      appendable+=
      "<span class='card-img-link-icon d-flex justify-content-center align-items-center lk-"+img.link.type+"'>"+
      "<i class='"+img.link.icon+"'></i>"+
      "</span>";
    }
    
    appendable+="</a>"; 
  
    if(img.text){
      appendable+=
      "<p>"+img.text+" "+ (img.link ? "<i class='fa fa-link'></i>" : "") + "</p>";
    }
    appendable+="</div>";
  });

  if(proj.full_description){
    appendable+=
    "<button class='btn btn-block btn-dark' onclick='openText(\""+k+"\")'>Read More +</button>"
  }
  /* END Items*/

  appendable+="</div>"+
  "</div>";
  /* ^^ END RIGHT COLUMN ^^ */

  appendable+="</div>"+
  "</section> ";
});

projects_wrapper.append(appendable);
//;( function( $ ) {

  //$( '.swipebox' ).swipebox();

//} )( jQuery );