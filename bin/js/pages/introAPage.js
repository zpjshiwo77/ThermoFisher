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
        page.btn.on(Laya.Event.MOUSE_DOWN, this, showIntroB);
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
        },500)
    }

    /**
     * 显示介绍
     */
    function showIntroB(){
        iIntroBpage.show();
        _self.hide();
    }

    /**
     * 返回产品页面
     */
    function backToProPage(){
        iProductpage.show();
        page.btn.visible = false;
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