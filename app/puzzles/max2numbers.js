let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [1, 1, 2, 5, 5, 3, 3, 3, 4, 4]

function findLargestSumPair(arr) {
    if (arr.length < 2) {
        console.log("array size should be atleast 2..")
        return
    }

    // remove duplicates
    let uniqueArr = [...new Set(arr)]
    if (uniqueArr.length < 2) {
        console.log("unique array size should be atleast 2..")
        return
    }

    // loop each item and update max1/max2
    let max1 = uniqueArr[0], max2 = uniqueArr[1];
    for (let i = 2; i < arr.length; i++) {
        [max1, max2] = updateMax(max1, max2, uniqueArr[i])
    }

    return [max1, max2]
}

function updateMax(max1, max2, newItem) {
    switch (true) {
        case max1 < max2 && max2 < newItem:
            max1 = max2
            max2 = newItem
            break
        case max1 < newItem && newItem < max2:
            max1 = newItem
            break
    }

    return [max1, max2]
}

console.log("Array: ", arr1, "\n", "Answer:", findLargestSumPair(arr1))
console.log("Array: ", arr2, "\n", "Answer:", findLargestSumPair(arr2))
