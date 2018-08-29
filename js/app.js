// $(function() {
//     $('.galeria .contenedor-imagen').on('click', function() {
//         $('#modal').modal;
//         var ruta_imagen = ($(this).find('img').attr('src'));
//         $('#imagen-modal').attr('src', ruta_imagen);
//     });

//     $('#modal').on('click', function() {
//         $('#modal').modal('hide');
//     });
// })

// $(function() {
//     var $jittery = $('.jiterry'),
//         aText = $jittery.text().split(''),
//         letters = '';

//     for (var i = 0; i < aText.length; i++) {
//         letters += '<span>' + aText[i] + '</span>';
//     }

//     $jittery.empty().append(letters);

//     $.each($('span', $jittery), function(i) {
//         $(this).css('animation-delay', '-' + i + '30ms');
//     });
// });

// $(document).ready(function() {
//     var $magic = $(".magic"),
//         magicWHalf = $magic.width() / 2;
//     $(document).on("mousemove", function(e) {
//         $magic.css({ "left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf });
//     });
// });

/* Demo purposes only */
// $(".hover").mouseleave(
//     function() {
//         $(this).removeClass("hover");
//     }
// );