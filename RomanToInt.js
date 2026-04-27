var romanToInt = function(s) {
    let value = {
        "I":1,
        "V":5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M":1000,
    }
    let result = 0
    for(let x = 0;x<s.length;x++){
        let current = value[s[x]]
        let next = value[s[x+1]]
        if(next>current){
            result-=current
        }else{
            result+=current
        }
    }
    return result


};
const myresult = romanToInt("XI")
console.log(myresult)