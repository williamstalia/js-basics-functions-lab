function distanceFromHqInBlocks(blockNum) {
    if (blockNum > 42) {
        return blockNum - 42;}
            else { return 42 - blockNum; }
}

function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264
}

function distanceTravelledInFeet(start, finish){
    if (start > finish) {
        return (start - finish) * 264; }
            else { return (finish - start) * 264 }
}

function calculatesFarePrice(start, finish) {
    const totalDistance = distanceTravelledInFeet(start, finish)
    if (totalDistance <= 400) {
        return 0;}
        else if (totalDistance <= 2000) {
             return (totalDistance - 400) *.02 }
        else if (totalDistance > 2000 && totalDistance <= 2500) {
            return 25 }
            else { return "cannot travel that far" }
        }