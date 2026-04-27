/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";

    let prefix = ""
    for(let x=0;x<strs[0].length;x++){
        let char = strs[0][x]
        for(let j=0;j<strs.length;j++){
            if(strs[j][x] !== char){
                return prefix
            }
        }
        prefix +=char
    }
    return prefix
};

const result = longestCommonPrefix([""])
console.log(result)