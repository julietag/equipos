		<script>
            $(document).ready(function(){
                $('.nav-pills a').click(function(){
                    $('.in').not($(this).data('target')).collapse('hide');
                });
            });
        </script> 
		<script>       
            $(document).ready(function() {
                $("#goancla1").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))   
                        $('html,body').animate({scrollTop: $("#ancla1").offset().top}, 1500);
                });
                $("#goancla2").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))
                      $('html,body').animate({scrollTop: $("#ancla2").offset().top}, 1500);
                });
                $("#goancla3").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))
                        $('html,body').animate({scrollTop: $("#ancla3").offset().top}, 1500);
                });
                $("#goancla4").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))   
                        $('html,body').animate({scrollTop: $("#ancla4").offset().top}, 1500);
                });
                $("#goancla5").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))
                      $('html,body').animate({scrollTop: $("#ancla5").offset().top}, 1500);
                });
                $("#goancla6").click(function() {
                    if(!$('.bloqsfootspace div').hasClass('in'))
                        $('html,body').animate({scrollTop: $("#ancla6").offset().top}, 1500);
                });
            });
        </script>
