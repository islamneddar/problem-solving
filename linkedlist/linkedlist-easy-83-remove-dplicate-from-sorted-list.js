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
var deleteDuplicates = function(head) {
    let dummy = {val : 0, next : null}
    let pointer1 = dummy
    let pointer2 = head
    currentValue = Infinity
    while(pointer1 !== null){
        if(pointer2 === null || pointer2.val !== currentValue){
            if(pointer2 !== null) {
                currentValue = pointer2.val
            }
            pointer1.next = pointer2
            pointer1 = pointer2
        }
        if(pointer1 !== null) {
            pointer2 = pointer2.next
        }
    }
    return dummy.next
};