/**
 * Create by wucx on 2019/02/21
 * 定义一个链表
 */

function LinkList() {
    var Node = function (data) {
        this.data = data;
        this.next = null;
    }
    var length = 0;
    var head = null;
    var tail = null;

    /**
     * 添加新节点
     * @param {*} data 
     */
    this.apped = function (data) {
        var node = new Node(data);
        if (head==null) {
            head = node;
            tail = node;
        }
        else {
            tail.next = node;
            tail = node;
        }
        length+=1;
        return true;
    }

    /**
     * 返回列表大小
     */
    this.length = function () {
        return length;
    }

    /**
     * 获得指定位置的节点
     * @param {number|int} index
     */
    var _getNode = function (index) {
        // 先考虑边界值
        if (index < 0 || index >= length) {
            return null;
        }
        var curr_node = head;
        var node_index = index;
        while(node_index-- > 0) {
            curr_node = curr_node.next;
        }
        return curr_node;
    }

    /**
     * 在制定位置插入新节点
     */
    this.insert = function (index, data) {
        if (index < 0 || index > length) {
            return false;
        } 
        else if (index == length) {
            length += 1;
            return this.apped(data);
        }
        else {
            var new_node = new Node(data);
            if (index == 0) {
                new_node.next = head;
                head = new_node;
            } 
            else {
                var pre_node = _getNode(indexe - 1);
                new_node.next = pre_node.next;
                pre_node.next = new_node;
            }
            length+=1;
            return true;
        }
    }
}