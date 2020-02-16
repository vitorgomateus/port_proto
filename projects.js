var projects_view = $('.projects-wrapper');

var projects_array = [
// Watgrid
{
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
{
  code: "bdtfeira",
  title: "Banco de Tempo de Santa Maria da Feira",
  sub_title: "Project for Master's dissertation",
  time_text: "2019",
  description: 
  "This project studied the potential contribution of multimedia technology"+
  "for a timebanking community in Santa Maria da Feira, Portugal. "+
  "As a proof of concept, two prototypes were developed for a majorly senior community.",
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
  }]
},
//  Notify Me 
{
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
{
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
{
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
{
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
{
  code: "880",
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
}];

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

var appendable = "";

$.each(projects_array, function(i,proj){
  appendable += "<section id='proj-"+proj.code+"' data-depth='0.4'>";
  /* vv STICKY HEADER vv */
  appendable += "<div class='row sticky-header-wrapper'>";

  appendable += 
  "<div class='col-12 col-md-10 pt-2'>"+
  "<h3># "+proj.title+"</h3>"+
  "</div>";

  /*appendable += (i+1 === projects_array.length) ?
  "<div class='d-none d-md-block col-md-2 pt-3 text-right'>"+
  "<a class='btn btn-sm btn-default'href='#top'>top ↑</a>"+
  "</div>" :*/
  appendable += 
  "<div class='d-none d-md-block col-md-2 pt-3 text-right'>"+
  "<span class='float-right mb-2 text-muted'>"+proj.time_text+"</span>"+
  "</div>";
  //"<a class='btn btn-sm btn-default'href='#proj-"+projects_array[i+1].code+"'>next ↓</a>"+
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
  $.each(proj.badges, function(i, b){
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

  $.each(proj.images, function(i, img){
    var classer = img.hasOwnProperty('class') ? " "+img.class : '';
    
    appendable+="<div class='card'>";
    if(img.no_lightbox){
      appendable+=
      "<div class=\"card-img no-lb faux-img-cards\" style=\"background-image: url('"+img.src+"')\">"+
      "<img src='"+img.src+"' class='card-img-top' alt='"+img.alt+"'>"+
      "</div>";
    }else{
      //class='swipebox

      var href = "href='" + (img.link ? img.link.href : (img.big_src || img.src))+"'"+(img.link?" target='_blank' rel='noopener noreferrer'":"");
      appendable+=
      "<a "+href+" class='card-img no-lb faux-img-cards"+classer+"' style=\"background-image: url('"+img.src+"')\" title='"+img.alt+"'>"+
      "<img src='"+img.src+"' alt='"+img.alt+"'>";
      if(img.link){
        appendable+=
        "<span class='card-img-link-icon d-flex justify-content-center align-items-center lk-"+img.link.type+"'>"+
        "<i class='"+img.link.icon+"'></i>"+
        "</span>";
      }
      
      appendable+="</a>"; 
    }
      if(img.text){
        appendable+=
        "<p>"+img.text+" "+ (img.link ? "<i class='fa fa-link'></i>" : "") + "</p>";
      }
      appendable+="</div>";
  });

  appendable+="</div>"+
  "</div>";
  /* ^^ END RIGHT COLUMN ^^ */

  appendable+="</div>"+
  "</section> ";
});

projects_view.append(appendable);
;( function( $ ) {

  //$( '.swipebox' ).swipebox();

} )( jQuery );