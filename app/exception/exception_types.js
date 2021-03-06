/**
  200 成功
  999 未知错误
  1 开头为通用错误
  2 商品类错误
  3 主题类错误
  4 幻灯片错误
  5 类目类错误
  6 用户类错误
  8 订单类错误
*/

const ExceptionTypes = {
  SERVER_ERROR: { status: 500, code: 999, msg: '服务器错误' },
  PARAMETER_ERROR: { status: 200, code: 10000, msg: '参数错误' },
  RESOURCE_NOT_FOUND: { status: 200, code: 10001, msg: '资源未找到' },
  UNAUTHORIZED: { status: 200, code: 10002, msg: '未授权' },
  ATTEMPT_ILLEGAL_OPERATE: { status: 200, code: 10003, msg: '尝试非法操作' },
  AUTHORIZATION_TOKEN_GENERATE_ERROR: { status: 200, code: 10004, msg: '授权失败, 令牌生成异常' },
  AUTHORIZATION_CACHE_ERROR: { status: 200, code: 10005, msg: '授权失败, 服务器缓存异常' },
  AUTHORIZATION_ACCOUNT_ERROR: { status: 200, code: 10006, msg: '授权失败, 账号或密码错误' },
  AUTHORIZATION_ADD_USER_ERROR: { status: 200, code: 10007, msg: '授权失败, 添加用户失败' },
  AUTHORIZATION_USER_DATA_DECODE_ERROR: { status: 200, code: 10007, msg: '授权失败, 用户数据解密错误' },
  AUTHORIZATION_TOKEN_EXPIRE: { status: 200, code: 10008, msg: '认证失败, 令牌已过期' },
  AUTHORIZATION_TOKEN_INVALID: { status: 200, code: 10009, msg: '认证失败, 令牌无效' },
  AUTHORIZATION_TOKEN_LOSE_EFFICACY: { status: 200, code: 10010, msg: '认证失败, 令牌已失效' },
  INSUFFICIENT_PERMISSION: { status: 200, code: 10011, msg: '权限不足' },
  WECHAT_SERVICE_INTERFACE_ERROR: { status: 200, code: 10012, msg: '微信服务接口调用失败' },
  CAPTCHA_ERROR: { status: 200, code: 10013, msg: '验证码错误' },

  PRODUCT_NOT_FOUND: { status: 200, code: 20000, msg: '商品不存在' },
  THEME_NOT_FOUND: { status: 200, code: 30000, msg: '专题不存在' },

  BANNER_NOT_FOUND: { status: 200, code: 40000, msg: '幻灯片不存在' },

  CATEGORY_NOT_FOUND: { status: 200, code: 50000, msg: '商品类目不存在' },

  USER_NOT_FOUND: { status: 200, code: 60000, msg: '用户不存在' },
  USER_ADD_ERROR: { status: 200, code: 60001, msg: '添加用户失败' },
  USER_UPDATE_ERROR: { status: 200, code: 60002, msg: '更新用户失败' },
  USER_ADDERSS_NOT_FOUND: { status: 200, code: 60003, msg: '用户地址不存在' },
  USER_ADDERSS_ADD_ERROR: { status: 200, code: 60004, msg: '用户地址添加失败' },
  USER_ADDERSS_UPDATE_ERROR: { status: 200, code: 60005, msg: '用户地址更新失败' },
  USER_ADDERSS_IS_EXIST: { status: 200, code: 60006, msg: '添加失败，用户地址已存在' },

  ORDER_NOT_FOUND: { status: 200, code: 80000, msg: '订单不存在' },
  ORDER_PRODUCT_NOT_FOUND: { status: 200, code: 80001, msg: '下单失败，订单中的商品不存在，可能已被删除' },
  ORDER_ERROR_NOT_FOUND_USER_ADDRESS: { status: 200, code: 80002, msg: '下单失败，用户地址找不到' },
  ORDER_ERROR_PRODUCT_STOCK_INSUFFICIENT: { status: 200, code: 80003, msg: '下单失败，商品库存不足' },
  ORDER_NONPAYMENT_ATTEMPT_DELIVER_GOODS: { status: 200, code: 80004, msg: '订单还未支付，却尝试发货' },
  ORDER_ALREADY_PAID: { status: 200, code: 80006, msg: '订单已支付过' }
}

module.exports = ExceptionTypes
