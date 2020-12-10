var container = document.querySelector("#container");
var stageWidth = container.offsetWidth;
var stageHeight = container.offsetHeight;

var stage = new Konva.Stage({
  container: "container",
  width: stageWidth,
  height: stageHeight,
});

var layer = new Konva.Layer();
stage.add(layer);



// what is url of dragging element?
var itemURL = "";
document.getElementById("root").addEventListener("click", function (e) {
  itemURL = e.target.src;
  console.log("hi");
  e.preventDefault();

  var newGroup = new Konva.Group({
    x: 20,
    y: 110,
    draggable: true,
  });
//   const deleteButton = new Konva.Circle({
//     radius: 40,
//     fill: "red",
    
//   })
  
  layer.add(newGroup);
  
  Konva.Image.fromURL(itemURL, function (image) {
    newGroup.add(image);
    // newGroup.add(deleteButton).addEventListener("click", () => {
    //     newGroup.destroy();
    //     layer.draw();
    //   });
    layer.draw();
    console.log(image);
  });


  
  itemURL = "";
});

// var con = stage.container();

// con.addEventListener("click", function (e) {
//   e.preventDefault();

//   Konva.Image.fromURL(itemURL, function (image) {
//     layer.add(image);
//     image.draggable(true);
//     layer.draw();
//   });
//   itemURL = ""
// });

function fitStageIntoParentContainer() {
  var container = document.querySelector("#container");
  var stageWidth = container.offsetWidth;
  var stageHeight = container.offsetHeight;

  stage.width(stageWidth);
  stage.height(stageHeight);
}

fitStageIntoParentContainer();
// adapt the stage on any window resize
window.addEventListener("resize", fitStageIntoParentContainer);
