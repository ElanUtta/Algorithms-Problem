/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    new_list = []

    for ( var i = 0 ; i < nums.length;  i ++) {
        var square = nums[i] ** 2
        let s = 0, e = new_list.length;
        while(s < e) {
            var half = s + Math.floor((e - s) / 2)

            if (square > new_list[half]) {
                s = half + 1
            } else {
                e = half
            }
        }
        new_list.splice(s, 0, square)
    }
    return new_list
};
