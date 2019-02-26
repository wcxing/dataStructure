/**
 * Created by wucx on 2019/02/22
 * @file    队列应用
 * @author  wucx
 */


/**
 * 有一个数字a[1000],存放0~1000；要求每隔2个数字删掉一个数，
 * 到末尾时循环至开头继续执行，求最后一个被删掉的数的原始下标
 */

var Queue = require('./simpleQueue');

function del_ring(arr_list) {
    var queue = new Queue.Queue();
    // 把数据存入队列
    for (var i = 0, len = arr_list.length; i < len; i++) {
        queue.enqueue(arr_list[i]);
    }
    var index = -1;
    while(queue.length() != 1) {
        // 出队一个数据，判断是否需要删除
        var item = queue.dequeue();
        index += 1;
        
        if (index % 3 != 0) {
            queue.enqueue(item);
        }
    }
    return queue.front();
}

var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push(i);
}

console.log(del_ring(arr));
