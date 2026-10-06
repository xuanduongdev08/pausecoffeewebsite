vnTRUST.do_Contact = function (obj_form)
{
  ok_post = true;
  var error_msg='';

  if(ok_post){
    var params =  obj_form.serialize();
    $.ajax({
      url: ROOT + "api/contact",
      dataType: "json",
      type: "post",
      data: params,
      headers: {
        "Authorization": "Bearer "+API_KEY,
        "csrf-token": $("#vnt_csrf_token").val()
      },
      beforeSend :function (){
        obj_form.addClass('vnt-loading');
        obj_form.find(".btn-loading").removeClass("hidden");
        obj_form.find(".btn-register").prop("disabled", true);
      },
      success: function (rs) {
        obj_form.removeClass('vnt-loading');
        obj_form.find(".btn-loading").addClass("hidden");
        obj_form.find(".btn-register").prop("disabled", false);

        if (rs.success)
        {
          $.fancybox.close();
          obj_form[0].reset();
          obj_form.find('.div_input').removeClass('has-feedback');
          obj_form.find('.div_input').removeClass('has-success');
          obj_form.find('.form-control-feedback').remove();
          obj_form.find('em').remove();

          Swal.fire({ icon: 'success',title: js_lang['announce'],html: rs.mess});

          /*$("#popSuccess .mess-success").html(rs.mess);

          $.fancybox.open({
            type : 'inline',
            src  : "#popSuccess"
          });*/

        }else {
          Swal.fire({ icon: 'error',title: js_lang['error'],html: rs.error_msg});
        }
      }
    });
  }else{
    Swal.fire({ icon: 'error',title: js_lang['error'],text: error_msg});
  }


  return false;

};



/** initLocalStorage **/
vnTRUST.initLocalStorage = function () {

  var hours = 1; // Reset when storage is more than  x hours
  var now = Date.now();
  var vnt_expire_time = localStorage.getItem('vnt_expire_time');
  if (vnt_expire_time == null) {
    localStorage.clear();
    localStorage.setItem('vnt_expire_time', now);
  } else if ( (now - vnt_expire_time) > hours*60*60*1000) {
    localStorage.clear();
    localStorage.setItem('vnt_expire_time', now);
  }


  //load data location
  var local_city = localStorage.getItem("arr_city");
  var local_state = localStorage.getItem("arr_state");
  var local_ward = localStorage.getItem("arr_ward");
  var isload = false;
  //console.log(JSON.parse(local_city));
  if (!vnTRUST.isJson(local_city)) {
    isload = true;
  } else {
    var arrp = JSON.parse(local_city);
    if (vnTRUST.isJson(local_city) && arrp != null && typeof arrp[0].name === "undefined") {
      isload = true;
    }
  }
  if (isload || !local_city || !local_state || !local_ward) {
    $.ajax({
      url: ROOT + "api/getlocations",
      method: "GET",
      success: function (rs) {
        if (rs.success)
        {
          localStorage.setItem("arr_city", JSON.stringify(rs.data.city));
          localStorage.setItem("arr_state", JSON.stringify(rs.data.state));
          localStorage.setItem("arr_ward", JSON.stringify(rs.data.ward));
        }
      },
    });
  }


};



/** acceptCookies
 ******************************************************************/
vnTRUST.acceptCookies = function () {
  vnTRUST.setCookie( 'acceptCookie', 1, 1 );
  $("#cookie-banner").remove();
};



/** Top Nav
 **************************************************************** **/
vnTRUST.topNav = function () {
  //vnTRUST.initLocalStorage();
};

vnTRUST.vnTFooter = function (){

};

/** init Load
 **************************************************************** **/
