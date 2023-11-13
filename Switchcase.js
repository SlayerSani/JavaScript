//Monday - 7AM
//Tuesday - Thursday - 4AM
//Friday - 9AM
//Saturday - Sunday - 8AM


let day = "Holiday"

switch(day){
    case 'Monday': console.log("7AM");
    break;
    case 'Tuesday': console.log("4AM");
    break;
    case 'Wednesday': console.log("4AM");
    break;
    case 'Thursday': console.log("4AM");
    break;
    case 'Friday': console.log("9AM");
    break;
    case 'Saturday': console.log("8AM");
    break;
    case 'Sunday': console.log("8AM");
    break;
    default:
        console.log("7AM - WATCH VIDEOS")
}

console.log("bye...")