##ES6

***

###数组的扩展

#### *Array.from()*

* 用于将两类对象转为真正的数组

```
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
console.log(Array.from(arrayLike)) // ['a', 'b', 'c']
```

* 常见的类似数组的对象是DOM操作返回的NodeList集合，querySelectorAll方法返回的是一个类似数组的对象，只有将这个对象转为真正的数组，才能使用forEach方法。

```
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
  console.log(p)
})
```

* 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组
```
Array.from([1, 2, 3]) // [1, 2, 3]
```

* 只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。字符串和Set结构都具有Iterator接口
```
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
console.log(Array.from(namesSet)) // ['a', 'b']
```

* 扩展运算符（...）也可以将某些数据结构转为数组
```
console.log([...document.querySelectorAll('div')])
Array.from({ length: 3 }) // [ undefined, undefined, undefined ]
```

* Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
```
Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]
```

* 下面的例子是取出一组DOM节点的文本内容
```
let spans = document.querySelectorAll('span.name')
let names1 = Array.from(spans, s => s.textContent)
等同于 let names2 = Array.prototype.map.call(spans, s => s.textContent)
```

* 下面的例子将数组中布尔值为false的成员转为0
```
Array.from([1, , 2, , 3], (n) => n || 0) // [1, 0, 2, 0, 3]
```




##mock.js

***

1. 常用数据占位符
```
{
  "integer": "@integer(10, 30)",  //随机生成一个10～30之间的正整数
  "float": "@float(60, 100, 2, 2)",  //随机生成浮点数，参数分别为整数部分最小值和最大值、小数部分保留最小位数和最大位数
  "boolean": "@boolean",       //随机生成boolean
  "string|1-2": "@string",     //随机生成字符串
  "name":"@cname",             //随机生成名字

  "date": "@date(yyyy-MM-dd)", //按照格式随机生成时间
  "datetime": "@datetime",     //随机生成时间
  "now": "@now",               //当前时间

  "id": "@id",                 //随机生成一个 18 位身份证
  "guid": "@guid",             //随机生成一个 GUID
  "url": "@url",               //随机生成url字符串
  "email": "@email",           //随机生成邮箱
  "image": "@image(200x200)",  //随机生成一个大小为200x200的图片链接
  "title": "@title",           //随机生成一句标题，其中每个单词的首字母大写
  "upper": "@upper(@title)",   //把生随机成的标题全部转为大写
  "cparagraph": "@cparagraph", //随机生成一段中文文本
  "csentence": "@csentence",   //随机生成一段中文文本
  "range": "@range(2, 10)" ,   //返回一个内容从2开始到9的整型数组

  "region": "@region",         //随机生成地区 华中
  "province": "@province",     //随机生成省会 省
  "city": "@city",             //随机生成城市 市
  "county": "@county",         //随机生成一个（中国）县
}
```

2. [Mock文档](https://github.com/nuysoft/Mock/wiki)