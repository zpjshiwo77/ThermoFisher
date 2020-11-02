var bigSencePage = function () {
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

        for (var i = 1; i <= 3; i++) {
            var element = page["pointBox" + i];
            for (var j = 0; j < element._childs.length; j++) {
                var ele = element._childs[j];
                ele.on(Laya.Event.CLICK, this, showPartBox, [ele.name]);
            }
        }

        for (var i = 1; i <= 2; i++) {
            var element = page["pointBoxs1" + i];
            for (var j = 0; j < element._childs.length; j++) {
                var ele = element._childs[j];
                ele.on(Laya.Event.CLICK, this, showProIntro, [ele.name]);
            }
        }

        for (var i = 1; i <= 7; i++) {
            var element = page["pointBoxs2" + i];
            for (var j = 0; j < element._childs.length; j++) {
                var ele = element._childs[j];
                ele.on(Laya.Event.CLICK, this, showProIntro, [ele.name]);
            }
        }

        for (var i = 1; i <= 2; i++) {
            var element = page["pointBoxs3" + i];
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
    _self.hide = function () {
        Laya.Tween.to(page, {
            alpha: 0
        }, TRF_TIME);

        setTimeout(function () {
            page.visible = false;
        }, TRF_TIME)

        clickFlag = false;
        page["pointBox" + senceId].visible = false;
        page["introBox" + senceId].visible = false;
    }

    /**
     * 显示展厅的页面
     */
    function showPartBox(name) {
        if (clickFlag) {
            page["pointBox" + name].visible = true;
            var str = name.split("");
            page.partImg.source = Laya.Loader.getRes('images/product400/s' + str[1] + '/' + str[2] + '.jpg');

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
            iShowcasePage.show("big");
        }
    }

    /**
     * 返回场景页面
     */
    function backToSence() {
        if (clickFlag) {
            Laya.Tween.to(page.partBox, {
                alpha: 0
            }, TRF_TIME);

            setTimeout(function () {
                page.partBox.visible = false;
            }, TRF_TIME)

            for (var i = 1; i <= 2; i++) {
                var element = page["pointBoxs1" + i];
                element.visible = false;
            }

            for (var i = 1; i <= 7; i++) {
                var element = page["pointBoxs2" + i];
                element.visible = false;
            }

            for (var i = 1; i <= 2; i++) {
                var element = page["pointBoxs3" + i];
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
            page.ar.visible = true;
            page.arTips.visible = true;
        }
        else if (type == "Box2") {
            senceId = 2;
            page.ar.visible = false;
            page.arTips.visible = false;
        }
        else if (type == "Box3") {
            senceId = 3;
            page.ar.visible = true;
            page.arTips.visible = true;
        }

        page.senceBg.source = Laya.Loader.getRes('images/product400/s' + senceId + '.jpg');
        page.intro.source = Laya.Loader.getRes('images/product400/s' + senceId + '/w.png');
        page["pointBox" + senceId].visible = true;
        page["introBox" + senceId].visible = true;
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
            }, TRF_TIME);

            setTimeout(function () {
                page.introBox.visible = false;
            }, TRF_TIME)
        }
    }

    /**
     * 处理介绍
     */
    function dealIntro(box){
        let maskSp = new Laya.Sprite();
        let maskRes = Laya.Loader.getRes("images/public/mask1.png");
		maskSp.graphics.drawTexture(maskRes);
        box.mask = maskSp;
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new bigSenceUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);

        dealIntro(page.introBox1);
        dealIntro(page.introBox3);

        page.backShowcase.x = 1624 - page.backShowcase.width + page.x - 95;
        page.backSence.x = 1624 - page.backSence.width + page.x - 95;

        if (WindowW < 1400) {
            page.introBox.scaleX = 0.9;
            page.introBox.scaleY = 0.9;
        }

        for (var i = 1; i <= 3; i++) {
            iPoint.init(page["pointBox" + i]);
            if (i == 1) {
                for (var j = 1; j <= 2; j++) {
                    iPoint.init(page["pointBoxs" + i + j]);
                }
            }
            else if (i == 2) {
                for (var j = 1; j <= 7; j++) {
                    iPoint.init(page["pointBoxs" + i + j]);
                }
            }
            else if (i == 3) {
                for (var j = 1; j <= 2; j++) {
                    iPoint.init(page["pointBoxs" + i + j]);
                }
            }
        }
    }
}

iBigSencePage = new bigSencePage();