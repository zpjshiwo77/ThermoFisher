var loadingPage = function(){
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
        // page.startBtn.on(Laya.Event.MOUSE_DOWN, this, showNextPage);
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
     * 设置百分比
     */
    _self.setPer = function (num) {
        page.bar.x = 622 * num;
        page.perBox.x = 622 * num;
        page.per.text = parseInt(num * 100) + "%";
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new loadingUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);

        let maskSp = new Laya.Sprite();
        let maskRes = Laya.Loader.getRes("images/loading/bar2.png");
		maskSp.graphics.drawTexture(maskRes);
        page.maskBox.mask = maskSp;
    }
}

iLoadingPage = new loadingPage();