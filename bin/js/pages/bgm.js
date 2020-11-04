var bgm = function () {
    var _self = this;
    var bgmFlag = true;
    var sprite;
    var bgm;

    _self.play = function () {
        playBgm();
    }

    _self.pause = function () {
        pauseBgm();
    }

    /**
     * 初始化
     */
    _self.init = function () {
        sprite = new bgmBtnUI();
        sprite.zOrder = 9999;
        Laya.stage.addChild(sprite);
        sprite.x = WindowW - 80;
        sprite.y = 30;
        sound_handler();
        eventInit();
    }

    /**
     * 更新UI
     */
    _self.upDateUI = function(){
        if(barFlag) {
            var dis = WindowW > 1400 ? 150 : 100;
            sprite.x = WindowW - 80 - dis;
        }
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        sprite.bgmBtn.on(Laya.Event.CLICK, this, controlBgm);
    }

    /**
     * 声音初始化
     */
    function sound_handler() {
        var userAgent = navigator.userAgent;
        if (userAgent.match(/MicroMessenger/)){
            if (window.WeixinJSBridge) {
                try {
                    window.WeixinJSBridge.invoke("getNetworkType", {}, sound_creat);
                }
                catch (e) {
                    wx.ready(sound_creat);
                }
            }
            else {
                document.addEventListener("WeixinJSBridgeReady", sound_creat, false);
            }
        }
        else sound_creat();
    }

    /**
     * 创建声音
     */
    function sound_creat() {
        bgm = Laya.SoundManager.playMusic(BgmUrl);
    }

    /**
     * 控制音乐
     */
    function controlBgm() {
        if (bgmFlag) pauseBgm();
        else playBgm();
    }

    /**
     * 播放音乐
     */
    function playBgm() {
        bgmFlag = true;
        sprite.bgmBtn.source = Laya.Loader.getRes('images/common/bgm_on.png');
        bgm.resume();
    }

    /**
     * 暂停音乐
     */
    function pauseBgm() {
        bgmFlag = false;
        sprite.bgmBtn.source = Laya.Loader.getRes('images/common/bgm_off.png');
        bgm.pause();
    }
}

var iBgm = new bgm();