var indexPage = function(){
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
     * 事件初始化
     */
    function eventInit() {
        page.startBtn.on(Laya.Event.MOUSE_DOWN, this, showNextPage);
        page.openBtn.on(Laya.Event.MOUSE_DOWN, this, showProductPage);
    }

    /**
     * 显示下一页
     */
    function showNextPage(){
        page.pageB.visible = true;
        page.startBtn.visible = false;
        Laya.Tween.to(page.pageB, {
            alpha: 1
        }, 500);
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
     * 显示介绍页面
     */
    function showProductPage(){
        iProductpage.show();
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new indexUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}