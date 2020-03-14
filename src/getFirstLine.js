"use strict";
var temp = [
    {
        index: 0,
        name: 'ddd'
    },
    {
        index: 0,
        name: 'ddasd'
    },
    {
        index: 0,
        name: 'dasdasdsa'
    },
    {
        index: 0,
        name: '111'
    },
    {
        index: 1,
        name: 'ccc',
    },
    {
        index: 0,
        name: 'xxsss'
    }
];
var temp1 = [
    {
        index: 0,
        name: '111'
    },
    {
        index: 1,
        name: 'ccc'
    },
];
var temp2 = [];
// 可以传入4个参数  分别是 累计器、当前值、当前索引、处理的数组
// 累计器 如果没有提供初始值，则将使用数组中的第一个元素。
var reducer = function (accumulator, currentValue, currentIndex) {
    // 初始累计器是数组第一个元素
    if (!Array.isArray(accumulator)) {
        // 如果第一个和第二个元素的索引相同
        if (currentValue.index == accumulator.index) {
            return [accumulator, currentValue];
        }
        return [];
    }
    else {
        // 当前索引值等于累计器第一个元素的索引 并且 当前的元素索引等于累计器的长度
        if (currentValue.index == accumulator[0].index && currentIndex == accumulator.length) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }
};
function getLineFirst(data) {
    var temp = [];
    if (!data.length)
        return;
    temp = data.reduce(reducer);
}
getLineFirst(temp1);
