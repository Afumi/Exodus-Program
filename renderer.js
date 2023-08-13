/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
$(function () {
    $( ".hvrBtn" ).hover(
      function() {
          $( this ).addClass("hover");
      }, function() {
          $( this ).removeClass("hover");
      }
    );
    $(".ZoneBtn").click(function(){$(this).toggleClass("include exclude");});
    $(".TradorEditorTitle").selectmenu();
        var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    //
    //Event Handler for the "Add" button on the editor line
    //Logic for generating UUID and array editing should be here.
    //
    $("#editor").on("click", "#addBtn", function(){
        var origElem = $(this).closest(".VendorLine");
        var cloElem = origElem.clone();
        var uuid = "eco-"+Date.now();
        cloElem.attr("id", uuid);
        $("#editor").append(cloElem);
        $(this).css('visibility','hidden')
    });
    //
    //Event Handler for config generator button.
    //Logic for generate JSON file should be here.
    //
    $("#editor").on("click", "#genBtn", function(){
        
    });
});