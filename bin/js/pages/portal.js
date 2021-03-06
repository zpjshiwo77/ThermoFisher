var portalPage = function(){
    var _self = this;
    var page;
    var type;

    /**
     * 初始化
     */
    _self.init = function () {
        uiInit();
        eventInit();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.btn.on(Laya.Event.MOUSE_DOWN, this, showNextPage);
        page.backShowcase.on(Laya.Event.MOUSE_DOWN, this, backToShowcase);
    }

    /**
     * 显示
     */
    _self.show = function(t){
        renderPage(t);
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, TRF_TIME);
    }

    /**
     * 更新UI
     */
    _self.upDateUI = function(){
        if(barFlag) {
            var dis = WindowW > 1400 ? 150 : 100;
            page.x = BgPageX + page.pivotX - dis;
        }
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        Laya.Tween.to(page, {
            alpha: 0
        }, TRF_TIME);

        setTimeout(function(){
            page.visible = false;
        },TRF_TIME)
    }

    /**
     * 显示下一页
     */
    function showNextPage(){
        _self.hide();
        iShowcasePage.show(type == "small" ? "big" : "small");
    }

    /**
     * 返回场景页面
     */
    function backToShowcase(){
        _self.hide();
        iShowcasePage.show(type);
    }

    /**
     * 渲染页面
     */
    function renderPage(t){
        type = t;
        if(type == "small"){
            page.bg.source = Laya.Loader.getRes('images/product100/s3.jpg');
            page.intro.source = Laya.Loader.getRes('images/product100/s3/w.png');
        }
        else{
            page.bg.source = Laya.Loader.getRes('images/product400/s4.jpg');
            page.intro.source = Laya.Loader.getRes('images/product400/s4/w.png');
        }
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new portalUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}

iPortalPage = new portalPage();