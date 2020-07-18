<template>
  <div class="jx-sign">
    <div id="single_dialog" style=" display:none;">
      <!--跟签字功能无关，只是不添加这个anysignCanvas这个canvs，index.js代码会报错，影响运行-->
      <div id="container" onmousedown="return false;" style="display: none">
        <canvas id="anysignCanvas" width="2">
        </canvas>
      </div>
      <!--头部-->
      <!--标题（签字人名字）-->
      <div id="anysign_title"></div>
      <!--签字主题部分-->
      <div class="sign-body" style="height: 85%;">
        <div id="leftView">
          <div style="position: relative;height: 100%;">
            <!--回显签字区域-->
            <div id="single_signImage" class="signImagecss" style="overflow: hidden;"></div>
          </div>
        </div>
        <div id="single_tmpcanvascss" class="single_tmpcanvascss">
          <div class="sign-content">
          <!--签字底板-->
          <div id="single_signTitle"></div>
          <!--签字区域-->
          <canvas id="single_anysignCanvas"></canvas>
          </div>
        </div>
        <div id="btnContainerInner" class="btncontainer">
          <!--<div id="btnBack" class="btn-common">回退</div>-->
          <div id="btnOK" class="btn-common btn-red" >确定</div>
          <button id="btnClear" class="btn-common" >清屏</button>
          <button id="btnCancel" class="btn-common">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var apiInstance;
var fileData;
var ocrCapture;
var comment_obj;//收集批注文字
var comment_size;//批注图片字体大小
var comment_line_num;//每行字数
var canvas_height;//canvas高度
var canvas_width;
var DATA_CANNOT_PARSED = "10003"; //输入数据项无法解析
var SERVICE_SYSTEM_EXCEPTION = "10011"; //服务系统异常错误
var RECOGNITION_RESULT_EMPTY = "10100"; //识别结果为空
var CONNECTION_SERVICE_TIMEOUT = "10101"; //连接识别服务超时
var CONNECTION_RECOGNITION_EXCEPTION = "10102"; //连接识别服务异常
var SUCCESS = "0"; //识别成功
var RECOGNITION_FALSE = "-1";//识别错误
var RESULT_OK = 0; //操作成功
var CALLBACK_TYPE_SIGNATURE = 10; //签名框点击确认之后的回调，回调中包含签名快照
var CALLBACK_TYPE_DIALOG_CANCEL = 11; //点击签名框"取消"按钮时的回调，同时也会触发dismiss回调
var CALLBACK_TYPE_COMMENTSIGN = 12; //批注签名框点击确认之后的回调，回调中包含签名快照
var CALLBACK_TYPE_GETVERSION = 13; //获得版本号

var RESULT_ERROR = -1; //操作失败
var EC_API_NOT_INITED = 1; //接口未初始化错误
			var CALLBACK_TYPE_START_RECORDING = 14;
			var CALLBACK_TYPE_STOP_RECORDING = 15;
