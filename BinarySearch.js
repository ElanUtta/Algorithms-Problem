/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const end = Object.values(nums).length

    function getEqualNumber(nums, target, start, end){
        
        if ((end - start) == 0 || (end - start == 1)) {
            if (nums[start] === target) {
                return start
            } else if (nums[end] === target){
                return end
            } else {
                return -1
            }
        } else {
            const half = Math.floor(((end - start) / 2) + start)      
            if (nums[half] === target) {
                return half
            } else if (nums[half] < target){
                return getEqualNumber(nums, target, half, end)
            } else {
                return getEqualNumber(nums, target, start, half)
            }
        }
    }
        return getEqualNumber(nums, target, 0, end - 1)
    
    
};
