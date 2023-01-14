/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let nodeCreate = (previous, value) =>  {
        return {
            'prev': previous,
            'value': value,
            'next' : null
        }
    }

    let head = nodeCreate(null, nums[0])

    const total = nums.length
    let node = head
    for (let d = 1; d < total; d++) {
        node.next = nodeCreate(node, nums[d])
        node = node.next
    }

    let tail = node

    let tail_aux = tail

    for (let i = 0; i < k ; i++) {
         if (tail_aux.prev != null && head.next != null) {
            let aux = Object.assign({}, tail_aux)

            tail_aux = aux.prev
            tail_aux.next = null

            head.prev = aux

            aux.next = head
            aux.prev = null

            head = aux
        }
    }

    let aux = head
    for (let i = 0; i < total; i++) {
        nums[i] = aux.value
        aux = aux.next
    }

    
};
