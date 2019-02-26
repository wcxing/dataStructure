/**
 * Created by wucx on 2019/02/26
 * @file bitmap
 * @author wucx
 */

function  BitMap(size) {
    var bit_arr = new Array(size);
    for (var i = 0; i < bit_arr.length; i++) {
        bit_arr[i] = 0;
    }

    this.addMember = function (member) {
        var arr_index = Math.floor(member / 32); // 决定在数组中的索引
        var bit_index = member % 32;    // 决定在整数的32个bit上的那一位上
        bit_arr[arr_index] = bit_arr[arr_index] | 1 << bit_index;
    }

    this.isExist = function (member) {
        var arr_index = Math.floor(member / 32);
        var bit_index = member % 32;
        var value = bit_arr[arr_index] & 1 << bit_index;
        if (value != 0) {
            return true;
        }
        return false;
    }

}

exports.BitMap = BitMap;