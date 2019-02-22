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
    this.append = function (data) {
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
     * 获得指定位置的节点（辅助函数）
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
     * 在指定位置插入新节点
     */
    this.insert = function (index, data) {
        if (index < 0 || index > length) {
            return false;
        } 
        else if (index == length) {
            length += 1;
            return this.append(data);
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

    /**
     * 删除指定位置的节点,并返回被删除节点的值（data）
     */
    this.remove = function (index) {
        // 先考虑边界值,参数不合法,或者链表长度为0
        if (index < 0 || index >= length || !length) {
            return null;
        }
        var del_node = null;
        // 如果删除头元素
        if (index == 0) {
            del_node = head;
            head = head.next;
            // 如果只有一个节点
            if (!head.next) {
                tail = null;
            }
        } 
        else {
            // 找到index为index-1的节点
            var pre_node = _getNode(index - 1);
            del_node = pre_node.next;
            pre_node.next = pre_node.next.next;
            // 如果删除的是尾节点
            if (!del_node.next) {
                tail = pre_node;
            }
        }

        length -= 1;
        del_node.next = null;
        return del_node.data;
    }

    /**
     * 删除尾节点
     */
    this.remove_tail = function () {
        this.remove(length - 1);
    }

    /**
     * 删除头结点
     */
    this.remove_head = function () {
        this.remove(0);
    }

    /**
     * 获得指定位置节点的值
     */
    this.get = function (index) {
        var node = _getNode(index);
        if (node) {
            return node.data;
        }
        return null;
    }

    /**
     * 获得头节点值
     */
    this.head = function () {
        return this.get(0);
    }

    /**
     * 获得尾节点值
     */
    this.tail = function () {
        return this.get(length - 1);
    }

    /***
     * 返回指定节点的索引，如果没有则返回-1
     */
    this.indexOf = function (data) {
        var index = -1;
        var curr_node = head;
        while (curr_node) {
            index++;
            if (curr_node.data === data) {
                return index;
            } else {
                curr_node = curr_node.next;
            }
        }
        return -1;
    }

    /**
     * 输出链表(纯为了测试)
     */
    this.print = function () {
        var curr_node = head;
        var str_link = '';
        while (curr_node) {
            str_link += curr_node.data.toString() + '->';
            curr_node = curr_node.next;
        }
        str_link += 'null';
        console.log(str_link);
        console.log('长度为：', length);
    }

    /**
     * isEmpty 
     */
    this.isEmpty = function () {
        return length == 0;
    }

    /**
     * 清空链表
     */
    this.clear = function () {
        head = null;
        tail = null;
        length = 0;
    }
}

var link = new LinkList();
link.append('a');
link.append('b');
link.print();