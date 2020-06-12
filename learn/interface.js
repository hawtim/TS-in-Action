"use strict";
// 对象类型的接口
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++ // 只读属性不允许修改
    });
}
// 允许鸭式变形
var result = {
    data: [
        {
            id: 1, name: 'A', sex: 'male'
        },
        {
            id: 2, name: 'B', age: 10
        }
    ]
};
render(result);
var chars = ['A', 'B'];
