var indexPage = function(){
    var _self = this;
    var page;
    var type;
    
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
        page.startBtn.on(Laya.Event.MOUSE_DOWN, this, showNextPage);
    }

    /**
     * 显示
     */
    _self.show = function(t){
        type = t;
        page.word.source = Laya.Loader.getRes('images/index/'+type+'W.png');
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, TRF_TIME);
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        Laya.Tween.to(page, {
            alpha: 0
        }, TRF_TIME);

        setTimeout(function(){
            page.visible = false;
        },TRF_TIME)
    }

    /**
     * 显示下一页
     */
    function showNextPage(){
        _self.hide();
        iShowcasePage.show(type);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new indexUI();
        page.x = BgPageX + page.pivotX;
        Laya.stage.addChild(page);
        page.cont.x = 1624 - page.cont.width + page.x - 78;
    }
}

iIndexPage = new indexPage();