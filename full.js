(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"full_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"full_atlas_2", frames: [[0,0,1264,1249]]},
		{name:"full_atlas_3", frames: [[0,0,1264,1249]]},
		{name:"full_atlas_4", frames: [[0,0,1264,1249]]},
		{name:"full_atlas_5", frames: [[0,0,1264,1249]]},
		{name:"full_atlas_6", frames: [[986,1390,139,273],[0,1251,577,273],[839,1390,145,273],[1187,1251,147,273],[579,1251,258,273],[0,1526,128,137],[839,1251,346,137],[0,0,1264,1249]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["full_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["full_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["full_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["full_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["full_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ssdds = function() {
	this.initialize(ss["full_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(252.65,-4.6,0.2432,0.2432);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(116.4,-4.6,0.2432,0.2432);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(86.75,-4.6,0.2432,0.2432);

	this.instance_3 = new lib.CachedBmp_7();
	this.instance_3.setTransform(56.55,-4.6,0.2432,0.2432);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-1.95,-4.6,0.2432,0.2432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-1.9,-4.6,288.4,66.39999999999999), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(78.05,-3.2,0.2432,0.2432);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-1.95,-3.2,0.2432,0.2432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-1.9,-3.2,111.10000000000001,33.300000000000004), null);


(lib.Interpolação2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.ssdds();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Interpolação1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#3DA6ED","#41A4D1"],[0,1],-26.6,0,26.6,0).ss(1.5).p("Aj0AAQAmCdBdCmQAeA1AeAsQAZAlAAgFQgDgYABgUQAAgmAXgyQARgxA+hfQBsimAGgKQA4hgANhQQAOhUgkg7Qgfg8hOglQhJgkhPAAQiYAAg0CFQgtBzAhDMg");
	this.shape.setTransform(-0.0013,0.0151,2.0344,2.0556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#07B2EF","#8EDAF6"],[0,1],-25.8,0,25.9,0).s().p("Ag1GkQgegsgeg1QhdimgmidQghjMAthzQA0iFCYAAQBPAABJAkQBOAlAfA8QAkA7gOBUQgNBQg4BgIhyCwQg+BfgRAxQgXAyAAAmQgBAUADAYIAAABQgDAAgWghg");
	this.shape_1.setTransform(-0.0013,0.0151,2.0344,2.0556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-94,107.4,194.5);


(lib.Interpolação6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Group();
	this.instance.setTransform(-11.55,129.9,2.0344,2.0556,0,0,0,53.6,13.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(1.8,46.8,2.0344,2.0556,0,0,0,142.3,28.6);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-316.05,-312.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-312.3,632,624.5);


(lib.Interpolação5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Group();
	this.instance.setTransform(-11.55,118.6,2.0344,2.0556,0,0,0,53.6,13.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(1.8,34.25,2.0344,2.0556,0,0,0,142.3,28.6);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(-316.05,-312.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-312.3,632,624.5);


(lib.Interpolação4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Group();
	this.instance.setTransform(-11.55,183.9,2.0344,2.0556,0,0,0,53.6,13.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(1.8,138.45,2.0344,2.0556,0,0,0,142.3,28.6);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(-316.05,-312.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-312.3,632,624.5);


(lib.Interpolação3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.Group();
	this.instance.setTransform(-11.55,115.2,2.0344,2.0556,0,0,0,53.6,13.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(5.35,19.65,2.0344,2.0556,0,0,0,142.3,28.6);

	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(-316.05,-312.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-312.3,632,624.5);


// stage content:
(lib.full = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Interpolação3("synched",0);
	this.instance.setTransform(1494.9,508.6);

	this.instance_1 = new lib.Interpolação4("synched",0);
	this.instance_1.setTransform(1494.9,508.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolação5("synched",0);
	this.instance_2.setTransform(1494.9,508.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolação6("synched",0);
	this.instance_3.setTransform(1494.9,508.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Group();
	this.instance_4.setTransform(1483.35,692.5,2.0344,2.0556,0,0,0,53.6,13.5);

	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(1496.7,647.05,2.0344,2.0556,0,0,0,142.3,28.6);

	this.instance_6 = new lib.CachedBmp_11();
	this.instance_6.setTransform(1178.85,196.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},40).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},63).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},30).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},30).to({_off:true},40).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},40).to({_off:true},29).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},29).to({_off:true,regX:53.6,regY:13.5,scaleX:2.0344,scaleY:2.0556,x:1483.35,y:692.5,mode:"independent"},63).wait(1));

	// Camada_3
	this.instance_7 = new lib.Interpolação1("synched",0);
	this.instance_7.setTransform(1522.75,303.45);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(162).to({_off:false},0).wait(1));

	// Camada_2
	this.instance_8 = new lib.Interpolação2("synched",0);
	this.instance_8.setTransform(960,538);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},30).wait(133));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1078);
// library properties:
lib.properties = {
	id: '7AC340E6CE3E453094A9B9E30244CFAF',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/full_atlas_1.png", id:"full_atlas_1"},
		{src:"images/full_atlas_2.png", id:"full_atlas_2"},
		{src:"images/full_atlas_3.png", id:"full_atlas_3"},
		{src:"images/full_atlas_4.png", id:"full_atlas_4"},
		{src:"images/full_atlas_5.png", id:"full_atlas_5"},
		{src:"images/full_atlas_6.png", id:"full_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7AC340E6CE3E453094A9B9E30244CFAF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;