// We have a module That has a function that is called every second `someFunctionToBeCalledEverySec`
// and we want to call a checker function `doSomeCheck` to make sure, that everythinng is oK
//
// But doSomeCheck is a heavy function, and if we call it every sec, system will hang
// We want to call that function not earlier than 10 (queueCountCheckMinutes) minutes
//
// THE PROBLEM
// After runinng this for a day, we found that doSomeCheck functions is not beinng called 
// properly, and sometimes it's not being called for 7 hours in a raw.
//
// NOW TASK
//
// Please make sure that logic is correct, and if it is not. please tell what exactly.
// Sencod part of task. try to write test for this module!


const queueCountCheckMinutes = 10
let lastCheck = new Date()

const doSomeCheck = () => {
  // does some complex DB checks and send email if something is wrong.
  return true
}

const checkQueueCountAndSendMessage = () => {
   const checkDate = new Date()
 
   if (checkDate.getMinutes() - lastCheck.getMinutes() < queueCountCheckMinutes) {
     return
   }
 
   lastCheck = checkDate    
   doSomeCheck()
   return 
}



const someFunctionToBeCalledEverySec = () => {
    // DO some wired staff.
    // DO some more wired staff.

    // Call checker
    checkQueueCountAndSendMessage()
}

module.exports = {
    someFunctionToBeCalledEverySec
}
