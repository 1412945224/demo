// vue2 的响应式原理

/**
 *  @grammar  Object.defineProperty(obj, prop, descriptor)
 *
 *  @obj 要定义属性的对象。
 *
 *  @prop 要定义或修改的属性的名称或 Symbol 。
 *
 *  @descriptor 要定义或修改的属性描述符。
 *
 *  @return 被传递给函数的对象。
 *
 * */

// 对 vm 的 msg 进行数据劫持
function reactive(obj) {
  Object.defineProperty(obj, "msg", {
    // 获取数据
    get() {
      console.log("get");
      return data.msg;
    },
    // 设置 msg
    set(newValue) {
      console.log("set");
      // 如果传入的值相等就不用修改
      if (newValue === data.msg) return;
      // 修改数据
      data.msg = newValue;
    },
  });
}
// 模拟 Vue的data
let data = {
  msg: "",
};
// 模拟 Vue 实例
let vm = {};
reactive(vm);
vm.msg = "1234";
console.log(vm.msg);