vnTRUST.init = function () {
  var Xwidth = $(window).width();
  if (Xwidth < 1100) {
    $(".floating-left").hide();
    $(".floating-right").hide()
  }


  $('[data-toggle="tooltip"]').tooltip();

  $(".alert-autohide").delay(5000).slideUp(200, function () {
    $(this).alert('close');
  });


  $(".onlynumeric").on("keypress keyup blur",function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });


  $.validator.addMethod("check_phone", function(value, element) {
    return this.optional(element) || /^[0-9\-.() ]{9,30}$/i.test(value);
  }, js_lang['err_phone_invalid'] );


  $("html").on("change",'.load_state',function(e)
  {
    var ext_display = $(this).attr("data-state");

    var did = $(this).val();
    var local_state = localStorage.getItem("arr_state");
    var html = '<option value="">Quận / Huyện</option>';
    if(local_state) {
      var arr_state = JSON.parse(local_state);

      arr_state.forEach(function(item)
      {
        if(item.city == did) {
          html += '<option value="'+item.id+'">'+item.name+'</option>';
        }
      });
      $("#"+ext_display).html(html);
    }else{
      var mydata =  "type=state&city="+ $(this).val()+'&lang='+lang;
      $.ajax({
        url: API_URL + "/location",
        method: "GET",
        data: mydata,
        headers: {
          "Authorization": "Bearer "+API_KEY,
          "csrf-token": $("#vnt_csrf_token").val()
        },
        success: function (rs) {
          if (rs.success)
          {
            var items = rs.data;
            items.forEach(function(item)
            {
              html += '<option value="'+item.id+'">'+item.title+'</option>';
            });

            $("#"+ext_display).html(html);
          }
        },
      });
    }

    setTimeout(function () {
      if($("#"+ext_display).hasClass('chosen-select')) {
        $("#"+ext_display).trigger("chosen:updated");
      }

      if($("#"+ext_display).hasClass('load_ward')) {
        $("#"+ext_display).trigger('change');
      }
    }, 100);

  });

  $("html").on("change",'.load_ward',function(e){
    var ext_display = $(this).attr("data-ward") ;
    var did = $(this).val();
    var local_ward = localStorage.getItem("arr_ward");
    var html = '<option value="">Phường xã</option>';
    if(local_ward) {
      var arr_ward = JSON.parse(local_ward);

      arr_ward.forEach(function(item)
      {
        if(item.state == did) {
          html += '<option value="'+item.id+'">'+item.name+'</option>';
        }
      });
      $("#"+ext_display).html(html);
    }else{
      var mydata =  "type=ward&state="+ $(this).val()+'&lang='+lang;
      $.ajax({
        url: API_URL + "/location",
        method: "GET",
        data: mydata,
        headers: {
          "Authorization": "Bearer "+API_KEY,
          "csrf-token": $("#vnt_csrf_token").val()
        },
        success: function (rs) {
          if (rs.success)
          {
            var items = rs.data;
            items.forEach(function(item)
            {
              html += '<option value="'+item.id+'">'+item.title+'</option>';
            });

            $("#"+ext_display).html(html);
          }
        },
      });
    }

    setTimeout(function () {
      if($("#"+ext_display).hasClass('chosen-select')) {
        $("#"+ext_display).trigger("chosen:updated");
      }
    }, 100);

  });


  $(".onlynumeric").on("keypress keyup blur",function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });


  $(".menu-category .mc-title").click(function (e) {
    if(! $(this).parents(".menu-category").hasClass("active")){
      $(this).parents(".menu-category").addClass("active");
    }else{
      $(this).parents(".menu-category").removeClass("active");
    }
  });
  $(".popup-map").fancybox({
    baseClass : 'vnt-popup-map',
  });

  $(".vnt-popup-newsletter").on('click', function(){
    $.fancybox.close();
    $.fancybox.open({
      type : 'inline',
      src  : "#vnt-popup",
      baseClass:'vnt-popup',
      smallBtn:true,
      touch: false,
      clickSlide: false,
      clickOutside: false,
      keyboard: false
    });

  });


  $(window).bind("click",function (e) {
    var $clicked = $(e.target);
    if(! $clicked.parents().hasClass("menu-category")){
      $(".menu-category").removeClass("active");
    }
  });


  vnTRUST.topNav();
  vnTRUST.vnTFooter();
  vnTRUST.load_Statistics();
  vnTRUST.show_popupBanner(1000);

  //vnTRUST.goTopStart();

  $(window).resize(function(){
  });

};

/* Init */
jQuery(window).ready(function () {
  vnTRUST.init();
});