//初始化签名（签名入口）；channel渠道号，由信手书提供，请咨询项目经理；signText-投保人姓名;signCallback,签字控件确定按钮回调
import {
  AnySignApi,
  EncAlgType,
  OCRCapture,
  Language,
  BioType,
  TemplateType,
  DataFormat,
  Signer,
  SignRule_XYZ,
  SignatureConfig,
  TimeTag,
  CommentConfig,
  SignRule_Tid,
  CachetConfig,
  sign_confirm,
  clear_canvas,
  cancelSign,
  SignRule_KeyWord,
  SignRule_KeyWordV2
} from "./assets/src";
export default {
  name: "meSign",
  props: {
  },
  data() {
    return {
      apiInstance: null,
      ocrCapture: null,
      text:'',//需要签字的内容
      signId:'',//对应签字对象的key
      keyword:''//pdf合并签字的关键字
    };
  },
  watch: {},
  methods: {
    getDpr: function () {
      var isIPhone = window.navigator.appVersion.match(/iphone/gi);
      var devicePixelRatio = window.devicePixelRatio;
      var dpr = 1
      if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3) {
          dpr = 3;
        } else if (devicePixelRatio >= 2) {
          dpr = 2;
        } else {
          dpr = 1;
        }
      } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
      }
      return dpr
    },
    anySign (channel, signText, signCallback) {
      var res;
      //签字控件回调（确定按钮，取消按钮都会回调）
      var $this=this
      var callback = function (context_id, context_type, val) {
        if (context_type == CALLBACK_TYPE_START_RECORDING || context_type == CALLBACK_TYPE_STOP_RECORDING) {
          return;
        }
        if (context_type == CALLBACK_TYPE_SIGNATURE) {
          var resData = $this.genData();//调用生成加密数据方法
          signCallback(context_id, context_type, val, resData)
        }
      };
      ////////////////////////////////////////////////
      //设置签名算法，默认为RSA，可以设置成SM2 RSA
      EncAlgType.EncAlg = "SM2";
      apiInstance = new AnySignApi();//签字控件实例化
      //初始化签名接口
      res = apiInstance.initAnySignApi(callback, channel);

      if (!res) {
        console.error("init error");
      } else {

      }
      //识别回调接口
      var identify_callback = function (errCode) {
        if (errCode == SUCCESS) {
          return;
        }
        if (errCode == DATA_CANNOT_PARSED) {
          alert("输入数据项无法解析！");
        } else if (errCode == SERVICE_SYSTEM_EXCEPTION) {
          alert("服务系统异常错误！");
        } else if (errCode == RECOGNITION_RESULT_EMPTY) {
          alert("识别结果为空！");
        } else if (errCode == CONNECTION_SERVICE_TIMEOUT) {
          alert("连接识别服务超时！");
        } else if (errCode == CONNECTION_RECOGNITION_EXCEPTION) {
          alert("连接识别服务异常！");
        } else if (errCode == RECOGNITION_FALSE) {
          alert("书写错误！");
        } else {
          alert(errCode);
        }
      }
      this.setIdentifyCallBack(identify_callback);
      ////////////////////////////////////////////////

      //注册单字签字对象20
      // res = addSignatureObj(20,signText);
      // if (!res) {
      //     console.error("addSignatureObj error");
      // } else {
      //     console.log("注册单字签字对象20成功");
      // }
      res = this.addSignatureObj1(21, signText);
      if (!res) {
        console.error("addCommentObj error");
      } else {
        console.log("注册批签签名框21成功");
      }
      ////////////////////////////////////////////////

      //将配置提交
      res = apiInstance.commitConfig();

      if (res) {
        console.log("Init ALL 初始化成功");
      } else {
        console.error("Init ALL 初始化失败");
      }

      ////////////////////////////////////////////////

    },
    //配置模板数据
    setTemplateData (businessId) {
      // var formData = "{\"bjcaxssrequest\":{\"submitinfo\":[{\"username\":\"测星雨\",\"identitycardnbr\":\"320902198901191012\"},{\"username\":\"测星雨123\",\"identitycardnbr\": \"320902198901191012\"}]}}";
      var formData = "PGh0bWw+PGhlYWQ+PHRpdGxlPjwvdGl0bGU+PG1ldGEgaHR0cC1lcXVpdj0nQ29udGVudC1UeXBlJyBjb250ZW50PSd0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLTgnIC8+PC9oZWFkPjxib2R5PjxkaXY+PGRpdj48bGFiZWw+a2V5d29yZDo8L2xhYmVsPjwvZGl2PjxkaXY+PGxhYmVsPuWIl+WQjTLvvJo8L2xhYmVsPjwvZGl2PjxkaXY+PGxhYmVsPuWIl+WQjTPvvJo8L2xhYmVsPjwvZGl2PjwvZGl2PjwvYm9keT48L2h0bWw+";
      //文件数据
      //var formData = fileData;
      var businessId = businessId;//集成信手书业务的唯一标识

      var template_serial = "4000";//用于生成PDF的模板ID

      var res;

      //配置JSON格式签名原文
      /**
       * 设置表单数据，每次业务都需要set一次
       * @param template_type 签名所用的模板类型
       * @param contentUtf8Str 表单数据，类型为Utf8字符串
       * @param businessId 业务工单号
       * @param template_serial 模板序列号
       * @returns {*} 是否设置成功
       */
      res = apiInstance.setTemplate(TemplateType.PDF, formData, businessId, template_serial);

      if (res) {
        console.log("setTemplateData success");
        return res;
      } else {
        console.error("setTemplateData error");
        return res;
      }
    },
    //添加单签签名框
    addSignatureObj1 (objId, signText) {

      var context_id = objId;
      var signer = new Signer(signText, "11011111111");

      /**
       * 根据坐标定位签名方式
       * @param left 签名图片最左边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param top 签名图片顶边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param right 签名图片最右边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param bottom 签名图片底边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param pageNo 签名在PDF中的页码，从1开始
       * @param unit 坐标系单位，目前支持"dp"和"pt"
       * @constructor
       */
      // var signerRule = new SignRule_XYZ(100.0, 150.1, 180.2, 50.3, 1, "pt");

      /**
       * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
       * @param keyword 关键字
       * @param keyWordAlignMethod 签字图片和关键字位置关系：等于1时，签字图片和关键字矩形重心重合
       *                            等于2时，签字图片位于关键字正下方，中心线对齐；等于3时，签字图片位于关键字正右方，中心线对齐；
       *                            等于4时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
       * @param keywordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
       * @param pageNo 寻找关键字的PDF起始页码
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
      // var signerRule = new SignRule_KeyWord(this.keyword, 2, 0, 1, 1);
        var offset=this.keyword.length*13
      var signerRule = new SignRule_KeyWordV2(this.keyword,offset,15,1,1);

      /**
       *根据关键字定位签名位置
       * @param keyWord 关键字字面值
       * @param xOffset X轴偏移量，适配关键字和规则
       * @param yOffset Y轴偏移量，适配关键字和规则
       * @param pageNo 签名在PDF中的页码，第几页查找关键字，正数为正序，当是负数为倒序
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
//                var signerRule = new SignRule_KeyWord("签名算法",100,100,1,1);

      /**
       * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
       * @param keyword 关键字
       * @param keyWordAlignMethod 签字图片和关键字位置关系：等于0时，签字图片和关键字矩形重心重合
       *                            等于1时，签字图片位于关键字正下方，中心线对齐；等于2时，签字图片位于关键字正右方，中心线对齐；
       *                            等于3时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
       * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
       * @param pageNo 寻找关键字的PDF起始页码
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
//                var signerRule = new SignRule_KeyWordV2("关键字", "0", 10, 1,1);

      var signatureConfig = new SignatureConfig(signer, signerRule);
//                   1:时间在上、2：时间在下、3：时间在右
      var timeTag = new TimeTag(1, "yyMMdd hh:mm;ss");
      // signatureConfig.timeTag = timeTag;

      signatureConfig.singleWidth = 40*this.getDpr();
      signatureConfig.singleHeight = 50*this.getDpr();
      signatureConfig.title = "客户（" + signText + "）签字";
      signatureConfig.titleSpanFromOffset = 4;
      signatureConfig.titleSpanToOffset = 4 + signText.length - 1;
      signatureConfig.penColor = "#000000";
      signatureConfig.isTSS = false;//是否开始时间戳服务
      signatureConfig.signatureImgRatio = 50.0; // 3.0
      signatureConfig.nessesary = true;
      signatureConfig.isdistinguish = false;//ocr识别开关
      // signatureConfig.ocrCapture = ocrCapture;
      var res = apiInstance.addSignatureObj(context_id, signatureConfig);
      if (res) {
        console.log("addSignatureObj " + context_id + " success");
        return res;
      } else {
        console.error("addSignatureObj " + context_id + " error");
        return res;
      }
    },
    //生成签名加密数据
    genData () {
      var data = ''
      try {
        data = apiInstance.getUploadDataGram()
      } catch (err) {
        console.error(err);
      }
      return data;
    },
    //弹出签名框
    popUpDialog (context_id) {
      if (!apiInstance) {
        console.error("信手书接口没有初始化");
        return;
      }
      switch (apiInstance.showSingleSignDialog(context_id)) {
        case RESULT_OK:
          break;
        case EC_API_NOT_INITED:
          console.error("信手书接口没有初始化");
          break;
        case EC_WRONG_CONTEXT_ID:
          console.error("没有配置相应context_id的签字对象");
          break;
      }

    },
    setIdentifyCallBack (callback) {
      if (!apiInstance) {
        console.error("信手书接口没有初始化");
        return;
      }
      apiInstance.setIdentifyCallBack(callback);
    },
    getWoNo() {
      var random=Math.random().toString();
      var tempstr=random.split('.');
      return tempstr[0]+tempstr[1]
    },
    sign(signText,keyword,signId) { //签字名字，合并签名关键字，签字对应的key
      return new Promise((reslove,reject)=>{
        var $this=this
        $this.text=signText
        $this.keyword=keyword
        let woNo=this.getWoNo()
        this.anySign(112321321,signText,function (context_id, context_type, val,res) {
          var obj={
            imgData:val,
            submitData:res,
            signId:signId,
            woNo:woNo
          }
          reslove(obj)
        });
        this.setTemplateData(woNo);
        this.popUpDialog(21);
      })
    }
  },
  mounted () {
    // // 初始化信手书
    // this.testAnySign()
    // // 设置表单数据
    // this.testSetTemplateData()
  }
};
</script>
<style scoped>
  .split{
    background: #f8f8f8;
    height: 5px;
  }
  #btnContainerInner {
    display: flex;
    width: 9.2rem;
    margin:15% auto 0 auto;
    justify-content: space-between;
  }
  #single_dialog {
    background: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index:9;
    top:0;
    left:0 ;
    right: 0;
    bottom:0;
    overflow: scroll;
  }
  #single_signTitle {
    color: #E5E5E5;
    text-align: center;
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    top:0;
    left:0;
    z-index:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #single_anysignCanvas {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    z-index:2;
  }
  .single_tmpcanvascss {
    width: 10rem !important;
    height: 60% !important;
    background: url('data:image/png;base64,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AACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAACCO4cAAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcAAAAABHcAAAAABHcAAACA4A4AAACA4A4AAACA4A4AAAAQ3AEAAAAQ3AEAAACCOwAAAACCOwAAAACCOwAAAEBwBwAAAEBwBwAAAEBwBwAAAAjuAAAAAAjuAAAAAMEdAAAAAMEdAAAAAMEdAAAAILgDAAAAILgDAAAAILgDAAAABHcA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') center top no-repeat;
    background-size: 10rem 100% !important;
  }
  .sign-content{
    position: relative;
    height: 100%;
  }
  #single_dialog #anysign_title{

    font-size:.5rem !important;/*px*/
    width: 100% !important;
    text-align: center;
    height: 10%;
    color:#333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btnContainer {
    text-align: center;
    font-size: 40px;/*px*/
    width: 100%;
    clear: both;
    position: relative;
    margin-top: 2.5px;
    /* bottom: 10; */
  }
  #leftView{
    width: 100%;
    height: 14%;
    margin: 3% 0;
  }
  .signImagecss {
    overflow-y: scroll !important;
    width: 8.866667rem !important;
    height: 100% !important;
    box-shadow: 0 0.026667rem 0.173333rem 0.026667rem rgba(0, 0, 0, 0.07);
    border-radius: 0.213333rem;
    position: relative;
    left:0.56rem;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .signImagecss img{
    margin-top:auto !important;
  }
  .btn-common {
    border: 1px solid #EB5404;/*no*/
    border-radius: 1.226667rem;
    width: 2.613333rem;
    height: 0.933333rem;
    background: #fff;
    font-size: .42rem;/*px*/
    color: #EB5404;
    text-align: center;
    line-height: 0.933333rem;
  }
  .btn-red{
    background-image: linear-gradient(270deg, #F78D0A 0%, #EB5404 100%);
    color: #fff;
    border:none;
  }
</style>
