function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        let remainder = string.slice(1, string.length)
        printString(remainder)
    }
}

function reverseString(string) {
    if (string.length < 2) {
        return string
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(string) {
    if (string.length < 2) {
        return true
    } else if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.substring(1, string.length - 1))
    } else {
        return false
    }
}

function addUpTo(arr, index) {
    return index ? arr[index] + addUpTo(arr, (index - 1)) : arr[index]
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, target) {
    if (arr.length > 0) {
        if (arr[0] === target) {
            return true
        } else {
            return includesNumber(arr.slice(1), target)
        }
    } else {
        return false
    }
}