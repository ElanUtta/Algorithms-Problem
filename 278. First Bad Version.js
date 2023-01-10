var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {

        var start = 0

        var currentVersion = isBadVersion(n)
        while (!(currentVersion == false && isBadVersion(current + 1) == true)) {
            var current = Math.floor(((n + start) / 2))
            var currentVersion = isBadVersion(current)

            if (currentVersion) {
                n = current
            } else {
                start = current
            }  
        }
         return current + 1
    };
};
