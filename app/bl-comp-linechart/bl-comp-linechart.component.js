System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BLCompLineChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ///<reference path="d3.d.ts" />
            BLCompLineChartComponent = (function () {
                function BLCompLineChartComponent(element) {
                    this.element = element;
                    this.width = 390;
                    this.height = 200;
                    this.xTitle = "";
                    this.yTitle = "";
                    this.xRange = [0, 120];
                    this.yRange = [0, 100];
                    this.yValue = ["-30s", "-20s", "-10s", "0s"];
                    this.dataset = [];
                    this._hMargin = 0;
                    this.riskValue = [null, null];
                    this.criticalValue = [null, null];
                    this._warnArea = [null, null];
                    this._warnAreaBorder = [null, null];
                    this._critArea = [null, null];
                    this._critAreaBorder = [null, null];
                    this.ready = false;
                    this.host = d3.select(this.element.nativeElement);
                }
                Object.defineProperty(BLCompLineChartComponent.prototype, "criticalVal", {
                    set: function (n) {
                        if (n[0] !== null) {
                            this.criticalValue[0] = parseFloat(n[0]);
                        }
                        if (n[1] !== null) {
                            this.criticalValue[1] = parseFloat(n[1]);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompLineChartComponent.prototype, "riskVal", {
                    set: function (n) {
                        if (n[0] !== null) {
                            this.riskValue[0] = parseFloat(n[0]);
                        }
                        if (n[1] !== null) {
                            this.riskValue[1] = parseFloat(n[1]);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompLineChartComponent.prototype, "setDataset", {
                    set: function (val) {
                        this.dataset = val;
                        for (var i = 0; i < this.dataset.length; i++) {
                            this.dataset[i] = parseFloat(this.dataset[i]);
                        }
                        if (this.ready) {
                            this._graph.data([this.dataset]);
                            this.renderGraph(false);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompLineChartComponent.prototype, "streamIn", {
                    set: function (n) {
                        this.dataset.push(parseFloat(n));
                        if (this.ready && !isNaN(parseInt(n))) {
                            if (this.dataset.length > this.xRange[1] + 1) {
                                this.dataset.shift();
                                this.renderGraph(true);
                            }
                            else {
                                this.renderGraph(false);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompLineChartComponent.prototype, "trigger", {
                    set: function (n) {
                        this.dataset.push(parseFloat(this.dataIn));
                        if (this.ready && !isNaN(parseInt(this.dataIn))) {
                            if (this.dataset.length > this.xRange[1] + 1) {
                                this.dataset.shift();
                                this.renderGraph(true);
                            }
                            else {
                                this.renderGraph(false);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                BLCompLineChartComponent.prototype.ngOnInit = function () {
                    var C = this;
                    C._maxValue = C.yRange[0];
                    console.log(this.riskValue);
                    this.width -= 40;
                    this.height -= 180;
                    this._x = d3.scale.linear().domain(C.xRange).range([0 + 17 + C._hMargin, this.width - 30 - C._hMargin]);
                    this._y = d3.scale.linear().range([C.height, 0]);
                    this._y.domain(C.yRange);
                    this._xAxis = d3.svg.axis()
                        .scale(d3.scale.ordinal().domain(C.yValue).rangePoints([20, this.width - 20]))
                        .orient("bottom");
                    this._yAxis = d3.svg.axis()
                        .scale(this._y)
                        .orient("left").ticks(5);
                    this._lineFunction = d3.svg.line()
                        .x(function (d, i) { return C._x(i); })
                        .y(function (d) { return C._y(d); })
                        .interpolate("linear");
                    this._graphContainer = this.host.select(".chart")
                        .append("svg")
                        .attr("height", C.height).attr("width", C.width + "px");
                    if (C.valid(this.riskValue[0]) && this.riskValue[0] > this.yRange[0]) {
                        this._warnArea[0] = this._graphContainer
                            .append("rect")
                            .attr("class", "risk")
                            .attr("x", 30)
                            .attr("y", C._y(this.riskValue[0]) - 1)
                            .attr("width", this.width - 40)
                            .attr("height", C._y(this.yRange[0]) - C._y(this.riskValue[0]));
                        this._warnAreaBorder[0] = this._graphContainer.append("line")
                            .attr("class", "dashedline")
                            .attr("stroke-dasharray", "5,5")
                            .attr("x1", 30)
                            .attr("x2", this.width - 10);
                    }
                    if (C.valid(this.riskValue[1]) && this.riskValue[1] < this.yRange[1]) {
                        this._warnArea[1] = this._graphContainer
                            .append("rect")
                            .attr("class", "risk")
                            .attr("x", 30)
                            .attr("y", C._y(this.yRange[1]))
                            .attr("width", this.width - 40)
                            .attr("height", C._y(this.riskValue[1]) - C._y(this.yRange[1]));
                        this._warnAreaBorder[1] = this._graphContainer.append("line")
                            .attr("class", "dashedline")
                            .attr("stroke-dasharray", "5,5")
                            .attr("x1", 30)
                            .attr("x2", this.width - 10);
                    }
                    if (C.valid(this.criticalValue[0]) && this.criticalValue[0] > this.yRange[0]) {
                        this._critArea[0] = this._graphContainer
                            .append("rect")
                            .attr("class", "critical")
                            .attr("x", 30)
                            .attr("y", C._y(this.criticalValue[0]))
                            .attr("width", this.width - 40)
                            .attr("height", C._y(this.yRange[0]) - C._y(this.criticalValue[0]));
                        this._critAreaBorder[0] = this._graphContainer.append("line")
                            .attr("class", "dashedline")
                            .attr("x1", 30)
                            .attr("x2", this.width - 10);
                    }
                    if (C.valid(this.criticalValue[1]) && this.criticalValue[1] < this.yRange[1]) {
                        this._critArea[1] = this._graphContainer
                            .append("rect")
                            .attr("class", "critical")
                            .attr("x", 30)
                            .attr("y", C._y(this.yRange[1]))
                            .attr("width", this.width - 40)
                            .attr("height", C._y(this.criticalValue[1]) - C._y(this.yRange[1]));
                        this._critAreaBorder[1] = this._graphContainer.append("line")
                            .attr("class", "dashedline")
                            .attr("x1", 30)
                            .attr("x2", this.width - 10);
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
                };
                BLCompLineChartComponent.prototype.valid = function (v) {
                    return (v != null);
                };
                BLCompLineChartComponent.prototype.renderGraph = function (datafull) {
                    // Set Max and Min
                    this._maxValue = this.dataset[0];
                    this._minValue = this.dataset[0];
                    for (var i = 0; i < this.xRange[1]; i++) {
                        if (this.dataset[i] > this._maxValue) {
                            this._maxValue = this.dataset[i];
                        }
                        else if (this.dataset[i] < this._minValue) {
                            this._minValue = this.dataset[i];
                        }
                    }
                    // If dataset not full, shift the graph to the right based on current dataset length
                    var xStart = 0;
                    var xEnd = -0.5;
                    if (!datafull) {
                        xStart = this.xRange[1] - this.dataset.length + 1;
                        xEnd = xStart - 0.5;
                    }
                    var graphMin = this._minValue - 0.3;
                    var graphMax = this._maxValue + 0.3;
                    this._y.domain([graphMin, graphMax]);
                    if (this._warnArea[0] != null) {
                        if (this.riskValue[0] < graphMin) {
                            this._warnArea[0].attr("height", 0);
                        }
                        else {
                            this._warnArea[0]
                                .transition()
                                .duration(300)
                                .attr("y", this._y(this.riskValue[0]) - 1)
                                .attr("height", this._y(graphMin) - this._y(this.riskValue[0]));
                            this._warnAreaBorder[0]
                                .transition()
                                .duration(300)
                                .ease("linear")
                                .attr("transform", "translate(0," + this._y(this.riskValue[0]) + ")");
                        }
                    }
                    if (this._warnArea[1] != null) {
                        if (this.riskValue[1] > graphMax) {
                            this._warnArea[1].attr("height", 0);
                        }
                        else {
                            this._warnArea[1]
                                .transition()
                                .duration(300)
                                .attr("y", this._y(graphMax))
                                .attr("height", this._y(this.riskValue[1]) - this._y(this.yRange[1]));
                            this._warnAreaBorder[1]
                                .transition()
                                .duration(300)
                                .ease("linear")
                                .attr("transform", "translate(0," + this._y(this.riskValue[1]) + ")");
                        }
                    }
                    if (this._critArea[0] != null) {
                        if (this.criticalValue[0] < graphMin) {
                            this._critArea[0].attr("height", 0);
                        }
                        else {
                            this._critArea[0]
                                .transition()
                                .duration(300)
                                .attr("y", this._y(this.riskValue[0]) - 1)
                                .attr("height", this._y(this.yRange[0]) - this._y(this.criticalValue[0]));
                            this._critAreaBorder[0]
                                .transition()
                                .duration(300)
                                .ease("linear")
                                .attr("transform", "translate(0," + this._y(this.criticalValue[0]) + ")");
                        }
                    }
                    if (this._critArea[1] != null) {
                        if (this.criticalValue[1] > graphMax) {
                            this._critArea[1].attr("height", 0);
                        }
                        else {
                            this._critArea[1]
                                .transition()
                                .duration(300)
                                .attr("y", this._y(graphMax))
                                .attr("height", this._y(this.criticalValue[1]) - this._y(this.yRange[1]));
                            this._critAreaBorder[1]
                                .transition()
                                .duration(300)
                                .ease("linear")
                                .attr("transform", "translate(0," + this._y(this.criticalValue[1]) + ")");
                        }
                    }
                    this._graphContainer.select(".y.axis")
                        .transition()
                        .duration(300)
                        .call(this._yAxis);
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
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "height", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "xTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "yTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "xRange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "yRange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BLCompLineChartComponent.prototype, "criticalVal", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BLCompLineChartComponent.prototype, "riskVal", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "yValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BLCompLineChartComponent.prototype, "setDataset", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BLCompLineChartComponent.prototype, "streamIn", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompLineChartComponent.prototype, "dataIn", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BLCompLineChartComponent.prototype, "trigger", null);
                BLCompLineChartComponent = __decorate([
                    core_1.Component({
                        selector: 'bl-comp-linechart',
                        templateUrl: 'app/bl-comp-linechart/bl-comp-linechart.component.html',
                        styleUrls: ['app/bl-comp-linechart/bl-comp-linechart.component.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], BLCompLineChartComponent);
                return BLCompLineChartComponent;
            }());
            exports_1("BLCompLineChartComponent", BLCompLineChartComponent);
        }
    }
});
//# sourceMappingURL=bl-comp-linechart.component.js.map