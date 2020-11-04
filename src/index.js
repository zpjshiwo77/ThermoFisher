/**
 * laya初始化
 */
function LayaInit() {
    Laya.init(1624, 750, WebGL);
    Laya.stage.scaleMode = "fixedheight";
    Laya.stage.alignH = "center";
    Laya.stage.alignV = "center";
    Laya.stage.screenMode = "horizontal";
    Laya.stage.bgColor = "#dddddd";
    Laya.UIConfig.closeDialogOnSide = false;
    Laya.URL.basePath = "https://cdn.dhteam.net/thermoFisher/";
    Laya.loader.load(PreResources, laya.utils.Handler.create(this, loadUIInit), null);
}
LayaInit();

/**
 * 加载ui初始化
 */
function loadUIInit() {
    CountPageSize();
    remUnitConverter(750);
    turnBoxPortraitTips();
    // landscape_lock();

    iLoadingPage.init();
    iBgm.init();

    for (var i = 0; i < unpackImg.length; i++) {
        var item = { url: unpackImg[i], type: Loader.IMAGE };
        Resources.push(item);
    }
    for (var i = 1; i <= 26; i++) {
        var item = { url: "images/product/"+i+".jpg", type: Loader.IMAGE };
        Resources.push(item);
    }
    Laya.loader.load(Resources, laya.utils.Handler.create(this, loadComplete), laya.utils.Handler.create(this, loadPerUpdate, null, false));
}

/**
 * 加载进度
 */
function loadPerUpdate(num) {
    iLoadingPage.setPer(num);
}

/**
 * 加载结束
 */
function loadComplete() {
    iIndexPage.init();
    iChosePage.init();
    iShowcasePage.init();
    iPortalPage.init();
    iBigSencePage.init();
    iSmallSencePage.init();
    iProductPage.init();

    iLoadingPage.hide();
    iChosePage.show();
    
    // DevelopTest();

    if (typeof wx) {
        wxUser.init({
            shareInfo: {
                title: "创领探索 携手前行",
                friend: "赛默飞亮相第三届中国国际进口博览会",
                timeline: "创领探索 携手前行",
                link: "https://wechat.dhteam.net/lillysec/thermoFisher5/",
                image: "https://cdn.dhteam.net/thermoFisher/share.jpg",
            }
        });
    }
}

/**
 *  开发测试用
 */
function DevelopTest() {
    // iChosePage.show();
    // iShowcasePage.show("big");
    // iPortalPage.show();
    // iBigSencePage.show("Box3");
    // iSmallSencePage.show("Box1");
    iProductPage.show("p5");

    // setTimeout(function(){
    //     iProductPage.show("p2");
    // },3000)
}

/**
 * 计算页面size
 */
function CountPageSize() {
    if (Browser.clientWidth < Browser.clientHeight) WindowW = (750 / Browser.clientWidth) * Browser.clientHeight;
    else WindowW = (750 / Browser.clientHeight) * Browser.clientWidth;
    BgPageX = (WindowW - 1624) / 2;
}

/**
 * rem单位转换
 * @param {*} width			转换的宽度
 */
function remUnitConverter(width) {
    var scale = width / 100;
    var unit = $(window).width() / scale;
    $("html").css('font-size', unit);
}

/**
 * 横置竖屏提示
 */
function turnBoxPortraitTips() {
    $("body").append('<aside class="turnBoxLandscape" id="turnBox"><div class="lock"><span></span><span></span></div><div class="sign"><span>竖排方向锁定：关闭</span><span>竖排方向锁定：打开</span></div><div class="phone"><img src="images/common/turn_phone.png"><i class="yes"></i><i class="no"></i></div><p>锁定竖屏体验更佳</p></aside>');
    window.addEventListener("orientationchange", landscape_lock, false);
}

/**
 * 提示
 */
function landscape_lock() {
    setTimeout(function () {
        var windowW = Browser.clientWidth;
        var windowH = Browser.clientHeight;
        var box = $("#turnBox");
        if (windowW > windowH) {
            box.show();
        }
        else {
            box.hide();
        }
    }, 200);
}