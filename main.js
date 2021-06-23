canvas = document.getElementById("MyCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokestyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "blue";
ctx.lineWidth = 5;
ctx.arc(270, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "black";
ctx.lineWidth = 5;
ctx.arc(360, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(310, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "green";
ctx.lineWidth = 5;
ctx.arc(410, 260, 40, 0, 2 * Math.PI);
ctx.stroke();
