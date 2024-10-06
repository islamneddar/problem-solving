// 10 min completion time

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null
    let current = head
    let last = null
    let next = head.next
    while(current){
        current.next = last
        last = current
        current = next
        if(next){
            next = next.next
        }
    }
    return last
};