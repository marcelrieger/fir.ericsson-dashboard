import { Component, Input, OnInit, ElementRef } from 'angular2/core';
import { Router } from 'angular2/router';
///<reference path="d3.d.ts" />

@Component({
  selector: 'bl-comp-linechart',
  templateUrl: 'app/bl-comp-linechart/bl-comp-linechart.component.html',
  styleUrls: ['app/bl-comp-linechart/bl-comp-linechart.component.css']
})

export class BLCompLineChartComponent implements OnInit {

	@Input() width = 390;
	@Input() height = 200;
	@Input() xTitle = "";
	@Input() yTitle = "";
	@Input() xRange = [0, 120];
	@Input() yRange = [0, 100];
	@Input() criticalValue = [0, 0];
	@Input() riskValue = [0, 0];
	@Input() yValue = ["-30s", "-20s", "-10s", "0s"];

	@Input()
	set setDataset(val: any) {
		this.dataset = val;
		if (this.ready) {
			this._graph.data([this.dataset]);
			this.renderGraph(false);
		}
	}

	@Input()
	set streamIn(n: any) {
		this.dataset.push(n);

		if (this.ready && !isNaN(parseInt(n))) {

			if (n > this._maxValue) {
				this._maxValue = n;
			}
			if (this.dataset.length > this.xRange[1] + 1) {
				this.dataset.shift();
				this.renderGraph(true);
			} else {
				this.renderGraph(false);
			}
		}
	}

	@Input() dataIn;

	@Input() 
	set trigger(n: any) {
		this.dataset.push(this.dataIn);

		if (this.ready && !isNaN(parseInt(this.dataIn))) {

			if (this.dataIn > this._maxValue) {
				this._maxValue = this.dataIn;
			}
			if (this.dataset.length > this.xRange[1] + 1) {
				this.dataset.shift();
				this.renderGraph(true);
			} else {
				this.renderGraph(false);
			}
		}
	}
	
	private dataset = [];
	private host;
	private _graphContainer;
	private _hMargin = 0;
	private _x;
	private _y;
	private _xAxis;
	private _yAxis;
	private _graph;
	private _maxValue;
	private _graphMaxLine;
	private _graphMinLine;
	private _lineFunction;
	private ready = false;

	constructor(private element: ElementRef) {
		this.host = d3.select(this.element.nativeElement);
	}

	ngOnInit() {
		let C = this;

		C._maxValue = C.yRange[0];

		this.width -= 40;
		this.height -= 180;
		this._x = d3.scale.linear().domain(C.xRange).range([0 + 17 + C._hMargin, this.width-30 - C._hMargin]);
		this._y = d3.scale.linear().domain(C.yRange).range([C.height, C.yRange[0]]);

		this._xAxis = d3.svg.axis()
			.scale(d3.scale.ordinal().domain(C.yValue).rangePoints([20, this.width - 20]))
			.orient("bottom");

		this._yAxis = d3.svg.axis()
			.scale(this._y)
			.orient("left").ticks(5);

		this._lineFunction = d3.svg.line()
			.x(function(d, i) { return C._x(i); })
			.y(function(d) { return C._y(d); })
			.interpolate("linear");

		this._graphContainer = this.host.select(".chart")
								.append("svg")
								.attr("height", C.height).attr("width", C.width+"px");

		if (C.valid(this.riskValue[0]) && this.riskValue[0] > this.yRange[0]) {
			this._graph = this._graphContainer
				.append("rect")
				.attr("class", "risk")
				.attr("x", 30)
				.attr("y", C._y(this.riskValue[0])-1)
				.attr("width", this.width - 40)
				.attr("height", C._y(this.yRange[0]) - C._y(this.riskValue[0]));
			this._graphContainer.append("line")
				.attr("class", "dashedline")
				.attr("stroke-dasharray", "5,5")
				.attr("x1", 30)
				.attr("y1", C._y(this.riskValue[0]))
				.attr("x2", this.width-10)
				.attr("y2", C._y(this.riskValue[0]));
		}
		if (C.valid(this.riskValue[1]) && this.riskValue[1] < this.yRange[1]) {
			this._graph = this._graphContainer
				.append("rect")
				.attr("class", "risk")
				.attr("x", 30)
				.attr("y", C._y(this.yRange[1]))
				.attr("width", this.width - 40)
				.attr("height", C._y(this.riskValue[1]) - C._y(this.yRange[1]));
			this._graphContainer.append("line")
				.attr("class", "dashedline")
				.attr("stroke-dasharray", "5,5")
				.attr("x1", 30)
				.attr("y1", C._y(this.riskValue[1]))
				.attr("x2", this.width - 10)
				.attr("y2", C._y(this.riskValue[1]));
		}

		if (C.valid(this.criticalValue[0]) && this.criticalValue[0] > this.yRange[0]) {
			this._graph = this._graphContainer
				.append("rect")
				.attr("class", "critical")
				.attr("x", 30)
				.attr("y", C._y(this.criticalValue[0]))
				.attr("width", this.width - 40)
				.attr("height", C._y(this.yRange[0]) - C._y(this.criticalValue[0]));
			this._graphContainer.append("line")
				.attr("class", "dashedline")
				.attr("x1", 30)
				.attr("y1", C._y(this.criticalValue[0]))
				.attr("x2", this.width - 10)
				.attr("y2", C._y(this.criticalValue[0]));
		}
		if (C.valid(this.criticalValue[1]) && this.criticalValue[1] < this.yRange[1]) {
			this._graph = this._graphContainer
				.append("rect")
				.attr("class", "critical")
				.attr("x", 30)
				.attr("y", C._y(this.yRange[1]))
				.attr("width", this.width - 40)
				.attr("height", C._y(this.criticalValue[1]) - C._y(this.yRange[1]));
			this._graphContainer.append("line")
				.attr("class", "dashedline")
				.attr("x1", 30)
				.attr("y1", C._y(this.criticalValue[1]))
				.attr("x2", this.width - 10)
				.attr("y2", C._y(this.criticalValue[1]));
		}

		this._graphMaxLine = this._graphContainer.append("line")
			.attr("class", "maxline")
			.attr("stroke-dasharray", "2,5")
			.attr("x1", 30)
			.attr("y1", 0)
			.attr("x2", this.width - 10)
			.attr("y2", 0);

		this._graph = this._graphContainer
			.append("path")
			.data([this.dataset])
			.attr("class", "line");

		this._graphContainer.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(10," + this.height + ")")
			.call(this._xAxis)
			.append("text")
			.attr("x", this.width - 20)
			.attr("y", -6)
			.style("text-anchor", "end")
			.text(this.xTitle);

		this._graphContainer.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(30,0)")
			.call(this._yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.html(this.yTitle);
		//console.log(this._graphContainer);
		//console.log(this._graphContainer[0][0].clientWidth);
		this.ready = true;

	}

	private valid(v: any) {
		return (v != null);
	}

	private renderGraph(datafull: boolean) {

		// If dataset not full, shift the graph to the right based on current dataset length
		var xStart = 0;
		var xEnd = -0.5;
		if (!datafull) {
			xStart = this.xRange[1]-this.dataset.length+1;
			xEnd = xStart - 0.5;
		}

		this._graphMaxLine
			.transition()
			.duration(300)
			.ease("linear")
			.attr("transform", "translate(0," + this._y(this._maxValue) + ")");

		this._graph
			.attr("transform", "translate(" + this._x(xStart) + ",0)")
			.attr("d", this._lineFunction)
			.transition()
			.duration(150)
			.ease("linear")
			.attr("transform", "translate(" + this._x(xEnd) + ",0)");

	}

}