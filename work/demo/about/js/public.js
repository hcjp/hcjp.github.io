function Naughty(obj){}//想写一个运动类

/**
 * @author miaov
 * move
 */
function getStyle(obj, attr){//获取样式
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, false)[attr];
	}
}
/**
 * 缓冲运动
 * @param  {[type]}   obj  目标对象
 * @param  {[type]}   json {'styleName':'styleValue'}
 * @param  {Function} fn   回掉函数
 * @return {[type]}        var
 */
function buffer(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//这一次运动就结束了——所有的值都到达了
		for(var attr in json){
			//1.取当前的值
			var iCur=0;
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur=parseInt(getStyle(obj, attr));
			}
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//3.检测停止
			if(iCur!=json[attr]){
				bStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	}, 30);
}
function constant(obj, json, fn){//匀速运动
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//这一次运动就结束了——所有的值都到达了
		for(var attr in json){
			//1.取当前的值
			var iCur=0;
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur=parseInt(getStyle(obj, attr));
			}
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//3.检测停止
			if(Math.abs(iCur - json[attr]) > iSpeed){
				bStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';

			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	}, 30);
}
/*
*公共函数
*/
/**
 * 类名获取元素
 * @param  {[type]} searchClass 类名
 * @param  {[type]} node        父节点
 * @param  {[type]} tag         目标节点
 * @return {[type]}             dom数组
 */
var getElementsByClassName = function (searchClass, node,tag) {
	var result = [];
	if(document.getElementsByClassName){
		var nodes =  (node || document).getElementsByClassName(searchClass);
		for(var i=0 ;node = nodes[i++];){
			if(tag !== "*" && node.tagName === tag.toUpperCase()){
				result.push(node);
			}
		}
		return result;
	}else{
		node = node || document;
		tag = tag || "*";
		var classes = searchClass.split(" "),
			elements = (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag),
			patterns = [],
			current,
			match;
		var i = classes.length;
		while(--i >= 0){
			patterns.push(new RegExp("(^|\\s)" + classes[i] + "(\\s|$)"));
		}
		var j = elements.length;
		while(--j >= 0){
			current = elements[j];
			match = false;
			for(var k=0, kl=patterns.length; k<kl; k++){
				match = patterns[k].test(current.className);
				if (!match){
					break;
				}
			}
			if (match){
				result.push(current);
			}
		}
		return result;
	}
}
function mousePos(e){//获取鼠标位置
	var x,y;
	var e = e||window.event;
	return {
		x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,
		y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop
	};
}
/*class 增删查*/
 function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}