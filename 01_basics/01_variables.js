const accountId = "12345"
let accountEmail = "shrikant@hp.com"
var accountPassword = "25689125"
accountCity = "Jaipur"

// accountId = "23456" //  not allowed

accountEmail = "divyansh@hp.com"
accountPassword ="123456789"
accountCity = "Delhi"

let accountState

console.log(accountId)
/*
Prefer not use var
because issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])