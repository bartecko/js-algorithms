function inArray(a1,a2){
    let result = [];
        a2.forEach(word => {
            let index = 0;
            while (index < a1.length) {
                if (word.includes(a1[index])) {
                    result.push(a1[index])
                    index++;
                }
                else {
                    index++;
                }
            }
        });

        return uniq(result);
        //to be honest I just copy paste this function
        function uniq(a) {
            return a.sort().filter(function(item, pos, ary) {
                return !pos || item != ary[pos - 1];
            })
        }
}

inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]);