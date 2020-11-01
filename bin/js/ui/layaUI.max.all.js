var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var bigSenceUI=(function(_super){
		function bigSenceUI(){
			
		    this.ani1=null;
		    this.senceBg=null;
		    this.pointBox1=null;
		    this.pointBox2=null;
		    this.pointBox3=null;
		    this.backShowcase=null;
		    this.partBox=null;
		    this.partImg=null;
		    this.pointBoxs11=null;
		    this.pointBoxs12=null;
		    this.pointBoxs21=null;
		    this.pointBoxs22=null;
		    this.pointBoxs23=null;
		    this.pointBoxs24=null;
		    this.pointBoxs25=null;
		    this.pointBoxs26=null;
		    this.pointBoxs27=null;
		    this.pointBoxs31=null;
		    this.pointBoxs32=null;
		    this.backSence=null;
		    this.introBox=null;
		    this.intro=null;
		    this.viewBtn=null;
		    this.introBox1=null;
		    this.testbox1=null;
		    this.introBox2=null;
		    this.introBox3=null;
		    this.ar=null;

			bigSenceUI.__super.call(this);
		}

		CLASS$(bigSenceUI,'ui.bigSenceUI',_super);
		var __proto__=bigSenceUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(bigSenceUI.uiView);

		}

		bigSenceUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Image","props":{"var":"senceBg","skin":"images/product400/s2.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBox1","height":750},"child":[{"type":"Sprite","props":{"y":176,"x":496,"width":80,"name":"s11","height":80}},{"type":"Sprite","props":{"y":176,"x":637,"width":80,"name":"s12","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBox2","height":750},"child":[{"type":"Sprite","props":{"y":363,"x":383,"width":80,"name":"s21","height":80}},{"type":"Sprite","props":{"y":74,"x":661,"width":80,"name":"s23","height":80}},{"type":"Sprite","props":{"y":216,"x":979,"width":80,"name":"s24","height":80}},{"type":"Sprite","props":{"y":612,"x":1028,"width":80,"name":"s26","height":80}},{"type":"Sprite","props":{"y":517,"x":1064,"width":80,"name":"s27","height":80}},{"type":"Sprite","props":{"y":220,"x":1080,"width":80,"name":"s25","height":80}},{"type":"Sprite","props":{"y":363,"x":488,"width":80,"name":"s22","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBox3","height":750},"child":[{"type":"Sprite","props":{"y":501,"x":884,"width":80,"name":"s31","height":80}},{"type":"Sprite","props":{"y":256,"x":875,"width":80,"name":"s32","height":80}}]},{"type":"Image","props":{"y":420,"x":1350,"var":"backShowcase","skin":"images/public/back.png"}},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"partBox"},"child":[{"type":"Image","props":{"var":"partImg","skin":"images/product400/s3/2.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs11","height":750},"child":[{"type":"Sprite","props":{"y":128,"x":491,"width":80,"name":"p2","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs12","height":750},"child":[{"type":"Sprite","props":{"y":408,"x":1321,"width":80,"name":"p1","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs21","height":750},"child":[{"type":"Sprite","props":{"y":285,"x":138,"width":80,"name":"p15","height":80}},{"type":"Sprite","props":{"y":393,"x":654,"width":80,"name":"p14","height":80}},{"type":"Sprite","props":{"y":357,"x":841,"width":80,"name":"p19","height":80}},{"type":"Sprite","props":{"y":407,"x":1244,"width":80,"name":"p16","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs22","height":750},"child":[{"type":"Sprite","props":{"y":258,"x":193,"width":80,"name":"p17","height":80}},{"type":"Sprite","props":{"y":212,"x":381,"width":80,"name":"p18","height":80}},{"type":"Sprite","props":{"y":209,"x":568,"width":80,"name":"p13","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs23","height":750},"child":[{"type":"Sprite","props":{"y":150,"x":703,"width":80,"name":"p11","height":80}},{"type":"Sprite","props":{"y":86,"x":1069,"width":80,"name":"p12","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs24","height":750},"child":[{"type":"Sprite","props":{"y":282,"x":698,"width":80,"name":"p10","height":80}},{"type":"Sprite","props":{"y":248,"x":1056,"width":80,"name":"p8","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs25","height":750},"child":[{"type":"Sprite","props":{"y":210,"x":875,"width":80,"name":"p9","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs26","height":750},"child":[{"type":"Sprite","props":{"y":258,"x":939,"width":80,"name":"p6","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs27","height":750},"child":[{"type":"Sprite","props":{"y":94,"x":828,"width":80,"name":"p7","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs31","height":750},"child":[{"type":"Sprite","props":{"y":154,"x":842,"width":80,"name":"p5","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs32","height":750},"child":[{"type":"Sprite","props":{"y":304,"x":415,"width":80,"name":"p4","height":80}},{"type":"Sprite","props":{"y":246,"x":865,"width":80,"name":"p3","height":80}}]},{"type":"Image","props":{"y":420,"x":1350,"var":"backSence","skin":"images/public/back.png"}}]},{"type":"Box","props":{"y":375,"x":812,"width":1624,"visible":false,"var":"introBox","pivotY":375,"pivotX":812,"height":750},"child":[{"type":"Image","props":{"y":375,"x":812,"var":"intro","skin":"images/product400/s1/w.png","pivotY":337,"pivotX":625}},{"type":"Sprite","props":{"y":578,"x":1045,"width":326,"var":"viewBtn","height":94}},{"type":"Sprite","props":{"y":205,"x":230,"width":529,"visible":false,"var":"introBox1","height":399},"child":[{"type":"Panel","props":{"width":529,"vScrollBarSkin":"images/public/vscroll.png","height":399},"child":[{"type":"Image","props":{"width":529,"var":"testbox1","skin":"images/product400/s1/word.png","height":640}}]}]},{"type":"Image","props":{"y":205,"x":230,"visible":false,"var":"introBox2","skin":"images/product400/s2/word.png"}},{"type":"Sprite","props":{"y":205,"x":230,"width":529,"visible":false,"var":"introBox3","height":399},"child":[{"type":"Panel","props":{"width":529,"vScrollBarSkin":"images/public/vscroll.png","height":399},"child":[{"type":"Image","props":{"width":529,"skin":"images/product400/s3/word.png","height":750}}]}]},{"type":"Image","props":{"y":590,"x":480,"var":"ar","skin":"images/public/ar.png"},"compId":116}]}],"animations":[{"nodes":[{"target":116,"keyframes":{"y":[{"value":590,"tweenMethod":"linearNone","tween":true,"target":116,"key":"y","index":0},{"value":600,"tweenMethod":"linearNone","tween":true,"target":116,"key":"y","index":10},{"value":590,"tweenMethod":"linearNone","tween":true,"target":116,"key":"y","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return bigSenceUI;
	})(View);
