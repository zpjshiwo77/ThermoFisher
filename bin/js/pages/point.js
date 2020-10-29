var point = function(){
    var _self = this;

    _self.init = function(box){
        for (var i = 0; i < box._childs.length; i++) {
            var ele = box._childs[i];
            var tips = new pointUI();
            ele.addChild(tips);
        }
    }
}

var iPoint = new point();