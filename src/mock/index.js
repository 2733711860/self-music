import Mock from 'mockjs'

const data={
  "id":"@guid",
  "name":"@cname",
  "code": "@integer(0, 1)",
  "natural": "@natural(10, 100)",
  "success": "@boolean",
  "date": "@date(yyyy-MM-dd)",
  "now": "@now",               //当前时间
  "datetime": "@datetime",     //随机生成时间
  "email": "@email",
  "image": "@image(375x200)",
  "color": "@color",
  "title": "@title",
  "csentence": "@csentence",   //随机生成一段中文文本
  "cparagraph": "@cparagraph", //随机生成一段中文文本
  "range": "@range(2, 10)" ,   //返回一个内容从2开始到9的整型数组
  "url": "@url",               //随机生成url字符串
  "string|1-2": "@string",     //随机生成字符串
  "region": "@region",         //随机生成地区 华中
  "province": "@province",     //随机生成省会 省
  "city": "@city",             //随机生成城市 市
  "county": "@county",         //随机生成一个（中国）县
  "float": "@float(60, 100, 2, 2)",  //随机生成浮点数，参数分别为整数部分最小值和最大值、小数部分保留最小位数和最大位数
};

Mock.mock(/\/mockTest/, data)

export default Mock