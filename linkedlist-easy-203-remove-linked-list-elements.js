/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let target = head
    let lastNode = null
    while(target){
        let currentTarget = target
        let nextTarget = target.next
        if(currentTarget.val === val){
            if(lastNode === null){
                currentTarget = null
                head = nextTarget
            }else {lastNode.next = nextTarget}

        }else {lastNode = currentTarget}
        target = nextTarget
    }
    return head
};