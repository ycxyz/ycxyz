window.onload = function()
{
	happybook.app.move1();
	happybook.app.move2();
};


var happybook = {};  //命名空间
happybook.tools = {};
happybook.ui    = {};
happybook.app   = {};


happybook.tools.getElemsByClass = function(obj,attr)
{
	var arr = [];
	var aElem = obj.getElementsByTagName('*');
	for (var i = 0; i < aElem.length; i++) {
		if(aElem[i].className == attr)
		{
			arr.push(aElem[i]);
		}
	};
	return arr;
};

happybook.tools.attrValue = function(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}


happybook.ui.animate = function(obj,json,fn)
{
	if(obj.timer){
		clearInterval(obj.timer);
	}
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json)
		{
			var cur = 0; //获取当前的属性值
			if(attr == 'opacity')
			{
				cur = Math.round(parseFloat(happybook.tools.attrValue(obj,attr))*100);
			}
			else
			{
				cur = parseInt(happybook.tools.attrValue(obj,attr));
			}
			//开始运动
			var step = (json[attr]-cur)/10;//运动速度
			step=step>0?Math.ceil(step):Math.floor(step);//>0向上取整,<0向下取整

			if(cur!=json[attr])
				flag = false;

			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(cur+step)+')';
				obj.style.opacity = (cur+step)/100;
			}
			else
			{
				obj.style[attr] = cur+step+'px';
				//console.log(obj.style[attr]);
			}
		}
		if(flag)
		{
			clearInterval(obj.timer);
			if(fn) fn();
		}
	},30);
};


happybook.app.move1 = function()
{
	var iNow = 0;

	var oMove1 = document.getElementById('move1');
	var prevBar1 = happybook.tools.getElemsByClass(oMove1,'prev')[0];
	var nextBar1 = happybook.tools.getElemsByClass(oMove1,'next')[0];
	var oUl1 = oMove1.getElementsByTagName('ul')[0];
	var aLi1 = oUl1.getElementsByTagName('li');
	oUl1.innerHTML += oUl1.innerHTML;
	oUl1.style.width = aLi1[0].offsetWidth * aLi1.length + 'px';
	slide(prevBar1,nextBar1,oUl1,aLi1);

	function slide(prevBar,nextBar,oUl,aLi)
	{
		var timer = setInterval(auto,3000);

		oUl.onmouseover = function()
		{
			clearInterval(timer);
			happybook.ui.animate(prevBar,{opacity:100});
			happybook.ui.animate(nextBar,{opacity:100});
		};
		oUl.onmouseout = function()
		{
			timer = setInterval(auto,3000);
			happybook.ui.animate(prevBar,{opacity:0});
			happybook.ui.animate(nextBar,{opacity:0});
		};

		nextBar.onclick = function()
		{
			auto();
		};

		prevBar.onclick = function()
		{
			if(iNow == 0)
			{
				iNow = aLi.length/2;
				oUl.style.left = -oUl.offsetWidth/2 + 'px';
			}
			iNow--;
			var rightVal = -(iNow*aLi[0].offsetWidth);
			moveRight(oUl,rightVal);
		};
		function auto()
		{
			if(iNow == aLi.length/2)
			{
				iNow = 0;
				oUl.style.left = 0;
			}
			iNow++;
			var leftVal = -(iNow*aLi[0].offsetWidth);
			moveLeft(oUl,leftVal);
		}

	}

	function moveLeft(obj,leftVal)
	{
		happybook.ui.animate(obj,{left:leftVal});
	}
	function moveRight(obj,rightVal)
	{
		happybook.ui.animate(obj,{left:rightVal});
	}

	
};

happybook.app.move2 = function()
{
	var iNow = 0;
	var oMove2 = document.getElementById('move2');
	var prevBar2 = happybook.tools.getElemsByClass(oMove2,'lr_prev')[0];
	var nextBar2 = happybook.tools.getElemsByClass(oMove2,'lr_next')[0];
	var oUl2 = oMove2.getElementsByTagName('ul')[0];
	var aLi2 = oUl2.getElementsByTagName('li');
	oUl2.innerHTML += oUl2.innerHTML;
	oUl2.style.width = aLi2[0].offsetWidth * aLi2.length + 'px';
	slide(prevBar2,nextBar2,oUl2,aLi2);


	function slide(prevBar,nextBar,oUl,aLi)
	{
		var timer = setInterval(auto,3000);

		oUl.onmouseover = function()
		{
			clearInterval(timer);
		};
		oUl.onmouseout = function()
		{
			timer = setInterval(auto,3000);
		};
		nextBar.onclick = function()
		{
			auto();
		};
		prevBar.onclick = function()
		{
			if(iNow == 0)
			{
				iNow = aLi.length/2;
				oUl.style.left = -oUl.offsetWidth/2 + 'px';
			}
			iNow--;
			var rightVal = -(iNow*aLi[0].offsetWidth);
			moveRight(oUl,rightVal);
		};
		function auto()
		{
			if(iNow == aLi.length/2)
			{
				iNow = 0;
				oUl.style.left = 0;
			}
			iNow++;
			var leftVal = -(iNow*aLi[0].offsetWidth);
			moveLeft(oUl,leftVal);
		}

	}

	function moveLeft(obj,leftVal)
	{
		happybook.ui.animate(obj,{left:leftVal});
	}
	function moveRight(obj,rightVal)
	{
		happybook.ui.animate(obj,{left:rightVal});
	}
};
