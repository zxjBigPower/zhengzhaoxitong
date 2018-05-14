
var SERVER_ROOT          		= "";

////////////////////////////////////测试环境使用配置已经失效///////////////////////////////////////
var SERVER_REMOTE_ROOT = "http://id.oa.backyard.test.colourlife.com"; // 连接测试环境后台地址
// var SERVER_REMOTE_ROOT			="http://45.76.212.90:8080";		// 谷盈移动测试服务环境IP

var SERVER_TEST_ROOT     		= "http://localhost:8080";
//SERVER_ROOT = SERVER_TEST_ROOT;  //本地

////////////////////////////////////生产环境使用配置已经生效///////////////////////////////////////
// var SERVER_REMOTE_ROOT = "http://id.oa.backyard.colourlife.com"; // 连接正式环境后台地址

SERVER_ROOT = SERVER_REMOTE_ROOT;   //服务器

var SERVER_PATH_NAME  = "";

var PROTOCOL_TYPE_ICE = 0;
var PROTOCOL_TYPE_CUSTOMER = 1;

var SUCCESSED = 0;
var FAILED = -1;

// 登录
var SERVICE_NAME_LOGIN = "Login";
// 登录跳转
var SERVER_NAME_MAIN = "main";

var SERVICE_NAME_TEST = "Test";

//彩之云账号授权
var SERVICE_NAME_COLORFULCLOUD = "doCzyAuthor";

//彩之云账号登录
var SERVICE_NAME_DOCZYLOGIN = "doCzyLogin";


// 查询上上签ca证书id
var SERVICE_NAME_GET_SSSIGN_CERT_ID = "doSsSignGetCertId";

// 查询中税ca证书id
var SERVICE_NAME_GET_ZSSIGN_CERT_ID = "doZsSignGetCertId";


//彩之云账号识别
var SERVICE_NAME_DATA = 0;

// 法人架构数据 初始化
var SERVER_NAME_GET_TREEDATA = "getTree";

// 法人架构维护  全部
var SERVER_NAME_GET_ALLTREEDATA = "getAllTree"

// 法人架构修改
var SERVER_NAME_GETUPDATETREEVIEW = "updateTreeView";

// 证照树形添加信息
var SERVER_ADD_TREE_BASENODE = "addTreeView";

// 从ICE拉取省、市、区信息
var SERVER_ADD_PROVINCES = "selectRegion";

// 类型维护页面初始化
var SERVICE_NAME_ORG = "orgType";

var SERVICE_NAME_GET_ORG_TYPE = "getOrgType";

// 类型维护页面表单提交
var SERVICE_NAME_ORGSAVE = "orgTypeSave";

// 类型维护页面删除
var SERVICE_NAME_DELORGTYPE = "delOrgType";

// 类型维护页面修改
var SERVICE_NAME_UPDATEORGTYPE = "updateOrgType";

//平台操作日志管理查询
var SERVICE_NAME_GETFINDALLBYPAGE = "findAllByPage";

//平台操作日志管理搜索
var SERVICE_NAME_GETFINDLOGBYNAME = "findLogByName"

// 证照添加表单提交
var SERVICE_NAME_ADDTREE = "addTree";

//图片在线地址调取
var SERVICE_NAME_DOWNLOADFILEFROMFILEID = "downloadFileFromFileId" 

// 组织架构数据请求
var SERVICE_NAME_GETCORPORATIONTREE = "getCorporationTree";

// 法人架构详细表单保存
var SERVICE_NAME_SAVELEGAL = "saveLic";

// 图片上传
var SERVICE_NAME_LOADPICTURE = "uploadLicImg";

// 股东信息填写
var SERVICE_NAME_SHAREHOLDER = "addShareInfo";

//查询工商信息
var SERVICE_NAME_GETLIC  = "getLic";

//根据执照id获取执照信息和股东信息
//var SERVICE_NAME_GETLICSHA = "getLic_Sha";

