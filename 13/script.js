var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 300;
var ctx = canvas.getContext("2d");
var gradientFill = ctx.createLinearGradient (500, 0, 100, 0);
gradientFill .addColorStop (0, "#80b6f4");
gradientFill .addColorStop (1, "#f49080");
var djangoObj = [19197,21100,37157,45131,51354,51876,61183,61029];
var djangoObjTwo = [19897,21700,37857,45631,52354,57876,61183,65029];


Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
	labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
	datasets: [{
		label: "",
		radius: 0,
		data: djangoObj,
		borderWidth: 0,
		backgroundColor: gradientFill,
		pointBackgroundColor: "rgba(120,0,0,1)",
		},
		{
		data: djangoObjTwo,
		borderWidth: 2,
		borderColor: "blue",
		backgroundColor: "rgba(0,0,0,0)",
	}]
};

var chartOptions = {
	tooltips: {	
		enabled: false,
	},
	legend: {
		display: false,
	},
	scales: {
		xAxes: [{
			ticks:{			
				padding: 20,
			},
			gridLines: {
				display:false
			}
		}],
		yAxes: [{
			display:false, 
		}]
	},

};

var lineChart = new Chart(canvas, {
	type: 'line',
	data: speedData,
	options: chartOptions
});


























var djangoSum = 0;
for(key in djangoObj) {
	djangoSum += djangoObj[key]
}
console.log(djangoSum)

/*var Piechart = function(options){
		this.options = options;
		this.canvas = options.canvas;
		this.ctx = this.canvas.getContext("2d");
		this.colors = options.colors;
 
		this.draw = function(){
				var total_value = 0;
				var color_index = 0;
				for (var categ in this.options.data){
						var val = this.options.data[categ];
						total_value += val;
				}
 
				var start_angle = 0;
				for (categ in this.options.data){
						val = this.options.data[categ];
						var slice_angle = 2 * Math.PI * val / total_value;
 
						drawPieSlice(
								this.ctx,
								this.canvas.width/2,
								this.canvas.height/2,
								Math.min(this.canvas.width/2,this.canvas.height/2),
								start_angle,
								start_angle+slice_angle,
								this.colors[color_index%this.colors.length]
						);
 
						start_angle += slice_angle;
						color_index++;
				}
 
		}
}

var myDougnutChart = new Piechart(
		{
				canvas: canvas,
				data:djangoObj,
				colors:["red","brown", "green","blue","purple","pink","black"],
				doughnutHoleSize:0.7
		}
);
myDougnutChart.draw();
*/

	