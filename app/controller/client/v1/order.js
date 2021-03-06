const Controller = require('egg').Controller
const orderRule = require('../../../rules/order_rule')
const pagingRule = require('../../../rules/paging_rule')

class OrderController extends Controller {

  /**
   * 下单
   * @url /api/client/v1/order/placeOrder
   * @method POST
   * @header token
   * @params addressId 地址id
   * @params products 商品列表 [{ productId: 1, count: 1 }, { productId: 2, count: 1 }, ...]
   */
  async placeOrder() {
    const { ctx } = this
    const { addressId, products } = await ctx.validate(ctx.request.body, orderRule)
    const userId = ctx.helper.getUserId()
    const result = await ctx.service.order.placeOrder(userId, addressId, products)
    ctx.successResponse(result)
  }

  /**
   * 获取订单列表
   * @url /api/client/v1/order/getOrderList
   * @method GET
   * @header token
   * @params page
   * @params size
   */
  async getOrderList() {
    const { ctx } = this
    const { page, size } = await ctx.validate(ctx.request.query, pagingRule)
    const userId = ctx.helper.getUserId()
    const result = await ctx.service.order.findOrderList(userId, parseInt(page), parseInt(size))
    ctx.successResponse(result)
  }
}

module.exports = OrderController;
