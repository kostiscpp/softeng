"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/actorinfo",{

/***/ "./pages/actorinfo.tsx":
/*!*****************************!*\
  !*** ./pages/actorinfo.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ActorInfo = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const name = router.query.actor;\n    const [actor, setActor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        primary_name: \"\",\n        birth_year: 0,\n        death_year: 0,\n        biography: \"\",\n        image_url: \"\",\n        primary_profession: [],\n        known_for: [],\n        directs: [],\n        writes: [],\n        principals: []\n    });\n    const home = ()=>{\n        router.push(\"/homepage\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        try {\n            const fetchActor = async ()=>{\n                const response = await fetch(\"http://localhost:8080/api/actorInfo\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        actor: name\n                    })\n                });\n                const data = await response.json();\n                setActor(data);\n            };\n            fetchActor();\n        } catch (e) {\n            console.log(e);\n        }\n    }, [\n        actor\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-4fb440c411a4cca0\" + \" \" + \"max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-4fb440c411a4cca0\" + \" \" + \"top-bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: home,\n                            className: \"jsx-4fb440c411a4cca0\" + \" \" + \"top-left\",\n                            children: \"Ntuaflix\"\n                        }, void 0, false, {\n                            fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-4fb440c411a4cca0\" + \" \" + \"top-center\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"padding\"\n            }, void 0, false, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"bg-blue-200 shadow rounded-lg p-6 mb-6 flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4fb440c411a4cca0\" + \" \" + \"w-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: actor.image_url,\n                            alt: \"Photo of Person\",\n                            className: \"jsx-4fb440c411a4cca0\" + \" \" + \"rounded-lg shadow\"\n                        }, void 0, false, {\n                            fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4fb440c411a4cca0\" + \" \" + \"w-2/3 ml-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"text-2xl font-bold mb-1\",\n                                children: actor.primary_name\n                            }, void 0, false, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"text-sm text-gray-600 mb-1\",\n                                children: [\n                                    \"(\",\n                                    actor.primary_profession.join(\", \"),\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-4fb440c411a4cca0\",\n                                children: [\n                                    \"Life: \",\n                                    actor.birth_year,\n                                    \" - \",\n                                    actor.death_year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-4fb440c411a4cca0\",\n                                children: [\n                                    \"Biography: \",\n                                    actor.biography\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"padding\"\n            }, void 0, false, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\" + \" \" + \"bg-blue-200 rounded-lg py-3 px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-4fb440c411a4cca0\" + \" \" + \"text-3xl font-bold mb-4 text-center rounded-lg p-6\",\n                        children: \"Known For\"\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4fb440c411a4cca0\" + \" \" + \"rounded-lg p-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-4fb440c411a4cca0\" + \" \" + \"list-disc list-inside\",\n                            children: actor.known_for.map((title)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>find_movie(title),\n                                    className: \"jsx-4fb440c411a4cca0\" + \" \" + \"clickable\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4fb440c411a4cca0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: \"Known For:\"\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: actor.known_for.map((title)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"jsx-4fb440c411a4cca0\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: \"Directs\"\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: actor.directs.map((title)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"jsx-4fb440c411a4cca0\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: \"Writes\"\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: actor.writes.map((title)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"jsx-4fb440c411a4cca0\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-4fb440c411a4cca0\",\n                        children: \"Principal\"\n                    }, void 0, false, {\n                        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined),\n                    actor.principals.map((principal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-4fb440c411a4cca0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-4fb440c411a4cca0\",\n                                    children: principal.title\n                                }, void 0, false, {\n                                    fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-4fb440c411a4cca0\",\n                                    children: principal.category\n                                }, void 0, false, {\n                                    fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-4fb440c411a4cca0\",\n                                    children: principal.characters\n                                }, void 0, false, {\n                                    fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4fb440c411a4cca0\",\n                children: \".container.jsx-4fb440c411a4cca0{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f0f0f0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.top-bar.jsx-4fb440c411a4cca0{background-color:#0074d9;color:#fff;padding:10px;text-align:left;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;margin:0 auto}.top-left.jsx-4fb440c411a4cca0{-webkit-box-flex:0;-webkit-flex:0;-moz-box-flex:0;-ms-flex:0;flex:0;font-size:24px;cursor:pointer}.top-center.jsx-4fb440c411a4cca0{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:24px}.padding.jsx-4fb440c411a4cca0{padding-top:20px}.clickable.jsx-4fb440c411a4cca0{cursor:pointer}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/spyroslkv/Desktop/friendly-octo-waffle/client/pages/actorinfo.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ActorInfo, \"GO2C6unfh6Dz2Es0DH3+LqpR/3k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ActorInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActorInfo);\nvar _c;\n$RefreshReg$(_c, \"ActorInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVUsTUFBTSxDQUFDMkIsR0FBRyxDQUFDLENBQUNDLHNCQUNmLDhEQUFDQzs7MENBQUlEOzs7Ozs7Ozs7OztrQ0FHYiw4REFBQ047O2tDQUFHOzs7Ozs7b0JBRUhoQyxNQUFNVyxVQUFVLENBQUMwQixHQUFHLENBQUMsQ0FBQ0ksV0FBZ0JDLHNCQUNuQyw4REFBQ047Ozs4Q0FDRCw4REFBQ0c7OzhDQUFJRSxVQUFVSCxLQUFLOzs7Ozs7OENBQ3BCLDhEQUFDQzs7OENBQUlFLFVBQVVFLFFBQVE7Ozs7Ozs4Q0FDdkIsOERBQUNKOzs4Q0FBSUUsVUFBVUcsVUFBVTs7Ozs7OzsyQkFIaEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRDdCO0dBNUtNOUM7O1FBbUJhRCxrREFBU0E7OztLQW5CdEJDO0FBOEtOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjdG9yaW5mby50c3g/NGIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBBY3RvckluZm8gPSAoKSA9PiB7XG4gICAgaW50ZXJmYWNlIFByaW5jaXBhbCB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGNhdGVnb3J5OiBzdHJpbmc7XG4gICAgICAgIGNoYXJhY3RlcnM6IHN0cmluZ1tdO1xuICAgIH07XG4gICAgaW50ZXJmYWNlIEFjdG9yIHtcbiAgICAgICAgcHJpbWFyeV9uYW1lOiBzdHJpbmc7XG4gICAgICAgIGJpcnRoX3llYXI6IG51bWJlcjtcbiAgICAgICAgZGVhdGhfeWVhcjogbnVtYmVyO1xuICAgICAgICBiaW9ncmFwaHk6IHN0cmluZztcbiAgICAgICAgaW1hZ2VfdXJsOiBzdHJpbmc7XG4gICAgICAgIHByaW1hcnlfcHJvZmVzc2lvbjogc3RyaW5nW107XG4gICAgICAgIGtub3duX2Zvcjogc3RyaW5nW107XG4gICAgICAgIGRpcmVjdHM6IHN0cmluZ1tdO1xuICAgICAgICB3cml0ZXM6IHN0cmluZ1tdO1xuICAgICAgICBwcmluY2lwYWxzOiBQcmluY2lwYWxbXTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbmFtZSA9IHJvdXRlci5xdWVyeS5hY3RvcjtcblxuICAgIGNvbnN0IFthY3Rvciwgc2V0QWN0b3JdID0gdXNlU3RhdGU8QWN0b3I+KHtcbiAgICAgICAgcHJpbWFyeV9uYW1lOiAnJyxcbiAgICAgICAgYmlydGhfeWVhcjogMCxcbiAgICAgICAgZGVhdGhfeWVhcjogMCxcbiAgICAgICAgYmlvZ3JhcGh5OiAnJyxcbiAgICAgICAgaW1hZ2VfdXJsOiAnJyxcbiAgICAgICAgcHJpbWFyeV9wcm9mZXNzaW9uOiBbXSxcbiAgICAgICAga25vd25fZm9yOiBbXSxcbiAgICAgICAgZGlyZWN0czogW10sXG4gICAgICAgIHdyaXRlczogW10sXG4gICAgICAgIHByaW5jaXBhbHM6IFtdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9ob21lcGFnZScpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBmZXRjaEFjdG9yID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYWN0b3JJbmZvYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHthY3RvcjogbmFtZSB9KSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldEFjdG9yKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQWN0b3IoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSwgW2FjdG9yXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbGVmdFwiIG9uQ2xpY2s9e2hvbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTnR1YWZsaXhcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgc2hhZG93IHJvdW5kZWQtbGcgcC02IG1iLTYgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIEFzc3VtaW5nIG1vdmllSW5mby5wb3N0ZXJfdXJsIGlzIGEgdmFsaWQgaW1hZ2UgVVJMICovfVxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWN0b3IuaW1hZ2VfdXJsfSBhbHQ9XCJQaG90byBvZiBQZXJzb25cIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvd1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBtbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMVwiPnthY3Rvci5wcmltYXJ5X25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTFcIj4oe2FjdG9yLnByaW1hcnlfcHJvZmVzc2lvbi5qb2luKFwiLCBcIil9KTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGlmZToge2FjdG9yLmJpcnRoX3llYXJ9IC0ge2FjdG9yLmRlYXRoX3llYXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5CaW9ncmFwaHk6IHthY3Rvci5iaW9ncmFwaHl9PC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTIwMCByb3VuZGVkLWxnIHB5LTMgcHgtNFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlciByb3VuZGVkLWxnIHAtNlwiPktub3duIEZvcjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHAtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rvci5rbm93bl9mb3IubWFwKCh0aXRsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjbGlja2FibGUnIG9uQ2xpY2s9eygpID0+IGZpbmRfbW92aWUodGl0bGUpfT57dGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDI+S25vd24gRm9yOjwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7YWN0b3Iua25vd25fZm9yLm1hcCgodGl0bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57dGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDI+RGlyZWN0czwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7YWN0b3IuZGlyZWN0cy5tYXAoKHRpdGxlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3RpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGgyPldyaXRlczwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7YWN0b3Iud3JpdGVzLm1hcCgodGl0bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57dGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDI+UHJpbmNpcGFsPC9oMj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7YWN0b3IucHJpbmNpcGFscy5tYXAoKHByaW5jaXBhbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntwcmluY2lwYWwudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntwcmluY2lwYWwuY2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPntwcmluY2lwYWwuY2hhcmFjdGVyc308L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7IC8qIEJsdWUgY29sb3IgKi9cbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcC1sZWZ0IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZGRpbmd7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmNsaWNrYWJsZXtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdG9ySW5mbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkFjdG9ySW5mbyIsInJvdXRlciIsIm5hbWUiLCJxdWVyeSIsImFjdG9yIiwic2V0QWN0b3IiLCJwcmltYXJ5X25hbWUiLCJiaXJ0aF95ZWFyIiwiZGVhdGhfeWVhciIsImJpb2dyYXBoeSIsImltYWdlX3VybCIsInByaW1hcnlfcHJvZmVzc2lvbiIsImtub3duX2ZvciIsImRpcmVjdHMiLCJ3cml0ZXMiLCJwcmluY2lwYWxzIiwiaG9tZSIsInB1c2giLCJmZXRjaEFjdG9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJwIiwiam9pbiIsImgxIiwidWwiLCJtYXAiLCJ0aXRsZSIsImxpIiwiZmluZF9tb3ZpZSIsInByaW5jaXBhbCIsImluZGV4IiwiY2F0ZWdvcnkiLCJjaGFyYWN0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/actorinfo.tsx\n"));

/***/ })

});