var choseUI=(function(_super){
		function choseUI(){
			
		    this.cont=null;
		    this.smallBtn=null;
		    this.bigBtn=null;
		    this.logo=null;

			choseUI.__super.call(this);
		}

		CLASS$(choseUI,'ui.choseUI',_super);
		var __proto__=choseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(choseUI.uiView);

		}

		choseUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1624,"var":"cont","height":750},"child":[{"type":"Image","props":{"skin":"images/chose/bg.jpg"}},{"type":"Sprite","props":{"y":421,"x":856,"width":401,"var":"smallBtn","height":119}},{"type":"Sprite","props":{"y":426,"x":443,"width":378,"var":"bigBtn","height":118}}]},{"type":"Image","props":{"y":0,"x":1030,"width":268,"var":"logo","skin":"images/chose/logo.png"}}]};
		return choseUI;
	})(View);
var indexUI=(function(_super){
		function indexUI(){
			
		    this.cont=null;
		    this.word=null;
		    this.startBtn=null;

			indexUI.__super.call(this);
		}

		CLASS$(indexUI,'ui.indexUI',_super);
		var __proto__=indexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexUI.uiView);

		}

		indexUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Image","props":{"skin":"images/index/bg.jpg","name":"bg","alpha":1}},{"type":"Box","props":{"y":0,"x":453,"width":1100,"var":"cont","height":750},"child":[{"type":"Image","props":{"y":630,"x":840,"skin":"images/index/logo.png"}},{"type":"Image","props":{"y":112,"x":311,"skin":"images/index/title.png"}},{"type":"Image","props":{"y":286,"x":137,"var":"word","skin":"images/index/bigW.png"}},{"type":"Image","props":{"y":498,"x":137,"var":"startBtn","skin":"images/index/start.png"}}]}]};
		return indexUI;
	})(View);
