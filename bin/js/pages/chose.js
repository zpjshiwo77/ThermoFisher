var chosePage = function(){
    var _self = this;
    var page;
    var clickFlag = false;
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
        page.smallBtn.on(Laya.Event.MOUSE_DOWN, this, showNextPage,["small"]);
        page.bigBtn.on(Laya.Event.MOUSE_DOWN, this, showNextPage,["big"]);
    }

    /**
     * 显示下一页
     */
    function showNextPage(type){
        _self.hide();
        iShowcasePage.show(type);
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

        setTimeout(function(){
            clickFlag = true;
        },500)
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

        clickFlag = false;
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new choseUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
        page.logo.x = 1624 - page.logo.width + page.x - 60;
    }
}

iChosePage = new chosePage();