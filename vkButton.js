<!--Button is similar VK button "Go UP"-->
<script type="text/javascript">

jQuery(document).ready(function() {
  jQuery('body').append('<div class="button-up" style="display: none;opacity: 0.7;width: 157px;height:100%;position: fixed;right: 0px;top: 0px;cursor: pointer;text-align: center;line-height: 30px;color: #d3dbe4;font-weight: bold;">▲ Наверх</div>');

  jQuery (window).scroll (function () {
    if (jQuery (this).scrollTop () > 100) {
      jQuery ('.button-up').fadeIn();
    } else {
      jQuery ('.button-up').fadeOut();
    }
  });

  jQuery('.button-up').click(function(){
    jQuery('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  jQuery('.button-up').hover(function() {
    jQuery(this).animate({
      'opacity':'1',
    }).css({'background-color':'#EAEAEA','color':'#6a86a4'});
  }, function(){
    jQuery(this).animate({
      'opacity':'0.7'
    }).css({'background':'none','color':'#d3dbe4'});;
  });

});
</script>
