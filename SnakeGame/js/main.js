ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20, );
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px +=xd;
  py +=yd;
  snake.push({x:px, y:py});
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
    if(count <=-1){
      c.textContent = "geme over";
    }
  }
  while (snake.length > tail){
    snake.shift();
  }
  if(appleX1 == px && appleY1 == py){
    tail++;
    count++;
    console.log("apple1"+count);
    c.textContent=count;
    appleX1 = Math.floor(Math.random()*canv.width/SIZE);
    appleY1 = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX1*SIZE, appleY1*SIZE, SIZE-2, SIZE-2);

  if(appleX2 == px && appleY2 == py){
    tail--;
    count--;
    console.log("apple2"+count);
    c.textContent =count;
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "pink";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE, SIZE-2, SIZE-2);
},1000/FPS);
