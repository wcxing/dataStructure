/**
 * Created by wucx on 2019/02/27.
 * @file    栈
 * @author  wucx
 */

function Stack() {
    var data = [];
    // 向栈中添加元素
    this.push = function (item) {
        data.push(item);
    }

    // 从栈中删除元素
    this.pop = function() {
        return data.pop();
    }

    // 访问栈顶元素
    this.top = function () {
        return  data[data.length - 1];
    }

    // 返回栈的大小
    this.size = function () {
        return data.length;
    }

    // 判断栈是否为空
    this.isEmpty = function () {
        return data.length === 0;
    }

    // 清空栈
    this.clear = function () {
        item = [];
    }
}