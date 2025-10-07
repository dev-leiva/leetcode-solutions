// Last updated: 10/6/2025, 11:13:54 PM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) return l2
    if (l2 === null) return l1
    
    const result = parseList(l1) + parseList(l2)
    return createList(result)

};

function parseList(list: ListNode | null, instance = 0, memorySum = 0): bigint {
    let multiplier = 1n
    let sum = 0n

    while (list) {
        sum += BigInt(list.val) * multiplier
        multiplier *= 10n
        list = list.next
    }

    return sum
}

function createList(result: bigint): ListNode {
    const str = result.toString()
    let head: ListNode | null = null
    
    for (let i = 0; i < str.length; i++){
        const node = new ListNode(Number(str[i]))
        node.next = head
        head = node
    }

    return head!
}