//照片处理
var SERVICE_NAME_GETDATA = "getData";

//证照开始上传
var SERVICE_NAME_STARTUPLOADING = "";

//图片路径
var SERVICE_NAME_LICENSE = "license";

//股东查询
var SERVICE_NAME_SHAREHODERLIST = "sharehoderList";

//股东信息删除
var SERVICE_NAME_DELSHARINFO = "delSharInfo";

//电子签章 印章数据初始化
var SERVICE_NAME_GETSIGNATURELIST = "getSignatureList";

//上传印章数据
var SERVICE_NAME_SAVESIGNATURE = "saveSignature";

// 上传中税ca证书资料 
var SERVICE_NAME_SAVE_ZS_IMAGE = "doSaveZsImage";

//上传合同数据
var SERVICE_NAME_SAVECONTRACT = "saveContract";

//合同初始化数据
var SERVICE_NAME_GETCONTRACTLIST = "getContractList";

//删除电子签章
var SERVICE_NAME_DELSIGNATURE = "delSignature";

//删除合同数据
var SERVICE_NAME_DELCONTRACT = "delContract";

// 修改合同数据 获得该列的数据
var SERVICE_NAME_GETCONTRACTONE = "getContract";

// 修改签章 修改印章
// 接口更改由getSignatureOne变成getSignature
var SERVICE_NAME_GETSIGNATUREONE = "getSignature";

// 注册二级账号,设置企业证件信息接口
var SERVICE_NAME_APPLYCERT = "applyCert";

// 中税CA认证接口
var SERVICE_NAME_ZHONGSHUICERT = "doZhongShuiCert";

// 查询证书申请情况
var SERVICE_NAME_CERTSTATUS = "certStatus";


var SERVICE_NAME_USER_GET_CERT = "userGetCert";

// 中税证书申请查询
var SERVICE_NAME_ZSCERTSTATUS = "doZhongShuiCertStatus";

var SERVICE_NAME_ZHONG_SHUI_UPLOAD_IMAGE = "doZhongShuiUploadImage";

// 获取合同印章列表
var SERVICE_NAME_SHOWCONDETAIL = 'showConDetail';
 
// 判断ca证书是否已经申请成功，专用于合同签署操作与SERVICE_NAME_USER_GET_CERT接口功能相同
var SERVICE_NAME_IS_CA_OK  = "doIsCAOk";
 
// 设置印章
var SERVICE_NAME_SETSIGNIMAGE = "setSignImage";

//添加签署者
var SERVICE_NAME_ADDSIGNER = "addSigner";

//执行签章动作
var SERVICE_NAME_SIGNCONTRACT= "signContract";

//下载合同
var SERVICE_NAME_DOWNLOADCON = "downloadCon";

//初始化合同
var SERVICE_NAME_INITCONTRACT = "initContract";

//	结束合同
var SERVICE_NAME_FINISHCON = "finishCon";

//	锁定合同
var SERVICE_NAME_LOCKCON = "lockCon";

//	审阅合同
var SERVICE_NAME_UPDATEREVIEW = "reSigning";

//	删除签署者
var SERVICE_NAME_REMOVESIGNER = 'removeSigner';

//  搜索合同
var SERVICE_NAME_DOCONTRACTSEARCH = "doContractSearch";

//  印章搜索
var SERVICE_NAME_SEALSEARCH = "doSignatureSearch";

//  合同状态查询
var SERVICE_NAME_DOCONTRACTSEARCHSTATE = "doContractSearchState";

/**
 * 权限管理
 */ 

// 显示员工列表
var SERVICE_NAME_SHOWUSERS = "showUsers";

// 获取管理组织架构
var SERVICE_NAME_GETORGSTRUCTURE = "getOrgStructure";

// 获取管理组织架构员工列表
var SERVICE_NAME_GETORGSTRUCTUREUSERS = "getOrgStructureUsers";

// 增加员工列表
var SERVICE_NAME_ADDUSERS = "addUsers";

