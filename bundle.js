(() => {
    var __webpack_modules__ = {
        './src/hello.js': () => {
            eval(
                "moudule.exports = function sayHello() {\r\n    console.log('say hello');\r\n};\r\n\n\n//# sourceURL=webpack:///./src/hello.js?"
            );
        },
        './src/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            eval(
                "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello.js */ \"./src/hello.js\");\n/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass A {\r\n    constructor() {\r\n        this.name = 'Andy';\r\n    }\r\n    fn() {\r\n        console.log('hello', this.name);\r\n        (0,_hello_js__WEBPACK_IMPORTED_MODULE_0__.sayHello)();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?"
            );
        },
    }; // The module cache
    var __webpack_module_cache__ = {}; // The require function
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
        } // Create a new module (and put it into the cache)
        var module = (__webpack_module_cache__[moduleId] = {
            exports: {},
        }); // Execute the module function
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__); // Return the exports of the module
        return module.exports;
    } /* webpack/runtime/compat get default export */
    (() => {
        __webpack_require__.n = (module) => {
            var getter = module && module.__esModule ? () => module['default'] : () => module;
            __webpack_require__.d(getter, { a: getter });
            return getter;
        };
    })(); /* webpack/runtime/define property getters */
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                }
            }
        };
    })(); /* webpack/runtime/hasOwnProperty shorthand */
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })(); /* webpack/runtime/make namespace object */
    (() => {
        __webpack_require__.r = (exports) => {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
    })(); // startup // Load entry module
    __webpack_require__('./src/index.js');
})();
