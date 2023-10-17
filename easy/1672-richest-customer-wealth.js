// https://leetcode.com/problems/richest-customer-wealth/description/

function maximumWealth(accounts) {
    let i = 0
    let maxWealth = 0
    for(i =0; i < accounts.length; i++){
        let j =0;
        let currentWealth = 0
        for(j=0; j< accounts[i].length; j++){
            currentWealth += accounts[i][j]
        }
        if(currentWealth > maxWealth){
            maxWealth = currentWealth
        }
    }
    return maxWealth
}