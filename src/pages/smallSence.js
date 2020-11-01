var smallSencePage = function () {
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
        page.backSence.on(Laya.Event.MOUSE_DOWN, this, backToSence);
        page.viewBtn.on(Laya.Event.MOUSE_DOWN, this, closeIntroBox);

        for (var i = 0; i < page.pointBox1._childs.length; i++) {
            var ele = page.pointBox1._childs[i];
            ele.on(Laya.Event.CLICK, this, showPartBox, [ele.name]);
        }

        for (var i = 0; i < page.pointBox2._childs.length; i++) {
            var ele = page.pointBox2._childs[i];
            ele.on(Laya.Event.CLICK, this, showProIntro, [ele.name]);
        }

        for (var i = 2; i <= 5; i++) {
            var element = page["pointBoxs" + i];
            for (var j = 0; j < element._childs.length; j++) {
                var ele = element._childs[j];
                ele.on(Laya.Event.CLICK, this, showProIntro, [ele.name]);
            }
        }
    }

    /**
     * 显示
     */
    _self.show = function (type) {
        renderPage(type);
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, TRF_TIME);
        setTimeout(function () {
            clickFlag = true;
        }, TRF_TIME)
    }

    /**
     * 隐藏
     */
    _self.hide = function () {
        Laya.Tween.to(page, {
            alpha: 0
        }, TRF_TIME);

        setTimeout(function () {
            page.visible = false;
        }, TRF_TIME)

        clickFlag = false;
        page["pointBox" + senceId].visible = false;
    }

    /**
     * 显示展厅的页面
     */
    function showPartBox(name) {
        if (clickFlag) {
            if(name.length == 3){
                showProIntro(name);
                return;
            }
            page["pointBox" + name].visible = true;
            page.partImg.source = Laya.Loader.getRes('images/product100/sence/' + name + '.jpg');

            page.partBox.visible = true;
            page.partBox.alpha = 0;
            Laya.Tween.to(page.partBox, {
                alpha: 1
            }, TRF_TIME);
        }
    }

    /**
     * 显示产品介绍
     * @param {*} name 
     */
    function showProIntro(name) {
        if (clickFlag) {
            iProductPage.show(name)
        }
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
     * 返回场景页面
     */
    function backToSence(){
        if (clickFlag) {
            Laya.Tween.to(page.partBox, {
                alpha: 0
            }, TRF_TIME);

            setTimeout(function () {
                page.partBox.visible = false;
            }, TRF_TIME)

            for (var i = 2; i <= 5; i++) {
                var element = page["pointBoxs" + i];
                element.visible = false;
            }
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
        page["pointBox" + senceId].visible = true;
        page.introBox.visible = true;
        page.introBox.alpha = 1;
    }

    /**
     * 关闭介绍页面
     */
    function closeIntroBox() {
        if (clickFlag) {
            if(senceId == 2){
                showProIntro("p27");
                return;
            }
            Laya.Tween.to(page.introBox, {
                alpha: 0
            }, TRF_TIME);

            setTimeout(function () {
                page.introBox.visible = false;
            }, TRF_TIME)
        }
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new smallSenceUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);

        page.backShowcase.x = 1624 - page.backShowcase.width + page.x - 150;
        page.backSence.x = 1624 - page.backSence.width + page.x - 150;

        iPoint.init(page.pointBox1);
        iPoint.init(page.pointBox2);

        for (var i = 2; i <= 5; i++) {
            iPoint.init(page["pointBoxs" + i]);
        }
    }
}

iSmallSencePage = new smallSencePage();