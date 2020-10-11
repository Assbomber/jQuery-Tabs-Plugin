$("#tabs").formTab({count:3,tabs:["Tab 1","Tab 2","Tab 3"],userTabSwitchEnabled:true,float:"top",width:600,tabContents:[
  "<h1>This is tab 1 content</h1>"+
  "<img src=\"https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg\" width=100%>"+
  "<p>This is the sample text. Is nothing but a waste of time....hehe..just to showcase the plugin</p>",

  "<h1>This is tab 2 content</h1>"+
  "<img src=\"https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg\" width=100%>"+
  "<p>You know what, you can use any element as a navigator </p>"+
  "<button>previous</button>  or <em style='font-size:1.5rem;'>Hover over me to next</em>",

  "<h1>This is tab 3 content</h1>"+
  "<img src=\"https://static.photocdn.pt/images/articles/2018/12/31/fujifilm_x-t3_review.jpg\" width=100%>"+
  "<p>This is the sample text. Is nothing but a waste of time....hehe..just to showcase the plugin</p>",
]});

$("button").click(function(){
  console.log("called");
  $("#tabs").previous();
})

$("em").hover(function(){
  $("#tabs").next();
})