var loadingUI=(function(_super){
		function loadingUI(){
			
		    this.loadAnI=null;
		    this.bg=null;
		    this.maskBox=null;
		    this.bar=null;
		    this.perBox=null;
		    this.per=null;

			loadingUI.__super.call(this);
		}

		CLASS$(loadingUI,'ui.loadingUI',_super);
		var __proto__=loadingUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadingUI.uiView);

		}

		loadingUI.uiView={"type":"View","props":{"width":1624,"height":750},"child":[{"type":"Image","props":{"var":"bg","skin":"images/loading/bg.jpg","alpha":1}},{"type":"Image","props":{"y":601,"x":704,"skin":"images/loading/loading.png","name":"word"},"compId":3},{"type":"Image","props":{"y":490,"x":500,"skin":"images/loading/bar2.png","name":"bottom"}},{"type":"Sprite","props":{"y":490,"x":500,"width":622,"var":"maskBox","height":64},"child":[{"type":"Image","props":{"y":0,"x":0,"width":622,"var":"bar","skin":"images/loading/bar1.png","pivotX":622,"height":64}}]},{"type":"Box","props":{"y":402,"x":440},"child":[{"type":"Image","props":{"x":0,"var":"perBox","skin":"images/loading/d.png"},"child":[{"type":"Text","props":{"y":22,"x":0,"width":108,"var":"per","text":"0%","height":40,"fontSize":32,"font":"Microsoft YaHei","color":"#94111b","bold":true,"align":"center"}}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":12},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":24}]}}],"name":"loadAnI","id":1,"frameRate":24,"action":2}]};
		return loadingUI;
	})(View);
var pointUI=(function(_super){
		function pointUI(){
			
		    this.ani1=null;

			pointUI.__super.call(this);
		}

		CLASS$(pointUI,'ui.pointUI',_super);
		var __proto__=pointUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(pointUI.uiView);

		}

		pointUI.uiView={"type":"View","props":{"x":0,"width":80,"height":80},"child":[{"type":"Image","props":{"y":40,"x":41,"width":59,"skin":"images/public/icon.png","pivotY":29,"pivotX":30,"height":58},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":20}],"scaleX":[{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":20}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return pointUI;
	})(View);
var portalUI=(function(_super){
		function portalUI(){
			
		    this.bg=null;
		    this.intro=null;
		    this.btn=null;

			portalUI.__super.call(this);
		}

		CLASS$(portalUI,'ui.portalUI',_super);
		var __proto__=portalUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(portalUI.uiView);

		}

		portalUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Image","props":{"var":"bg","skin":"images/product100/s3.jpg"}},{"type":"Image","props":{"y":375,"x":812,"var":"intro","skin":"images/product100/s3/w.png","pivotY":300,"pivotX":445}},{"type":"Sprite","props":{"y":481,"x":846,"width":321,"var":"btn","height":103}}]};
		return portalUI;
	})(View);
var showcaseUI=(function(_super){
		function showcaseUI(){
			
		    this.bg=null;
		    this.cont=null;
		    this.small=null;
		    this.big=null;
		    this.smallPoint=null;
		    this.bigPoint=null;

			showcaseUI.__super.call(this);
		}

		CLASS$(showcaseUI,'ui.showcaseUI',_super);
		var __proto__=showcaseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(showcaseUI.uiView);

		}

		showcaseUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":1624,"var":"bg","height":750},"child":[{"type":"Rect","props":{"width":1624,"lineWidth":1,"height":750,"fillColor":"#9095a2"}}]},{"type":"Box","props":{"y":0,"x":92,"width":1440,"var":"cont","height":750},"child":[{"type":"Animation","props":{"y":0,"x":0,"width":1440,"visible":false,"var":"small","source":"images/product100/showcase/01.png,images/product100/showcase/02.png,images/product100/showcase/03.png,images/product100/showcase/04.png,images/product100/showcase/05.png,images/product100/showcase/06.png,images/product100/showcase/07.png,images/product100/showcase/08.png,images/product100/showcase/09.png,images/product100/showcase/10.png,images/product100/showcase/11.png,images/product100/showcase/12.png,images/product100/showcase/13.png,images/product100/showcase/14.png,images/product100/showcase/15.png,images/product100/showcase/16.png,images/product100/showcase/17.png,images/product100/showcase/18.png,images/product100/showcase/19.png,images/product100/showcase/20.png,images/product100/showcase/21.png,images/product100/showcase/22.png,images/product100/showcase/23.png,images/product100/showcase/24.png,images/product100/showcase/25.png,images/product100/showcase/26.png,images/product100/showcase/27.png,images/product100/showcase/28.png,images/product100/showcase/29.png,images/product100/showcase/30.png","height":750}},{"type":"Animation","props":{"y":0,"x":0,"width":1440,"visible":false,"var":"big","source":"images/product400/showcase/01.png,images/product400/showcase/02.png,images/product400/showcase/03.png,images/product400/showcase/04.png,images/product400/showcase/05.png,images/product400/showcase/06.png,images/product400/showcase/07.png,images/product400/showcase/08.png,images/product400/showcase/09.png,images/product400/showcase/10.png,images/product400/showcase/11.png,images/product400/showcase/12.png,images/product400/showcase/13.png,images/product400/showcase/14.png,images/product400/showcase/15.png,images/product400/showcase/16.png,images/product400/showcase/17.png,images/product400/showcase/18.png,images/product400/showcase/19.png,images/product400/showcase/20.png,images/product400/showcase/21.png,images/product400/showcase/22.png,images/product400/showcase/23.png,images/product400/showcase/24.png,images/product400/showcase/25.png,images/product400/showcase/26.png,images/product400/showcase/27.png,images/product400/showcase/28.png,images/product400/showcase/29.png,images/product400/showcase/30.png","height":750}},{"type":"Box","props":{"y":0,"x":0,"width":1440,"visible":false,"var":"smallPoint","height":750},"child":[{"type":"Sprite","props":{"y":468,"x":344,"width":80,"name":"big","height":80}},{"type":"Sprite","props":{"y":474,"x":682,"width":80,"name":"Box1","height":80}},{"type":"Sprite","props":{"y":464,"x":944,"width":80,"name":"Box2","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1440,"visible":false,"var":"bigPoint","height":750},"child":[{"type":"Sprite","props":{"y":512,"x":332,"width":80,"name":"Box1","height":80}},{"type":"Sprite","props":{"y":508,"x":712,"width":80,"name":"Box2","height":80}},{"type":"Sprite","props":{"y":507,"x":1087,"width":80,"name":"Box3","height":80}},{"type":"Sprite","props":{"y":477,"x":1247,"width":80,"name":"small","height":80}}]}]}]};
		return showcaseUI;
	})(View);
