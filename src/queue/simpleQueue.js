/**
 * @file  简单队列
 * @author  wucx
 */

function Queue () {
    /**
     * 存储队列的数据结构实际上是用了一个数组
     */
    var items = [];
    
    /**
     * 对数据的操作无非就是增、删、改、查
     * 任何数据结构，只有拥有了数据才可以进行删、改、查，所以，
     * 创建数据结构构造函数的时候首先要考虑的就是增加数据的方法
     * 
     * 向队尾添加元素（增）
     */
    this.enqueue = function (item) {
        items.push(item);
    }

    /**
     * 删除队首元素（删）
     */
    this.dequeue = function () {
        return items.shift();
    }

    /**
     * 返回队首元素
     */
    this.front = function () {
        return items[0];
    }

    /**
     * 返回队尾元素
     */
    this.end = function () {
        return items[items.length - 1];
    }

    /***
     * 返回队列长度
     */
    this.length = function () {
        return items.length;
    }

    /**
     * 判断队列是否为空
     */
    this.isEmpty = function () {
        return items.length == 0;
    }

    /**
     * 清空队列（删）
     */
    this.clear = function () {
        items = [];
    }

}
// var  queue = new Queue();
// queue.enqueue('a');
// console.log(queue.enqueue('b'));

exports.Queue = Queue;