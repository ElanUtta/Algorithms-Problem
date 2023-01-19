/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0

    let index2 = numbers.length - 1

    while (index2 != index1) {
        total = numbers[index1] + numbers[index2]

        if (total < target) {
            index1 += 1
        } else if (total > target) {
            index2 -= 1
        } else {
            return [index1 + 1, index2 + 1]
        }
    }
   
};
