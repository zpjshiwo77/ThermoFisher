var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Loader = Laya.Loader;
var Stat = Laya.Stat;

var MOVE_SENSITIVITY = 0.01;
var TRF_TIME = 300;

var WindowW = 0,BgPageX = 0;
var barFlag = false;

var iLoadingPage,iIndexPage,iBigSencePage,iChosePage,iPortalPage,iShowcasePage,iSmallSencePage;

let BgmUrl = "https://wechat.dhteam.net/osm/audio/bgm.mp3";