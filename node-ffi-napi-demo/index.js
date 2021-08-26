var ffi = require('ffi-napi');

let dll = ffi.Library('../MathLibrary/x64/Release/MathLibrary.dll', {
    'add': ['int', ['int', 'int']]
})
console.log('ffi.Library result:', dll);

let ret = dll.add(1, 2);
console.log(ret);

