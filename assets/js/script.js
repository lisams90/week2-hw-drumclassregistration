var sounds = ["drum"];
var audioElement;

function playSounds(r) {
    audioElement.setAttribute('src', "assets/sounds/" + sounds[0] + ".mp3");
    audioElement.play();
}


function init() {
   
    audioElement = document.createElement('audio'); 
    audioElement.setAttribute('autoplay', 'autoplay'); 

    $('#drum').click(function(){
        playSounds();
    });

}


// $('#drum').init();


(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

$('#drum').drags();
$(document).ready(function() {
    init();
})

$(function () {
    
  $("button").click(function() {
    var Name = $("#name").val();
    if (Name === "") {
      return false
    }
    var Title = $("#title").val();
    if (Title === "") {
      return false
    }
    var Time = $("#time").val();
    if (Time === "") {
      return false
    }
    
    $("form").css("display", "none");
    $("form").html("Your name is " + Name + " and you are a " + Title + " . You want to take the lesson at" + Time + " . ");
  });
});




