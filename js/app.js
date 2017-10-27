//常用的元素和变量
var $body= $(document.body);

//画布相关,原生获取，内容是在canvas中的context中绘制
var $canvas= $('#game');//获取所有id为game的数组
var canvas= $canvas.get(0);//获取第一个canvas元素
var context= canvas.getContext('2d');

//设置画布的宽度和高度
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

//获取画布相关信息
var canvasWidth= canvas.clientWidth;
var canvasHeight= canvas.clientHeight;

//判断是否有requestAnimationFrame方法，如果有则模拟实现
//以下为兼容代码，目的是获取一个计时器
window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback) {
	window.setTimeout(callback, 1000/30);
};

// 页面主入口
function init() {

}

init();