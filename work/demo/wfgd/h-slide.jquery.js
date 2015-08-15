$(function(){
    $.fn.slide = function(options) {
        var defaults = {
            'width' : 800,
            'height': 400,
            'curr' : 0,
            'type' : 0,
            'lr' : false,
            'pt' : false
        };
        var _this = this;
        var _ul = _this.find('ul.imgBox');
        var _lg = _ul.find('li').length;//实际个数
        var timer = null;

        var settings = $.extend({},defaults, options);

        return this.each(function(){
            init(act);
        });
        /*构造*/
        function init(callBack){
            _ul.html(_ul.html()+_ul.html());
            setStyle();
            if(settings.lr){
                addLr();
            }
            if(settings.pt){
                addPt();
            }
            callBack();
        }
        /*添加翻页*/
        function addLr(){
            _this.append('<span class="prev"><</span><span class="next">></span>');
            _this.find('.prev').on('click',prev);
            _this.find('.next').on('click',next);
        }
        /*添加页码*/
        function addPt(callBack){
            var _html = '';
            for(var i = 0;i < _lg;i++){
                _html += '<li></li>';
            }
            _this.append('<div class="pagetion"><ul class="page">' + _html + '</ul></div>');
            $('.pagetion li').each(function(index){
                if(index == settings.curr){
                    $(this).addClass('curr');
                }
                $(this).on('click',function(){
                    clearTimeout(timer);
                    settings.curr = index;
                    change(settings.type);
                    act();
                });
            });
        }
        /*滚动*/
        function act(){
            timer = setInterval(function(){
                settings.curr++;
                if(settings.curr == _lg + 1){
                    settings.curr = 1;
                    _ul.css({'left':'0px'});
                }
                change(settings.type);
            },3000);
        }
        /*下一张*/
        function next(){
            clearTimeout(timer);
            settings.curr++;
            if(settings.curr == _lg + 1){
                settings.curr = 1;
                _ul.css({'left':'0px'});
            }
            change(settings.type);
            act();
        }
        /*上一张*/
        function prev(){
            clearTimeout(timer);
            settings.curr--;
            if(settings.curr == -1){
                settings.curr = _lg - 1;
                _ul.css({'left':'-' + settings.width * _lg + 'px'});
            }
            change(settings.type,'prev');
            act();
        }
        /*设置样式*/
        function setStyle(){
            var _li = _ul.find('li');
            _this.css({
                'width': settings.width + 'px',
                'height' : settings.height + 'px'
            });
            _ul.css({'width' : settings.width * _li.length + 'px','position':'absolute'});
            _ul.find('li').each(function(){
                $(this).css({
                    'width': settings.width + 'px',
                    'height' : settings.height + 'px',
                    'float' : 'left'
                });
            });
        }
        function change(_type,lr){
            var _p = settings.curr;
            if(!_type){
                _ul.css({'left':'-' + settings.width * settings.curr + 'px'});
            }else{
                _ul.stop(true,false).animate({'left':'-' + settings.width * settings.curr + 'px'});
            }
            if(_p == _lg){
                _p = 0;
            }
            $('.pagetion li').eq(_p).addClass('curr').siblings().removeClass('curr');
        }
    }
});