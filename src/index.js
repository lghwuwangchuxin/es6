import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
      {/*测试*/}
  </React.StrictMode>,
  document.getElementById('root')
);

/*数组解构*/
// let [a=1,b=2,c=3,d=4]=[];
// const sum=(a+b+c+d)
// console.log(sum);
/*对象解构*/
// let {foo,bar} = {foo:'DeLyQiang',bar:'戴利强'};
// console.log(foo,bar)
// let foo1;
// ({foo1} ={foo1:'DeLyQiang'});
// console.log(foo1);
/*字符串解构*/
// const [a,b,c,d,e,f]="DeLyQiang";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
/*
扩展运算符*/
// let arr1=['www','DeLyQiang','com'];
// //let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr2);
// console.log(arr1);
/*rest运算符*/
// var DeLyQiang=(...arg)=>{
//     for (let val of arg) {
//         console.log(val);
//     }
// }
// DeLyQiang(0,1,2,3,4,5,6,7);
/*字符串模版*/
// let DeLyQiang='戴利强';
// let blog = `非常高兴你能看到这篇文章，我是你的老朋友${DeLyQiang}。这节课我们学习字符串模版。`;
// console.log(blog)

/*
对运算的支持*/
// let a=1;
// let b=2;
// let result=`${a+b}`;
// console.log(result)

/*
字符串查找*/
// let DeLyQiang='戴利强';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友戴利强。这节课我们学习字符串模版。';
// console.log(blog.includes("非常"))
// //判断开头是否存在：
// blog.startsWith(DeLyQiang);
// //判断结尾是否存在：
// blog.endsWith(DeLyQiang);

/*复制字符串*/
// console.log('DeLyQiang.'.repeat(2))

/*
JSON数组格式转换*/
// let json = {
//     '0': 'DeLyQiang',
//     '1': '戴利强',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr)

/*
Array.of()方法*/
// let arr =Array.of(3,4,2,5)
// console.log(arr)

// let a='sdf'
// let arr =Array.of(3,4,a,'戴利强')
// console.log(arr)

/*
find( )实例方法*/
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value>5;
// }))

/*fill( )实例方法：*/
/*
fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
*/
// let arr=[0,1,2,3,4,5,6,7,8,9];
// arr.fill('DeLyQiang',2,5);
// console.log(arr);

/*数组的遍历for…of循环*/
// let arr=['DeLyQiang','戴利强','大胖逼逼叨']
// for (let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

/*
entries( )实例方法：*/
//entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。我们来看下面的代码
// let arr=['DeLyQiang','戴利强','大胖逼逼叨']
// let list=arr.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


/*
ES6中的箭头函数和扩展*/
// var add =(a,b=1) => a+b;
// console.log(add(1))
// var add= (a,b=1) => {
//     console.log('DeLyQiang')
//     return a+b;
// };
// console.log(add(1));

/*对象的函数解构*/
let json = {
    a:'DeLyQiang',
    b:'戴利强'
}
var fun=({a,b='DeLyQiang'})=>console.log(fun(json));
