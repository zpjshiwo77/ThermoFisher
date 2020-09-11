var introBPage = function(){
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
        page.btn.visible = true;
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
        page.closeBtn.on(Laya.Event.MOUSE_DOWN, this, closeIntro);
    }

    /**
     * 关闭介绍
     */
    function closeIntro(){
        page.closeBtn.visible = false;
        Laya.Tween.to(page.intro, {
            alpha: 0
        }, 500);
        setTimeout(function(){
            page.intro.visible = false;
            page.btn.visible = true;
            page.backBtn.visible = true;
        },500)
    }

    /**
     * 显示介绍
     */
    function showIntro(){
        page.btn.visible = false;
        page.intro.visible = true;
        page.closeBtn.visible = true;
        page.backBtn.visible = false;
        Laya.Tween.to(page.intro, {
            alpha: 1
        }, 500);
    }

    /**
     * 返回产品页面
     */
    function backToProPage(){
        page.btn.visible = false;
        iProductpage.show();
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new introBUI();
        page.visible = false;
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}