var smallSenceUI=(function(_super){
		function smallSenceUI(){
			
		    this.senceBg=null;
		    this.pointBox1=null;
		    this.pointBox2=null;
		    this.backShowcase=null;
		    this.introBox=null;
		    this.intro=null;
		    this.viewBtn=null;
		    this.partBox=null;
		    this.partImg=null;
		    this.pointBoxs2=null;
		    this.pointBoxs3=null;
		    this.pointBoxs4=null;
		    this.pointBoxs5=null;
		    this.backSence=null;

			smallSenceUI.__super.call(this);
		}

		CLASS$(smallSenceUI,'ui.smallSenceUI',_super);
		var __proto__=smallSenceUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(smallSenceUI.uiView);

		}

		smallSenceUI.uiView={"type":"View","props":{"width":1624,"visible":false,"height":750},"child":[{"type":"Image","props":{"var":"senceBg","skin":"images/product100/sence/s1.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBox1","height":750},"child":[{"type":"Sprite","props":{"y":469,"x":650,"width":80,"name":"s4","height":80}},{"type":"Sprite","props":{"y":602,"x":737,"width":80,"name":"s5","height":80}},{"type":"Sprite","props":{"y":564,"x":974,"width":80,"name":"s2","height":80}},{"type":"Sprite","props":{"y":467,"x":1077,"width":80,"name":"s3","height":80}},{"type":"Sprite","props":{"y":252,"x":1177,"width":80,"name":"p28","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBox2","height":750},"child":[{"type":"Sprite","props":{"y":109,"x":663,"width":80,"name":"btn1","height":80}},{"type":"Sprite","props":{"y":125,"x":883,"width":80,"name":"btn2","height":80}}]},{"type":"Image","props":{"y":420,"x":1350,"var":"backShowcase","skin":"images/public/back.png"}},{"type":"Box","props":{"y":75,"x":367,"width":889,"visible":false,"var":"introBox","height":600},"child":[{"type":"Image","props":{"y":300,"x":445,"var":"intro","skin":"images/product100/s2/w.png","pivotY":300,"pivotX":445}},{"type":"Sprite","props":{"y":407,"x":484,"width":326,"var":"viewBtn","height":94}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"partBox"},"child":[{"type":"Image","props":{"var":"partImg","skin":"images/product100/sence/s5.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs2","height":750},"child":[{"type":"Sprite","props":{"y":300,"x":737,"width":80,"name":"p26","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs3","height":750},"child":[{"type":"Sprite","props":{"y":284,"x":1121,"width":80,"name":"p24","height":80}},{"type":"Sprite","props":{"y":221,"x":915,"width":80,"name":"p25","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs4","height":750},"child":[{"type":"Sprite","props":{"y":335,"x":672,"width":80,"name":"p22","height":80}}]},{"type":"Box","props":{"y":0,"x":0,"width":1624,"visible":false,"var":"pointBoxs5","height":750},"child":[{"type":"Sprite","props":{"y":274,"x":501,"width":80,"name":"p23","height":80}},{"type":"Sprite","props":{"y":372,"x":841,"width":80,"name":"p21","height":80}},{"type":"Sprite","props":{"y":369,"x":950,"width":80,"name":"p20","height":80}}]},{"type":"Image","props":{"y":420,"x":1350,"var":"backSence","skin":"images/public/back.png"}}]}]};
		return smallSenceUI;
	})(View);