// twoSum problem

var twoSum = function(nums, target) {
    let map = {}
    for(x=0;x<nums.length;x++){
        let need = target-nums[x]
        if(map[need] != undefined){
            return [map[need],x]
        }
        map[nums[x]] = x
    }
};


const result = twoSum([1,2,3,4,5],9)
console.log(result)