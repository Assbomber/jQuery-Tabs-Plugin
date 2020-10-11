# jQuery-Tabs-Plugin
Helps to easily create tabs. See [DEMO](https://assbomber.github.io/jQuery-Tabs-Plugin)

## Methods

### formTab()
A single method that creates all that is required. Below are bunch of parameters it takes.

| Parameter | function |
| ------ | ------ |
| (int) count  | defines the number of tabs you want |
| (Array<String>) tabs  | expects an array of tab names, |
| (Array<String>) tabContents  | expects and array of content. Remember to parse HTML as a string incase using HTML as content |
| (boolean) userTabSwitchEnabled  | defines the plugin whether the end user is allowed to switch tabs |
| (String) float  | defines the location of tab navigator. Accepted values: "top","left","right". By default is set to "top" |
| (int) width  | defines the max width |

### next()
Jump to next tab.

### previous()
Jump to previous tab.

## How to use

### Attach required files
Link the styles.css and tabsPlugin.js in your index.html
### Create a div
Create a div and provide it an id.
```sh
<div id="tabs"></div>
```

### Call formTab()
Call the formTab() using your div id and provide it required parameters.
```sh
$("$tabs").formTab({
     count:3,
     tabs:["Tab 1","Tab 2","Tab 3"],
     userTabSwitchEnabled:true,
     float:"top",
     width:600,
     tabContents:[
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
]
});
```

### Assign next()/ previous() (Optional)
Assign any required element the functionality of next() or previous()

```sh
$("button").click(function(){
  console.log("called");
  $("#tabs").previous();
})

$("em").hover(function(){
  $("#tabs").next();
})
```
