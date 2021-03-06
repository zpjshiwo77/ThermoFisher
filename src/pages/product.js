var productPage = function(){
    var _self = this;
    var proData;
    var productBox,proImg,bghead,proTitle,proIntro,proFeature,wordCont;
    var btnImg,awardBtn,moreBtn;
    var videoBox,myVideo;

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
        moreBtn.on("touchend",openUrl)
        $("#backBtn").on("touchend",hidePage);
        awardBtn.on("touchend",gotoAward);
        $("#closeBtn").on("touchend",hideVideo);
    }

    /**
     * 显示
     */
    _self.show = function(name){
        proData = products[name];
        renderPage();
        productBox.show().addClass("proShow")
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        productBox.addClass("proHide")

        setTimeout(function(){
            productBox.hide().removeClass("proShow proHide");
        },TRF_TIME)
    }

    /**
     * 视频显示
     */
    function playVideo(){
        myVideo.play();
        videoBox.show();
    }

    /**
     * 视频隐藏
     */
    function hideVideo(){
        myVideo.pause();
        videoBox.hide();
    }

    /**
     * 隐藏页面
     */
    function hidePage(){
        _self.hide();
    }

    /**
     * 渲染页面
     */
    function renderPage(){
        bghead.src = "images/public/"+proData.titleType+".png";
        if(proData.img){
            proImg[0].src = proData.img;
            proImg.show()
        }
        else proImg.hide();
        if(proData.type == 0){
            btnImg[0].src = "images/public/btn2.png";
            moreBtn.hide();
            awardBtn.css({width:"100%"})
        }
        else{
            btnImg[0].src = "images/public/btn.png";
            moreBtn.show();
            awardBtn.css({width:"50%"})
        }
        (proData.img == "images/product/12.jpg" ? proTitle.addClass("sp") : proTitle.removeClass("sp"))
        proTitle.html(proData.name);
        proIntro.html(proData.intro);
        proFeature.html(proData.feature);
        wordCont.animate({scrollTop:0},1);
        if(proData.type == 1) myVideo.src = proData.url;
    }

    /**
     * 打开链接
     */
    function openUrl(){
        if(proData.type == 1){
            playVideo();
        }
        else if(proData.type == 2){
            window.open(proData.url);
            updateUI();
        }
    }

    /**
     * 去抽奖页面
     */
    function gotoAward(){
        window.open("http://thermofisher-ciie.tbpchina.com/question.html");
        updateUI();
    }

    function updateUI(){
        barFlag = true;
        iShowcasePage.upDateUI();
        iBigSencePage.upDateUI();
        iSmallSencePage.upDateUI();
        iPortalPage.upDateUI();
        iBgm.upDateUI();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        productBox = $("#productBox")
        proImg = $("#proImg")
        bghead = $("#bghead")[0]
        proTitle = $("#proTitle")
        proIntro = $("#proIntro")
        proFeature = $("#proFeature")
        wordCont = $("#wordCont")
        videoBox = $("#videoBox")
        myVideo = $("#myVideo")[0]
        btnImg = $("#btnImg")
        awardBtn = $("#awardBtn")
        moreBtn = $("#moreBtn")
    }
}

iProductPage = new productPage();