/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar colors = ['#FFE146', '#6A1577'];\nvar languageIcons = ['/public/images/icons/javascript_icon_130900.png', '/public/images/icons/csharpicon.png'];\n\nfunction getDownloadLink(repoName) {\n  return \"https://codeload.github.com/gabeps2/\".concat(repoName, \"/zip/master\");\n}\n\nvar getBox = document.querySelector('#repositories');\nvar newBox = getBox.innerHTML;\n\nvar Api = /*#__PURE__*/function () {\n  function Api() {\n    _classCallCheck(this, Api);\n  }\n\n  _createClass(Api, null, [{\n    key: \"getUserInfo\",\n    value: function () {\n      var _getUserInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username) {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios.get(\"https://api.github.com/users/\".concat(username));\n\n              case 2:\n                response = _context.sent;\n                return _context.abrupt(\"return\", response);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getUserInfo(_x) {\n        return _getUserInfo.apply(this, arguments);\n      }\n\n      return getUserInfo;\n    }()\n  }, {\n    key: \"getRepoInfo\",\n    value: function () {\n      var _getRepoInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username) {\n        var repositoryData;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return axios.get(\" https://api.github.com/users/\".concat(username, \"/repos\"));\n\n              case 3:\n                repositoryData = _context2.sent;\n                return _context2.abrupt(\"return\", repositoryData);\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.warn('Algo deu errado!');\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 7]]);\n      }));\n\n      function getRepoInfo(_x2) {\n        return _getRepoInfo.apply(this, arguments);\n      }\n\n      return getRepoInfo;\n    }()\n  }]);\n\n  return Api;\n}();\n\nfunction getUserData() {\n  return _getUserData.apply(this, arguments);\n}\n\nfunction _getUserData() {\n  _getUserData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var userData, repoData, avatarImg, newImg, i, repoAtual, imgLanguages, dateDiv, nameDiv, downloadDiv, descriptionDiv, _newImg, _newImg2, newP, textName, newPDescription;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Api.getUserInfo('gabeps2');\n\n          case 2:\n            userData = _context3.sent;\n            _context3.next = 5;\n            return Api.getRepoInfo('gabeps2');\n\n          case 5:\n            repoData = _context3.sent;\n            avatarImg = document.querySelector('#avatar-img');\n            newImg = document.createElement('img');\n            newImg.setAttribute('src', repoData.data[0].owner.avatar_url);\n            avatarImg.appendChild(newImg);\n\n            for (i = 0; i < repoData.data.length; i++) {\n              repoAtual = document.querySelectorAll('.box')[i];\n              imgLanguages = document.querySelectorAll('.img-languages')[i];\n              dateDiv = document.querySelectorAll('.date')[i];\n              nameDiv = document.querySelectorAll('.repository-name')[i];\n              downloadDiv = document.querySelectorAll('.download')[i];\n              descriptionDiv = document.querySelectorAll('.description')[i];\n\n              if (repoData.data[i].language == \"C#\") {\n                //Definindo imagem e cor de fundo\n                _newImg = document.createElement('img');\n                document.querySelectorAll('.box')[i].style.backgroundColor = colors[1];\n\n                _newImg.setAttribute('src', languageIcons[1]);\n\n                imgLanguages.appendChild(_newImg);\n              } else if (repoData.data[i].language == \"JavaScript\") {\n                _newImg2 = document.createElement('img');\n                document.querySelectorAll('.box')[i].style.backgroundColor = colors[0];\n\n                _newImg2.setAttribute('src', languageIcons[0]);\n\n                imgLanguages.appendChild(_newImg2);\n              } //Definindo a data\n\n\n              newP = document.createElement('p');\n              newP.appendChild(document.createTextNode(repoData.data[i].created_at));\n              dateDiv.appendChild(newP); //Definindo o nome\n\n              textName = repoData.data[i].name;\n              nameDiv.appendChild(document.createTextNode(textName));\n              nameDiv.setAttribute('href', repoData.data[i].html_url);\n              nameDiv.setAttribute('target', '_blank'); //Definindo link para dowload\n\n              downloadDiv.setAttribute('href', getDownloadLink(textName)); //Definindo a descrição\n\n              newPDescription = document.createElement('p');\n              newPDescription.appendChild(document.createTextNode(repoData.data[i].description));\n              descriptionDiv.appendChild(newPDescription);\n\n              if (i < repoData.data.length - 2) {\n                getBox.innerHTML += newBox;\n              }\n\n              console.log(repoData);\n            }\n\n          case 11:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getUserData.apply(this, arguments);\n}\n\ngetUserData();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });