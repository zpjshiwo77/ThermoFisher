var productPage = function () {
    var _self = this;

    var page;
    var enterFlag = true;
    
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
     * 显示
     */
    _self.show = function () {
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, 500);
        if(enterFlag){
            setTimeout(function () {
                enterAnime();
                enterFlag = false;
            }, 500);
        }
    }

    /**
     * 隐藏
     */
    _self.hide = function () {
        Laya.Tween.to(page, {
            alpha: 0
        }, 500);

        setTimeout(function () {
            page.visible = false;
        }, 500)
    }

    /**
     * 入场动画
     */
    function enterAnime() {
        page.product.play(0, false);
        setTimeout(function () {
            page.product.wrapMode = 1;
            page.product.play(page.product.index, false);
        }, 1600);

        setTimeout(function () {
            controlFlag = true;
        }, 3200)
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.btnA.on(Laya.Event.MOUSE_DOWN, this, showIntroA);
        page.btnB.on(Laya.Event.MOUSE_DOWN, this, showIntroB);

        page.on(Laya.Event.MOUSE_DOWN, this, recordMoveData);
        page.on(Laya.Event.MOUSE_MOVE, this, changeMoveData);
        page.on(Laya.Event.MOUSE_UP, this, clearMoveData);
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
     * 改变陀螺仪记录的初始值
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
        page.product.index = animeIndex;

        if(animeIndex > 10 && animeIndex < 20){
            page.btnA.visible = true;
            page.btnB.visible = true;
        }
        else{
            page.btnA.visible = false;
            page.btnB.visible = false;
        }
    }

    /**
     * 显示介绍页面A
     */
    function showIntroA() {
        if (clickFlag) {
            iIntroApage.show();
            _self.hide();
        }
    }

    /**
     * 显示介绍页面B
     */
    function showIntroB() {
        if (clickFlag) {
            iIntroBpage.show();
            _self.hide();
        }
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new productUI();
        page.visible = false;
        page.btnA.visible = false;
        page.btnB.visible = false;
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
    }
}