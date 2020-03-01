function draw(position) {
    var canvas = document.getElementById('canvas');
    var x;

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#3faaf8';
      ctx.font = "20px Georgia";

      if (position === 'Draw') {
        ctx.strokeRect(150, 50, 200, 200);
        ctx.fillRect(150, 50, 200, 200);
        ctx.fillStyle = 'white';
        ctx.fillText("Canvas Area", 200, 150);
      } 

      else if (position === 'Right') {
        ctx.strokeRect(250, 50, 200, 200);
        ctx.fillRect(250, 50, 200, 200);
        ctx.fillStyle = 'white';
        ctx.fillText("Canvas Area", 300, 150);
      } 

      else if (position === 'Left') {
        ctx.strokeRect(50, 50, 200, 200);
        ctx.fillRect(50, 50, 200, 200);
        ctx.fillStyle = 'white';
        ctx.fillText("Canvas Area", 100, 150);
      } 
      
      else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }