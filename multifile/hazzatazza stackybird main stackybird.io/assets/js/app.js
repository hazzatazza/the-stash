// update canvas size
var refreshCanvas = function(){
  var isTouch = ('ontouchstart' in document.documentElement);
  
  if (!isTouch) {
    return;
  }

  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;

  var gameContainer = document.querySelector("#gameContainer")
  gameContainer.width = newWidth;
  gameContainer.height = newHeight
};

// on window resize, apply width to game
window.addEventListener("resize", refreshCanvas);

(() => {
  /*
  const gameContainer = document.getElementById('gameContainer')
  // allow mouse scroll while cursor is hovering over webgl container

  const handleScroll = () => gameContainer.style.pointerEvents = 'none'
  const handleMove = () => gameContainer.style.pointerEvents = 'auto'

  document.addEventListener('wheel', _.throttle(handleScroll, 32), false)
  document.addEventListener('mousemove', _.throttle(handleMove, 32), false)
  */
})()