var introAPage = function(){
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
        page.backBtn.on(Laya.Event.MOUSE_DOWN, this, backToProPage);
        page.btn.on(Laya.Event.MOUSE_DOWN, this, showIntro);
    }

    /**
     * 显示介绍
     */
    function showIntro(){
        page.btn.visible = false;
        page.intro.visible = true;
        Laya.Tween.to(page.intro, {
            alpha: 1
        }, 500);
    }

    /**
     * 返回产品页面
     */
    function backToProPage(){
        iProductpage.show();
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new introAUI();
        page.visible = false;
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}