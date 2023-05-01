function createEmployeeRecord(arr) {
    let employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employee;
}

// createEmployeeRecords
//Argument(s)
//Array of Arrays
//Returns
//Array of Objects
//Behavior
//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

function createEmployeeRecords(arr) {
    return arr.map(employeeArr => createEmployeeRecord(employeeArr));
}
function createTimeInEvent( dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
}

function createTimeOutEvent( dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
}



function hoursWorkedOnDate(date) {
    const timeInEvents = this.timeInEvents.find(e => e.date === date);
    const timeOutEvents = this.timeOutEvents.find(e => e.date === date);
  
    const hoursWorked = (timeOutEvents.hour - timeInEvents.hour) / 100;
  
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const payRate = this.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((acc, record) => {
        return acc + allWagesFor.call(record);
    }, 0);

    return totalPayroll;
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

