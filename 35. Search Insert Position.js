/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var start = 0
    var end = Object.values(nums).length - 1

    do {

        var index = Math.floor((end + start) / 2)

        if (nums[index] == target) {
            break
        } else if (nums[index] > target || nums[index] == undefined) {
            if (nums[index - 1] !== undefined) {
                if (nums[index - 1] < target) {
                    break
                } else {
                    end = index
                }
            } else {
                if (nums[index] == undefined) {
                    end = index
                } else {
                    break
                }
            }
        } if (nums[index] < target) {
                if (nums[index + 1] !== undefined) {
                    if(nums[index + 1] < target) {
                        start = index + 1 || end
                    } else if (nums[index + 1] >= target){
                        index = index + 1
                        break
                    } else {
                        break 
                    }
                } else {
                    index = index + 1
                    break
                }
        }
    } while(true);

    return index
};
