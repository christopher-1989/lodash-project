const _ = {
    clamp (number, lower, upper) {
        lowerClampedValue = Math.max(number, lower)
        clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue;
    },
    inRange (number, start, end) {
        if (!end) {
            end = start;
            start = 0;
        } 
        if (start > end && end < start) {
            const temp = end;
            end = start;
            start = temp;
        }
        if (number >= start && number < end) {
            return true
        } else {
            return false
        }
    
    },
    words (string) {
        //reduced functionality to actual lodash method
        const words = string.split(' ');
        return words;
    },
    pad (string, length) {
        if (string.length >= length) {
            return string
         } else {
            const startPaddingLength = Math.floor((length - string.length) / 2);
            const endPaddingLength = length - string.length - startPaddingLength;
            const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
            return paddedString;
         }
    },
    has (object, key) {
        const hasValue = object[key] ? true : false;
        return hasValue;
    },
    invert (object) {
        const invertedObject = {};
        for (keys in object) {
            const originalValue = object[keys];
            invertedObject[originalValue] = keys;
        }
        return invertedObject;
    },
    findKey (object, predicate) {
        for (key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key;
            }
        }
        return undefined;
    },
    drop (array, number) {
        if (!number) {
            number = 1;
        }
        const arrayCopy = array.slice(number);
        return arrayCopy;
    },
    dropWhile (array, predicate) {
        const dropNumber = array.findIndex(function (element, index) {
            return !predicate(element, index, array)
        })
        const newArray = _.drop(array, dropNumber);

        return newArray;
    },
    chunk (array, size) {
        if (!size) {
            size = 1;
        }
        const returnArray = [];
        for (let i = 0; i < array.length; i += size) {
            let start = i;
            let end = i + size;
            let spliced = array.slice(start, end);
            returnArray.push(spliced);
        }
        return returnArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;