// 移除员工列表
var SERVICE_NAME_REMOVEUSERS = "removeUsers";

// 设置子级权限
var SERVICE_NAME_SETSUBLEVEL = "setSubLevel";

// 设置权限
var SERVICE_NAME_SETPOWER = "setPower";

// 权限设置搜索
var SERVICE_NAME_DOSEARCHUSER = "doSearchUser";

//时间提醒结构块
// 模糊查询员工信息 
var SERVICE_NAME_SELECTEMPLOYEE = "selectEmployee";

// 时间提醒表单
var SERVICE_NAME_SETTIMEREMINDER = "setTimeReminder";

// 临时数据回调包
var SERVICE_NAME_DATA_TEMP = 'dataTape';
 
// 法人数据
var LEGALPERSONS = "legalPersons";

var USER_NAME = "userName";

var POWERINFO = "powerinfo";

var OAACCOUNT = "oaaccount";

var SUPER = 'super';

//var BRACKETS_LEFT = "^1^";
//var BRACKETS_RIGHT = "^2^";
//var BIG_PARANTHESES_LEFT = "^3^";
//var BIG_PARANTHESES_RIGHT = "^4^";

var isSingleSign = false;//单签署

var BRACKETS_LEFT = "_1_";
var BRACKETS_RIGHT = "_2_";
var BIG_PARANTHESES_LEFT = "_3_";
var BIG_PARANTHESES_RIGHT = "_4_";


// 判断是否为空
function isNull(value) {
	
	if (value == "undefined" || 
		value == null || 
		JSON.stringify(value)=='""'||
		JSON.stringify(value)==""  ||
		JSON.stringify(value)=='{}'||
		JSON.stringify(value)=='[]'){
		
    		return true;
	}
	
	return false;
};

// 设置本地存储字段set
function setStorage( tempKey , tempValue ){
	if(isNull(tempKey)){
		BJUI.alertmsg('warn', '设置本地存储key值不能为空');
		return;
	}
	if(isNull(tempValue)){
		BJUI.alertmsg('warn', '设置本地存储value值不能为空');
		return;
	}
	localStorage.setItem(tempKey,tempValue);
};



// 获取本地存储字段get
function getStorage( tempKey ){
	if(isNull(tempKey)){
		BJUI.alertmsg('warn', '获取本地存储key值不能为空');
		return;
	}
	return localStorage.getItem(tempKey);
};

// 移除本体存储字段remove
function removeStorage( tempKey ){
	if(isNull(tempKey)){
		BJUI.alertmsg('warn', '移除本地存储key值不能为空');
		return;
	}
	localStorage.removeItem(tempKey);
};

//显示全局加载事件
function showLoading(){
	try {
		console.log("开始加载动效");
		$(".bjui-alertBackground").show();
		var tempimg = '<div class="bjui-maskProgress bjui-ajax-mask" style="z-index: 99999;"><i class="fa fa-cog fa-spin"></i>&nbsp;&nbsp;正在努力加载数据，请稍等...<div class="progressBg"><div class="progress" style="overflow: hidden; width: 0%;"></div></div></div>'
		$(".bjui-alertBackground").html(tempimg);
	} catch (error) {
		console.log(error);
	}
}
//关闭全局加载
function hideLoading(){
	try {
		console.log("关闭加载动效");
		$(".bjui-alertBackground").hide();
	} catch (error) {
		console.log(error);
	}
}

function isPictureName(fileName) {
	
	var extStart = fileName.lastIndexOf(".");
	
	var ext = fileName.substring(extStart, fileName.length).toLowerCase();
	
	if(ext !=".bmp" && ext != ".png" && ext != ".gif" && ext != ".jpg" && ext !=".jpeg"){
		return false;
	}
	
	return true;
}


function isMobile(number) {
	
    var length = number.length;  
    if(length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(number))   
    {
        return true;
    }else{  
        return false;
    }
    
}
