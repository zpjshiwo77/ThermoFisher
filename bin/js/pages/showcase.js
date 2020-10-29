var showcasePage = function(){
    var _self = this;
    var page;

    var type;
    var bgColor = {small:"#000000",big:"#8e93a0"};

    var enterFlag = {
        small: true,
        big: true
    };

    var animeIndex = 0;
    var controlFlag = false;
    var clickFlag = false;
    var MoveData;
    var startData;

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
        page.on(Laya.Event.MOUSE_DOWN, this, recordMoveData);
        page.on(Laya.Event.MOUSE_MOVE, this, changeMoveData);
        page.on(Laya.Event.MOUSE_UP, this, clearMoveData);

        for (var i = 0; i < page.smallPoint._childs.length; i++) {
            var ele = page.smallPoint._childs[i];
            if(ele.name == "big"){
                ele.on(Laya.Event.CLICK, this, showPortalPage,["small"]);
            }
            else{
                ele.on(Laya.Event.CLICK, this, showSencePage,["small",ele.name]);
            }
        }

        for (var i = 0; i < page.bigPoint._childs.length; i++) {
            var ele = page.bigPoint._childs[i];
            if(ele.name == "small"){
                ele.on(Laya.Event.CLICK, this, showPortalPage,["big"]);
            }
            else{
                ele.on(Laya.Event.CLICK, this, showSencePage,["big",ele.name]);
            }
        }
    }

    /**
     * 显示
     */
    _self.show = function(t){
        renderPage(t);
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, 500);
        if(enterFlag[t]){
            setTimeout(function () {
                enterAnime();
                enterFlag[t] = false;
            }, 500);
        }
        else{
            setTimeout(function () {
                animeIndex = page[type].index;
                controlFlag = true;
                page[type+"Point"].visible = (animeIndex > 10 && animeIndex < 18);
            }, 500)
        }
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

        page[type].visible = false;
        page[type+"Point"].visible = false;
        animeIndex = 0;
        controlFlag = false;
        clickFlag = false;
    }

    /**
     * 显示传送门
     */
    function showPortalPage(type){
        _self.hide();
        iPortalPage.show(type);
    }

    /**
     * 显示场景页面
     */
    function showSencePage(type,name){
        _self.hide();
        (type == "small" ? iSmallSencePage.show(name) : iBigSencePage.show(name));
    }

    /**
     * 入场动画
     */
    function enterAnime() {
        page[type].play(0, false);
        setTimeout(function () {
            page[type].wrapMode = 1;
            page[type].play(page[type].index, false);
        }, 1600);

        setTimeout(function () {
            controlFlag = true;
        }, 3200)
    }

    /**
     * 记录手指记录的值
     */
    function recordMoveData(e) {
        if (controlFlag) {
            MoveData = {};
            MoveData.x = e.stageX;
            MoveData.y = e.stageY;
            startData = {};
            startData.x = e.stageX;
            clickFlag = true;
        }
    }

    /**
     * 清除手指记录的值
     */
    function clearMoveData() {
        MoveData = null;
        startData = null;
    }

    /**
     * 转动场景
     */
    function changeMoveData(e) {
        if (controlFlag && MoveData) {
            var diffX = (e.stageX - MoveData.x) * MOVE_SENSITIVITY;

            if(diffX < 1 && diffX > 0){
                diffX = Math.ceil(diffX);
            }
            if(diffX < 0 && diffX > -1){
                diffX = Math.floor(diffX);
            }

            updateAnime(diffX);

            MoveData.x = e.stageX;
            MoveData.y = e.stageY;

            if (Math.abs(startData.x - e.stageX) > 15) clickFlag = false;
        }
    }

    /**
     * 更新动画
     */
    function updateAnime(diffX){
        animeIndex -= diffX;
        animeIndex = parseInt(animeIndex);
        animeIndex = animeIndex < 0 ? 0 : animeIndex;
        animeIndex = animeIndex > 29 ? 29 : animeIndex;         
        page[type].index = animeIndex;

        page[type+"Point"].visible = (animeIndex > 10 && animeIndex < 18);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new showcaseUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
        
        iPoint.init(page.smallPoint);
        iPoint.init(page.bigPoint);
    }

    /**
     * 渲染页面
     */
    function renderPage(t){
        type = t;
        page[type].visible = true;
    }
}

iShowcasePage = new showcasePage();