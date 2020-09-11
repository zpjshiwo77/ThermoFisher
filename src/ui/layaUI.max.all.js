var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var indexUI=(function(_super){
		function indexUI(){
			
		    this.pageA=null;
		    this.startBtn=null;
		    this.pageB=null;
		    this.openBtn=null;

			indexUI.__super.call(this);
		}

		CLASS$(indexUI,'ui.indexUI',_super);
		var __proto__=indexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexUI.uiView);

		}

		indexUI.uiView={"type":"View","props":{"width":1440,"height":750},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"var":"pageA","skin":"images/index/bg.jpg"}},{"type":"Sprite","props":{"y":427,"x":458,"width":519,"var":"startBtn","height":83}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"pageB","alpha":0},"child":[{"type":"Image","props":{"skin":"images/index/bg2.jpg","alpha":1}},{"type":"Sprite","props":{"y":534,"x":548,"width":363,"var":"openBtn","height":106}}]}]};
		return indexUI;
	})(View);
var introAUI=(function(_super){
		function introAUI(){
			
		    this.ani1=null;
		    this.btn=null;
		    this.backBtn=null;
		    this.intro=null;
		    this.closeBtn=null;

			introAUI.__super.call(this);
		}

		CLASS$(introAUI,'ui.introAUI',_super);
		var __proto__=introAUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(introAUI.uiView);

		}

		introAUI.uiView={"type":"View","props":{"width":1440,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"images/index/bg3.jpg"}},{"type":"Image","props":{"y":645,"x":429,"width":59,"var":"btn","skin":"images/index/icon.png","pivotY":28,"pivotX":28,"height":58},"compId":3},{"type":"Image","props":{"y":600,"x":1214,"var":"backBtn","skin":"images/index/back.png"}},{"type":"Image","props":{"y":81,"x":229,"visible":true,"var":"intro","skin":"images/index/w1.png","alpha":1}},{"type":"Sprite","props":{"y":532,"x":941,"width":156,"visible":true,"var":"closeBtn","height":58}}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":16}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":16}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":16}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return introAUI;
	})(View);
var introBUI=(function(_super){
		function introBUI(){
			
		    this.ani1=null;
		    this.btn=null;
		    this.backBtn=null;
		    this.intro=null;
		    this.closeBtn=null;

			introBUI.__super.call(this);
		}

		CLASS$(introBUI,'ui.introBUI',_super);
		var __proto__=introBUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(introBUI.uiView);

		}

		introBUI.uiView={"type":"View","props":{"width":1440,"visible":true,"height":750,"alpha":1},"child":[{"type":"Image","props":{"skin":"images/index/bg4.jpg"}},{"type":"Image","props":{"y":316,"x":529,"width":59,"var":"btn","skin":"images/index/icon.png","pivotY":29,"pivotX":29,"height":58},"compId":3},{"type":"Image","props":{"y":610,"x":1193,"var":"backBtn","skin":"images/index/back.png"}},{"type":"Image","props":{"visible":false,"var":"intro","skin":"images/index/bg5.jpg","alpha":0}},{"type":"Sprite","props":{"y":620,"x":1179,"width":252,"visible":false,"var":"closeBtn","height":118}}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":16}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":16}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":16}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return introBUI;
	})(View);
var productUI=(function(_super){
		function productUI(){
			
		    this.ani1=null;
		    this.product=null;
		    this.btnBox=null;
		    this.btnA=null;
		    this.btnB=null;

			productUI.__super.call(this);
		}

		CLASS$(productUI,'ui.productUI',_super);
		var __proto__=productUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(productUI.uiView);

		}

		productUI.uiView={"type":"View","props":{"width":1440,"height":750},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":1440,"name":"bg","height":750},"child":[{"type":"Rect","props":{"width":1440,"lineWidth":1,"height":750,"fillColor":"#dddddd"}}]},{"type":"Animation","props":{"var":"product","source":"images/product/000.png,images/product/001.png,images/product/002.png,images/product/003.png,images/product/004.png,images/product/005.png,images/product/006.png,images/product/007.png,images/product/008.png,images/product/009.png,images/product/010.png,images/product/011.png,images/product/012.png,images/product/013.png,images/product/014.png,images/product/015.png,images/product/016.png,images/product/017.png,images/product/018.png,images/product/019.png,images/product/020.png,images/product/021.png,images/product/022.png,images/product/023.png,images/product/024.png,images/product/025.png,images/product/026.png,images/product/027.png,images/product/028.png,images/product/029.png"}},{"type":"Box","props":{"y":551,"x":651,"visible":true,"var":"btnBox"},"child":[{"type":"Image","props":{"y":55,"x":29,"width":59,"var":"btnA","skin":"images/index/icon.png","pivotY":29,"pivotX":29,"height":58},"compId":5},{"type":"Image","props":{"y":29,"x":382,"var":"btnB","skin":"images/index/icon.png","pivotY":29,"pivotX":29},"compId":6}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":16}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":16}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":16}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":16}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return productUI;
	})(View);