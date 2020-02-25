
/* GA INQUIRY */
/* 
# What do you think of my portfolio?
### We're currently looking for someone with more experience.
### I'd like to see more of what you might have done.
### I'm here only out of curiosity.

---
# methos

1. Toast ~~*It would mean a lot to me if you could give me some feedback*~~
2. Menu *Give Feedback*
 */
var tracker = null;
if ("ga" in window) {
    tracker = ga.getAll()[0];
}else{
  console.log("ga error");
}
 var feedback = {
  result: null,
  initial_timer: 12000,
  containerParent : null,
  menuParent : null,
  menu_button : null,
  proposition_toast : null,
  inquiry_toast : null,
  thank_toast: null,
  submit_response : function(response){
    //console.log("response submited: "+response);

    // some further response to what they say, but I am coming up with nothing
    var final_text ={
    'lacks experience': '',
    'want to see more': 'I actually might have some more things to show. Get in touch with me.',
    'only curious': 'Feel free to give me your opinion.'
    };
    //https://stackoverflow.com/questions/15744042/events-not-being-tracked-in-new-google-analytics-analytics-js-setup
    if (tracker)
        tracker.send('event', 'Feedback', response, 'Feb 2020');
    //ga('send', 'event', 'Feedback', response, 'Feb 2020');
    /*
    this.result = ga('send', {
      hitType: 'event',
      eventCategory: 'Feedback',
      eventAction: response,
      eventLabel: 'Feb 2020'
      //eventValue: reponses[response]
    });
    */
    this.inquiry_toast.toast('hide');
    if(!this.thank_toast){
      this.containerParent.append("<div class='toast feedback-toast thank-feedback-toast' data-delay='3000' data-autohide='true' "+
        "role='alert' aria-live='assertive' aria-atomic='true'>"+
        "<div class='toast-header'>"+
          "<h6 class='my-2'>"+
            "Thank You!"+
            "<i class='fa fa-paw ml-2'></i>"+
          "</h6>"+
        "</div>"+
        //"<div class='toast-body'>"+
        //"</div>"+
      "</div>");
      this.thank_toast = $('.feedback-toast.thank-feedback-toast');
    }
    this.thank_toast.toast('show');
  },
  open_inquiry : function(){
    //console.log("open_inquiry");
    this.proposition_toast.toast('hide');
    if(!this.inquiry_toast){
      this.containerParent.append("<div class='toast feedback-toast give-feedback-toast' data-delay='60000' data-autohide='true' "+
        "role='alert' aria-live='assertive' aria-atomic='true'>"+
        "<div class='toast-header'>"+
          "What do you think of my portfolio?"+
        "</div>"+
        "<div class='toast-body text-left'>"+
          //"<div class='btn-group-vertical'>"+
            "<a class='btn btn-success btn-inline give-feedback-option mb-2 text-left d-flex align-items-center justify-content-between' onclick='return feedback.submit_response(\"lacks experience\");'>"+
              "We're currently looking for someone with more experience."+
              "<i class='fa fa-book ml-2'></i>"+
            "</a>"+
            "<a class='btn btn-success btn-inline give-feedback-option mb-2 text-left d-flex align-items-center justify-content-between' onclick='return feedback.submit_response(\"want to see more\");'>"+
              "I'd like to see more of what you might have done."+
              "<i class='fa fa-book-open ml-2'></i>"+
            "</a>"+
            "<a class='btn btn-success btn-inline give-feedback-option mb-2 text-left d-flex align-items-center justify-content-between' onclick='return feedback.submit_response(\"only curious\");'>"+
              "I'm here only out of curiosity."+
              "<i class='fa fa-walking ml-2'></i>"+
            "</a>"+
          //"</div>"+
        "</div>"+
      "</div>");
      this.inquiry_toast = $('.feedback-toast.give-feedback-toast');
    }
    this.inquiry_toast.toast('show');
  },
  initialize : function(menu_element, container_element){
    //console.log("initialize");
    /* MAKE MENU OPTION */
    this.menuParent = $(menu_element);
    this.menuParent.append("<a class='nav-link py-2 mx-2 give-feedback-click' onclick='return feedback.open_inquiry();' >Give Feedback</a>");

    /* MAKE PROPOSITION TOAST and time it */
    this.containerParent = $(container_element);
    if(!this.proposition_toast){
      this.containerParent.append("<div class='toast feedback-toast propose-feedback-toast' data-delay='30000' data-autohide='true' "+
        "role='alert' aria-live='assertive' aria-atomic='true'>"+
        "<div class='toast-header'>"+
          "It would mean a lot to me if you could give me some feedback"+
          "<a class='btn btn-primary give-fedeback-click' onclick='return feedback.open_inquiry();'>"+
          "<i class='fa fa-reply'></i>"+
          "</a>"+
        "</div>"+
        //"<div class='toast-body'>"+
        //"</div>"+
      "</div>");
      this.proposition_toast = $('.feedback-toast.propose-feedback-toast');
    }

    //console.log("setting timeout",this.proposition_toast);
    setTimeout(this.show_toast, this.initial_timer);
  },
  show_toast: function(){
    //console.log("show_toast",feedback.proposition_toast);
    var fo = feedback;
    if(!fo.proposition_toast)return;
    fo.proposition_toast.toast('show');
  }
 };
