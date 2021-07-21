




//206. 反转链表 https://leetcode-cn.com/problems/reverse-linked-list/

function reverseList(head) {
    let cur = head;
    let pre = null;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}




