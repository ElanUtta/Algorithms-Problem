/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = 0
    let hash = {}
    let bigger = 0

    nums.forEach((item) => {
        if (hash[item]) {
            hash[item] += 1
        } else {
            hash[item] = 1
        }
        if (bigger < hash[item]) {
            bigger = hash[item]
            n = item
        }
    })

    return n


};
