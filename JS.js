/**
 * Created by Aaron on 2017/10/9.
 */
//5种方式实现值交换
//1. var temp=a;a=b;b=temp;(传统，但需要借助临时变量)
//2. a^=b;b^=a;a^=b;(需要两个整数)
//3. b = [a, a = b][0] (借助数组)
//4. [a, b] = [b, a]; (ES6，解构赋值)
//5. a = a + b; b = a - b; a = a - b; (小学奥赛题)


// 去掉小数部分

// parseInt(num)
// ~~num
// num>>0
// num|0


// 判断X 是否是整数
function isInt(x) {
    return (x ^ 0)===x;
}

// return Math.round(x) ===x
// return (typeof x=='number') && (x%1===0)
// ES6 -> Number.isInteger()


//递归求阶乘

function  factorial(n) {
    return (n>1) ? n * f(n-1) :n;
}

//判断符号是否相同
function sameSign(a,b) {
    return (a ^ b) >=0
}

//克隆数组
arr.slice(0);


//数组去重
//ES6
Array.form(new Set(arr));


//es5
arr.filter(function (ele,index,array) {
    return index===array.indexOf(ele)
});


//数组最大值
function maxArr(arr) {
    return Math.max.apply(null,arr);
}

//数组最小值
function minArr(arr) {
    return Math.min.apply(null,arr);
}

//随机获取数组的一个成员
function randomOne(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

//产生随机颜色
function getRandomColor() {
    return `#${Math.random().toString(16).substr(2,6)}`;
}

//随机生成指定长度的字符串
function  randomStr(n) {
    let str='adasduqpduoqwufohqoqjwoquwodhqowdqw',
        len=str.length,
        result='';
    for(let i=0;i<n;i++){
        result+=str.charAt(Math.floor(Math.random()*len))
    }
    return result;
}
//深拷贝
// JSON.parse(JSON.stringify(obj));


//优化console
// console.info("%c哈哈", "color: #3190e8; font-size: 30px; font-family: sans-serif");






