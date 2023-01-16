/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for (let d = nums.length - 1; d >= 0 ; d--) {
        if ( nums[d] == 0 ) {
            nums.push(...nums.splice(d, 1))
        }
    }
};
