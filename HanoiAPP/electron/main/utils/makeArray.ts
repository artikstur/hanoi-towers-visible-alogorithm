export function makeArray(rings: string[], countOfRings: number) {
    const trueRings: number[][][] = [];


    const tempArray = []
    for (let i = countOfRings; i > 0; i--) {
        tempArray.push(i)
    }
    let idx = 1;
    const firstRingPositions: number[][] = [tempArray, new Array(countOfRings).fill(0), new Array(countOfRings).fill(0)]

    trueRings.push(firstRingPositions)

    for (const ring of rings) {
        const ringPositions: number[][] = JSON.parse(JSON.stringify(trueRings[idx-1]));
        const operations = ring.split(' ').map(e => Number(e))

        for (let i = 0; i < countOfRings; i++){
            if (trueRings[idx - 1][operations[2]][i] === 0){
                ringPositions[operations[2]][i] = operations[0]
                break
            }
        }

        for (let i = 0; i < countOfRings; i++){
            if (trueRings[idx - 1][operations[1]][i] === operations[0]){
                ringPositions[operations[1]][i] = 0
                break
            }
        }
        trueRings.push(ringPositions)
        idx += 1;
    }

    return trueRings
}


