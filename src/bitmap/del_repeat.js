/**
 * Created by wucx on 2019/02/26.
 * @file del_repeat 数组去重
 * @author wucx
 */

const BitMap = require('./bitmap');

var arr_1 = [1, 3, 4, 5, 8, 4, 2, 6, 7, 8, 1, 4, 6, 9];

function del_repeat(arrList) {
    var max = -1;
    for (var i = 0; i < arr_1.length; i++) {
        if (arrList[i] > max) {
            max = arrList[i];
        }
    }

    var size = Math.ceil(max / 32);
    var bitmap = new BitMap.BitMap(size);
    var arr = [];

    for (var i = 0; i < arr_1.length; i++) {
        bitmap.addMember(arrList[i]);
    }

    for (var i = 0; i <= max; i++) {
        if (bitmap.isExist(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(del_repeat(arr_1));