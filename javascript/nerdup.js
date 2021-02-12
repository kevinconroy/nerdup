function makeAddress(user, domain) {
    var label = user + '@' + domain;
    makeAddressWithLabel(user, domain, label);
}

function makeAddressWithLabel(user, domain, label) {
    var address = user + '@' + domain;
    document.write('<a href=\"mailto:' + address  + '\">' + label + '</a>');
}

function makeAddressAndSubject(user, domain, subject) {
    var label = user + '@' + domain;
    var address = user + '@' + domain;
    document.write('<a href=\"mailto:' + address  + '?subject=Resume for ' + subject + '\">' + label + '</a>');
}

function pickARandomPolaroid(elementId, path, min, max) {
   // pick a random number in the range of min to max
   var id = Math.round(Math.random() * max) + min;
   id = Math.max(min, Math.min(id, max));
 
   var src = path + id + ".jpg";

   // set the source
   $("#" + elementId).attr("src", src);
}

function clearNerdWord(field) {
    var defaultText = "e-mail"

    if (field != null && $(field).attr("value") == defaultText) {
        $(field).attr("value", "");
        $(field).css("color", "#333333");
    }
}

function fillNerdWord(field) {
    var defaultText = "e-mail"

    if (field != null && ($(field).attr("value") == null || $(field).attr("value") == "")) {
        $(field).attr("value", defaultText);
        $(field).css("color", "#777777");
    }
}

function preloadImages() {
    var preLoad1 = new Image();
    preLoad1.src = "images/header/jobs_on.gif";

    var preLoad2 = new Image();
    preLoad2.src = "images/header/nerds_on.gif";

    var preLoad3 = new Image();
    preLoad3.src = "images/header/executives_on.gif";

    var preLoad4 = new Image();
    preLoad4.src = "images/header/employers_on.gif";

    var preLoad5 = new Image();
    preLoad5.src = "images/header/about_on.gif";

    var preLoadLogo = new Image();
    preLoadLogo.src = "images/header/logo_on.gif";
}

function rollover(id, url) {
    $("#" + id).attr("src", url);
}

$(document).ready(function(){
    preloadImages();
});