(function($) {
  var itemsCount = 0;
  var currentActiveTab = 0;
  //-----------------------------------------------------------------------  Initializing Tabs
  $.fn.formTab = function({
    width=580,
    float="top",
    count,
    tabs,
    tabContents,
    userTabSwitchEnabled = true
  }) {
    itemsCount = tabs.length;
    if (count !== tabs.length) {
      console.error("Count and Tabs count must be same!");
    } else {
      if (tabContents.length !== itemsCount) {
        console.error("ItemContents count must be same as Tabs count!");
      } else {
        // Initializing tabs navigation(class=active,id=tab1)
        $(this).prepend("<ul id='tab-nav'></ul>");
        for (var i = 0; i < tabs.length; i++) {
          $("#tab-nav").append("<li id=tab-" + i + " class='active'><a id=tab" + i + " href=\"#tab" + i + "-content\">" + tabs[i] + "</a></li>");
        }
        // Initializing tabs contents(id=tab1-content,class="tab-content")
        $(this).append("<div id='tabs-content'></div>");
        for (var i = 0; i < tabContents.length; i++) {
          $("#tabs-content").append("<div id=tab" + i + "-content class='tab-content'>" + tabContents[i] + "</div>");
        }
        //Setting tab1 show by default
        $(".tab-content").hide();
        $("#tab-nav li").addClass("inactive");
        $("#tab-nav li:first").removeClass("inactive");
        $(".tab-content:first").show();

        //Tab-nav location
        if(float==="top"){
          $(this).css("width",width.toString());
          $(".tab-content").css("width",width.toString());
          $("#tab-nav").css({"margin":"0","padding":"0","float":"none","display":"block","max-width":"none"});
          $("#tabs-content").css({"float":"none"});
        }
        else if(float==="left"){
          $(this).css("width",width.toString());
          $("#tab-nav").css({"margin":"0","padding":"0","float":"left","display":"inline-block","max-width":"120px"});
          $("#tabs-content").css({"float":"right","width":(width-120).toString()});
        }
        else if(float==="right"){
          $(this).css("width",width.toString());
          $("#tab-nav").css({"margin":"0","padding":"0","float":"right","display":"inline-block","max-width":"120px"});
          $("#tabs-content").css({"float":"left","width":(width-120).toString()});
        }
        else{
          console.error("float type "+float+" is not defined");
        }
        //userTabSwitchEnabled
        if (userTabSwitchEnabled) {
          $("#tab-nav li a").click(function(e) {
            $(".tab-content").hide();
            var link=$(this).attr('href');
            $(link).fadeIn();
            var val = e.target.id;
            $("#" + val + "-content").show();
            $("#tab-nav li").addClass("inactive");
            currentActiveTab = parseInt(val.charAt(val.length - 1));
            $("#tab-nav #tab-"+currentActiveTab).removeClass("inactive");
          });
        }

      }

    }
  }
  //------------------------------------------------------------------------next Function
  $.fn.next = function() {
    if (currentActiveTab + 1 >= itemsCount) console.error("Tab index out of bound: " + (currentActiveTab + 1));
    else {
      $(".tab-content").hide();
      var link=$("#tab"+(++currentActiveTab)).attr('href');
      $(link).fadeIn();
      $("#tab" + (currentActiveTab) + "-content").show();
      $("#tab-nav li").addClass("inactive");
      $("#tab-nav #tab-"+currentActiveTab).removeClass("inactive");
    }
  }
  //------------------------------------------------------------------------previous function
  $.fn.previous = function() {
    if (currentActiveTab - 1 < 0) console.error("Tab index out of bound: " + (currentActiveTab - 1));
    else {
      $(".tab-content").hide();
      var link=$("#tab"+(--currentActiveTab)).attr('href');
      $(link).fadeIn();
      $("#tab" + (currentActiveTab) + "-content").show();
      $("#tab-nav li").addClass("inactive");
      $("#tab-nav #tab-"+currentActiveTab).removeClass("inactive");
    }

  }



}(jQuery));
