$(document).ready(function() {
  onResize();
  drawFss();
});
$(window).resize(function() {
  onResize();
});
function onResize() {
  var hwindow = $(window).height();
  var wwindow = $(window).width();
  $(".crit_header").height(hwindow * 1.1);
}
var config = {};
function drawFss() {
  var canvas = document.createElement("canvas");
  config.background = {
    enabled: true,
    RENDER: {
      renderer: "canvas"
    },
    MESH: {
      ambient: "#555555", // Default
      diffuse: "#ffffff", // Default
      width: 1.5, // Triangle Width
      height: 1.5, // Triangle Height
      depth: 20, // Transparency of the triangles
      segments: 16, // Number of triangles to display in 1 row
      slices: 10, // Number of triangles to display in 1 column
      xRange: 0.8, // Wideness of the triangles in X Position
      yRange: 0.1, // Wideness of the triangles in Y Position
      zRange: 1.0, // Wideness of the triangles in Z Position
      speed: 0.0005 // Speed of the moving traingles
    },
    LIGHT: {
      autopilot: false, // Set this to true if you want the light to follow your mouse cursor
      ambient: "#414141",
      diffuse: "#1A1A1D",
      count: 1, // Contrast
      zOffset: 100,
      xyScalar: 1,
      speed: 0.001,
      gravity: 1200,
      dampening: 0.15,
      minLimit: 8,
      maxLimit: null,
      minDistance: 20,
      maxDistance: 400,
      draw: false // Set to true if you want to just draw a background image (static).
    }
  };
  config.background.LIGHT.ambient = "#4f4f4f";
  config.background.LIGHT.diffuse = "#1A1A1D";
  initBackground();
}
