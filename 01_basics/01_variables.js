const accountId = 142 // cant alter

// below are alterable
let accountEmail = "kaju@gmail.com"
var accountPassword = "1234" /*prefer not to use var
 because of the issue in block scope and functional scope*/
 
accountCity = "Jaipur" // possible and not preferred
let accountState;


// accountId = 2 // Not allowed

accountEmail = "bdbd@google.com"
accountPassword = "4456"
accountCity = "kanpur"

console.table([accountId, accountEmail,  accountPassword,    accountCity, accountState])

