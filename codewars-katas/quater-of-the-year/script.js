/* 
const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
        return 1;
    } else if (month >= 4 && month <= 6) {
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else {
        return 4; 
    }
}
*/

function quarterOf(month) {
    if (month >= 1 && month <= 3) {
        console.log('1st quarter');
    } else if (month >= 4 && month <= 6) {
        console.log('2nd quarter');
    } else if (month >= 7 && month <= 9) {
        console.log('3rd quarter');
    } else {
        console.log('4th quarter');
    }
}

quarterOf(5);
