var projects_view = $('.projects-wrapper');

var projects_array = [
{
  code: "bdtfeira",
  title: "Banco de Tempo de Santa Maria da Feira",
  sub_title: "Project for Master's dissertation",
  time_text: "2019",
  description: "",
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
  thumbnail_src: "res/img/bdt-feira-2.jpg",
  thumbnail_alt: "Image of Banco de Tempo de Feira",
  images:[
  {
    src: "res/img/bdt-feira-2.jpg",
    alt: "Image of Banco de Tempo de Feira"
  }]
},
{
  code: "notifyme",
  title: "Notify Me",
  sub_title: "Application for Master's",
  time_text: "2017",
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
    src: "res/img/web_hi_res_512.png",
    alt: "Notify Me project logo"
  },{
    src: "res/img/notifier_3d_screenshot.JPG",
    alt: "image of the 3D object for the bluetooth beacon"
  }]
},
{
  code: "babelrock",
  title: "Babel Rock",
  sub_title: "Interactive Music-Playing Physical-Globe",
  time_text: "2017",
  description: "",
  badges: 
  [
    "Arduino",
    "3D printing"
  ],
  thumbnail_src: "res/img/default.jpg",
  thumbnail_alt: "placeholder image",
  images:[
  {
    src: "res/img/default.jpg",
    alt: "placeholder image"
  }]
},
{
  code: "tiltgame",
  title: "Tilt Game - Feira de Março",
  sub_title: "Video Game with Lampwave Studio",
  time_text: "2015",
  description: "",
  badges: 
  [
    "vector design",
    "video-game design",
    "UI design"
  ],
  thumbnail_src: "res/img/default.jpg",
  thumbnail_alt: "placeholder image",
  images:[
  {
    src: "res/img/default.jpg",
    alt: "placeholder image"
  }]
},
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
  thumbnail_src: "res/img/default.jpg",
  thumbnail_alt: "placeholder image",
  images:[
  {
    src: "res/img/default.jpg",
    alt: "placeholder image"
  }]
},
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
    src: "res/img/8 80 thumbnail x720.png",
    alt: "thumbnail image of the title screen"
  }]
}];



var appendable = "";

$.each(projects_array, function(i,proj){
  appendable += "<section id='proj-"+proj.code+"'>";
  /* vv STICKY HEADER vv */
  appendable += "<div class='row sticky-header-wrapper'>";

  appendable += 
  "<div class='col-12 col-md-10 pt-2'>"+
  "<h3># "+proj.title+"</h3>"+
  "</div>"+
  "<div class='d-none d-md-block col-md-2 pt-3'>"+
  "<span class='float-right mb-2 text-muted'>"+proj.time_text+"</span>"+
  "</div>"+
  "<span class='col-12 white-fade'>"+
  "</span>";

  appendable += "</div>";

  /* ^^ END STICKY HEADER ^^ */

  appendable += "<div class='row conteudo'>";

  /* vv LEFT COLUMN vv */
  appendable += "<div class='col-12 col-sm-6 coluna-esq'>";
  appendable += "<div class='row'>"+ 
  "<div class='col-9 col-md-12'>"+
  "<h5>"+proj.sub_title+"</h5>"+
  "</div>"+
  "<div class='col-3 d-md-none'>"+
  "<span class='float-right mb-2 text-muted'>"+proj.time_text+"</span>"+
  "</div>"+
  "</div>";

  appendable+="<p>";
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
  "<div class='card-columns card-group-xs-1-lg-2'>";

  $.each(proj.images, function(i, img){
  appendable+="<div class='card'>";
    appendable+=
    "<div class=\"card-img faux-img-cards\" style=\"background-image: url('"+img.src+"')\">"+
    "<img src='"+img.src+"' class='card-img-top' alt='"+img.alt+"'>"+
    "</div>";
    appendable+="</div>";
  });

  appendable+="</div>"+
  "</div>";
  /* ^^ END RIGHT COLUMN ^^ */

  appendable+="</div>"+
  "</section> ";
});

projects_view.append(appendable);