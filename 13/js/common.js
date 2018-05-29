var canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;
var ctx = canvas.getContext("2d");
var djangoObj = {
    2011:[19897,"225,0,0",225],
    2012:[21700,"2,11,40",2],
    2013:[37857,"16,120,30",16],
    2014:[45631,"179,33,17",179],
    2015:[52354,"56,56,56",56],
    2016:[57876,"33,33,33",33],
    2017:[61183,"11,11,11",11],
    2018:[65029,"43,11,40",43]
}







function roundGraph(options, obj) {
    this.options = options;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    var totalSum = 0;

    for(key in obj) {
        totalSum += obj[key][0]
    }

    var percent = totalSum / 345;
    var endAngle = 0;

    this.draw = function() {
        var sum=0;
        var startAngle = 0;
        var endAngle = 0;
        var color = 0;

        for(key in obj) {
            color+=30;
            endAngle = obj[key][0]/percent+startAngle;
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "rgb("+obj[key][1]+")";
            ctx.arc(150, 150, 130, (Math.PI/180)*startAngle, (Math.PI/180)*endAngle);
            ctx.lineCap = "round";
            ctx.stroke();
            startAngle = endAngle;
        }
    }

    function drawCheck(x,y){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    var that = this;
    canvas.onclick = function(e){
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    
    var imgd = ctx.getImageData(x, y, 1, 1);
    for(key in djangoObj){
        if(imgd.data[0] === djangoObj[key][2]){
            ctx.clearRect(0,0,canvas.width,canvas.height);

            ctx.fillStyle = "gray";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.font = 'bold 36px sans-serif';
            ctx.fillText(key,canvas.width/2,canvas.height/2-40);

            ctx.fillStyle = "#000000";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.font = 'bold 30px sans-serif';
            ctx.fillText(djangoObj[key][0],canvas.width/2,canvas.height/2+40);

            that.draw();
            drawCheck(x,y)
        }

        else{}
    }
}
    
}

var myDougnutChart = new roundGraph([],djangoObj);
myDougnutChart.draw();