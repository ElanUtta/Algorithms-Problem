/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash1 = {}
    let hash2 = {}
    nums.map(item => {
        if (hash1[item]) {
            delete hash1[item]
            hash2[item] = 1
        } else {
            hash1[item] = 1
        }
    })
    
    return Object.keys (hash1)[0]
};

