function formatName (firstName, lastName){
    return firstName + " " + lastName
}
function getGreeting(timeOfDay){
    if (timeOfDay === "morning"){
        return "Good Morning"
    }
    else if (timeOfDay === "afternoon"){
        return "Good Afternoon"
    }
    else {
        return "Good Evening"
    }
}
function createGreeting (firstName, lastName, timeOfDay){
    return getGreeting(timeOfDay)+" "+ formatName(firstName, lastName)
}
console.log(createGreeting('hung', 'nguyen', 'afternoon'))