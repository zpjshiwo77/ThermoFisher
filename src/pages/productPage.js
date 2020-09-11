var productPage = function(){
    var _self = this;
    var page;
    /**
     * 初始化
     */
    _self.init = function () {
        uiInit();
        eventInit();
    }

    /**
     * 显示
     */
    _self.show = function(){
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, 500);
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        Laya.Tween.to(page, {
            alpha: 0
        }, 500);

        setTimeout(function(){
            page.visible = false;
        },500)
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.btnA.on(Laya.Event.MOUSE_DOWN, this, showIntroA);
        page.btnB.on(Laya.Event.MOUSE_DOWN, this, showIntroB);
    }

    /**
     * 显示介绍页面A
     */
    function showIntroA(){
        iIntroApage.show();
        _self.hide();
    }

    /**
     * 显示介绍页面B
     */
    function showIntroB(){
        iIntroBpage.show();
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new productUI();
        page.visible = false;
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}