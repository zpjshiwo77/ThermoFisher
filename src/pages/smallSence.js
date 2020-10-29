var smallSencePage = function(){
    var _self = this;
    var page;
    var clickFlag = false;
    var senceId = 0;

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
        page.backShowcase.on(Laya.Event.MOUSE_DOWN, this, backToShowcase);
        page.viewBtn.on(Laya.Event.MOUSE_DOWN, this, closeIntroBox);
    }

    /**
     * 显示
     */
    _self.show = function(type){
        renderPage(type);
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, 500);
        setTimeout(function () {
            clickFlag = true;
        }, 500)
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
        page.pointBox.visible = false;
    }

    /**
     * 返回场景页面
     */
    function backToShowcase() {
        if (clickFlag) {
            _self.hide();
            iShowcasePage.show("small");
        }
    }

    /**
     * 渲染页面
     */
    function renderPage(type) {
        if (type == "Box1") {
            senceId = 1;
        }
        else if (type == "Box2") {
            senceId = 2;
        }

        page.intro.source = Laya.Loader.getRes('images/product100/s' + senceId + '/w.png');
        page.pointBox.visible = true;
        page.introBox.visible = true;
        page.introBox.alpha = 1;
    }

    /**
     * 关闭介绍页面
     */
    function closeIntroBox() {
        if (clickFlag) {
            Laya.Tween.to(page.introBox, {
                alpha: 0
            }, 500);

            setTimeout(function () {
                page.introBox.visible = false;
            }, 500)
        }
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new smallSenceUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);

        iPoint.init(page.pointBox);

        for (var i = 2; i <= 5; i++) {
            iPoint.init(page["pointBoxS" + i]);
        }
    }
}

iSmallSencePage = new smallSencePage();