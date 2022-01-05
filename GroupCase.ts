// group case in switch statement
let clickEvent = "Sep";
switch(clickEvent){
    case "Sep":
    case "Oct":
    case "Nov":
    case "Dec":
    case "Feb":
        console.log("It is Winter season");
    break;
    default:
        console.log("It is Summer Season");
    break;
}
// the output will be It is Winter season