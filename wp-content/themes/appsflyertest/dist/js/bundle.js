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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/validator/index.js":
/*!*****************************************!*\
  !*** ./node_modules/validator/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./lib/toDate */ "./node_modules/validator/lib/toDate.js"));

var _toFloat = _interopRequireDefault(__webpack_require__(/*! ./lib/toFloat */ "./node_modules/validator/lib/toFloat.js"));

var _toInt = _interopRequireDefault(__webpack_require__(/*! ./lib/toInt */ "./node_modules/validator/lib/toInt.js"));

var _toBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/toBoolean */ "./node_modules/validator/lib/toBoolean.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./lib/equals */ "./node_modules/validator/lib/equals.js"));

var _contains = _interopRequireDefault(__webpack_require__(/*! ./lib/contains */ "./node_modules/validator/lib/contains.js"));

var _matches = _interopRequireDefault(__webpack_require__(/*! ./lib/matches */ "./node_modules/validator/lib/matches.js"));

var _isEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmail */ "./node_modules/validator/lib/isEmail.js"));

var _isURL = _interopRequireDefault(__webpack_require__(/*! ./lib/isURL */ "./node_modules/validator/lib/isURL.js"));

var _isMACAddress = _interopRequireDefault(__webpack_require__(/*! ./lib/isMACAddress */ "./node_modules/validator/lib/isMACAddress.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./lib/isIP */ "./node_modules/validator/lib/isIP.js"));

var _isIPRange = _interopRequireDefault(__webpack_require__(/*! ./lib/isIPRange */ "./node_modules/validator/lib/isIPRange.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./lib/isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/isBoolean */ "./node_modules/validator/lib/isBoolean.js"));

var _isAlpha = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlpha */ "./node_modules/validator/lib/isAlpha.js"));

var _isAlphanumeric = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlphanumeric */ "./node_modules/validator/lib/isAlphanumeric.js"));

var _isNumeric = _interopRequireDefault(__webpack_require__(/*! ./lib/isNumeric */ "./node_modules/validator/lib/isNumeric.js"));

var _isPort = _interopRequireDefault(__webpack_require__(/*! ./lib/isPort */ "./node_modules/validator/lib/isPort.js"));

var _isLowercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isLowercase */ "./node_modules/validator/lib/isLowercase.js"));

var _isUppercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isUppercase */ "./node_modules/validator/lib/isUppercase.js"));

var _isAscii = _interopRequireDefault(__webpack_require__(/*! ./lib/isAscii */ "./node_modules/validator/lib/isAscii.js"));

var _isFullWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isFullWidth */ "./node_modules/validator/lib/isFullWidth.js"));

var _isHalfWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js"));

var _isVariableWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isVariableWidth */ "./node_modules/validator/lib/isVariableWidth.js"));

var _isMultibyte = _interopRequireDefault(__webpack_require__(/*! ./lib/isMultibyte */ "./node_modules/validator/lib/isMultibyte.js"));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__(/*! ./lib/isSurrogatePair */ "./node_modules/validator/lib/isSurrogatePair.js"));

var _isInt = _interopRequireDefault(__webpack_require__(/*! ./lib/isInt */ "./node_modules/validator/lib/isInt.js"));

var _isFloat = _interopRequireWildcard(__webpack_require__(/*! ./lib/isFloat */ "./node_modules/validator/lib/isFloat.js"));

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isDecimal */ "./node_modules/validator/lib/isDecimal.js"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js"));

var _isOctal = _interopRequireDefault(__webpack_require__(/*! ./lib/isOctal */ "./node_modules/validator/lib/isOctal.js"));

var _isDivisibleBy = _interopRequireDefault(__webpack_require__(/*! ./lib/isDivisibleBy */ "./node_modules/validator/lib/isDivisibleBy.js"));

var _isHexColor = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexColor */ "./node_modules/validator/lib/isHexColor.js"));

var _isISRC = _interopRequireDefault(__webpack_require__(/*! ./lib/isISRC */ "./node_modules/validator/lib/isISRC.js"));

var _isBIC = _interopRequireDefault(__webpack_require__(/*! ./lib/isBIC */ "./node_modules/validator/lib/isBIC.js"));

var _isMD = _interopRequireDefault(__webpack_require__(/*! ./lib/isMD5 */ "./node_modules/validator/lib/isMD5.js"));

var _isHash = _interopRequireDefault(__webpack_require__(/*! ./lib/isHash */ "./node_modules/validator/lib/isHash.js"));

var _isJWT = _interopRequireDefault(__webpack_require__(/*! ./lib/isJWT */ "./node_modules/validator/lib/isJWT.js"));

var _isJSON = _interopRequireDefault(__webpack_require__(/*! ./lib/isJSON */ "./node_modules/validator/lib/isJSON.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmpty */ "./node_modules/validator/lib/isEmpty.js"));

var _isLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isLength */ "./node_modules/validator/lib/isLength.js"));

var _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isByteLength */ "./node_modules/validator/lib/isByteLength.js"));

var _isUUID = _interopRequireDefault(__webpack_require__(/*! ./lib/isUUID */ "./node_modules/validator/lib/isUUID.js"));

var _isMongoId = _interopRequireDefault(__webpack_require__(/*! ./lib/isMongoId */ "./node_modules/validator/lib/isMongoId.js"));

var _isAfter = _interopRequireDefault(__webpack_require__(/*! ./lib/isAfter */ "./node_modules/validator/lib/isAfter.js"));

var _isBefore = _interopRequireDefault(__webpack_require__(/*! ./lib/isBefore */ "./node_modules/validator/lib/isBefore.js"));

var _isIn = _interopRequireDefault(__webpack_require__(/*! ./lib/isIn */ "./node_modules/validator/lib/isIn.js"));

var _isCreditCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isCreditCard */ "./node_modules/validator/lib/isCreditCard.js"));

var _isIdentityCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isIdentityCard */ "./node_modules/validator/lib/isIdentityCard.js"));

var _isISIN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISIN */ "./node_modules/validator/lib/isISIN.js"));

var _isISBN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISBN */ "./node_modules/validator/lib/isISBN.js"));

var _isISSN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISSN */ "./node_modules/validator/lib/isISSN.js"));

var _isMobilePhone = _interopRequireWildcard(__webpack_require__(/*! ./lib/isMobilePhone */ "./node_modules/validator/lib/isMobilePhone.js"));

var _isCurrency = _interopRequireDefault(__webpack_require__(/*! ./lib/isCurrency */ "./node_modules/validator/lib/isCurrency.js"));

var _isISO = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO8601 */ "./node_modules/validator/lib/isISO8601.js"));

var _isRFC = _interopRequireDefault(__webpack_require__(/*! ./lib/isRFC3339 */ "./node_modules/validator/lib/isRFC3339.js"));

var _isISO31661Alpha = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha2 */ "./node_modules/validator/lib/isISO31661Alpha2.js"));

var _isISO31661Alpha2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha3 */ "./node_modules/validator/lib/isISO31661Alpha3.js"));

var _isBase = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase32 */ "./node_modules/validator/lib/isBase32.js"));

var _isBase2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase64 */ "./node_modules/validator/lib/isBase64.js"));

var _isDataURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isDataURI */ "./node_modules/validator/lib/isDataURI.js"));

var _isMagnetURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isMagnetURI */ "./node_modules/validator/lib/isMagnetURI.js"));

var _isMimeType = _interopRequireDefault(__webpack_require__(/*! ./lib/isMimeType */ "./node_modules/validator/lib/isMimeType.js"));

var _isLatLong = _interopRequireDefault(__webpack_require__(/*! ./lib/isLatLong */ "./node_modules/validator/lib/isLatLong.js"));

var _isPostalCode = _interopRequireWildcard(__webpack_require__(/*! ./lib/isPostalCode */ "./node_modules/validator/lib/isPostalCode.js"));

var _ltrim = _interopRequireDefault(__webpack_require__(/*! ./lib/ltrim */ "./node_modules/validator/lib/ltrim.js"));

var _rtrim = _interopRequireDefault(__webpack_require__(/*! ./lib/rtrim */ "./node_modules/validator/lib/rtrim.js"));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./lib/trim */ "./node_modules/validator/lib/trim.js"));

var _escape = _interopRequireDefault(__webpack_require__(/*! ./lib/escape */ "./node_modules/validator/lib/escape.js"));

var _unescape = _interopRequireDefault(__webpack_require__(/*! ./lib/unescape */ "./node_modules/validator/lib/unescape.js"));

var _stripLow = _interopRequireDefault(__webpack_require__(/*! ./lib/stripLow */ "./node_modules/validator/lib/stripLow.js"));

var _whitelist = _interopRequireDefault(__webpack_require__(/*! ./lib/whitelist */ "./node_modules/validator/lib/whitelist.js"));

var _blacklist = _interopRequireDefault(__webpack_require__(/*! ./lib/blacklist */ "./node_modules/validator/lib/blacklist.js"));

var _isWhitelisted = _interopRequireDefault(__webpack_require__(/*! ./lib/isWhitelisted */ "./node_modules/validator/lib/isWhitelisted.js"));

var _normalizeEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/normalizeEmail */ "./node_modules/validator/lib/normalizeEmail.js"));

var _isSlug = _interopRequireDefault(__webpack_require__(/*! ./lib/isSlug */ "./node_modules/validator/lib/isSlug.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var version = '12.2.0';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isBIC: _isBIC.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isOctal: _isOctal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isBase32: _isBase.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString,
  isSlug: _isSlug.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/alpha.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/alpha.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  'fa-IR': /^['آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی']+$/i
};
exports.alpha = alpha;
var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[0-9א-ת]+$/,
  'fa-IR': /^['0-9آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی۱۲۳۴۵۶۷۸۹۰']+$/i
};
exports.alphanumeric = alphanumeric;
var decimal = {
  'en-US': '.',
  ar: '٫'
};
exports.decimal = decimal;
var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
exports.englishLocales = englishLocales;

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
} // Source: http://www.localeplanet.com/java/


var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
exports.arabicLocales = arabicLocales;

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
} // Source: https://en.wikipedia.org/wiki/Decimal_mark


var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
exports.dotDecimal = dotDecimal;
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];
exports.commaDecimal = commaDecimal;

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT']; // see #862

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];

/***/ }),

/***/ "./node_modules/validator/lib/blacklist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/blacklist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/contains.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function contains(str, elem) {
  (0, _assertString.default)(str);
  return str.indexOf((0, _toString.default)(elem)) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/equals.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/equals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function equals(str, comparison) {
  (0, _assertString.default)(str);
  return str === comparison;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/escape.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/escape.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function escape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isAfter.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAfter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original > comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isAlpha.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAlpha.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alpha);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isAlphanumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isAlphanumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alphanumeric);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isAscii.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAscii.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-control-regex */


var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBIC.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isBIC.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBIC;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

function isBIC(str) {
  (0, _assertString.default)(str);
  return isBICReg.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBase32.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase32.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase32;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var base32 = /^[A-Z2-7]+=*$/;

function isBase32(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBase64.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase64.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBefore.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBefore.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isBoolean(str) {
  (0, _assertString.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* eslint-disable prefer-rest-params */


function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isCreditCard.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isCreditCard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable max-len */


var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isCurrency.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isCurrency.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function currencyRegex(options) {
  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
  });
  var symbol = "(\\".concat(options.symbol.replace(/\./g, '\\.'), ")").concat(options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


  if (options.allow_negative_sign_placeholder) {
    pattern = "( (?!\\-))?".concat(pattern);
  } else if (options.allow_space_after_symbol) {
    pattern = " ?".concat(pattern);
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  } // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space


  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDataURI.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDataURI.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');

  if (data.length < 2) {
    return false;
  }

  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();

  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }

  var mediaType = schemeAndMediaType.substr(5);

  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }

  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDecimal.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDecimal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);

  if (options.locale in _alpha.decimal) {
    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isDivisibleBy.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isDivisibleBy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toFloat = _interopRequireDefault(__webpack_require__(/*! ./toFloat */ "./node_modules/validator/lib/toFloat.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isDivisibleBy(str, num) {
  (0, _assertString.default)(str);
  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

var _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ "./node_modules/validator/lib/isByteLength.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */

function validateDisplayName(display_name) {
  var trim_quotes = display_name.match(/^"(.+)"$/i);
  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid

  if (!display_name_without_quotes.trim()) {
    return false;
  } // check whether display name contains illegal character


  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (!trim_quotes) {
      return false;
    } // the quotes in display name must start with character symbol \


    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

    if (!all_start_with_back_slash) {
      return false;
    }
  }

  return true;
}

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);

    if (display_email) {
      var display_name;

      var _display_email = _slicedToArray(display_email, 3);

      display_name = _display_email[1];
      str = _display_email[2]; // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space

      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }

  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {
    if (!pattern.test(user_parts[_i2])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isEmpty.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmpty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var locales = Object.keys(_alpha.decimal);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isFullWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isFullWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;

function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHalfWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isHalfWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;

function isHalfWidth(str) {
  (0, _assertString.default)(str);
  return halfWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHash.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isHash.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isHexColor.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isHexColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

function isHexColor(str) {
  (0, _assertString.default)(str);
  return hexcolor.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isHexadecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isHexadecimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */


var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var addressAndZone = [str]; // ipv6 addresses could have scoped architecture
    // according to https://tools.ietf.org/html/rfc4007#section-11

    if (str.includes('%')) {
      addressAndZone = str.split('%');

      if (addressAndZone.length !== 2) {
        // it must be just two parts
        return false;
      }

      if (!addressAndZone[0].includes(':')) {
        // the first part must be the address
        return false;
      }

      if (addressAndZone[1] === '') {
        // the second part must not be empty
        return false;
      }
    }

    var blocks = addressAndZone[0].split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIPRange.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isIPRange.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString.default)(str);
  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  } // Disallow preceding 0 i.e. 01, 02, ...


  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISBN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISBN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }

  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i;

  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }

    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }

    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }

    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISIN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISIN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString.default)(str);

  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble = true;

  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha2.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2


var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha3.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha3.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha3;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ "./node_modules/validator/lib/util/includes.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3


var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISO8601.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isISO8601.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable max-len */
// from http://goo.gl/0ejHHW


var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str, options) {
  (0, _assertString.default)(str);
  var check = iso8601.test(str);
  if (!options) return check;
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISRC.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISRC.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // see http://isrc.ifpi.org/en/isrc-standard/code-syntax


var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isISSN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISSN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

  if (!testIssn.test(str)) {
    return false;
  }

  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;

  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }

  return checksum % 11 === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIdentityCard.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isIdentityCard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIdentityCard;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var validators = {
  ES: function ES(str) {
    (0, _assertString.default)(str);
    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    var sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
      return charsValue[char];
    });
    return sanitized.endsWith(controlDigits[number % 23]);
  },
  'he-IL': function heIL(str) {
    var DNI = /^\d{9}$/; // sanitize user input

    var sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    var id = sanitized;
    var sum = 0,
        incNum;

    for (var i = 0; i < id.length; i++) {
      incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2

      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
    }

    return sum % 10 === 0;
  },
  'zh-TW': function zhTW(str) {
    var ALPHABET_CODES = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 34,
      J: 18,
      K: 19,
      L: 20,
      M: 21,
      N: 22,
      O: 35,
      P: 23,
      Q: 24,
      R: 25,
      S: 26,
      T: 27,
      U: 28,
      V: 29,
      W: 32,
      X: 30,
      Y: 31,
      Z: 33
    };
    var sanitized = str.trim().toUpperCase();
    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
    return Array.from(sanitized).reduce(function (sum, number, index) {
      if (index === 0) {
        var code = ALPHABET_CODES[number];
        return code % 10 * 9 + Math.floor(code / 10);
      }

      if (index === 9) {
        return (10 - sum % 10 - Number(number)) % 10 === 0;
      }

      return sum + Number(number) * (9 - index);
    }, 0);
  }
};

function isIdentityCard(str, locale) {
  (0, _assertString.default)(str);

  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (var key in validators) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (validators.hasOwnProperty(key)) {
        var validator = validators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIn.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIn;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isIn(str, options) {
  (0, _assertString.default)(str);
  var i;

  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];

    for (i in options) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString.default)(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (_typeof(options) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isJSON.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isJSON(str) {
  (0, _assertString.default)(str);

  try {
    var obj = JSON.parse(str);
    return !!obj && _typeof(obj) === 'object';
  } catch (e) {
    /* ignore */
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isJWT.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isJWT.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

function isJWT(str) {
  (0, _assertString.default)(str);
  return jwt.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLatLong.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isLatLong.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

function _default(str) {
  (0, _assertString.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;
  return lat.test(pair[0]) && long.test(pair[1]);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLength.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isLength.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLength;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* eslint-disable prefer-rest-params */


function isLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }

  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isLowercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isLowercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isLowercase(str) {
  (0, _assertString.default)(str);
  return str === str.toLowerCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMACAddress.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isMACAddress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;
var macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str) || macAddressWithHyphen.test(str) || macAddressWithSpaces.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMD5.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isMD5.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMagnetURI.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMagnetURI.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString.default)(url);
  return magnetURI.test(url.trim());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMimeType.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isMimeType.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/
// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).


var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"

var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"

var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMobilePhone.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isMobilePhone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable max-len */


var phones = {
  'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-GG': /^(\+?44|0)1481\d{6}$/,
  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
  'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  'en-MU': /^(\+?230|0)?\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'es-PA': /^(\+?507)\d{7,8}$/,
  'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
  'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
  'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
  'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'ne-NP': /^(\+?977)?9[78]\d{8}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nl-NL': /^(\+?31|0)6?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */
// aliases

phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];
phones['zh-MO'] = phones['en-MO'];

function isMobilePhone(str, locale, options) {
  (0, _assertString.default)(str);

  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }

  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }

      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str); // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      // istanbul ignore else
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(phones);
exports.locales = locales;

/***/ }),

/***/ "./node_modules/validator/lib/isMongoId.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isMongoId.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isMultibyte.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMultibyte.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-control-regex */


var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString.default)(str);
  return multibyte.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isNumeric.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isNumeric.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return numeric.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isOctal.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isOctal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOctal;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var octal = /^(0o)?[0-7]+$/i;

function isOctal(str) {
  (0, _assertString.default)(str);
  return octal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isPort.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isPort.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = _interopRequireDefault(__webpack_require__(/*! ./isInt */ "./node_modules/validator/lib/isInt.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isPort(str) {
  return (0, _isInt.default)(str, {
    min: 0,
    max: 65535
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isPostalCode.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isPostalCode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // common patterns


var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  BR: /^\d{5}-\d{3}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  ID: fiveDigit,
  IE: /^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,
  IL: fiveDigit,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  NZ: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function _default(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

/***/ }),

/***/ "./node_modules/validator/lib/isRFC3339.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isRFC3339.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */


var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

function isRFC3339(str) {
  (0, _assertString.default)(str);
  return rfc3339.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isSlug.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isSlug.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSlug;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var charsetRegex = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

function isSlug(str) {
  (0, _assertString.default)(str);
  return charsetRegex.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isSurrogatePair.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isSurrogatePair.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed

*/


var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isUUID.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isUUID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  (0, _assertString.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isUppercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isUppercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isUppercase(str) {
  (0, _assertString.default)(str);
  return str === str.toUpperCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isVariableWidth.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isVariableWidth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isFullWidth = __webpack_require__(/*! ./isFullWidth */ "./node_modules/validator/lib/isFullWidth.js");

var _isHalfWidth = __webpack_require__(/*! ./isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isWhitelisted.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isWhitelisted.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isWhitelisted(str, chars) {
  (0, _assertString.default)(str);

  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/ltrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/ltrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ltrim(str, chars) {
  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

  var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+"), 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/matches.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/matches.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function matches(str, pattern, modifiers) {
  (0, _assertString.default)(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/normalizeEmail.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/normalizeEmail.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,
  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,
  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,
  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,
  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,
  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
}; // List of domains used by iCloud

var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
// This list is likely incomplete

var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }

  return '';
}

function normalizeEmail(email, options) {
  options = (0, _merge.default)(options, default_normalize_email_options);
  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }

  return parts.join('@');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/rtrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/rtrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function rtrim(str, chars) {
  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

  var pattern = chars ? new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g') : /\s+$/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/stripLow.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/stripLow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _blacklist = _interopRequireDefault(__webpack_require__(/*! ./blacklist */ "./node_modules/validator/lib/blacklist.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/toBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || str === 'true';
  }

  return str !== '0' && str !== 'false' && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toDate.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/toDate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function toDate(date) {
  (0, _assertString.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/toFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _isFloat = _interopRequireDefault(__webpack_require__(/*! ./isFloat */ "./node_modules/validator/lib/isFloat.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function toFloat(str) {
  if (!(0, _isFloat.default)(str)) return NaN;
  return parseFloat(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/toInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/toInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function toInt(str, radix) {
  (0, _assertString.default)(str);
  return parseInt(str, radix || 10);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/trim.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/trim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(__webpack_require__(/*! ./rtrim */ "./node_modules/validator/lib/rtrim.js"));

var _ltrim = _interopRequireDefault(__webpack_require__(/*! ./ltrim */ "./node_modules/validator/lib/ltrim.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/unescape.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/unescape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/includes.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/includes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function toString(input) {
  if (_typeof(input) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/whitelist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/whitelist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function whitelist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_demo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/demo-form */ "./src/js/components/demo-form.js");
/* harmony import */ var _components_lp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lp */ "./src/js/components/lp.js");
/* harmony import */ var _components_lp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_lp__WEBPACK_IMPORTED_MODULE_1__);


console.log('bundle');

/***/ }),

/***/ "./src/js/components/demo-form.js":
/*!****************************************!*\
  !*** ./src/js/components/demo-form.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);

var langList = ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'];

var checkValidator = function checkValidator(type, value) {
  switch (type) {
    case 'string':
      for (var index = 0; index < langList.length; index++) {
        if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isAlphanumeric(value.replace(/\s/g, ''), langList[index])) {
          return true;
        }
      }

      return false;

    case 'name':
      for (var _index = 0; _index < langList.length; _index++) {
        if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isAlpha(value.replace(/\s/g, ''), langList[_index])) {
          return true;
        }
      }

      return false;

    case 'email':
      return !!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    case 'tel':
      return !!value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/) && value.length > 5;

    case 'url':
      return !!value.match(/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/);

    case 'check':
      return value;

    default:
      return true;
  }
};

jQuery(document).ready(function ($) {
  $('.typing input').click(function (e) {
    $(e.target).parent().find('.typing-area').fadeOut(100);
  });
  $('.typing-area').click(function (e) {
    $(e.target).fadeOut(100);
    $(e.target).parent().find('input').focus();
  });

  var uiValidator = function uiValidator(element, isvalid) {
    if (isvalid) {
      $(element).removeClass('alert-danger');
      return true;
    } else {
      $(element).addClass('alert-danger');
      return false;
    }
  };

  var isFiledValid = function isFiledValid(element) {
    var fieldType = $(element).attr('data-validator');
    var fieldText = element.value.trim();
    var isvalid = checkValidator(fieldType, fieldText);
    return uiValidator(element, isvalid);
  };

  $('#demo-user-form #agree').change(function (e) {
    if ($(e.target).attr('checked')) {
      $(e.target).val('TRUE');
    } else {
      $(e.target).val('');
    }

    isFiledValid(e.target);
  });
  $('#demo-user-form input').keyup(function (e) {
    isFiledValid(e.target);
  });
  $("#event_demo_api").on("submit", function (e) {
    e.preventDefault();
    var formPassVaildation = true;
    $(e.target).find('input').each(function (index, element) {
      var inputPassVaildation = isFiledValid(element);

      if (!inputPassVaildation) {
        formPassVaildation = false;
      }
    });

    if (formPassVaildation) {
      var formData = $(e.target).serialize();
      debugger;
      $('.loader-div').css("display", "flex").hide().fadeIn(100);
      $.ajax({
        url: wp_global.ajax_url,
        type: 'POST',
        dataType: "json",
        data: {
          action: 'demo_hook',
          form_data: formData
        },
        success: function success(resp) {
          if (resp.success) {
            console.log('success: ' + resp.data);
            $('.loader-div').css('display', 'none');
            $('#confirm_msg').css("display", "flex").hide().fadeIn();
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          alert('Request failed: ' + resp.data);
          $('.loader-div').css('display', 'none');
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/js/components/lp.js":
/*!*********************************!*\
  !*** ./src/js/components/lp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ibGFja2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvZXF1YWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FmdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBbHBoYW51bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBc2NpaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0JJQy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jhc2UzMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNCeXRlTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQ3JlZGl0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0N1cnJlbmN5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRGF0YVVSSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0RlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEaXZpc2libGVCeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNGUUROLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNGdWxsV2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNIYWxmV2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNIYXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGV4Q29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNIZXhhZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lQLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVBSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTQk4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU0lOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNPMzE2NjFBbHBoYTIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU08zMTY2MUFscGhhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTTzg2MDEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU1JDLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNTTi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lkZW50aXR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0pXVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0xhdExvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMb3dlcmNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNQUNBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTUQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTWFnbmV0VVJJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTWltZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNb2JpbGVQaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01vbmdvSWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzT2N0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNQb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzUG9zdGFsQ29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1JGQzMzMzkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNTbHVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU3Vycm9nYXRlUGFpci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1VSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1VVSUQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVcHBlcmNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNWYXJpYWJsZVdpZHRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzV2hpdGVsaXN0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbHRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ub3JtYWxpemVFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ydHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9zdHJpcExvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90b0Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9EYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3RvRmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9JbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91bmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL2Fzc2VydFN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL2luY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi93aGl0ZWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZW1vLWZvcm0uanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfdG9EYXRlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdG9GbG9hdCIsIl90b0ludCIsIl90b0Jvb2xlYW4iLCJfZXF1YWxzIiwiX2NvbnRhaW5zIiwiX21hdGNoZXMiLCJfaXNFbWFpbCIsIl9pc1VSTCIsIl9pc01BQ0FkZHJlc3MiLCJfaXNJUCIsIl9pc0lQUmFuZ2UiLCJfaXNGUUROIiwiX2lzQm9vbGVhbiIsIl9pc0FscGhhIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfaXNBbHBoYW51bWVyaWMiLCJfaXNOdW1lcmljIiwiX2lzUG9ydCIsIl9pc0xvd2VyY2FzZSIsIl9pc1VwcGVyY2FzZSIsIl9pc0FzY2lpIiwiX2lzRnVsbFdpZHRoIiwiX2lzSGFsZldpZHRoIiwiX2lzVmFyaWFibGVXaWR0aCIsIl9pc011bHRpYnl0ZSIsIl9pc1N1cnJvZ2F0ZVBhaXIiLCJfaXNJbnQiLCJfaXNGbG9hdCIsIl9pc0RlY2ltYWwiLCJfaXNIZXhhZGVjaW1hbCIsIl9pc09jdGFsIiwiX2lzRGl2aXNpYmxlQnkiLCJfaXNIZXhDb2xvciIsIl9pc0lTUkMiLCJfaXNCSUMiLCJfaXNNRCIsIl9pc0hhc2giLCJfaXNKV1QiLCJfaXNKU09OIiwiX2lzRW1wdHkiLCJfaXNMZW5ndGgiLCJfaXNCeXRlTGVuZ3RoIiwiX2lzVVVJRCIsIl9pc01vbmdvSWQiLCJfaXNBZnRlciIsIl9pc0JlZm9yZSIsIl9pc0luIiwiX2lzQ3JlZGl0Q2FyZCIsIl9pc0lkZW50aXR5Q2FyZCIsIl9pc0lTSU4iLCJfaXNJU0JOIiwiX2lzSVNTTiIsIl9pc01vYmlsZVBob25lIiwiX2lzQ3VycmVuY3kiLCJfaXNJU08iLCJfaXNSRkMiLCJfaXNJU08zMTY2MUFscGhhIiwiX2lzSVNPMzE2NjFBbHBoYTIiLCJfaXNCYXNlIiwiX2lzQmFzZTIiLCJfaXNEYXRhVVJJIiwiX2lzTWFnbmV0VVJJIiwiX2lzTWltZVR5cGUiLCJfaXNMYXRMb25nIiwiX2lzUG9zdGFsQ29kZSIsIl9sdHJpbSIsIl9ydHJpbSIsIl90cmltIiwiX2VzY2FwZSIsIl91bmVzY2FwZSIsIl9zdHJpcExvdyIsIl93aGl0ZWxpc3QiLCJfYmxhY2tsaXN0IiwiX2lzV2hpdGVsaXN0ZWQiLCJfbm9ybWFsaXplRW1haWwiLCJfaXNTbHVnIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiX19lc01vZHVsZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJ2ZXJzaW9uIiwidmFsaWRhdG9yIiwidG9EYXRlIiwidG9GbG9hdCIsInRvSW50IiwidG9Cb29sZWFuIiwiZXF1YWxzIiwiY29udGFpbnMiLCJtYXRjaGVzIiwiaXNFbWFpbCIsImlzVVJMIiwiaXNNQUNBZGRyZXNzIiwiaXNJUCIsImlzSVBSYW5nZSIsImlzRlFETiIsImlzQm9vbGVhbiIsImlzQklDIiwiaXNBbHBoYSIsImlzQWxwaGFMb2NhbGVzIiwibG9jYWxlcyIsImlzQWxwaGFudW1lcmljIiwiaXNBbHBoYW51bWVyaWNMb2NhbGVzIiwiaXNOdW1lcmljIiwiaXNQb3J0IiwiaXNMb3dlcmNhc2UiLCJpc1VwcGVyY2FzZSIsImlzQXNjaWkiLCJpc0Z1bGxXaWR0aCIsImlzSGFsZldpZHRoIiwiaXNWYXJpYWJsZVdpZHRoIiwiaXNNdWx0aWJ5dGUiLCJpc1N1cnJvZ2F0ZVBhaXIiLCJpc0ludCIsImlzRmxvYXQiLCJpc0Zsb2F0TG9jYWxlcyIsImlzRGVjaW1hbCIsImlzSGV4YWRlY2ltYWwiLCJpc09jdGFsIiwiaXNEaXZpc2libGVCeSIsImlzSGV4Q29sb3IiLCJpc0lTUkMiLCJpc01ENSIsImlzSGFzaCIsImlzSldUIiwiaXNKU09OIiwiaXNFbXB0eSIsImlzTGVuZ3RoIiwiaXNCeXRlTGVuZ3RoIiwiaXNVVUlEIiwiaXNNb25nb0lkIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiaXNJbiIsImlzQ3JlZGl0Q2FyZCIsImlzSWRlbnRpdHlDYXJkIiwiaXNJU0lOIiwiaXNJU0JOIiwiaXNJU1NOIiwiaXNNb2JpbGVQaG9uZSIsImlzTW9iaWxlUGhvbmVMb2NhbGVzIiwiaXNQb3N0YWxDb2RlIiwiaXNQb3N0YWxDb2RlTG9jYWxlcyIsImlzQ3VycmVuY3kiLCJpc0lTTzg2MDEiLCJpc1JGQzMzMzkiLCJpc0lTTzMxNjYxQWxwaGEyIiwiaXNJU08zMTY2MUFscGhhMyIsImlzQmFzZTMyIiwiaXNCYXNlNjQiLCJpc0RhdGFVUkkiLCJpc01hZ25ldFVSSSIsImlzTWltZVR5cGUiLCJpc0xhdExvbmciLCJsdHJpbSIsInJ0cmltIiwidHJpbSIsImVzY2FwZSIsInVuZXNjYXBlIiwic3RyaXBMb3ciLCJ3aGl0ZWxpc3QiLCJibGFja2xpc3QiLCJpc1doaXRlbGlzdGVkIiwibm9ybWFsaXplRW1haWwiLCJ0b1N0cmluZyIsImlzU2x1ZyIsIl9kZWZhdWx0IiwibW9kdWxlIiwiY29tbWFEZWNpbWFsIiwiZG90RGVjaW1hbCIsImFyYWJpY0xvY2FsZXMiLCJlbmdsaXNoTG9jYWxlcyIsImRlY2ltYWwiLCJhbHBoYW51bWVyaWMiLCJhbHBoYSIsImFyIiwiaGUiLCJsb2NhbGUiLCJpIiwibGVuZ3RoIiwiY29uY2F0IiwiX2xvY2FsZSIsIl9pIiwiX2kyIiwiX2kzIiwiX2Fzc2VydFN0cmluZyIsInN0ciIsImNoYXJzIiwicmVwbGFjZSIsIlJlZ0V4cCIsIl90b1N0cmluZyIsImVsZW0iLCJpbmRleE9mIiwiY29tcGFyaXNvbiIsImRhdGUiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJEYXRlIiwib3JpZ2luYWwiLCJfYWxwaGEiLCJ0ZXN0IiwiRXJyb3IiLCJrZXlzIiwiYXNjaWkiLCJpc0JJQ1JlZyIsImJhc2UzMiIsImxlbiIsIm5vdEJhc2U2NCIsImZpcnN0UGFkZGluZ0NoYXIiLCJvcHRpb25zIiwibWluIiwibWF4IiwiZW5jb2RlVVJJIiwic3BsaXQiLCJjcmVkaXRDYXJkIiwic2FuaXRpemVkIiwic3VtIiwiZGlnaXQiLCJ0bXBOdW0iLCJzaG91bGREb3VibGUiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsIl9tZXJnZSIsImN1cnJlbmN5UmVnZXgiLCJkZWNpbWFsX2RpZ2l0cyIsImRpZ2l0c19hZnRlcl9kZWNpbWFsIiwiZm9yRWFjaCIsImluZGV4Iiwic3ltYm9sIiwicmVxdWlyZV9zeW1ib2wiLCJuZWdhdGl2ZSIsIndob2xlX2RvbGxhcl9hbW91bnRfd2l0aG91dF9zZXAiLCJ3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhfc2VwIiwidGhvdXNhbmRzX3NlcGFyYXRvciIsInZhbGlkX3dob2xlX2RvbGxhcl9hbW91bnRzIiwid2hvbGVfZG9sbGFyX2Ftb3VudCIsImpvaW4iLCJkZWNpbWFsX2Ftb3VudCIsImRlY2ltYWxfc2VwYXJhdG9yIiwicmVxdWlyZV9kZWNpbWFsIiwicGF0dGVybiIsImFsbG93X2RlY2ltYWwiLCJhbGxvd19uZWdhdGl2ZXMiLCJwYXJlbnNfZm9yX25lZ2F0aXZlcyIsIm5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzIiwibmVnYXRpdmVfc2lnbl9iZWZvcmVfZGlnaXRzIiwiYWxsb3dfbmVnYXRpdmVfc2lnbl9wbGFjZWhvbGRlciIsImFsbG93X3NwYWNlX2FmdGVyX3N5bWJvbCIsImFsbG93X3NwYWNlX2FmdGVyX2RpZ2l0cyIsInN5bWJvbF9hZnRlcl9kaWdpdHMiLCJkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMiLCJ2YWxpZE1lZGlhVHlwZSIsInZhbGlkQXR0cmlidXRlIiwidmFsaWREYXRhIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJzaGlmdCIsInNjaGVtZUFuZE1lZGlhVHlwZSIsInN1YnN0ciIsIm1lZGlhVHlwZSIsInRvTG93ZXJDYXNlIiwiX2luY2x1ZGVzIiwiZGVjaW1hbFJlZ0V4cCIsInJlZ0V4cCIsImZvcmNlX2RlY2ltYWwiLCJkZWZhdWx0X2RlY2ltYWxfb3B0aW9ucyIsIm51bSIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJfcyIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIkFycmF5IiwiaXNBcnJheSIsImRlZmF1bHRfZW1haWxfb3B0aW9ucyIsImFsbG93X2Rpc3BsYXlfbmFtZSIsInJlcXVpcmVfZGlzcGxheV9uYW1lIiwiYWxsb3dfdXRmOF9sb2NhbF9wYXJ0IiwicmVxdWlyZV90bGQiLCJzcGxpdE5hbWVBZGRyZXNzIiwiZW1haWxVc2VyUGFydCIsImdtYWlsVXNlclBhcnQiLCJxdW90ZWRFbWFpbFVzZXIiLCJlbWFpbFVzZXJVdGY4UGFydCIsInF1b3RlZEVtYWlsVXNlclV0ZjgiLCJkZWZhdWx0TWF4RW1haWxMZW5ndGgiLCJ2YWxpZGF0ZURpc3BsYXlOYW1lIiwiZGlzcGxheV9uYW1lIiwidHJpbV9xdW90ZXMiLCJtYXRjaCIsImRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3RlcyIsImNvbnRhaW5zX2lsbGVnYWwiLCJhbGxfc3RhcnRfd2l0aF9iYWNrX3NsYXNoIiwiZGlzcGxheV9lbWFpbCIsIl9kaXNwbGF5X2VtYWlsIiwiZW5kc1dpdGgiLCJpZ25vcmVfbWF4X2xlbmd0aCIsInBhcnRzIiwiZG9tYWluIiwicG9wIiwidXNlciIsImxvd2VyX2RvbWFpbiIsImRvbWFpbl9zcGVjaWZpY192YWxpZGF0aW9uIiwidXNlcm5hbWUiLCJfdXNlcl9wYXJ0cyIsImFsbG93X2lwX2RvbWFpbiIsInN0YXJ0c1dpdGgiLCJub0JyYWNrZXRkb21haW4iLCJzbGljZSIsInVzZXJfcGFydHMiLCJkZWZhdWx0X2lzX2VtcHR5X29wdGlvbnMiLCJpZ25vcmVfd2hpdGVzcGFjZSIsImRlZmF1bHRfZnFkbl9vcHRpb25zIiwiYWxsb3dfdW5kZXJzY29yZXMiLCJhbGxvd190cmFpbGluZ19kb3QiLCJ0bGQiLCJwYXJ0IiwiZmxvYXQiLCJwYXJzZUZsb2F0IiwibHQiLCJndCIsImZ1bGxXaWR0aCIsImhhbGZXaWR0aCIsImxlbmd0aHMiLCJtZDUiLCJtZDQiLCJzaGExIiwic2hhMjU2Iiwic2hhMzg0Iiwic2hhNTEyIiwicmlwZW1kMTI4IiwicmlwZW1kMTYwIiwidGlnZXIxMjgiLCJ0aWdlcjE2MCIsInRpZ2VyMTkyIiwiY3JjMzIiLCJjcmMzMmIiLCJhbGdvcml0aG0iLCJoYXNoIiwiaGV4Y29sb3IiLCJoZXhhZGVjaW1hbCIsImlwdjRNYXliZSIsImlwdjZCbG9jayIsInNvcnQiLCJhIiwiYiIsImFkZHJlc3NBbmRab25lIiwiaW5jbHVkZXMiLCJibG9ja3MiLCJmb3VuZE9taXNzaW9uQmxvY2siLCJmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2siLCJleHBlY3RlZE51bWJlck9mQmxvY2tzIiwic3VibmV0TWF5YmUiLCJpc2JuMTBNYXliZSIsImlzYm4xM01heWJlIiwiZmFjdG9yIiwiY2hlY2tzdW0iLCJjaGFyQXQiLCJpc2luIiwiY2hlY2tzdW1TdHIiLCJjaGFyYWN0ZXIiLCJ2YWxpZElTTzMxNjYxQWxwaGEyQ291bnRyaWVzQ29kZXMiLCJ0b1VwcGVyQ2FzZSIsInZhbGlkSVNPMzE2NjFBbHBoYTNDb3VudHJpZXNDb2RlcyIsImlzbzg2MDEiLCJpc1ZhbGlkRGF0ZSIsIm9yZGluYWxNYXRjaCIsIm9ZZWFyIiwiTnVtYmVyIiwib0RheSIsIm1hcCIsInllYXIiLCJtb250aCIsImRheSIsIm1vbnRoU3RyaW5nIiwiZGF5U3RyaW5nIiwiZCIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiY2hlY2siLCJzdHJpY3QiLCJpc3JjIiwiaXNzbiIsInRlc3RJc3NuIiwicmVxdWlyZV9oeXBoZW4iLCJjYXNlX3NlbnNpdGl2ZSIsImRpZ2l0cyIsInZhbGlkYXRvcnMiLCJFUyIsIkROSSIsImNoYXJzVmFsdWUiLCJYIiwiWSIsIloiLCJjb250cm9sRGlnaXRzIiwibnVtYmVyIiwiY2hhciIsImhlSUwiLCJpZCIsImluY051bSIsInpoVFciLCJBTFBIQUJFVF9DT0RFUyIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiZnJvbSIsInJlZHVjZSIsImNvZGUiLCJNYXRoIiwiZmxvb3IiLCJhcnJheSIsImludCIsImludExlYWRpbmdaZXJvZXMiLCJyZWdleCIsImFsbG93X2xlYWRpbmdfemVyb2VzIiwibWluQ2hlY2tQYXNzZWQiLCJtYXhDaGVja1Bhc3NlZCIsImx0Q2hlY2tQYXNzZWQiLCJndENoZWNrUGFzc2VkIiwiSlNPTiIsInBhcnNlIiwiZSIsImp3dCIsImxhdCIsImxvbmciLCJwYWlyIiwic3Vycm9nYXRlUGFpcnMiLCJtYWNBZGRyZXNzIiwibWFjQWRkcmVzc05vQ29sb25zIiwibWFjQWRkcmVzc1dpdGhIeXBoZW4iLCJtYWNBZGRyZXNzV2l0aFNwYWNlcyIsIm5vX2NvbG9ucyIsIm1hZ25ldFVSSSIsInVybCIsIm1pbWVUeXBlU2ltcGxlIiwibWltZVR5cGVUZXh0IiwibWltZVR5cGVNdWx0aXBhcnQiLCJwaG9uZXMiLCJzdHJpY3RNb2RlIiwic29tZSIsInBob25lIiwibXVsdGlieXRlIiwibnVtZXJpYyIsIm51bWVyaWNOb1N5bWJvbHMiLCJub19zeW1ib2xzIiwib2N0YWwiLCJ0aHJlZURpZ2l0IiwiZm91ckRpZ2l0IiwiZml2ZURpZ2l0Iiwic2l4RGlnaXQiLCJwYXR0ZXJucyIsIkFEIiwiQVQiLCJBVSIsIkJFIiwiQkciLCJCUiIsIkNBIiwiQ0giLCJDWiIsIkRFIiwiREsiLCJEWiIsIkVFIiwiRkkiLCJGUiIsIkdCIiwiR1IiLCJIUiIsIkhVIiwiSUQiLCJJRSIsIklMIiwiSU4iLCJJUyIsIklUIiwiSlAiLCJLRSIsIkxJIiwiTFQiLCJMVSIsIkxWIiwiTVgiLCJNVCIsIk5MIiwiTk8iLCJOWiIsIlBMIiwiUFIiLCJQVCIsIlJPIiwiUlUiLCJTQSIsIlNFIiwiU0kiLCJTSyIsIlROIiwiVFciLCJVQSIsIlVTIiwiWkEiLCJaTSIsImRhdGVGdWxsWWVhciIsImRhdGVNb250aCIsImRhdGVNRGF5IiwidGltZUhvdXIiLCJ0aW1lTWludXRlIiwidGltZVNlY29uZCIsInRpbWVTZWNGcmFjIiwidGltZU51bU9mZnNldCIsInNvdXJjZSIsInRpbWVPZmZzZXQiLCJwYXJ0aWFsVGltZSIsImZ1bGxEYXRlIiwiZnVsbFRpbWUiLCJyZmMzMzM5IiwiY2hhcnNldFJlZ2V4Iiwic3Vycm9nYXRlUGFpciIsImRlZmF1bHRfdXJsX29wdGlvbnMiLCJwcm90b2NvbHMiLCJyZXF1aXJlX3Byb3RvY29sIiwicmVxdWlyZV9ob3N0IiwicmVxdWlyZV92YWxpZF9wcm90b2NvbCIsImFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHMiLCJ3cmFwcGVkX2lwdjYiLCJpc1JlZ0V4cCIsImNoZWNrSG9zdCIsImhvc3QiLCJwcm90b2NvbCIsImF1dGgiLCJob3N0bmFtZSIsInBvcnQiLCJwb3J0X3N0ciIsImlwdjYiLCJkaXNhbGxvd19hdXRoIiwiaXB2Nl9tYXRjaCIsImhvc3Rfd2hpdGVsaXN0IiwiaG9zdF9ibGFja2xpc3QiLCJ1dWlkIiwiYWxsIiwibW9kaWZpZXJzIiwiZGVmYXVsdF9ub3JtYWxpemVfZW1haWxfb3B0aW9ucyIsImFsbF9sb3dlcmNhc2UiLCJnbWFpbF9sb3dlcmNhc2UiLCJnbWFpbF9yZW1vdmVfZG90cyIsImdtYWlsX3JlbW92ZV9zdWJhZGRyZXNzIiwiZ21haWxfY29udmVydF9nb29nbGVtYWlsZG90Y29tIiwib3V0bG9va2RvdGNvbV9sb3dlcmNhc2UiLCJvdXRsb29rZG90Y29tX3JlbW92ZV9zdWJhZGRyZXNzIiwieWFob29fbG93ZXJjYXNlIiwieWFob29fcmVtb3ZlX3N1YmFkZHJlc3MiLCJ5YW5kZXhfbG93ZXJjYXNlIiwiaWNsb3VkX2xvd2VyY2FzZSIsImljbG91ZF9yZW1vdmVfc3ViYWRkcmVzcyIsImljbG91ZF9kb21haW5zIiwib3V0bG9va2RvdGNvbV9kb21haW5zIiwieWFob29fZG9tYWlucyIsInlhbmRleF9kb21haW5zIiwiZG90c1JlcGxhY2VyIiwiZW1haWwiLCJyYXdfcGFydHMiLCJjb21wb25lbnRzIiwia2VlcF9uZXdfbGluZXMiLCJpc05hTiIsIk5hTiIsInJhZGl4IiwiYXNzZXJ0U3RyaW5nIiwiaW5wdXQiLCJpc1N0cmluZyIsImludmFsaWRUeXBlIiwibmFtZSIsInZhbCIsImFyclZhbCIsIm1lcmdlIiwiZGVmYXVsdHMiLCJjb25zb2xlIiwibG9nIiwibGFuZ0xpc3QiLCJjaGVja1ZhbGlkYXRvciIsInR5cGUiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImNsaWNrIiwidGFyZ2V0IiwicGFyZW50IiwiZmluZCIsImZhZGVPdXQiLCJmb2N1cyIsInVpVmFsaWRhdG9yIiwiZWxlbWVudCIsImlzdmFsaWQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaXNGaWxlZFZhbGlkIiwiZmllbGRUeXBlIiwiYXR0ciIsImZpZWxkVGV4dCIsImNoYW5nZSIsImtleXVwIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1QYXNzVmFpbGRhdGlvbiIsImVhY2giLCJpbnB1dFBhc3NWYWlsZGF0aW9uIiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJjc3MiLCJoaWRlIiwiZmFkZUluIiwiYWpheCIsIndwX2dsb2JhbCIsImFqYXhfdXJsIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJmb3JtX2RhdGEiLCJzdWNjZXNzIiwicmVzcCIsImVycm9yIiwieGhy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LHdCQXhDRTtBQXlDWCxXQUFTLDRCQXpDRTtBQTBDWCxXQUFTLGlDQTFDRTtBQTJDWCxXQUFTLGlDQTNDRTtBQTRDWCxXQUFTLDRCQTVDRTtBQTZDWCxXQUFTLG1CQTdDRTtBQThDWCxXQUFTLDBCQTlDRTtBQStDWCxXQUFTLDBCQS9DRTtBQWdEWCxXQUFTLDRDQWhERTtBQWlEWCxXQUFTLHFEQWpERTtBQWtEWCxXQUFTLHNEQWxERTtBQW1EWCxXQUFTLDZCQW5ERTtBQW9EWCxXQUFTLHFDQXBERTtBQXFEWCxXQUFTLHNCQXJERTtBQXNEWCxXQUFTLDZCQXRERTtBQXVEWCxXQUFTLDZCQXZERTtBQXdEWCxXQUFTLDZCQXhERTtBQXlEWCxXQUFTLDZCQXpERTtBQTBEWCxXQUFTLGdEQTFERTtBQTJEWCxXQUFTLDBCQTNERTtBQTREWCxXQUFTLG9HQTVERTtBQTZEWCxXQUFTLDhCQTdERTtBQThEWCxXQUFTLHVEQTlERTtBQStEWCxXQUFTLG1CQS9ERTtBQWdFWCxXQUFTLHFDQWhFRTtBQWlFWCxXQUFTLGlFQWpFRTtBQWtFWCxXQUFTLGtCQWxFRTtBQW1FWCxXQUFTLHVFQW5FRTtBQW9FWCxXQUFTLHFCQXBFRTtBQXFFWCxXQUFTLHVCQXJFRTtBQXNFWCxXQUFTLG9CQXRFRTtBQXVFWCxXQUFTLG9CQXZFRTtBQXdFWCxXQUFTLHFCQXhFRTtBQXlFWCxXQUFTLDBDQXpFRTtBQTBFWCxXQUFTLG9KQTFFRTtBQTJFWCxXQUFTLHlCQTNFRTtBQTRFWCxXQUFTLHdEQTVFRTtBQTZFWCxXQUFTLG1CQTdFRTtBQThFWCxXQUFTLHFFQTlFRTtBQStFWCxXQUFTLGdEQS9FRTtBQWdGWCxXQUFTLDBCQWhGRTtBQWlGWCxXQUFTLGlEQWpGRTtBQWtGWCxXQUFTLG9CQWxGRTtBQW1GWCxXQUFTLG9CQW5GRTtBQW9GWCxXQUFTLG9CQXBGRTtBQXFGWCxXQUFTLHFGQXJGRTtBQXNGWCxXQUFTLHFFQXRGRTtBQXVGWCxXQUFTO0FBdkZFLENBQWI7QUF5RkE7QUFDQTs7QUFFQUEsTUFBTSxDQUFDLE9BQUQsQ0FBTixHQUFr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QyxXQUE1QixFQUF5QztBQUM1Q0MsZUFBSyxDQUFDLHFCQUFxQkwsSUFBSSxDQUFDM1ksSUFBM0IsQ0FBTDtBQUNBd1csV0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnlCLEdBQWpCLENBQXFCLFNBQXJCLEVBQWdDLE1BQWhDO0FBQ0g7QUFyQkUsT0FBUDtBQXVCSDtBQUVKLEdBN0NEO0FBbURILENBL0ZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdG9EYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9EYXRlXCIpKTtcblxudmFyIF90b0Zsb2F0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9GbG9hdFwiKSk7XG5cbnZhciBfdG9JbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi90b0ludFwiKSk7XG5cbnZhciBfdG9Cb29sZWFuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdG9Cb29sZWFuXCIpKTtcblxudmFyIF9lcXVhbHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9lcXVhbHNcIikpO1xuXG52YXIgX2NvbnRhaW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvY29udGFpbnNcIikpO1xuXG52YXIgX21hdGNoZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9tYXRjaGVzXCIpKTtcblxudmFyIF9pc0VtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNFbWFpbFwiKSk7XG5cbnZhciBfaXNVUkwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1VSTFwiKSk7XG5cbnZhciBfaXNNQUNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNQUNBZGRyZXNzXCIpKTtcblxudmFyIF9pc0lQID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJUFwiKSk7XG5cbnZhciBfaXNJUFJhbmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJUFJhbmdlXCIpKTtcblxudmFyIF9pc0ZRRE4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0ZRRE5cIikpO1xuXG52YXIgX2lzQm9vbGVhbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQm9vbGVhblwiKSk7XG5cbnZhciBfaXNBbHBoYSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc0FscGhhXCIpKTtcblxudmFyIF9pc0FscGhhbnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc0FscGhhbnVtZXJpY1wiKSk7XG5cbnZhciBfaXNOdW1lcmljID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNOdW1lcmljXCIpKTtcblxudmFyIF9pc1BvcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1BvcnRcIikpO1xuXG52YXIgX2lzTG93ZXJjYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMb3dlcmNhc2VcIikpO1xuXG52YXIgX2lzVXBwZXJjYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNVcHBlcmNhc2VcIikpO1xuXG52YXIgX2lzQXNjaWkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0FzY2lpXCIpKTtcblxudmFyIF9pc0Z1bGxXaWR0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRnVsbFdpZHRoXCIpKTtcblxudmFyIF9pc0hhbGZXaWR0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSGFsZldpZHRoXCIpKTtcblxudmFyIF9pc1ZhcmlhYmxlV2lkdGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1ZhcmlhYmxlV2lkdGhcIikpO1xuXG52YXIgX2lzTXVsdGlieXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNdWx0aWJ5dGVcIikpO1xuXG52YXIgX2lzU3Vycm9nYXRlUGFpciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzU3Vycm9nYXRlUGFpclwiKSk7XG5cbnZhciBfaXNJbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0ludFwiKSk7XG5cbnZhciBfaXNGbG9hdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc0Zsb2F0XCIpKTtcblxudmFyIF9pc0RlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0RlY2ltYWxcIikpO1xuXG52YXIgX2lzSGV4YWRlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0hleGFkZWNpbWFsXCIpKTtcblxudmFyIF9pc09jdGFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNPY3RhbFwiKSk7XG5cbnZhciBfaXNEaXZpc2libGVCeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRGl2aXNpYmxlQnlcIikpO1xuXG52YXIgX2lzSGV4Q29sb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0hleENvbG9yXCIpKTtcblxudmFyIF9pc0lTUkMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTUkNcIikpO1xuXG52YXIgX2lzQklDID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCSUNcIikpO1xuXG52YXIgX2lzTUQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc01ENVwiKSk7XG5cbnZhciBfaXNIYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNIYXNoXCIpKTtcblxudmFyIF9pc0pXVCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSldUXCIpKTtcblxudmFyIF9pc0pTT04gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0pTT05cIikpO1xuXG52YXIgX2lzRW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0VtcHR5XCIpKTtcblxudmFyIF9pc0xlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTGVuZ3RoXCIpKTtcblxudmFyIF9pc0J5dGVMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0J5dGVMZW5ndGhcIikpO1xuXG52YXIgX2lzVVVJRCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzVVVJRFwiKSk7XG5cbnZhciBfaXNNb25nb0lkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNb25nb0lkXCIpKTtcblxudmFyIF9pc0FmdGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNBZnRlclwiKSk7XG5cbnZhciBfaXNCZWZvcmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0JlZm9yZVwiKSk7XG5cbnZhciBfaXNJbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSW5cIikpO1xuXG52YXIgX2lzQ3JlZGl0Q2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQ3JlZGl0Q2FyZFwiKSk7XG5cbnZhciBfaXNJZGVudGl0eUNhcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lkZW50aXR5Q2FyZFwiKSk7XG5cbnZhciBfaXNJU0lOID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJU0lOXCIpKTtcblxudmFyIF9pc0lTQk4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTQk5cIikpO1xuXG52YXIgX2lzSVNTTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNTTlwiKSk7XG5cbnZhciBfaXNNb2JpbGVQaG9uZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc01vYmlsZVBob25lXCIpKTtcblxudmFyIF9pc0N1cnJlbmN5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNDdXJyZW5jeVwiKSk7XG5cbnZhciBfaXNJU08gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTTzg2MDFcIikpO1xuXG52YXIgX2lzUkZDID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNSRkMzMzM5XCIpKTtcblxudmFyIF9pc0lTTzMxNjYxQWxwaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTTzMxNjYxQWxwaGEyXCIpKTtcblxudmFyIF9pc0lTTzMxNjYxQWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJU08zMTY2MUFscGhhM1wiKSk7XG5cbnZhciBfaXNCYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCYXNlMzJcIikpO1xuXG52YXIgX2lzQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0Jhc2U2NFwiKSk7XG5cbnZhciBfaXNEYXRhVVJJID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNEYXRhVVJJXCIpKTtcblxudmFyIF9pc01hZ25ldFVSSSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTWFnbmV0VVJJXCIpKTtcblxudmFyIF9pc01pbWVUeXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNaW1lVHlwZVwiKSk7XG5cbnZhciBfaXNMYXRMb25nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMYXRMb25nXCIpKTtcblxudmFyIF9pc1Bvc3RhbENvZGUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvaXNQb3N0YWxDb2RlXCIpKTtcblxudmFyIF9sdHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2x0cmltXCIpKTtcblxudmFyIF9ydHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3J0cmltXCIpKTtcblxudmFyIF90cmltID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdHJpbVwiKSk7XG5cbnZhciBfZXNjYXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvZXNjYXBlXCIpKTtcblxudmFyIF91bmVzY2FwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3VuZXNjYXBlXCIpKTtcblxudmFyIF9zdHJpcExvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0cmlwTG93XCIpKTtcblxudmFyIF93aGl0ZWxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi93aGl0ZWxpc3RcIikpO1xuXG52YXIgX2JsYWNrbGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2JsYWNrbGlzdFwiKSk7XG5cbnZhciBfaXNXaGl0ZWxpc3RlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzV2hpdGVsaXN0ZWRcIikpO1xuXG52YXIgX25vcm1hbGl6ZUVtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvbm9ybWFsaXplRW1haWxcIikpO1xuXG52YXIgX2lzU2x1ZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzU2x1Z1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2ZXJzaW9uID0gJzEyLjIuMCc7XG52YXIgdmFsaWRhdG9yID0ge1xuICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICB0b0RhdGU6IF90b0RhdGUuZGVmYXVsdCxcbiAgdG9GbG9hdDogX3RvRmxvYXQuZGVmYXVsdCxcbiAgdG9JbnQ6IF90b0ludC5kZWZhdWx0LFxuICB0b0Jvb2xlYW46IF90b0Jvb2xlYW4uZGVmYXVsdCxcbiAgZXF1YWxzOiBfZXF1YWxzLmRlZmF1bHQsXG4gIGNvbnRhaW5zOiBfY29udGFpbnMuZGVmYXVsdCxcbiAgbWF0Y2hlczogX21hdGNoZXMuZGVmYXVsdCxcbiAgaXNFbWFpbDogX2lzRW1haWwuZGVmYXVsdCxcbiAgaXNVUkw6IF9pc1VSTC5kZWZhdWx0LFxuICBpc01BQ0FkZHJlc3M6IF9pc01BQ0FkZHJlc3MuZGVmYXVsdCxcbiAgaXNJUDogX2lzSVAuZGVmYXVsdCxcbiAgaXNJUFJhbmdlOiBfaXNJUFJhbmdlLmRlZmF1bHQsXG4gIGlzRlFETjogX2lzRlFETi5kZWZhdWx0LFxuICBpc0Jvb2xlYW46IF9pc0Jvb2xlYW4uZGVmYXVsdCxcbiAgaXNCSUM6IF9pc0JJQy5kZWZhdWx0LFxuICBpc0FscGhhOiBfaXNBbHBoYS5kZWZhdWx0LFxuICBpc0FscGhhTG9jYWxlczogX2lzQWxwaGEubG9jYWxlcyxcbiAgaXNBbHBoYW51bWVyaWM6IF9pc0FscGhhbnVtZXJpYy5kZWZhdWx0LFxuICBpc0FscGhhbnVtZXJpY0xvY2FsZXM6IF9pc0FscGhhbnVtZXJpYy5sb2NhbGVzLFxuICBpc051bWVyaWM6IF9pc051bWVyaWMuZGVmYXVsdCxcbiAgaXNQb3J0OiBfaXNQb3J0LmRlZmF1bHQsXG4gIGlzTG93ZXJjYXNlOiBfaXNMb3dlcmNhc2UuZGVmYXVsdCxcbiAgaXNVcHBlcmNhc2U6IF9pc1VwcGVyY2FzZS5kZWZhdWx0LFxuICBpc0FzY2lpOiBfaXNBc2NpaS5kZWZhdWx0LFxuICBpc0Z1bGxXaWR0aDogX2lzRnVsbFdpZHRoLmRlZmF1bHQsXG4gIGlzSGFsZldpZHRoOiBfaXNIYWxmV2lkdGguZGVmYXVsdCxcbiAgaXNWYXJpYWJsZVdpZHRoOiBfaXNWYXJpYWJsZVdpZHRoLmRlZmF1bHQsXG4gIGlzTXVsdGlieXRlOiBfaXNNdWx0aWJ5dGUuZGVmYXVsdCxcbiAgaXNTdXJyb2dhdGVQYWlyOiBfaXNTdXJyb2dhdGVQYWlyLmRlZmF1bHQsXG4gIGlzSW50OiBfaXNJbnQuZGVmYXVsdCxcbiAgaXNGbG9hdDogX2lzRmxvYXQuZGVmYXVsdCxcbiAgaXNGbG9hdExvY2FsZXM6IF9pc0Zsb2F0LmxvY2FsZXMsXG4gIGlzRGVjaW1hbDogX2lzRGVjaW1hbC5kZWZhdWx0LFxuICBpc0hleGFkZWNpbWFsOiBfaXNIZXhhZGVjaW1hbC5kZWZhdWx0LFxuICBpc09jdGFsOiBfaXNPY3RhbC5kZWZhdWx0LFxuICBpc0RpdmlzaWJsZUJ5OiBfaXNEaXZpc2libGVCeS5kZWZhdWx0LFxuICBpc0hleENvbG9yOiBfaXNIZXhDb2xvci5kZWZhdWx0LFxuICBpc0lTUkM6IF9pc0lTUkMuZGVmYXVsdCxcbiAgaXNNRDU6IF9pc01ELmRlZmF1bHQsXG4gIGlzSGFzaDogX2lzSGFzaC5kZWZhdWx0LFxuICBpc0pXVDogX2lzSldULmRlZmF1bHQsXG4gIGlzSlNPTjogX2lzSlNPTi5kZWZhdWx0LFxuICBpc0VtcHR5OiBfaXNFbXB0eS5kZWZhdWx0LFxuICBpc0xlbmd0aDogX2lzTGVuZ3RoLmRlZmF1bHQsXG4gIGlzQnl0ZUxlbmd0aDogX2lzQnl0ZUxlbmd0aC5kZWZhdWx0LFxuICBpc1VVSUQ6IF9pc1VVSUQuZGVmYXVsdCxcbiAgaXNNb25nb0lkOiBfaXNNb25nb0lkLmRlZmF1bHQsXG4gIGlzQWZ0ZXI6IF9pc0FmdGVyLmRlZmF1bHQsXG4gIGlzQmVmb3JlOiBfaXNCZWZvcmUuZGVmYXVsdCxcbiAgaXNJbjogX2lzSW4uZGVmYXVsdCxcbiAgaXNDcmVkaXRDYXJkOiBfaXNDcmVkaXRDYXJkLmRlZmF1bHQsXG4gIGlzSWRlbnRpdHlDYXJkOiBfaXNJZGVudGl0eUNhcmQuZGVmYXVsdCxcbiAgaXNJU0lOOiBfaXNJU0lOLmRlZmF1bHQsXG4gIGlzSVNCTjogX2lzSVNCTi5kZWZhdWx0LFxuICBpc0lTU046IF9pc0lTU04uZGVmYXVsdCxcbiAgaXNNb2JpbGVQaG9uZTogX2lzTW9iaWxlUGhvbmUuZGVmYXVsdCxcbiAgaXNNb2JpbGVQaG9uZUxvY2FsZXM6IF9pc01vYmlsZVBob25lLmxvY2FsZXMsXG4gIGlzUG9zdGFsQ29kZTogX2lzUG9zdGFsQ29kZS5kZWZhdWx0LFxuICBpc1Bvc3RhbENvZGVMb2NhbGVzOiBfaXNQb3N0YWxDb2RlLmxvY2FsZXMsXG4gIGlzQ3VycmVuY3k6IF9pc0N1cnJlbmN5LmRlZmF1bHQsXG4gIGlzSVNPODYwMTogX2lzSVNPLmRlZmF1bHQsXG4gIGlzUkZDMzMzOTogX2lzUkZDLmRlZmF1bHQsXG4gIGlzSVNPMzE2NjFBbHBoYTI6IF9pc0lTTzMxNjYxQWxwaGEuZGVmYXVsdCxcbiAgaXNJU08zMTY2MUFscGhhMzogX2lzSVNPMzE2NjFBbHBoYTIuZGVmYXVsdCxcbiAgaXNCYXNlMzI6IF9pc0Jhc2UuZGVmYXVsdCxcbiAgaXNCYXNlNjQ6IF9pc0Jhc2UyLmRlZmF1bHQsXG4gIGlzRGF0YVVSSTogX2lzRGF0YVVSSS5kZWZhdWx0LFxuICBpc01hZ25ldFVSSTogX2lzTWFnbmV0VVJJLmRlZmF1bHQsXG4gIGlzTWltZVR5cGU6IF9pc01pbWVUeXBlLmRlZmF1bHQsXG4gIGlzTGF0TG9uZzogX2lzTGF0TG9uZy5kZWZhdWx0LFxuICBsdHJpbTogX2x0cmltLmRlZmF1bHQsXG4gIHJ0cmltOiBfcnRyaW0uZGVmYXVsdCxcbiAgdHJpbTogX3RyaW0uZGVmYXVsdCxcbiAgZXNjYXBlOiBfZXNjYXBlLmRlZmF1bHQsXG4gIHVuZXNjYXBlOiBfdW5lc2NhcGUuZGVmYXVsdCxcbiAgc3RyaXBMb3c6IF9zdHJpcExvdy5kZWZhdWx0LFxuICB3aGl0ZWxpc3Q6IF93aGl0ZWxpc3QuZGVmYXVsdCxcbiAgYmxhY2tsaXN0OiBfYmxhY2tsaXN0LmRlZmF1bHQsXG4gIGlzV2hpdGVsaXN0ZWQ6IF9pc1doaXRlbGlzdGVkLmRlZmF1bHQsXG4gIG5vcm1hbGl6ZUVtYWlsOiBfbm9ybWFsaXplRW1haWwuZGVmYXVsdCxcbiAgdG9TdHJpbmc6IHRvU3RyaW5nLFxuICBpc1NsdWc6IF9pc1NsdWcuZGVmYXVsdFxufTtcbnZhciBfZGVmYXVsdCA9IHZhbGlkYXRvcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb21tYURlY2ltYWwgPSBleHBvcnRzLmRvdERlY2ltYWwgPSBleHBvcnRzLmFyYWJpY0xvY2FsZXMgPSBleHBvcnRzLmVuZ2xpc2hMb2NhbGVzID0gZXhwb3J0cy5kZWNpbWFsID0gZXhwb3J0cy5hbHBoYW51bWVyaWMgPSBleHBvcnRzLmFscGhhID0gdm9pZCAwO1xudmFyIGFscGhhID0ge1xuICAnZW4tVVMnOiAvXltBLVpdKyQvaSxcbiAgJ2JnLUJHJzogL15b0JAt0K9dKyQvaSxcbiAgJ2NzLUNaJzogL15bQS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSskL2ksXG4gICdkYS1ESyc6IC9eW0EtWsOGw5jDhV0rJC9pLFxuICAnZGUtREUnOiAvXltBLVrDhMOWw5zDn10rJC9pLFxuICAnZWwtR1InOiAvXlvOkS3PiV0rJC9pLFxuICAnZXMtRVMnOiAvXltBLVrDgcOJw43DkcOTw5rDnF0rJC9pLFxuICAnZnItRlInOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0rJC9pLFxuICAnaXQtSVQnOiAvXltBLVrDgMOJw4jDjMOOw5PDksOZXSskL2ksXG4gICduYi1OTyc6IC9eW0EtWsOGw5jDhV0rJC9pLFxuICAnbmwtTkwnOiAvXltBLVrDgcOJw4vDj8OTw5bDnMOaXSskL2ksXG4gICdubi1OTyc6IC9eW0EtWsOGw5jDhV0rJC9pLFxuICAnaHUtSFUnOiAvXltBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKyQvaSxcbiAgJ3BsLVBMJzogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XSskL2ksXG4gICdwdC1QVCc6IC9eW0EtWsODw4HDgMOCw4TDh8OJw4rDi8ONw4/DlcOTw5TDlsOaw5xdKyQvaSxcbiAgJ3J1LVJVJzogL15b0JAt0K/QgV0rJC9pLFxuICAnc2wtU0knOiAvXltBLVrEjMSGxJDFoMW9XSskL2ksXG4gICdzay1TSyc6IC9eW0EtWsOBxIzEjsOJw43Fh8OTxaDFpMOaw53FvcS5xZTEvcOEw5RdKyQvaSxcbiAgJ3NyLVJTQGxhdGluJzogL15bQS1axIzEhsW9xaDEkF0rJC9pLFxuICAnc3ItUlMnOiAvXlvQkC3Qr9CC0IjQidCK0IvQj10rJC9pLFxuICAnc3YtU0UnOiAvXltBLVrDhcOEw5ZdKyQvaSxcbiAgJ3RyLVRSJzogL15bQS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgJ3VrLVVBJzogL15b0JAt0KnQrNCu0K/QhEnQh9KQ0ZZdKyQvaSxcbiAgJ2t1LUlRJzogL15b2KbYp9io2b7Yqtis2obYrdiu2K/YsdqV2LLamNiz2LTYudi62YHapNmC2qnar9mE2rXZhdmG2Yjbhtq+25XbjNuO2YrYt9ik2KvYotil2KPZg9i22LXYqdi42LBdKyQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0rJC8sXG4gIGhlOiAvXlvXkC3Xql0rJC8sXG4gICdmYS1JUic6IC9eWyfYotin2KjZvtiq2KvYrNqG2YfYrtiv2LDYsdiy2pjYs9i02LXYtti32LjYudi62YHZgtqp2q/ZhNmF2YbZiNmH24wnXSskL2lcbn07XG5leHBvcnRzLmFscGhhID0gYWxwaGE7XG52YXIgYWxwaGFudW1lcmljID0ge1xuICAnZW4tVVMnOiAvXlswLTlBLVpdKyQvaSxcbiAgJ2JnLUJHJzogL15bMC050JAt0K9dKyQvaSxcbiAgJ2NzLUNaJzogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSskL2ksXG4gICdkYS1ESyc6IC9eWzAtOUEtWsOGw5jDhV0rJC9pLFxuICAnZGUtREUnOiAvXlswLTlBLVrDhMOWw5zDn10rJC9pLFxuICAnZWwtR1InOiAvXlswLTnOkS3PiV0rJC9pLFxuICAnZXMtRVMnOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF0rJC9pLFxuICAnZnItRlInOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0rJC9pLFxuICAnaXQtSVQnOiAvXlswLTlBLVrDgMOJw4jDjMOOw5PDksOZXSskL2ksXG4gICdodS1IVSc6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF0rJC9pLFxuICAnbmItTk8nOiAvXlswLTlBLVrDhsOYw4VdKyQvaSxcbiAgJ25sLU5MJzogL15bMC05QS1aw4HDicOLw4/Dk8OWw5zDml0rJC9pLFxuICAnbm4tTk8nOiAvXlswLTlBLVrDhsOYw4VdKyQvaSxcbiAgJ3BsLVBMJzogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5XSskL2ksXG4gICdwdC1QVCc6IC9eWzAtOUEtWsODw4HDgMOCw4TDh8OJw4rDi8ONw4/DlcOTw5TDlsOaw5xdKyQvaSxcbiAgJ3J1LVJVJzogL15bMC050JAt0K/QgV0rJC9pLFxuICAnc2wtU0knOiAvXlswLTlBLVrEjMSGxJDFoMW9XSskL2ksXG4gICdzay1TSyc6IC9eWzAtOUEtWsOBxIzEjsOJw43Fh8OTxaDFpMOaw53FvcS5xZTEvcOEw5RdKyQvaSxcbiAgJ3NyLVJTQGxhdGluJzogL15bMC05QS1axIzEhsW9xaDEkF0rJC9pLFxuICAnc3ItUlMnOiAvXlswLTnQkC3Qr9CC0IjQidCK0IvQj10rJC9pLFxuICAnc3YtU0UnOiAvXlswLTlBLVrDhcOEw5ZdKyQvaSxcbiAgJ3RyLVRSJzogL15bMC05QS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgJ3VrLVVBJzogL15bMC050JAt0KnQrNCu0K/QhEnQh9KQ0ZZdKyQvaSxcbiAgJ2t1LUlRJzogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYptin2KjZvtiq2Kzahtit2K7Yr9ix2pXYstqY2LPYtNi52LrZgdqk2YLaqdqv2YTatdmF2YbZiNuG2r7blduM247Ziti32KTYq9ii2KXYo9mD2LbYtdip2LjYsF0rJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKyQvLFxuICBoZTogL15bMC0515At16pdKyQvLFxuICAnZmEtSVInOiAvXlsnMC052KLYp9io2b7Yqtir2KzahtmH2K7Yr9iw2LHYstqY2LPYtNi12LbYt9i42LnYutmB2YLaqdqv2YTZhdmG2YjZh9uM27Hbstuz27Tbtdu227fbuNu527AnXSskL2lcbn07XG5leHBvcnRzLmFscGhhbnVtZXJpYyA9IGFscGhhbnVtZXJpYztcbnZhciBkZWNpbWFsID0ge1xuICAnZW4tVVMnOiAnLicsXG4gIGFyOiAn2asnXG59O1xuZXhwb3J0cy5kZWNpbWFsID0gZGVjaW1hbDtcbnZhciBlbmdsaXNoTG9jYWxlcyA9IFsnQVUnLCAnR0InLCAnSEsnLCAnSU4nLCAnTlonLCAnWkEnLCAnWk0nXTtcbmV4cG9ydHMuZW5nbGlzaExvY2FsZXMgPSBlbmdsaXNoTG9jYWxlcztcblxuZm9yICh2YXIgbG9jYWxlLCBpID0gMDsgaSA8IGVuZ2xpc2hMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gIGxvY2FsZSA9IFwiZW4tXCIuY29uY2F0KGVuZ2xpc2hMb2NhbGVzW2ldKTtcbiAgYWxwaGFbbG9jYWxlXSA9IGFscGhhWydlbi1VUyddO1xuICBhbHBoYW51bWVyaWNbbG9jYWxlXSA9IGFscGhhbnVtZXJpY1snZW4tVVMnXTtcbiAgZGVjaW1hbFtsb2NhbGVdID0gZGVjaW1hbFsnZW4tVVMnXTtcbn0gLy8gU291cmNlOiBodHRwOi8vd3d3LmxvY2FsZXBsYW5ldC5jb20vamF2YS9cblxuXG52YXIgYXJhYmljTG9jYWxlcyA9IFsnQUUnLCAnQkgnLCAnRFonLCAnRUcnLCAnSVEnLCAnSk8nLCAnS1cnLCAnTEInLCAnTFknLCAnTUEnLCAnUU0nLCAnUUEnLCAnU0EnLCAnU0QnLCAnU1knLCAnVE4nLCAnWUUnXTtcbmV4cG9ydHMuYXJhYmljTG9jYWxlcyA9IGFyYWJpY0xvY2FsZXM7XG5cbmZvciAodmFyIF9sb2NhbGUsIF9pID0gMDsgX2kgPCBhcmFiaWNMb2NhbGVzLmxlbmd0aDsgX2krKykge1xuICBfbG9jYWxlID0gXCJhci1cIi5jb25jYXQoYXJhYmljTG9jYWxlc1tfaV0pO1xuICBhbHBoYVtfbG9jYWxlXSA9IGFscGhhLmFyO1xuICBhbHBoYW51bWVyaWNbX2xvY2FsZV0gPSBhbHBoYW51bWVyaWMuYXI7XG4gIGRlY2ltYWxbX2xvY2FsZV0gPSBkZWNpbWFsLmFyO1xufSAvLyBTb3VyY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlY2ltYWxfbWFya1xuXG5cbnZhciBkb3REZWNpbWFsID0gWydhci1FRycsICdhci1MQicsICdhci1MWSddO1xuZXhwb3J0cy5kb3REZWNpbWFsID0gZG90RGVjaW1hbDtcbnZhciBjb21tYURlY2ltYWwgPSBbJ2JnLUJHJywgJ2NzLUNaJywgJ2RhLURLJywgJ2RlLURFJywgJ2VsLUdSJywgJ2VuLVpNJywgJ2VzLUVTJywgJ2ZyLUZSJywgJ2l0LUlUJywgJ2t1LUlRJywgJ2h1LUhVJywgJ25iLU5PJywgJ25uLU5PJywgJ25sLU5MJywgJ3BsLVBMJywgJ3B0LVBUJywgJ3J1LVJVJywgJ3NsLVNJJywgJ3NyLVJTQGxhdGluJywgJ3NyLVJTJywgJ3N2LVNFJywgJ3RyLVRSJywgJ3VrLVVBJ107XG5leHBvcnRzLmNvbW1hRGVjaW1hbCA9IGNvbW1hRGVjaW1hbDtcblxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgZG90RGVjaW1hbC5sZW5ndGg7IF9pMisrKSB7XG4gIGRlY2ltYWxbZG90RGVjaW1hbFtfaTJdXSA9IGRlY2ltYWxbJ2VuLVVTJ107XG59XG5cbmZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGNvbW1hRGVjaW1hbC5sZW5ndGg7IF9pMysrKSB7XG4gIGRlY2ltYWxbY29tbWFEZWNpbWFsW19pM11dID0gJywnO1xufVxuXG5hbHBoYVsncHQtQlInXSA9IGFscGhhWydwdC1QVCddO1xuYWxwaGFudW1lcmljWydwdC1CUiddID0gYWxwaGFudW1lcmljWydwdC1QVCddO1xuZGVjaW1hbFsncHQtQlInXSA9IGRlY2ltYWxbJ3B0LVBUJ107IC8vIHNlZSAjODYyXG5cbmFscGhhWydwbC1QbCddID0gYWxwaGFbJ3BsLVBMJ107XG5hbHBoYW51bWVyaWNbJ3BsLVBsJ10gPSBhbHBoYW51bWVyaWNbJ3BsLVBMJ107XG5kZWNpbWFsWydwbC1QbCddID0gZGVjaW1hbFsncGwtUEwnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJsYWNrbGlzdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYmxhY2tsaXN0KHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGNoYXJzLCBcIl0rXCIpLCAnZycpLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbnRhaW5zO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvU3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL3RvU3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29udGFpbnMoc3RyLCBlbGVtKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIuaW5kZXhPZigoMCwgX3RvU3RyaW5nLmRlZmF1bHQpKGVsZW0pKSA+PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlcXVhbHM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVxdWFscyhzdHIsIGNvbXBhcmlzb24pIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciA9PT0gY29tcGFyaXNvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXNjYXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiN4Mjc7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC9cXC8vZywgJyYjeDJGOycpLnJlcGxhY2UoL1xcXFwvZywgJyYjeDVDOycpLnJlcGxhY2UoL2AvZywgJyYjOTY7Jyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQWZ0ZXI7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9EYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90b0RhdGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FmdGVyKHN0cikge1xuICB2YXIgZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgY29tcGFyaXNvbiA9ICgwLCBfdG9EYXRlLmRlZmF1bHQpKGRhdGUpO1xuICB2YXIgb3JpZ2luYWwgPSAoMCwgX3RvRGF0ZS5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gISEob3JpZ2luYWwgJiYgY29tcGFyaXNvbiAmJiBvcmlnaW5hbCA+IGNvbXBhcmlzb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FscGhhO1xuZXhwb3J0cy5sb2NhbGVzID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZShcIi4vYWxwaGFcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQWxwaGEoc3RyKSB7XG4gIHZhciBsb2NhbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdlbi1VUyc7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKGxvY2FsZSBpbiBfYWxwaGEuYWxwaGEpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhW2xvY2FsZV0udGVzdChzdHIpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbnZhciBsb2NhbGVzID0gT2JqZWN0LmtleXMoX2FscGhhLmFscGhhKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FscGhhbnVtZXJpYztcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhbnVtZXJpYyhzdHIpIHtcbiAgdmFyIGxvY2FsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2VuLVVTJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAobG9jYWxlIGluIF9hbHBoYS5hbHBoYW51bWVyaWMpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhbnVtZXJpY1tsb2NhbGVdLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9jYWxlICdcIi5jb25jYXQobG9jYWxlLCBcIidcIikpO1xufVxuXG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKF9hbHBoYS5hbHBoYW51bWVyaWMpO1xuZXhwb3J0cy5sb2NhbGVzID0gbG9jYWxlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXNjaWk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBhc2NpaSA9IC9eW1xceDAwLVxceDdGXSskLztcbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc0FzY2lpKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gYXNjaWkudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0JJQztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzQklDUmVnID0gL15bQS16XXs0fVtBLXpdezJ9XFx3ezJ9KFxcd3szfSk/JC87XG5cbmZ1bmN0aW9uIGlzQklDKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaXNCSUNSZWcudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2UzMjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhc2UzMiA9IC9eW0EtWjItN10rPSokLztcblxuZnVuY3Rpb24gaXNCYXNlMzIoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGlmIChsZW4gPiAwICYmIGxlbiAlIDggPT09IDAgJiYgYmFzZTMyLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2U2NDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vdEJhc2U2NCA9IC9bXkEtWjAtOStcXC89XS9pO1xuXG5mdW5jdGlvbiBpc0Jhc2U2NChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgaWYgKCFsZW4gfHwgbGVuICUgNCAhPT0gMCB8fCBub3RCYXNlNjQudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGZpcnN0UGFkZGluZ0NoYXIgPSBzdHIuaW5kZXhPZignPScpO1xuICByZXR1cm4gZmlyc3RQYWRkaW5nQ2hhciA9PT0gLTEgfHwgZmlyc3RQYWRkaW5nQ2hhciA9PT0gbGVuIC0gMSB8fCBmaXJzdFBhZGRpbmdDaGFyID09PSBsZW4gLSAyICYmIHN0cltsZW4gLSAxXSA9PT0gJz0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0JlZm9yZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF90b0RhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RvRGF0ZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQmVmb3JlKHN0cikge1xuICB2YXIgZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgY29tcGFyaXNvbiA9ICgwLCBfdG9EYXRlLmRlZmF1bHQpKGRhdGUpO1xuICB2YXIgb3JpZ2luYWwgPSAoMCwgX3RvRGF0ZS5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gISEob3JpZ2luYWwgJiYgY29tcGFyaXNvbiAmJiBvcmlnaW5hbCA8IGNvbXBhcmlzb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jvb2xlYW47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIFsndHJ1ZScsICdmYWxzZScsICcxJywgJzAnXS5pbmRleE9mKHN0cikgPj0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCeXRlTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIG1pbjtcbiAgdmFyIG1heDtcblxuICBpZiAoX3R5cGVvZihvcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0J5dGVMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG5cbiAgdmFyIGxlbiA9IGVuY29kZVVSSShzdHIpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gIHJldHVybiBsZW4gPj0gbWluICYmICh0eXBlb2YgbWF4ID09PSAndW5kZWZpbmVkJyB8fCBsZW4gPD0gbWF4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgY3JlZGl0Q2FyZCA9IC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9fDZbMjddWzAtOV17MTR9KSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG5cbiAgaWYgKCFjcmVkaXRDYXJkLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQ7XG4gIHZhciB0bXBOdW07XG4gIHZhciBzaG91bGREb3VibGU7XG5cbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcblxuICAgIGlmIChzaG91bGREb3VibGUpIHtcbiAgICAgIHRtcE51bSAqPSAyO1xuXG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cblxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cblxuICByZXR1cm4gISEoc3VtICUgMTAgPT09IDAgPyBzYW5pdGl6ZWQgOiBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3VycmVuY3k7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjdXJyZW5jeVJlZ2V4KG9wdGlvbnMpIHtcbiAgdmFyIGRlY2ltYWxfZGlnaXRzID0gXCJcXFxcZHtcIi5jb25jYXQob3B0aW9ucy5kaWdpdHNfYWZ0ZXJfZGVjaW1hbFswXSwgXCJ9XCIpO1xuICBvcHRpb25zLmRpZ2l0c19hZnRlcl9kZWNpbWFsLmZvckVhY2goZnVuY3Rpb24gKGRpZ2l0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCAhPT0gMCkgZGVjaW1hbF9kaWdpdHMgPSBcIlwiLmNvbmNhdChkZWNpbWFsX2RpZ2l0cywgXCJ8XFxcXGR7XCIpLmNvbmNhdChkaWdpdCwgXCJ9XCIpO1xuICB9KTtcbiAgdmFyIHN5bWJvbCA9IFwiKFxcXFxcIi5jb25jYXQob3B0aW9ucy5zeW1ib2wucmVwbGFjZSgvXFwuL2csICdcXFxcLicpLCBcIilcIikuY29uY2F0KG9wdGlvbnMucmVxdWlyZV9zeW1ib2wgPyAnJyA6ICc/JyksXG4gICAgICBuZWdhdGl2ZSA9ICctPycsXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhvdXRfc2VwID0gJ1sxLTldXFxcXGQqJyxcbiAgICAgIHdob2xlX2RvbGxhcl9hbW91bnRfd2l0aF9zZXAgPSBcIlsxLTldXFxcXGR7MCwyfShcXFxcXCIuY29uY2F0KG9wdGlvbnMudGhvdXNhbmRzX3NlcGFyYXRvciwgXCJcXFxcZHszfSkqXCIpLFxuICAgICAgdmFsaWRfd2hvbGVfZG9sbGFyX2Ftb3VudHMgPSBbJzAnLCB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhvdXRfc2VwLCB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhfc2VwXSxcbiAgICAgIHdob2xlX2RvbGxhcl9hbW91bnQgPSBcIihcIi5jb25jYXQodmFsaWRfd2hvbGVfZG9sbGFyX2Ftb3VudHMuam9pbignfCcpLCBcIik/XCIpLFxuICAgICAgZGVjaW1hbF9hbW91bnQgPSBcIihcXFxcXCIuY29uY2F0KG9wdGlvbnMuZGVjaW1hbF9zZXBhcmF0b3IsIFwiKFwiKS5jb25jYXQoZGVjaW1hbF9kaWdpdHMsIFwiKSlcIikuY29uY2F0KG9wdGlvbnMucmVxdWlyZV9kZWNpbWFsID8gJycgOiAnPycpO1xuICB2YXIgcGF0dGVybiA9IHdob2xlX2RvbGxhcl9hbW91bnQgKyAob3B0aW9ucy5hbGxvd19kZWNpbWFsIHx8IG9wdGlvbnMucmVxdWlyZV9kZWNpbWFsID8gZGVjaW1hbF9hbW91bnQgOiAnJyk7IC8vIGRlZmF1bHQgaXMgbmVnYXRpdmUgc2lnbiBiZWZvcmUgc3ltYm9sLCBidXQgdGhlcmUgYXJlIHR3byBvdGhlciBvcHRpb25zIChiZXNpZGVzIHBhcmVucylcblxuICBpZiAob3B0aW9ucy5hbGxvd19uZWdhdGl2ZXMgJiYgIW9wdGlvbnMucGFyZW5zX2Zvcl9uZWdhdGl2ZXMpIHtcbiAgICBpZiAob3B0aW9ucy5uZWdhdGl2ZV9zaWduX2FmdGVyX2RpZ2l0cykge1xuICAgICAgcGF0dGVybiArPSBuZWdhdGl2ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubmVnYXRpdmVfc2lnbl9iZWZvcmVfZGlnaXRzKSB7XG4gICAgICBwYXR0ZXJuID0gbmVnYXRpdmUgKyBwYXR0ZXJuO1xuICAgIH1cbiAgfSAvLyBTb3V0aCBBZnJpY2FuIFJhbmQsIGZvciBleGFtcGxlLCB1c2VzIFIgMTIzIChzcGFjZSkgYW5kIFItMTIzIChubyBzcGFjZSlcblxuXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlX3NpZ25fcGxhY2Vob2xkZXIpIHtcbiAgICBwYXR0ZXJuID0gXCIoICg/IVxcXFwtKSk/XCIuY29uY2F0KHBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfc3BhY2VfYWZ0ZXJfc3ltYm9sKSB7XG4gICAgcGF0dGVybiA9IFwiID9cIi5jb25jYXQocGF0dGVybik7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxvd19zcGFjZV9hZnRlcl9kaWdpdHMpIHtcbiAgICBwYXR0ZXJuICs9ICcoICg/ISQpKT8nO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuc3ltYm9sX2FmdGVyX2RpZ2l0cykge1xuICAgIHBhdHRlcm4gKz0gc3ltYm9sO1xuICB9IGVsc2Uge1xuICAgIHBhdHRlcm4gPSBzeW1ib2wgKyBwYXR0ZXJuO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWxsb3dfbmVnYXRpdmVzKSB7XG4gICAgaWYgKG9wdGlvbnMucGFyZW5zX2Zvcl9uZWdhdGl2ZXMpIHtcbiAgICAgIHBhdHRlcm4gPSBcIihcXFxcKFwiLmNvbmNhdChwYXR0ZXJuLCBcIlxcXFwpfFwiKS5jb25jYXQocGF0dGVybiwgXCIpXCIpO1xuICAgIH0gZWxzZSBpZiAoIShvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0cyB8fCBvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzKSkge1xuICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlICsgcGF0dGVybjtcbiAgICB9XG4gIH0gLy8gZW5zdXJlIHRoZXJlJ3MgYSBkb2xsYXIgYW5kL29yIGRlY2ltYWwgYW1vdW50LCBhbmQgdGhhdFxuICAvLyBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBzcGFjZSBvciBhIG5lZ2F0aXZlIHNpZ24gZm9sbG93ZWQgYnkgYSBzcGFjZVxuXG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD8hLT8gKSg/PS4qXFxcXGQpXCIuY29uY2F0KHBhdHRlcm4sIFwiJFwiKSk7XG59XG5cbnZhciBkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMgPSB7XG4gIHN5bWJvbDogJyQnLFxuICByZXF1aXJlX3N5bWJvbDogZmFsc2UsXG4gIGFsbG93X3NwYWNlX2FmdGVyX3N5bWJvbDogZmFsc2UsXG4gIHN5bWJvbF9hZnRlcl9kaWdpdHM6IGZhbHNlLFxuICBhbGxvd19uZWdhdGl2ZXM6IHRydWUsXG4gIHBhcmVuc19mb3JfbmVnYXRpdmVzOiBmYWxzZSxcbiAgbmVnYXRpdmVfc2lnbl9iZWZvcmVfZGlnaXRzOiBmYWxzZSxcbiAgbmVnYXRpdmVfc2lnbl9hZnRlcl9kaWdpdHM6IGZhbHNlLFxuICBhbGxvd19uZWdhdGl2ZV9zaWduX3BsYWNlaG9sZGVyOiBmYWxzZSxcbiAgdGhvdXNhbmRzX3NlcGFyYXRvcjogJywnLFxuICBkZWNpbWFsX3NlcGFyYXRvcjogJy4nLFxuICBhbGxvd19kZWNpbWFsOiB0cnVlLFxuICByZXF1aXJlX2RlY2ltYWw6IGZhbHNlLFxuICBkaWdpdHNfYWZ0ZXJfZGVjaW1hbDogWzJdLFxuICBhbGxvd19zcGFjZV9hZnRlcl9kaWdpdHM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0N1cnJlbmN5KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMpO1xuICByZXR1cm4gY3VycmVuY3lSZWdleChvcHRpb25zKS50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGF0YVVSSTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbGlkTWVkaWFUeXBlID0gL15bYS16XStcXC9bYS16MC05XFwtXFwrXSskL2k7XG52YXIgdmFsaWRBdHRyaWJ1dGUgPSAvXlthLXpcXC1dKz1bYS16MC05XFwtXSskL2k7XG52YXIgdmFsaWREYXRhID0gL15bYS16MC05IVxcJCYnXFwoXFwpXFwqXFwrLDs9XFwtXFwuX346QFxcL1xcPyVcXHNdKiQvaTtcblxuZnVuY3Rpb24gaXNEYXRhVVJJKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgZGF0YSA9IHN0ci5zcGxpdCgnLCcpO1xuXG4gIGlmIChkYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYXR0cmlidXRlcyA9IGRhdGEuc2hpZnQoKS50cmltKCkuc3BsaXQoJzsnKTtcbiAgdmFyIHNjaGVtZUFuZE1lZGlhVHlwZSA9IGF0dHJpYnV0ZXMuc2hpZnQoKTtcblxuICBpZiAoc2NoZW1lQW5kTWVkaWFUeXBlLnN1YnN0cigwLCA1KSAhPT0gJ2RhdGE6Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtZWRpYVR5cGUgPSBzY2hlbWVBbmRNZWRpYVR5cGUuc3Vic3RyKDUpO1xuXG4gIGlmIChtZWRpYVR5cGUgIT09ICcnICYmICF2YWxpZE1lZGlhVHlwZS50ZXN0KG1lZGlhVHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gYXR0cmlidXRlcy5sZW5ndGggLSAxICYmIGF0dHJpYnV0ZXNbaV0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2U2NCcpIHsvLyBva1xuICAgIH0gZWxzZSBpZiAoIXZhbGlkQXR0cmlidXRlLnRlc3QoYXR0cmlidXRlc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZGF0YS5sZW5ndGg7IF9pKyspIHtcbiAgICBpZiAoIXZhbGlkRGF0YS50ZXN0KGRhdGFbX2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RlY2ltYWw7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2luY2x1ZGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2luY2x1ZGVzXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBkZWNpbWFsUmVnRXhwKG9wdGlvbnMpIHtcbiAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeWy0rXT8oWzAtOV0rKT8oXFxcXFwiLmNvbmNhdChfYWxwaGEuZGVjaW1hbFtvcHRpb25zLmxvY2FsZV0sIFwiWzAtOV17XCIpLmNvbmNhdChvcHRpb25zLmRlY2ltYWxfZGlnaXRzLCBcIn0pXCIpLmNvbmNhdChvcHRpb25zLmZvcmNlX2RlY2ltYWwgPyAnJyA6ICc/JywgXCIkXCIpKTtcbiAgcmV0dXJuIHJlZ0V4cDtcbn1cblxudmFyIGRlZmF1bHRfZGVjaW1hbF9vcHRpb25zID0ge1xuICBmb3JjZV9kZWNpbWFsOiBmYWxzZSxcbiAgZGVjaW1hbF9kaWdpdHM6ICcxLCcsXG4gIGxvY2FsZTogJ2VuLVVTJ1xufTtcbnZhciBibGFja2xpc3QgPSBbJycsICctJywgJysnXTtcblxuZnVuY3Rpb24gaXNEZWNpbWFsKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2RlY2ltYWxfb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMubG9jYWxlIGluIF9hbHBoYS5kZWNpbWFsKSB7XG4gICAgcmV0dXJuICEoMCwgX2luY2x1ZGVzLmRlZmF1bHQpKGJsYWNrbGlzdCwgc3RyLnJlcGxhY2UoLyAvZywgJycpKSAmJiBkZWNpbWFsUmVnRXhwKG9wdGlvbnMpLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9jYWxlICdcIi5jb25jYXQob3B0aW9ucy5sb2NhbGUsIFwiJ1wiKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGl2aXNpYmxlQnk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9GbG9hdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdG9GbG9hdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzRGl2aXNpYmxlQnkoc3RyLCBudW0pIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfdG9GbG9hdC5kZWZhdWx0KShzdHIpICUgcGFyc2VJbnQobnVtLCAxMCkgPT09IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRW1haWw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG52YXIgX2lzQnl0ZUxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNCeXRlTGVuZ3RoXCIpKTtcblxudmFyIF9pc0ZRRE4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzRlFETlwiKSk7XG5cbnZhciBfaXNJUCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNJUFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkgeyByZXR1cm47IH0gdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICByZXF1aXJlX2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxudmFyIHNwbGl0TmFtZUFkZHJlc3MgPSAvXihbXlxceDAwLVxceDFGXFx4N0YtXFx4OUZcXGNYXSspPCguKyk+JC9pO1xudmFyIGVtYWlsVXNlclBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl0rJC9pO1xudmFyIGdtYWlsVXNlclBhcnQgPSAvXlthLXpcXGRdKyQvO1xudmFyIHF1b3RlZEVtYWlsVXNlciA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl0pKSokL2k7XG52YXIgZW1haWxVc2VyVXRmOFBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rJC9pO1xudmFyIHF1b3RlZEVtYWlsVXNlclV0ZjggPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZVxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkqJC9pO1xudmFyIGRlZmF1bHRNYXhFbWFpbExlbmd0aCA9IDI1NDtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuLyoqXG4gKiBWYWxpZGF0ZSBkaXNwbGF5IG5hbWUgYWNjb3JkaW5nIHRvIHRoZSBSRkMyODIyOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNhcHBlbmRpeC1BLjEuMlxuICogQHBhcmFtIHtTdHJpbmd9IGRpc3BsYXlfbmFtZVxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGlzcGxheU5hbWUoZGlzcGxheV9uYW1lKSB7XG4gIHZhciB0cmltX3F1b3RlcyA9IGRpc3BsYXlfbmFtZS5tYXRjaCgvXlwiKC4rKVwiJC9pKTtcbiAgdmFyIGRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3RlcyA9IHRyaW1fcXVvdGVzID8gdHJpbV9xdW90ZXNbMV0gOiBkaXNwbGF5X25hbWU7IC8vIGRpc3BsYXkgbmFtZSB3aXRoIG9ubHkgc3BhY2VzIGlzIG5vdCB2YWxpZFxuXG4gIGlmICghZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzLnRyaW0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBjaGVjayB3aGV0aGVyIGRpc3BsYXkgbmFtZSBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlclxuXG5cbiAgdmFyIGNvbnRhaW5zX2lsbGVnYWwgPSAvW1xcLlwiOzw+XS8udGVzdChkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMpO1xuXG4gIGlmIChjb250YWluc19pbGxlZ2FsKSB7XG4gICAgLy8gaWYgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzLFxuICAgIC8vIG11c3QgdG8gYmUgZW5jbG9zZWQgaW4gZG91YmxlLXF1b3Rlcywgb3RoZXJ3aXNlIGl0J3Mgbm90IGEgdmFsaWQgZGlzcGxheSBuYW1lXG4gICAgaWYgKCF0cmltX3F1b3Rlcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gdGhlIHF1b3RlcyBpbiBkaXNwbGF5IG5hbWUgbXVzdCBzdGFydCB3aXRoIGNoYXJhY3RlciBzeW1ib2wgXFxcblxuXG4gICAgdmFyIGFsbF9zdGFydF93aXRoX2JhY2tfc2xhc2ggPSBkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMuc3BsaXQoJ1wiJykubGVuZ3RoID09PSBkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMuc3BsaXQoJ1xcXFxcIicpLmxlbmd0aDtcblxuICAgIGlmICghYWxsX3N0YXJ0X3dpdGhfYmFja19zbGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0VtYWlsKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2VtYWlsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLnJlcXVpcmVfZGlzcGxheV9uYW1lIHx8IG9wdGlvbnMuYWxsb3dfZGlzcGxheV9uYW1lKSB7XG4gICAgdmFyIGRpc3BsYXlfZW1haWwgPSBzdHIubWF0Y2goc3BsaXROYW1lQWRkcmVzcyk7XG5cbiAgICBpZiAoZGlzcGxheV9lbWFpbCkge1xuICAgICAgdmFyIGRpc3BsYXlfbmFtZTtcblxuICAgICAgdmFyIF9kaXNwbGF5X2VtYWlsID0gX3NsaWNlZFRvQXJyYXkoZGlzcGxheV9lbWFpbCwgMyk7XG5cbiAgICAgIGRpc3BsYXlfbmFtZSA9IF9kaXNwbGF5X2VtYWlsWzFdO1xuICAgICAgc3RyID0gX2Rpc3BsYXlfZW1haWxbMl07XG5cbiAgICAgIC8vIHNvbWV0aW1lcyBuZWVkIHRvIHRyaW0gdGhlIGxhc3Qgc3BhY2UgdG8gZ2V0IHRoZSBkaXNwbGF5IG5hbWVcbiAgICAgIC8vIGJlY2F1c2UgdGhlcmUgbWF5IGJlIGEgc3BhY2UgYmV0d2VlbiBkaXNwbGF5IG5hbWUgYW5kIGVtYWlsIGFkZHJlc3NcbiAgICAgIC8vIGVnLiBteW5hbWUgPGFkZHJlc3NAZ21haWwuY29tPlxuICAgICAgLy8gdGhlIGRpc3BsYXkgbmFtZSBpcyBgbXluYW1lYCBpbnN0ZWFkIG9mIGBteW5hbWUgYCwgc28gbmVlZCB0byB0cmltIHRoZSBsYXN0IHNwYWNlXG4gICAgICBpZiAoZGlzcGxheV9uYW1lLmVuZHNXaXRoKCcgJykpIHtcbiAgICAgICAgZGlzcGxheV9uYW1lID0gZGlzcGxheV9uYW1lLnN1YnN0cigwLCBkaXNwbGF5X25hbWUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWRhdGVEaXNwbGF5TmFtZShkaXNwbGF5X25hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW9wdGlvbnMuaWdub3JlX21heF9sZW5ndGggJiYgc3RyLmxlbmd0aCA+IGRlZmF1bHRNYXhFbWFpbExlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcGFydHMucG9wKCk7XG4gIHZhciB1c2VyID0gcGFydHMuam9pbignQCcpO1xuICB2YXIgbG93ZXJfZG9tYWluID0gZG9tYWluLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKG9wdGlvbnMuZG9tYWluX3NwZWNpZmljX3ZhbGlkYXRpb24gJiYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSkge1xuICAgIC8qXG4gICAgICBQcmV2aW91c2x5IHdlIHJlbW92ZWQgZG90cyBmb3IgZ21haWwgYWRkcmVzc2VzIGJlZm9yZSB2YWxpZGF0aW5nLlxuICAgICAgVGhpcyB3YXMgcmVtb3ZlZCBiZWNhdXNlIGl0IGFsbG93cyBgbXVsdGlwbGUuLmRvdHNAZ21haWwuY29tYFxuICAgICAgdG8gYmUgcmVwb3J0ZWQgYXMgdmFsaWQsIGJ1dCBpdCBpcyBub3QuXG4gICAgICBHbWFpbCBvbmx5IG5vcm1hbGl6ZXMgc2luZ2xlIGRvdHMsIHJlbW92aW5nIHRoZW0gZnJvbSBoZXJlIGlzIHBvaW50bGVzcyxcbiAgICAgIHNob3VsZCBiZSBkb25lIGluIG5vcm1hbGl6ZUVtYWlsXG4gICAgKi9cbiAgICB1c2VyID0gdXNlci50b0xvd2VyQ2FzZSgpOyAvLyBSZW1vdmluZyBzdWItYWRkcmVzcyBmcm9tIHVzZXJuYW1lIGJlZm9yZSBnbWFpbCB2YWxpZGF0aW9uXG5cbiAgICB2YXIgdXNlcm5hbWUgPSB1c2VyLnNwbGl0KCcrJylbMF07IC8vIERvdHMgYXJlIG5vdCBpbmNsdWRlZCBpbiBnbWFpbCBsZW5ndGggcmVzdHJpY3Rpb25cblxuICAgIGlmICghKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkodXNlcm5hbWUucmVwbGFjZSgnLicsICcnKSwge1xuICAgICAgbWluOiA2LFxuICAgICAgbWF4OiAzMFxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF91c2VyX3BhcnRzID0gdXNlcm5hbWUuc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VzZXJfcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZ21haWxVc2VyUGFydC50ZXN0KF91c2VyX3BhcnRzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzQnl0ZUxlbmd0aC5kZWZhdWx0KSh1c2VyLCB7XG4gICAgbWF4OiA2NFxuICB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkoZG9tYWluLCB7XG4gICAgbWF4OiAyNTRcbiAgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoISgwLCBfaXNGUUROLmRlZmF1bHQpKGRvbWFpbiwge1xuICAgIHJlcXVpcmVfdGxkOiBvcHRpb25zLnJlcXVpcmVfdGxkXG4gIH0pKSB7XG4gICAgaWYgKCFvcHRpb25zLmFsbG93X2lwX2RvbWFpbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghKDAsIF9pc0lQLmRlZmF1bHQpKGRvbWFpbikpIHtcbiAgICAgIGlmICghZG9tYWluLnN0YXJ0c1dpdGgoJ1snKSB8fCAhZG9tYWluLmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9CcmFja2V0ZG9tYWluID0gZG9tYWluLnN1YnN0cigxLCBkb21haW4ubGVuZ3RoIC0gMik7XG5cbiAgICAgIGlmIChub0JyYWNrZXRkb21haW4ubGVuZ3RoID09PSAwIHx8ICEoMCwgX2lzSVAuZGVmYXVsdCkobm9CcmFja2V0ZG9tYWluKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHVzZXJbMF0gPT09ICdcIicpIHtcbiAgICB1c2VyID0gdXNlci5zbGljZSgxLCB1c2VyLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IHF1b3RlZEVtYWlsVXNlclV0ZjgudGVzdCh1c2VyKSA6IHF1b3RlZEVtYWlsVXNlci50ZXN0KHVzZXIpO1xuICB9XG5cbiAgdmFyIHBhdHRlcm4gPSBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IGVtYWlsVXNlclV0ZjhQYXJ0IDogZW1haWxVc2VyUGFydDtcbiAgdmFyIHVzZXJfcGFydHMgPSB1c2VyLnNwbGl0KCcuJyk7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QodXNlcl9wYXJ0c1tfaTJdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtcHR5O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfaXNfZW1wdHlfb3B0aW9ucyA9IHtcbiAgaWdub3JlX3doaXRlc3BhY2U6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0VtcHR5KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2lzX2VtcHR5X29wdGlvbnMpO1xuICByZXR1cm4gKG9wdGlvbnMuaWdub3JlX3doaXRlc3BhY2UgPyBzdHIudHJpbSgpLmxlbmd0aCA6IHN0ci5sZW5ndGgpID09PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ZRRE47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9mcWRuX29wdGlvbnMgPSB7XG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzRlFETihzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9mcWRuX29wdGlvbnMpO1xuICAvKiBSZW1vdmUgdGhlIG9wdGlvbmFsIHRyYWlsaW5nIGRvdCBiZWZvcmUgY2hlY2tpbmcgdmFsaWRpdHkgKi9cblxuICBpZiAob3B0aW9ucy5hbGxvd190cmFpbGluZ19kb3QgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy4nKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnRzW2ldLmxlbmd0aCA+IDYzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMucmVxdWlyZV90bGQpIHtcbiAgICB2YXIgdGxkID0gcGFydHMucG9wKCk7XG5cbiAgICBpZiAoIXBhcnRzLmxlbmd0aCB8fCAhL14oW2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBkaXNhbGxvdyBzcGFjZXNcblxuXG4gICAgaWYgKC9bXFxzXFx1MjAwMi1cXHUyMDBCXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRlxcdURCNDBcXHVEQzIwXS8udGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgcGFydCwgX2kgPSAwOyBfaSA8IHBhcnRzLmxlbmd0aDsgX2krKykge1xuICAgIHBhcnQgPSBwYXJ0c1tfaV07XG5cbiAgICBpZiAob3B0aW9ucy5hbGxvd191bmRlcnNjb3Jlcykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgfVxuXG4gICAgaWYgKCEvXlthLXpcXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuXG5cbiAgICBpZiAoL1tcXHVmZjAxLVxcdWZmNWVdLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRbMF0gPT09ICctJyB8fCBwYXJ0W3BhcnQubGVuZ3RoIC0gMV0gPT09ICctJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Zsb2F0O1xuZXhwb3J0cy5sb2NhbGVzID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZShcIi4vYWxwaGFcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzRmxvYXQoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZmxvYXQgPSBuZXcgUmVnRXhwKFwiXig/OlstK10pPyg/OlswLTldKyk/KD86XFxcXFwiLmNvbmNhdChvcHRpb25zLmxvY2FsZSA/IF9hbHBoYS5kZWNpbWFsW29wdGlvbnMubG9jYWxlXSA6ICcuJywgXCJbMC05XSopPyg/OltlRV1bXFxcXCtcXFxcLV0/KD86WzAtOV0rKSk/JFwiKSk7XG5cbiAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSAnLicgfHwgc3RyID09PSAnLScgfHwgc3RyID09PSAnKycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KHN0ci5yZXBsYWNlKCcsJywgJy4nKSk7XG4gIHJldHVybiBmbG9hdC50ZXN0KHN0cikgJiYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdtaW4nKSB8fCB2YWx1ZSA+PSBvcHRpb25zLm1pbikgJiYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdtYXgnKSB8fCB2YWx1ZSA8PSBvcHRpb25zLm1heCkgJiYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdsdCcpIHx8IHZhbHVlIDwgb3B0aW9ucy5sdCkgJiYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdndCcpIHx8IHZhbHVlID4gb3B0aW9ucy5ndCk7XG59XG5cbnZhciBsb2NhbGVzID0gT2JqZWN0LmtleXMoX2FscGhhLmRlY2ltYWwpO1xuZXhwb3J0cy5sb2NhbGVzID0gbG9jYWxlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRnVsbFdpZHRoO1xuZXhwb3J0cy5mdWxsV2lkdGggPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmdWxsV2lkdGggPSAvW15cXHUwMDIwLVxcdTAwN0VcXHVGRjYxLVxcdUZGOUZcXHVGRkEwLVxcdUZGRENcXHVGRkU4LVxcdUZGRUUwLTlhLXpBLVpdLztcbmV4cG9ydHMuZnVsbFdpZHRoID0gZnVsbFdpZHRoO1xuXG5mdW5jdGlvbiBpc0Z1bGxXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGZ1bGxXaWR0aC50ZXN0KHN0cik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhbGZXaWR0aDtcbmV4cG9ydHMuaGFsZldpZHRoID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGFsZldpZHRoID0gL1tcXHUwMDIwLVxcdTAwN0VcXHVGRjYxLVxcdUZGOUZcXHVGRkEwLVxcdUZGRENcXHVGRkU4LVxcdUZGRUUwLTlhLXpBLVpdLztcbmV4cG9ydHMuaGFsZldpZHRoID0gaGFsZldpZHRoO1xuXG5mdW5jdGlvbiBpc0hhbGZXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhhbGZXaWR0aC50ZXN0KHN0cik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhc2g7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBsZW5ndGhzID0ge1xuICBtZDU6IDMyLFxuICBtZDQ6IDMyLFxuICBzaGExOiA0MCxcbiAgc2hhMjU2OiA2NCxcbiAgc2hhMzg0OiA5NixcbiAgc2hhNTEyOiAxMjgsXG4gIHJpcGVtZDEyODogMzIsXG4gIHJpcGVtZDE2MDogNDAsXG4gIHRpZ2VyMTI4OiAzMixcbiAgdGlnZXIxNjA6IDQwLFxuICB0aWdlcjE5MjogNDgsXG4gIGNyYzMyOiA4LFxuICBjcmMzMmI6IDhcbn07XG5cbmZ1bmN0aW9uIGlzSGFzaChzdHIsIGFsZ29yaXRobSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgaGFzaCA9IG5ldyBSZWdFeHAoXCJeW2EtZkEtRjAtOV17XCIuY29uY2F0KGxlbmd0aHNbYWxnb3JpdGhtXSwgXCJ9JFwiKSk7XG4gIHJldHVybiBoYXNoLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIZXhDb2xvcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleGNvbG9yID0gL14jPyhbMC05QS1GXXszfXxbMC05QS1GXXs0fXxbMC05QS1GXXs2fXxbMC05QS1GXXs4fSkkL2k7XG5cbmZ1bmN0aW9uIGlzSGV4Q29sb3Ioc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhjb2xvci50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSGV4YWRlY2ltYWw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhhZGVjaW1hbCA9IC9eKDB4fDBoKT9bMC05QS1GXSskL2k7XG5cbmZ1bmN0aW9uIGlzSGV4YWRlY2ltYWwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhhZGVjaW1hbC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuMTEuMy4gIEV4YW1wbGVzXG5cbiAgIFRoZSBmb2xsb3dpbmcgYWRkcmVzc2VzXG5cbiAgICAgICAgICAgICBmZTgwOjoxMjM0IChvbiB0aGUgMXN0IGxpbmsgb2YgdGhlIG5vZGUpXG4gICAgICAgICAgICAgZmYwMjo6NTY3OCAob24gdGhlIDV0aCBsaW5rIG9mIHRoZSBub2RlKVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMgKG9uIHRoZSAxMHRoIG9yZ2FuaXphdGlvbiBvZiB0aGUgbm9kZSlcblxuICAgd291bGQgYmUgcmVwcmVzZW50ZWQgYXMgZm9sbG93czpcblxuICAgICAgICAgICAgIGZlODA6OjEyMzQlMVxuICAgICAgICAgICAgIGZmMDI6OjU2NzglNVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMlMTBcblxuICAgKEhlcmUgd2UgYXNzdW1lIGEgbmF0dXJhbCB0cmFuc2xhdGlvbiBmcm9tIGEgem9uZSBpbmRleCB0byB0aGVcbiAgIDx6b25lX2lkPiBwYXJ0LCB3aGVyZSB0aGUgTnRoIHpvbmUgb2YgYW55IHNjb3BlIGlzIHRyYW5zbGF0ZWQgaW50b1xuICAgXCJOXCIuKVxuXG4gICBJZiB3ZSB1c2UgaW50ZXJmYWNlIG5hbWVzIGFzIDx6b25lX2lkPiwgdGhvc2UgYWRkcmVzc2VzIGNvdWxkIGFsc28gYmVcbiAgIHJlcHJlc2VudGVkIGFzIGZvbGxvd3M6XG5cbiAgICAgICAgICAgIGZlODA6OjEyMzQlbmUwXG4gICAgICAgICAgICBmZjAyOjo1Njc4JXB2YzEuM1xuICAgICAgICAgICAgZmYwODo6OWFiYyVpbnRlcmZhY2UxMFxuXG4gICB3aGVyZSB0aGUgaW50ZXJmYWNlIFwibmUwXCIgYmVsb25ncyB0byB0aGUgMXN0IGxpbmssIFwicHZjMS4zXCIgYmVsb25nc1xuICAgdG8gdGhlIDV0aCBsaW5rLCBhbmQgXCJpbnRlcmZhY2UxMFwiIGJlbG9uZ3MgdG8gdGhlIDEwdGggb3JnYW5pemF0aW9uLlxuICogKiAqL1xudmFyIGlwdjRNYXliZSA9IC9eKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KSQvO1xudmFyIGlwdjZCbG9jayA9IC9eWzAtOUEtRl17MSw0fSQvaTtcblxuZnVuY3Rpb24gaXNJUChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuXG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghaXB2NE1heWJlLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydHNbM10gPD0gMjU1O1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc2Jykge1xuICAgIHZhciBhZGRyZXNzQW5kWm9uZSA9IFtzdHJdOyAvLyBpcHY2IGFkZHJlc3NlcyBjb3VsZCBoYXZlIHNjb3BlZCBhcmNoaXRlY3R1cmVcbiAgICAvLyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQwMDcjc2VjdGlvbi0xMVxuXG4gICAgaWYgKHN0ci5pbmNsdWRlcygnJScpKSB7XG4gICAgICBhZGRyZXNzQW5kWm9uZSA9IHN0ci5zcGxpdCgnJScpO1xuXG4gICAgICBpZiAoYWRkcmVzc0FuZFpvbmUubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIC8vIGl0IG11c3QgYmUganVzdCB0d28gcGFydHNcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFkZHJlc3NBbmRab25lWzBdLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgLy8gdGhlIGZpcnN0IHBhcnQgbXVzdCBiZSB0aGUgYWRkcmVzc1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRyZXNzQW5kWm9uZVsxXSA9PT0gJycpIHtcbiAgICAgICAgLy8gdGhlIHNlY29uZCBwYXJ0IG11c3Qgbm90IGJlIGVtcHR5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYmxvY2tzID0gYWRkcmVzc0FuZFpvbmVbMF0uc3BsaXQoJzonKTtcbiAgICB2YXIgZm91bmRPbWlzc2lvbkJsb2NrID0gZmFsc2U7IC8vIG1hcmtlciB0byBpbmRpY2F0ZSA6OlxuICAgIC8vIEF0IGxlYXN0IHNvbWUgT1MgYWNjZXB0IHRoZSBsYXN0IDMyIGJpdHMgb2YgYW4gSVB2NiBhZGRyZXNzXG4gICAgLy8gKGkuZS4gMiBvZiB0aGUgYmxvY2tzKSBpbiBJUHY0IG5vdGF0aW9uLCBhbmQgUkZDIDM0OTMgc2F5c1xuICAgIC8vIHRoYXQgJzo6ZmZmZjphLmIuYy5kJyBpcyB2YWxpZCBmb3IgSVB2NC1tYXBwZWQgSVB2NiBhZGRyZXNzZXMsXG4gICAgLy8gYW5kICc6OmEuYi5jLmQnIGlzIGRlcHJlY2F0ZWQsIGJ1dCBhbHNvIHZhbGlkLlxuXG4gICAgdmFyIGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA9IGlzSVAoYmxvY2tzW2Jsb2Nrcy5sZW5ndGggLSAxXSwgNCk7XG4gICAgdmFyIGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MgPSBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPyA3IDogODtcblxuICAgIGlmIChibG9ja3MubGVuZ3RoID4gZXhwZWN0ZWROdW1iZXJPZkJsb2Nrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gaW5pdGlhbCBvciBmaW5hbCA6OlxuXG5cbiAgICBpZiAoc3RyID09PSAnOjonKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIC8vIHRlc3QgZm9yIGEgOjogd2hpY2ggY2FuIG5vdCBiZSBhdCB0aGUgc3RyaW5nIHN0YXJ0L2VuZFxuICAgICAgLy8gc2luY2UgdGhvc2UgY2FzZXMgaGF2ZSBiZWVuIGhhbmRsZWQgYWJvdmVcbiAgICAgIGlmIChibG9ja3NbaV0gPT09ICcnICYmIGkgPiAwICYmIGkgPCBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBtdWx0aXBsZSA6OiBpbiBhZGRyZXNzXG4gICAgICAgIH1cblxuICAgICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgJiYgaSA9PT0gYmxvY2tzLmxlbmd0aCAtIDEpIHsvLyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSB0aGF0IHRoZSBsYXN0XG4gICAgICAgIC8vIGJsb2NrIGlzIGEgdmFsaWQgSVB2NCBhZGRyZXNzXG4gICAgICB9IGVsc2UgaWYgKCFpcHY2QmxvY2sudGVzdChibG9ja3NbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+PSAxO1xuICAgIH1cblxuICAgIHJldHVybiBibG9ja3MubGVuZ3RoID09PSBleHBlY3RlZE51bWJlck9mQmxvY2tzO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lQUmFuZ2U7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNJUCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNJUFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdWJuZXRNYXliZSA9IC9eXFxkezEsMn0kLztcblxuZnVuY3Rpb24gaXNJUFJhbmdlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTsgLy8gcGFydHNbMF0gLT4gaXAsIHBhcnRzWzFdIC0+IHN1Ym5ldFxuXG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXN1Ym5ldE1heWJlLnRlc3QocGFydHNbMV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIERpc2FsbG93IHByZWNlZGluZyAwIGkuZS4gMDEsIDAyLCAuLi5cblxuXG4gIGlmIChwYXJ0c1sxXS5sZW5ndGggPiAxICYmIHBhcnRzWzFdLnN0YXJ0c1dpdGgoJzAnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2lzSVAuZGVmYXVsdCkocGFydHNbMF0sIDQpICYmIHBhcnRzWzFdIDw9IDMyICYmIHBhcnRzWzFdID49IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNCTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzYm4xME1heWJlID0gL14oPzpbMC05XXs5fVh8WzAtOV17MTB9KSQvO1xudmFyIGlzYm4xM01heWJlID0gL14oPzpbMC05XXsxM30pJC87XG52YXIgZmFjdG9yID0gWzEsIDNdO1xuXG5mdW5jdGlvbiBpc0lTQk4oc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcblxuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJU0JOKHN0ciwgMTApIHx8IGlzSVNCTihzdHIsIDEzKTtcbiAgfVxuXG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvW1xccy1dKy9nLCAnJyk7XG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBpO1xuXG4gIGlmICh2ZXJzaW9uID09PSAnMTAnKSB7XG4gICAgaWYgKCFpc2JuMTBNYXliZS50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBjaGVja3N1bSArPSAoaSArIDEpICogc2FuaXRpemVkLmNoYXJBdChpKTtcbiAgICB9XG5cbiAgICBpZiAoc2FuaXRpemVkLmNoYXJBdCg5KSA9PT0gJ1gnKSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIDEwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIHNhbml0aXplZC5jaGFyQXQoOSk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrc3VtICUgMTEgPT09IDApIHtcbiAgICAgIHJldHVybiAhIXNhbml0aXplZDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzEzJykge1xuICAgIGlmICghaXNibjEzTWF5YmUudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNoZWNrc3VtICs9IGZhY3RvcltpICUgMl0gKiBzYW5pdGl6ZWQuY2hhckF0KGkpO1xuICAgIH1cblxuICAgIGlmIChzYW5pdGl6ZWQuY2hhckF0KDEyKSAtICgxMCAtIGNoZWNrc3VtICUgMTApICUgMTAgPT09IDApIHtcbiAgICAgIHJldHVybiAhIXNhbml0aXplZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNJTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzaW4gPSAvXltBLVpdezJ9WzAtOUEtWl17OX1bMC05XSQvO1xuXG5mdW5jdGlvbiBpc0lTSU4oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKCFpc2luLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGVja3N1bVN0ciA9IHN0ci5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGNoYXJhY3RlciwgMzYpO1xuICB9KTtcbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdDtcbiAgdmFyIHRtcE51bTtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IGNoZWNrc3VtU3RyLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgZGlnaXQgPSBjaGVja3N1bVN0ci5zdWJzdHJpbmcoaSwgaSArIDEpO1xuICAgIHRtcE51bSA9IHBhcnNlSW50KGRpZ2l0LCAxMCk7XG5cbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcblxuICAgICAgaWYgKHRtcE51bSA+PSAxMCkge1xuICAgICAgICBzdW0gKz0gdG1wTnVtICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuXG4gICAgc2hvdWxkRG91YmxlID0gIXNob3VsZERvdWJsZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAxKSwgMTApID09PSAoMTAwMDAgLSBzdW0pICUgMTA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNPMzE2NjFBbHBoYTI7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaW5jbHVkZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvaW5jbHVkZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT18zMTY2LTFfYWxwaGEtMlxudmFyIHZhbGlkSVNPMzE2NjFBbHBoYTJDb3VudHJpZXNDb2RlcyA9IFsnQUQnLCAnQUUnLCAnQUYnLCAnQUcnLCAnQUknLCAnQUwnLCAnQU0nLCAnQU8nLCAnQVEnLCAnQVInLCAnQVMnLCAnQVQnLCAnQVUnLCAnQVcnLCAnQVgnLCAnQVonLCAnQkEnLCAnQkInLCAnQkQnLCAnQkUnLCAnQkYnLCAnQkcnLCAnQkgnLCAnQkknLCAnQkonLCAnQkwnLCAnQk0nLCAnQk4nLCAnQk8nLCAnQlEnLCAnQlInLCAnQlMnLCAnQlQnLCAnQlYnLCAnQlcnLCAnQlknLCAnQlonLCAnQ0EnLCAnQ0MnLCAnQ0QnLCAnQ0YnLCAnQ0cnLCAnQ0gnLCAnQ0knLCAnQ0snLCAnQ0wnLCAnQ00nLCAnQ04nLCAnQ08nLCAnQ1InLCAnQ1UnLCAnQ1YnLCAnQ1cnLCAnQ1gnLCAnQ1knLCAnQ1onLCAnREUnLCAnREonLCAnREsnLCAnRE0nLCAnRE8nLCAnRFonLCAnRUMnLCAnRUUnLCAnRUcnLCAnRUgnLCAnRVInLCAnRVMnLCAnRVQnLCAnRkknLCAnRkonLCAnRksnLCAnRk0nLCAnRk8nLCAnRlInLCAnR0EnLCAnR0InLCAnR0QnLCAnR0UnLCAnR0YnLCAnR0cnLCAnR0gnLCAnR0knLCAnR0wnLCAnR00nLCAnR04nLCAnR1AnLCAnR1EnLCAnR1InLCAnR1MnLCAnR1QnLCAnR1UnLCAnR1cnLCAnR1knLCAnSEsnLCAnSE0nLCAnSE4nLCAnSFInLCAnSFQnLCAnSFUnLCAnSUQnLCAnSUUnLCAnSUwnLCAnSU0nLCAnSU4nLCAnSU8nLCAnSVEnLCAnSVInLCAnSVMnLCAnSVQnLCAnSkUnLCAnSk0nLCAnSk8nLCAnSlAnLCAnS0UnLCAnS0cnLCAnS0gnLCAnS0knLCAnS00nLCAnS04nLCAnS1AnLCAnS1InLCAnS1cnLCAnS1knLCAnS1onLCAnTEEnLCAnTEInLCAnTEMnLCAnTEknLCAnTEsnLCAnTFInLCAnTFMnLCAnTFQnLCAnTFUnLCAnTFYnLCAnTFknLCAnTUEnLCAnTUMnLCAnTUQnLCAnTUUnLCAnTUYnLCAnTUcnLCAnTUgnLCAnTUsnLCAnTUwnLCAnTU0nLCAnTU4nLCAnTU8nLCAnTVAnLCAnTVEnLCAnTVInLCAnTVMnLCAnTVQnLCAnTVUnLCAnTVYnLCAnTVcnLCAnTVgnLCAnTVknLCAnTVonLCAnTkEnLCAnTkMnLCAnTkUnLCAnTkYnLCAnTkcnLCAnTkknLCAnTkwnLCAnTk8nLCAnTlAnLCAnTlInLCAnTlUnLCAnTlonLCAnT00nLCAnUEEnLCAnUEUnLCAnUEYnLCAnUEcnLCAnUEgnLCAnUEsnLCAnUEwnLCAnUE0nLCAnUE4nLCAnUFInLCAnUFMnLCAnUFQnLCAnUFcnLCAnUFknLCAnUUEnLCAnUkUnLCAnUk8nLCAnUlMnLCAnUlUnLCAnUlcnLCAnU0EnLCAnU0InLCAnU0MnLCAnU0QnLCAnU0UnLCAnU0cnLCAnU0gnLCAnU0knLCAnU0onLCAnU0snLCAnU0wnLCAnU00nLCAnU04nLCAnU08nLCAnU1InLCAnU1MnLCAnU1QnLCAnU1YnLCAnU1gnLCAnU1knLCAnU1onLCAnVEMnLCAnVEQnLCAnVEYnLCAnVEcnLCAnVEgnLCAnVEonLCAnVEsnLCAnVEwnLCAnVE0nLCAnVE4nLCAnVE8nLCAnVFInLCAnVFQnLCAnVFYnLCAnVFcnLCAnVFonLCAnVUEnLCAnVUcnLCAnVU0nLCAnVVMnLCAnVVknLCAnVVonLCAnVkEnLCAnVkMnLCAnVkUnLCAnVkcnLCAnVkknLCAnVk4nLCAnVlUnLCAnV0YnLCAnV1MnLCAnWUUnLCAnWVQnLCAnWkEnLCAnWk0nLCAnWlcnXTtcblxuZnVuY3Rpb24gaXNJU08zMTY2MUFscGhhMihzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfaW5jbHVkZXMuZGVmYXVsdCkodmFsaWRJU08zMTY2MUFscGhhMkNvdW50cmllc0NvZGVzLCBzdHIudG9VcHBlckNhc2UoKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNPMzE2NjFBbHBoYTM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaW5jbHVkZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvaW5jbHVkZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT18zMTY2LTFfYWxwaGEtM1xudmFyIHZhbGlkSVNPMzE2NjFBbHBoYTNDb3VudHJpZXNDb2RlcyA9IFsnQUZHJywgJ0FMQScsICdBTEInLCAnRFpBJywgJ0FTTScsICdBTkQnLCAnQUdPJywgJ0FJQScsICdBVEEnLCAnQVRHJywgJ0FSRycsICdBUk0nLCAnQUJXJywgJ0FVUycsICdBVVQnLCAnQVpFJywgJ0JIUycsICdCSFInLCAnQkdEJywgJ0JSQicsICdCTFInLCAnQkVMJywgJ0JMWicsICdCRU4nLCAnQk1VJywgJ0JUTicsICdCT0wnLCAnQkVTJywgJ0JJSCcsICdCV0EnLCAnQlZUJywgJ0JSQScsICdJT1QnLCAnQlJOJywgJ0JHUicsICdCRkEnLCAnQkRJJywgJ0tITScsICdDTVInLCAnQ0FOJywgJ0NQVicsICdDWU0nLCAnQ0FGJywgJ1RDRCcsICdDSEwnLCAnQ0hOJywgJ0NYUicsICdDQ0snLCAnQ09MJywgJ0NPTScsICdDT0cnLCAnQ09EJywgJ0NPSycsICdDUkknLCAnQ0lWJywgJ0hSVicsICdDVUInLCAnQ1VXJywgJ0NZUCcsICdDWkUnLCAnRE5LJywgJ0RKSScsICdETUEnLCAnRE9NJywgJ0VDVScsICdFR1knLCAnU0xWJywgJ0dOUScsICdFUkknLCAnRVNUJywgJ0VUSCcsICdGTEsnLCAnRlJPJywgJ0ZKSScsICdGSU4nLCAnRlJBJywgJ0dVRicsICdQWUYnLCAnQVRGJywgJ0dBQicsICdHTUInLCAnR0VPJywgJ0RFVScsICdHSEEnLCAnR0lCJywgJ0dSQycsICdHUkwnLCAnR1JEJywgJ0dMUCcsICdHVU0nLCAnR1RNJywgJ0dHWScsICdHSU4nLCAnR05CJywgJ0dVWScsICdIVEknLCAnSE1EJywgJ1ZBVCcsICdITkQnLCAnSEtHJywgJ0hVTicsICdJU0wnLCAnSU5EJywgJ0lETicsICdJUk4nLCAnSVJRJywgJ0lSTCcsICdJTU4nLCAnSVNSJywgJ0lUQScsICdKQU0nLCAnSlBOJywgJ0pFWScsICdKT1InLCAnS0FaJywgJ0tFTicsICdLSVInLCAnUFJLJywgJ0tPUicsICdLV1QnLCAnS0daJywgJ0xBTycsICdMVkEnLCAnTEJOJywgJ0xTTycsICdMQlInLCAnTEJZJywgJ0xJRScsICdMVFUnLCAnTFVYJywgJ01BQycsICdNS0QnLCAnTURHJywgJ01XSScsICdNWVMnLCAnTURWJywgJ01MSScsICdNTFQnLCAnTUhMJywgJ01UUScsICdNUlQnLCAnTVVTJywgJ01ZVCcsICdNRVgnLCAnRlNNJywgJ01EQScsICdNQ08nLCAnTU5HJywgJ01ORScsICdNU1InLCAnTUFSJywgJ01PWicsICdNTVInLCAnTkFNJywgJ05SVScsICdOUEwnLCAnTkxEJywgJ05DTCcsICdOWkwnLCAnTklDJywgJ05FUicsICdOR0EnLCAnTklVJywgJ05GSycsICdNTlAnLCAnTk9SJywgJ09NTicsICdQQUsnLCAnUExXJywgJ1BTRScsICdQQU4nLCAnUE5HJywgJ1BSWScsICdQRVInLCAnUEhMJywgJ1BDTicsICdQT0wnLCAnUFJUJywgJ1BSSScsICdRQVQnLCAnUkVVJywgJ1JPVScsICdSVVMnLCAnUldBJywgJ0JMTScsICdTSE4nLCAnS05BJywgJ0xDQScsICdNQUYnLCAnU1BNJywgJ1ZDVCcsICdXU00nLCAnU01SJywgJ1NUUCcsICdTQVUnLCAnU0VOJywgJ1NSQicsICdTWUMnLCAnU0xFJywgJ1NHUCcsICdTWE0nLCAnU1ZLJywgJ1NWTicsICdTTEInLCAnU09NJywgJ1pBRicsICdTR1MnLCAnU1NEJywgJ0VTUCcsICdMS0EnLCAnU0ROJywgJ1NVUicsICdTSk0nLCAnU1daJywgJ1NXRScsICdDSEUnLCAnU1lSJywgJ1RXTicsICdUSksnLCAnVFpBJywgJ1RIQScsICdUTFMnLCAnVEdPJywgJ1RLTCcsICdUT04nLCAnVFRPJywgJ1RVTicsICdUVVInLCAnVEtNJywgJ1RDQScsICdUVVYnLCAnVUdBJywgJ1VLUicsICdBUkUnLCAnR0JSJywgJ1VTQScsICdVTUknLCAnVVJZJywgJ1VaQicsICdWVVQnLCAnVkVOJywgJ1ZOTScsICdWR0InLCAnVklSJywgJ1dMRicsICdFU0gnLCAnWUVNJywgJ1pNQicsICdaV0UnXTtcblxuZnVuY3Rpb24gaXNJU08zMTY2MUFscGhhMyhzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfaW5jbHVkZXMuZGVmYXVsdCkodmFsaWRJU08zMTY2MUFscGhhM0NvdW50cmllc0NvZGVzLCBzdHIudG9VcHBlckNhc2UoKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNPODYwMTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8gZnJvbSBodHRwOi8vZ29vLmdsLzBlakhIV1xudmFyIGlzbzg2MDEgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTNdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0Oj8wMCkoW1xcLixdXFxkKyg/ITopKT8pPyhcXDE3WzAtNV1cXGQoW1xcLixdXFxkKyk/KT8oW3paXXwoW1xcKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxudmFyIGlzVmFsaWREYXRlID0gZnVuY3Rpb24gaXNWYWxpZERhdGUoc3RyKSB7XG4gIC8vIHN0ciBtdXN0IGhhdmUgcGFzc2VkIHRoZSBJU084NjAxIGNoZWNrXG4gIC8vIHRoaXMgY2hlY2sgaXMgbWVhbnQgdG8gY2F0Y2ggaW52YWxpZCBkYXRlc1xuICAvLyBsaWtlIDIwMDktMDItMzFcbiAgLy8gZmlyc3QgY2hlY2sgZm9yIG9yZGluYWwgZGF0ZXNcbiAgdmFyIG9yZGluYWxNYXRjaCA9IHN0ci5tYXRjaCgvXihcXGR7NH0pLT8oXFxkezN9KShbIFRdezF9XFwuKnwkKS8pO1xuXG4gIGlmIChvcmRpbmFsTWF0Y2gpIHtcbiAgICB2YXIgb1llYXIgPSBOdW1iZXIob3JkaW5hbE1hdGNoWzFdKTtcbiAgICB2YXIgb0RheSA9IE51bWJlcihvcmRpbmFsTWF0Y2hbMl0pOyAvLyBpZiBpcyBsZWFwIHllYXJcblxuICAgIGlmIChvWWVhciAlIDQgPT09IDAgJiYgb1llYXIgJSAxMDAgIT09IDAgfHwgb1llYXIgJSA0MDAgPT09IDApIHJldHVybiBvRGF5IDw9IDM2NjtcbiAgICByZXR1cm4gb0RheSA8PSAzNjU7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2goLyhcXGR7NH0pLT8oXFxkezAsMn0pLT8oXFxkKikvKS5tYXAoTnVtYmVyKTtcbiAgdmFyIHllYXIgPSBtYXRjaFsxXTtcbiAgdmFyIG1vbnRoID0gbWF0Y2hbMl07XG4gIHZhciBkYXkgPSBtYXRjaFszXTtcbiAgdmFyIG1vbnRoU3RyaW5nID0gbW9udGggPyBcIjBcIi5jb25jYXQobW9udGgpLnNsaWNlKC0yKSA6IG1vbnRoO1xuICB2YXIgZGF5U3RyaW5nID0gZGF5ID8gXCIwXCIuY29uY2F0KGRheSkuc2xpY2UoLTIpIDogZGF5OyAvLyBjcmVhdGUgYSBkYXRlIG9iamVjdCBhbmQgY29tcGFyZVxuXG4gIHZhciBkID0gbmV3IERhdGUoXCJcIi5jb25jYXQoeWVhciwgXCItXCIpLmNvbmNhdChtb250aFN0cmluZyB8fCAnMDEnLCBcIi1cIikuY29uY2F0KGRheVN0cmluZyB8fCAnMDEnKSk7XG5cbiAgaWYgKG1vbnRoICYmIGRheSkge1xuICAgIHJldHVybiBkLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIgJiYgZC5nZXRVVENNb250aCgpICsgMSA9PT0gbW9udGggJiYgZC5nZXRVVENEYXRlKCkgPT09IGRheTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gaXNJU084NjAxKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgY2hlY2sgPSBpc284NjAxLnRlc3Qoc3RyKTtcbiAgaWYgKCFvcHRpb25zKSByZXR1cm4gY2hlY2s7XG4gIGlmIChjaGVjayAmJiBvcHRpb25zLnN0cmljdCkgcmV0dXJuIGlzVmFsaWREYXRlKHN0cik7XG4gIHJldHVybiBjaGVjaztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJU1JDO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBzZWUgaHR0cDovL2lzcmMuaWZwaS5vcmcvZW4vaXNyYy1zdGFuZGFyZC9jb2RlLXN5bnRheFxudmFyIGlzcmMgPSAvXltBLVpdezJ9WzAtOUEtWl17M31cXGR7Mn1cXGR7NX0kLztcblxuZnVuY3Rpb24gaXNJU1JDKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaXNyYy50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNTTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzc24gPSAnXlxcXFxkezR9LT9cXFxcZHszfVtcXFxcZFhdJCc7XG5cbmZ1bmN0aW9uIGlzSVNTTihzdHIpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgdGVzdElzc24gPSBpc3NuO1xuICB0ZXN0SXNzbiA9IG9wdGlvbnMucmVxdWlyZV9oeXBoZW4gPyB0ZXN0SXNzbi5yZXBsYWNlKCc/JywgJycpIDogdGVzdElzc247XG4gIHRlc3RJc3NuID0gb3B0aW9ucy5jYXNlX3NlbnNpdGl2ZSA/IG5ldyBSZWdFeHAodGVzdElzc24pIDogbmV3IFJlZ0V4cCh0ZXN0SXNzbiwgJ2knKTtcblxuICBpZiAoIXRlc3RJc3NuLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkaWdpdHMgPSBzdHIucmVwbGFjZSgnLScsICcnKS50b1VwcGVyQ2FzZSgpO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGlnaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRpZ2l0ID0gZGlnaXRzW2ldO1xuICAgIGNoZWNrc3VtICs9IChkaWdpdCA9PT0gJ1gnID8gMTAgOiArZGlnaXQpICogKDggLSBpKTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSAlIDExID09PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lkZW50aXR5Q2FyZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbGlkYXRvcnMgPSB7XG4gIEVTOiBmdW5jdGlvbiBFUyhzdHIpIHtcbiAgICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICAgIHZhciBETkkgPSAvXlswLTlYLVpdWzAtOV17N31bVFJXQUdNWUZQRFhCTkpaU1FWSExDS0VdJC87XG4gICAgdmFyIGNoYXJzVmFsdWUgPSB7XG4gICAgICBYOiAwLFxuICAgICAgWTogMSxcbiAgICAgIFo6IDJcbiAgICB9O1xuICAgIHZhciBjb250cm9sRGlnaXRzID0gWydUJywgJ1InLCAnVycsICdBJywgJ0cnLCAnTScsICdZJywgJ0YnLCAnUCcsICdEJywgJ1gnLCAnQicsICdOJywgJ0onLCAnWicsICdTJywgJ1EnLCAnVicsICdIJywgJ0wnLCAnQycsICdLJywgJ0UnXTsgLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuXG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCkudG9VcHBlckNhc2UoKTsgLy8gdmFsaWRhdGUgdGhlIGRhdGEgc3RydWN0dXJlXG5cbiAgICBpZiAoIUROSS50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIHZhbGlkYXRlIHRoZSBjb250cm9sIGRpZ2l0XG5cblxuICAgIHZhciBudW1iZXIgPSBzYW5pdGl6ZWQuc2xpY2UoMCwgLTEpLnJlcGxhY2UoL1tYLFksWl0vZywgZnVuY3Rpb24gKGNoYXIpIHtcbiAgICAgIHJldHVybiBjaGFyc1ZhbHVlW2NoYXJdO1xuICAgIH0pO1xuICAgIHJldHVybiBzYW5pdGl6ZWQuZW5kc1dpdGgoY29udHJvbERpZ2l0c1tudW1iZXIgJSAyM10pO1xuICB9LFxuICAnaGUtSUwnOiBmdW5jdGlvbiBoZUlMKHN0cikge1xuICAgIHZhciBETkkgPSAvXlxcZHs5fSQvOyAvLyBzYW5pdGl6ZSB1c2VyIGlucHV0XG5cbiAgICB2YXIgc2FuaXRpemVkID0gc3RyLnRyaW0oKTsgLy8gdmFsaWRhdGUgdGhlIGRhdGEgc3RydWN0dXJlXG5cbiAgICBpZiAoIUROSS50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBzYW5pdGl6ZWQ7XG4gICAgdmFyIHN1bSA9IDAsXG4gICAgICAgIGluY051bTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluY051bSA9IE51bWJlcihpZFtpXSkgKiAoaSAlIDIgKyAxKTsgLy8gTXVsdGlwbHkgbnVtYmVyIGJ5IDEgb3IgMlxuXG4gICAgICBzdW0gKz0gaW5jTnVtID4gOSA/IGluY051bSAtIDkgOiBpbmNOdW07IC8vIFN1bSB0aGUgZGlnaXRzIHVwIGFuZCBhZGQgdG8gdG90YWxcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtICUgMTAgPT09IDA7XG4gIH0sXG4gICd6aC1UVyc6IGZ1bmN0aW9uIHpoVFcoc3RyKSB7XG4gICAgdmFyIEFMUEhBQkVUX0NPREVTID0ge1xuICAgICAgQTogMTAsXG4gICAgICBCOiAxMSxcbiAgICAgIEM6IDEyLFxuICAgICAgRDogMTMsXG4gICAgICBFOiAxNCxcbiAgICAgIEY6IDE1LFxuICAgICAgRzogMTYsXG4gICAgICBIOiAxNyxcbiAgICAgIEk6IDM0LFxuICAgICAgSjogMTgsXG4gICAgICBLOiAxOSxcbiAgICAgIEw6IDIwLFxuICAgICAgTTogMjEsXG4gICAgICBOOiAyMixcbiAgICAgIE86IDM1LFxuICAgICAgUDogMjMsXG4gICAgICBROiAyNCxcbiAgICAgIFI6IDI1LFxuICAgICAgUzogMjYsXG4gICAgICBUOiAyNyxcbiAgICAgIFU6IDI4LFxuICAgICAgVjogMjksXG4gICAgICBXOiAzMixcbiAgICAgIFg6IDMwLFxuICAgICAgWTogMzEsXG4gICAgICBaOiAzM1xuICAgIH07XG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIS9eW0EtWl1bMC05XXs5fSQvLnRlc3Qoc2FuaXRpemVkKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHNhbml0aXplZCkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG51bWJlciwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgY29kZSA9IEFMUEhBQkVUX0NPREVTW251bWJlcl07XG4gICAgICAgIHJldHVybiBjb2RlICUgMTAgKiA5ICsgTWF0aC5mbG9vcihjb2RlIC8gMTApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDkpIHtcbiAgICAgICAgcmV0dXJuICgxMCAtIHN1bSAlIDEwIC0gTnVtYmVyKG51bWJlcikpICUgMTAgPT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdW0gKyBOdW1iZXIobnVtYmVyKSAqICg5IC0gaW5kZXgpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpc0lkZW50aXR5Q2FyZChzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChsb2NhbGUgaW4gdmFsaWRhdG9ycykge1xuICAgIHJldHVybiB2YWxpZGF0b3JzW2xvY2FsZV0oc3RyKTtcbiAgfSBlbHNlIGlmIChsb2NhbGUgPT09ICdhbnknKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbGlkYXRvcnMpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3R3YXJsb3N0L2lzdGFuYnVsL2Jsb2IvbWFzdGVyL2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLm1kI2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLXB1cnBvc2VzXG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gdmFsaWRhdG9yc1trZXldO1xuXG4gICAgICAgIGlmICh2YWxpZGF0b3Ioc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSW47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9TdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvdG9TdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBpc0luKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgaTtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9wdGlvbnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG5cbiAgICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBpKSkge1xuICAgICAgICBhcnJheVtpXSA9ICgwLCBfdG9TdHJpbmcuZGVmYXVsdCkob3B0aW9uc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2Yoc3RyKSA+PSAwO1xuICB9IGVsc2UgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5pbmRleE9mKHN0cikgPj0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJbnQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbnQgPSAvXig/OlstK10/KD86MHxbMS05XVswLTldKikpJC87XG52YXIgaW50TGVhZGluZ1plcm9lcyA9IC9eWy0rXT9bMC05XSskLztcblxuZnVuY3Rpb24gaXNJbnQoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBHZXQgdGhlIHJlZ2V4IHRvIHVzZSBmb3IgdGVzdGluZywgYmFzZWQgb24gd2hldGhlclxuICAvLyBsZWFkaW5nIHplcm9lcyBhcmUgYWxsb3dlZCBvciBub3QuXG5cbiAgdmFyIHJlZ2V4ID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYWxsb3dfbGVhZGluZ196ZXJvZXMnKSAmJiAhb3B0aW9ucy5hbGxvd19sZWFkaW5nX3plcm9lcyA/IGludCA6IGludExlYWRpbmdaZXJvZXM7IC8vIENoZWNrIG1pbi9tYXgvbHQvZ3RcblxuICB2YXIgbWluQ2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgc3RyID49IG9wdGlvbnMubWluO1xuICB2YXIgbWF4Q2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWF4JykgfHwgc3RyIDw9IG9wdGlvbnMubWF4O1xuICB2YXIgbHRDaGVja1Bhc3NlZCA9ICFvcHRpb25zLmhhc093blByb3BlcnR5KCdsdCcpIHx8IHN0ciA8IG9wdGlvbnMubHQ7XG4gIHZhciBndENoZWNrUGFzc2VkID0gIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2d0JykgfHwgc3RyID4gb3B0aW9ucy5ndDtcbiAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyKSAmJiBtaW5DaGVja1Bhc3NlZCAmJiBtYXhDaGVja1Bhc3NlZCAmJiBsdENoZWNrUGFzc2VkICYmIGd0Q2hlY2tQYXNzZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSlNPTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gaXNKU09OKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIHRyeSB7XG4gICAgdmFyIG9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICByZXR1cm4gISFvYmogJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JztcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGlnbm9yZSAqL1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0pXVDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGp3dCA9IC9eKFtBLVphLXowLTlcXC1ffitcXC9dK1s9XXswLDJ9KVxcLihbQS1aYS16MC05XFwtX34rXFwvXStbPV17MCwyfSkoPzpcXC4oW0EtWmEtejAtOVxcLV9+K1xcL10rWz1dezAsMn0pKT8kLztcblxuZnVuY3Rpb24gaXNKV1Qoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBqd3QudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGxhdCA9IC9eXFwoP1srLV0/KDkwKFxcLjArKT98WzEtOF0/XFxkKFxcLlxcZCspPykkLztcbnZhciBsb25nID0gL15cXHM/WystXT8oMTgwKFxcLjArKT98MVswLTddXFxkKFxcLlxcZCspP3xcXGR7MSwyfShcXC5cXGQrKT8pXFwpPyQvO1xuXG5mdW5jdGlvbiBfZGVmYXVsdChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgaWYgKCFzdHIuaW5jbHVkZXMoJywnKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcGFpciA9IHN0ci5zcGxpdCgnLCcpO1xuICBpZiAocGFpclswXS5zdGFydHNXaXRoKCcoJykgJiYgIXBhaXJbMV0uZW5kc1dpdGgoJyknKSB8fCBwYWlyWzFdLmVuZHNXaXRoKCcpJykgJiYgIXBhaXJbMF0uc3RhcnRzV2l0aCgnKCcpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBsYXQudGVzdChwYWlyWzBdKSAmJiBsb25nLnRlc3QocGFpclsxXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgbWluO1xuICB2YXIgbWF4O1xuXG4gIGlmIChfdHlwZW9mKG9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgIG1pbiA9IG9wdGlvbnMubWluIHx8IDA7XG4gICAgbWF4ID0gb3B0aW9ucy5tYXg7XG4gIH0gZWxzZSB7XG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHk6IGlzTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdIHx8IDA7XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG5cbiAgdmFyIHN1cnJvZ2F0ZVBhaXJzID0gc3RyLm1hdGNoKC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2cpIHx8IFtdO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aCAtIHN1cnJvZ2F0ZVBhaXJzLmxlbmd0aDtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0xvd2VyY2FzZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNMb3dlcmNhc2Uoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIgPT09IHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01BQ0FkZHJlc3M7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtYWNBZGRyZXNzID0gL14oWzAtOWEtZkEtRl1bMC05YS1mQS1GXTopezV9KFswLTlhLWZBLUZdWzAtOWEtZkEtRl0pJC87XG52YXIgbWFjQWRkcmVzc05vQ29sb25zID0gL14oWzAtOWEtZkEtRl0pezEyfSQvO1xudmFyIG1hY0FkZHJlc3NXaXRoSHlwaGVuID0gL14oWzAtOWEtZkEtRl1bMC05YS1mQS1GXS0pezV9KFswLTlhLWZBLUZdWzAtOWEtZkEtRl0pJC87XG52YXIgbWFjQWRkcmVzc1dpdGhTcGFjZXMgPSAvXihbMC05YS1mQS1GXVswLTlhLWZBLUZdXFxzKXs1fShbMC05YS1mQS1GXVswLTlhLWZBLUZdKSQvO1xuXG5mdW5jdGlvbiBpc01BQ0FkZHJlc3Moc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ub19jb2xvbnMpIHtcbiAgICByZXR1cm4gbWFjQWRkcmVzc05vQ29sb25zLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBtYWNBZGRyZXNzLnRlc3Qoc3RyKSB8fCBtYWNBZGRyZXNzV2l0aEh5cGhlbi50ZXN0KHN0cikgfHwgbWFjQWRkcmVzc1dpdGhTcGFjZXMudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01ENTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1kNSA9IC9eW2EtZjAtOV17MzJ9JC87XG5cbmZ1bmN0aW9uIGlzTUQ1KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gbWQ1LnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNYWduZXRVUkk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtYWduZXRVUkkgPSAvXm1hZ25ldDpcXD94dD11cm46W2EtejAtOV0rOlthLXowLTldezMyLDQwfSZkbj0uKyZ0cj0uKyQvaTtcblxuZnVuY3Rpb24gaXNNYWduZXRVUkkodXJsKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHVybCk7XG4gIHJldHVybiBtYWduZXRVUkkudGVzdCh1cmwudHJpbSgpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNaW1lVHlwZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBzdHJpbmcgbWF0Y2hlcyB0byBhIGNvcnJlY3QgTWVkaWEgdHlwZSBmb3JtYXQgKE1JTUUgdHlwZSlcblxuICBUaGlzIGZ1bmN0aW9uIG9ubHkgY2hlY2tzIGlzIHRoZSBzdHJpbmcgZm9ybWF0IGZvbGxvd3MgdGhlXG4gIGV0YWJsaXNoZWQgcnVsZXMgYnkgdGhlIGFjY29yZGluZyBSRkMgc3BlY2lmaWNhdGlvbnMuXG4gIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgJ2NoYXJzZXQnIGluIHRleHR1YWwgbWVkaWEgdHlwZXNcbiAgKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NjU3KS5cblxuICBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGNoZWNrIGFnYWluc3QgYWxsIHRoZSBtZWRpYSB0eXBlcyBsaXN0ZWRcbiAgYnkgdGhlIElBTkEgKGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sKVxuICBiZWNhdXNlIG9mIGxpZ2h0bmVzcyBwdXJwb3NlcyA6IGl0IHdvdWxkIHJlcXVpcmUgdG8gaW5jbHVkZVxuICBhbGwgdGhlc2UgTUlNRSB0eXBlcyBpbiB0aGlzIGxpYnJhaXJ5LCB3aGljaCB3b3VsZCB3ZWlnaCBpdFxuICBzaWduaWZpY2FudGx5LiBUaGlzIGtpbmQgb2YgZWZmb3J0IG1heWJlIGlzIG5vdCB3b3J0aCBmb3IgdGhlIHVzZSB0aGF0XG4gIHRoaXMgZnVuY3Rpb24gaGFzIGluIHRoaXMgZW50aXJlIGxpYnJhaXJ5LlxuXG4gIE1vcmUgaW5mb3JtYXRpb25zIGluIHRoZSBSRkMgc3BlY2lmaWNhdGlvbnMgOlxuICAtIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMDQ1XG4gIC0gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIwNDZcbiAgLSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTMuMS4xLjFcbiAgLSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTMuMS4xLjVcbiovXG4vLyBNYXRjaCBzaW1wbGUgTUlNRSB0eXBlc1xuLy8gTkIgOlxuLy8gICBTdWJ0eXBlIGxlbmd0aCBtdXN0IG5vdCBleGNlZWQgMTAwIGNoYXJhY3RlcnMuXG4vLyAgIFRoaXMgcnVsZSBkb2VzIG5vdCBjb21wbHkgdG8gdGhlIFJGQyBzcGVjcyAod2hhdCBpcyB0aGUgbWF4IGxlbmd0aCA/KS5cbnZhciBtaW1lVHlwZVNpbXBsZSA9IC9eKGFwcGxpY2F0aW9ufGF1ZGlvfGZvbnR8aW1hZ2V8bWVzc2FnZXxtb2RlbHxtdWx0aXBhcnR8dGV4dHx2aWRlbylcXC9bYS16QS1aMC05XFwuXFwtXFwrXXsxLDEwMH0kL2k7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuLy8gSGFuZGxlIFwiY2hhcnNldFwiIGluIFwidGV4dC8qXCJcblxudmFyIG1pbWVUeXBlVGV4dCA9IC9edGV4dFxcL1thLXpBLVowLTlcXC5cXC1cXCtdezEsMTAwfTtcXHM/Y2hhcnNldD0oXCJbYS16QS1aMC05XFwuXFwtXFwrXFxzXXswLDcwfVwifFthLXpBLVowLTlcXC5cXC1cXCtdezAsNzB9KShcXHM/XFwoW2EtekEtWjAtOVxcLlxcLVxcK1xcc117MSwyMH1cXCkpPyQvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4vLyBIYW5kbGUgXCJib3VuZGFyeVwiIGluIFwibXVsdGlwYXJ0LypcIlxuXG52YXIgbWltZVR5cGVNdWx0aXBhcnQgPSAvXm11bHRpcGFydFxcL1thLXpBLVowLTlcXC5cXC1cXCtdezEsMTAwfSg7XFxzPyhib3VuZGFyeXxjaGFyc2V0KT0oXCJbYS16QS1aMC05XFwuXFwtXFwrXFxzXXswLDcwfVwifFthLXpBLVowLTlcXC5cXC1cXCtdezAsNzB9KShcXHM/XFwoW2EtekEtWjAtOVxcLlxcLVxcK1xcc117MSwyMH1cXCkpPyl7MCwyfSQvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cbmZ1bmN0aW9uIGlzTWltZVR5cGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtaW1lVHlwZVNpbXBsZS50ZXN0KHN0cikgfHwgbWltZVR5cGVUZXh0LnRlc3Qoc3RyKSB8fCBtaW1lVHlwZU11bHRpcGFydC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlUGhvbmU7XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBwaG9uZXMgPSB7XG4gICdhbS1BTSc6IC9eKFxcKz8zNzR8MCkoKDEwfFs5fDddWzAtOV0pXFxkezZ9JHxbMi00XVxcZHs3fSQpLyxcbiAgJ2FyLUFFJzogL14oKFxcKz85NzEpfDApPzVbMDI0NTY4XVxcZHs3fSQvLFxuICAnYXItQkgnOiAvXihcXCs/OTczKT8oM3w2KVxcZHs3fSQvLFxuICAnYXItRFonOiAvXihcXCs/MjEzfDApKDV8Nnw3KVxcZHs4fSQvLFxuICAnYXItRUcnOiAvXigoXFwrPzIwKXwwKT8xWzAxMjVdXFxkezh9JC8sXG4gICdhci1JUSc6IC9eKFxcKz85NjR8MCk/N1swLTldXFxkezh9JC8sXG4gICdhci1KTyc6IC9eKFxcKz85NjJ8MCk/N1s3ODldXFxkezd9JC8sXG4gICdhci1LVyc6IC9eKFxcKz85NjUpWzU2OV1cXGR7N30kLyxcbiAgJ2FyLVNBJzogL14oIT8oXFwrPzk2Nil8MCk/NVxcZHs4fSQvLFxuICAnYXItU1knOiAvXighPyhcXCs/OTYzKXwwKT85XFxkezh9JC8sXG4gICdhci1UTic6IC9eKFxcKz8yMTYpP1syNDU5XVxcZHs3fSQvLFxuICAnYmUtQlknOiAvXihcXCs/Mzc1KT8oMjR8MjV8Mjl8MzN8NDQpXFxkezd9JC8sXG4gICdiZy1CRyc6IC9eKFxcKz8zNTl8MCk/OFs3ODldXFxkezd9JC8sXG4gICdibi1CRCc6IC9eKFxcKz84ODB8MCkxWzEzNDU2Nzg5XVswLTldezh9JC8sXG4gICdjcy1DWic6IC9eKFxcKz80MjApPyA/WzEtOV1bMC05XXsyfSA/WzAtOV17M30gP1swLTldezN9JC8sXG4gICdkYS1ESyc6IC9eKFxcKz80NSk/XFxzP1xcZHsyfVxccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAnZGUtREUnOiAvXihcXCs0OSk/MD8xKDVbMC0yNS05XVxcZHw2KFsyM118MFxcZD8pfDcoWzAtNTctOV18NlxcZCkpXFxkezd9JC8sXG4gICdkZS1BVCc6IC9eKFxcKzQzfDApXFxkezEsNH1cXGR7MywxMn0kLyxcbiAgJ2VsLUdSJzogL14oXFwrPzMwfDApPyg2OVxcZHs4fSkkLyxcbiAgJ2VuLUFVJzogL14oXFwrPzYxfDApNFxcZHs4fSQvLFxuICAnZW4tR0InOiAvXihcXCs/NDR8MCk3XFxkezl9JC8sXG4gICdlbi1HRyc6IC9eKFxcKz80NHwwKTE0ODFcXGR7Nn0kLyxcbiAgJ2VuLUdIJzogL14oXFwrMjMzfDApKDIwfDUwfDI0fDU0fDI3fDU3fDI2fDU2fDIzfDI4KVxcZHs3fSQvLFxuICAnZW4tSEsnOiAvXihcXCs/ODUyWy1cXHNdPyk/WzQ1Njc4OV1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1NTyc6IC9eKFxcKz84NTNbLVxcc10/KT9bNl1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1JRSc6IC9eKFxcKz8zNTN8MCk4WzM1Njc4OV1cXGR7N30kLyxcbiAgJ2VuLUlOJzogL14oXFwrPzkxfDApP1s2Nzg5XVxcZHs5fSQvLFxuICAnZW4tS0UnOiAvXihcXCs/MjU0fDApKDd8MSlcXGR7OH0kLyxcbiAgJ2VuLU1UJzogL14oXFwrPzM1NnwwKT8oOTl8Nzl8Nzd8MjF8Mjd8MjJ8MjUpWzAtOV17Nn0kLyxcbiAgJ2VuLU1VJzogL14oXFwrPzIzMHwwKT9cXGR7OH0kLyxcbiAgJ2VuLU5HJzogL14oXFwrPzIzNHwwKT9bNzg5XVxcZHs5fSQvLFxuICAnZW4tTlonOiAvXihcXCs/NjR8MClbMjhdXFxkezcsOX0kLyxcbiAgJ2VuLVBLJzogL14oKFxcKzkyKXwoMDA5MikpLXswLDF9XFxkezN9LXswLDF9XFxkezd9JHxeXFxkezExfSR8XlxcZHs0fS1cXGR7N30kLyxcbiAgJ2VuLVJXJzogL14oXFwrPzI1MHwwKT9bN11cXGR7OH0kLyxcbiAgJ2VuLVNHJzogL14oXFwrNjUpP1s4OV1cXGR7N30kLyxcbiAgJ2VuLVRaJzogL14oXFwrPzI1NXwwKT9bNjddXFxkezh9JC8sXG4gICdlbi1VRyc6IC9eKFxcKz8yNTZ8MCk/WzddXFxkezh9JC8sXG4gICdlbi1VUyc6IC9eKChcXCsxfDEpPyggfC0pPyk/KFxcKFsyLTldWzAtOV17Mn1cXCl8WzItOV1bMC05XXsyfSkoIHwtKT8oWzItOV1bMC05XXsyfSggfC0pP1swLTldezR9KSQvLFxuICAnZW4tWkEnOiAvXihcXCs/Mjd8MClcXGR7OX0kLyxcbiAgJ2VuLVpNJzogL14oXFwrPzI2KT8wOVs1NjddXFxkezd9JC8sXG4gICdlcy1DTCc6IC9eKFxcKz81NnwwKVsyLTldXFxkezF9XFxkezd9JC8sXG4gICdlcy1FQyc6IC9eKFxcKz81OTN8MCkoWzItN118OVsyLTldKVxcZHs3fSQvLFxuICAnZXMtRVMnOiAvXihcXCs/MzQpPyg2XFxkezF9fDdbMTIzNF0pXFxkezd9JC8sXG4gICdlcy1NWCc6IC9eKFxcKz81Mik/KDF8MDEpP1xcZHsxMCwxMX0kLyxcbiAgJ2VzLVBBJzogL14oXFwrPzUwNylcXGR7Nyw4fSQvLFxuICAnZXMtUFknOiAvXihcXCs/NTk1fDApOVs5ODc2XVxcZHs3fSQvLFxuICAnZXMtVVknOiAvXihcXCs1OTh8MCk5WzEtOV1bXFxkXXs2fSQvLFxuICAnZXQtRUUnOiAvXihcXCs/MzcyKT9cXHM/KDV8OFsxLTRdKVxccz8oWzAtOV1cXHM/KXs2LDd9JC8sXG4gICdmYS1JUic6IC9eKFxcKz85OFtcXC1cXHNdP3wwKTlbMC0zOV1cXGRbXFwtXFxzXT9cXGR7M31bXFwtXFxzXT9cXGR7NH0kLyxcbiAgJ2ZpLUZJJzogL14oXFwrPzM1OHwwKVxccz8oNCgwfDF8Mnw0fDV8Nik/fDUwKVxccz8oXFxkXFxzPyl7NCw4fVxcZCQvLFxuICAnZmotRkonOiAvXihcXCs/Njc5KT9cXHM/XFxkezN9XFxzP1xcZHs0fSQvLFxuICAnZm8tRk8nOiAvXihcXCs/Mjk4KT9cXHM/XFxkezJ9XFxzP1xcZHsyfVxccz9cXGR7Mn0kLyxcbiAgJ2ZyLUZSJzogL14oXFwrPzMzfDApWzY3XVxcZHs4fSQvLFxuICAnZnItR0YnOiAvXihcXCs/NTk0fDB8MDA1OTQpWzY3XVxcZHs4fSQvLFxuICAnZnItR1AnOiAvXihcXCs/NTkwfDB8MDA1OTApWzY3XVxcZHs4fSQvLFxuICAnZnItTVEnOiAvXihcXCs/NTk2fDB8MDA1OTYpWzY3XVxcZHs4fSQvLFxuICAnZnItUkUnOiAvXihcXCs/MjYyfDB8MDAyNjIpWzY3XVxcZHs4fSQvLFxuICAnaGUtSUwnOiAvXihcXCs5NzJ8MCkoWzIzNDg5XXw1WzAxMjM0NTY4OV18NzcpWzEtOV1cXGR7Nn0kLyxcbiAgJ2h1LUhVJzogL14oXFwrPzM2KSgyMHwzMHw3MClcXGR7N30kLyxcbiAgJ2lkLUlEJzogL14oXFwrPzYyfDApOCgxWzEyMzQ1Njc4OV18MlsxMjM4XXwzWzEyMzhdfDVbMTIzNTY3ODldfDdbNzhdfDlbNTY3ODldfDhbMTIzNDU2Nzg5XSkoW1xccz98XFxkXXs1LDExfSkkLyxcbiAgJ2l0LUlUJzogL14oXFwrPzM5KT9cXHM/M1xcZHsyfSA/XFxkezYsN30kLyxcbiAgJ2phLUpQJzogL14oXFwrODFbIFxcLV0/KFxcKDBcXCkpP3wwKVs2Nzg5XTBbIFxcLV0/XFxkezR9WyBcXC1dP1xcZHs0fSQvLFxuICAna2stS1onOiAvXihcXCs/N3w4KT83XFxkezl9JC8sXG4gICdrbC1HTCc6IC9eKFxcKz8yOTkpP1xccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAna28tS1InOiAvXigoXFwrPzgyKVsgXFwtXT8pPzA/MShbMHwxfDZ8N3w4fDldezF9KVsgXFwtXT9cXGR7Myw0fVsgXFwtXT9cXGR7NH0kLyxcbiAgJ2x0LUxUJzogL14oXFwrMzcwfDgpXFxkezh9JC8sXG4gICdtcy1NWSc6IC9eKFxcKz82PzAxKXsxfSgoWzAxNDVdezF9KFxcLXxcXHMpP1xcZHs3LDh9KXwoWzIzNjc4OV17MX0oXFxzfFxcLSk/XFxkezd9KSkkLyxcbiAgJ25iLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICduZS1OUCc6IC9eKFxcKz85NzcpPzlbNzhdXFxkezh9JC8sXG4gICdubC1CRSc6IC9eKFxcKz8zMnwwKTQ/XFxkezh9JC8sXG4gICdubC1OTCc6IC9eKFxcKz8zMXwwKTY/XFxkezh9JC8sXG4gICdubi1OTyc6IC9eKFxcKz80Nyk/WzQ5XVxcZHs3fSQvLFxuICAncGwtUEwnOiAvXihcXCs/NDgpPyA/WzUtOF1cXGQgP1xcZHszfSA/XFxkezJ9ID9cXGR7Mn0kLyxcbiAgJ3B0LUJSJzogLyg/PV4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/XFxkezR9XFwtP1xcZHs0fSQpKF4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/WzYtOV17MX1cXGR7M31cXC0/XFxkezR9JCl8KF4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/OVs2LTldezF9XFxkezN9XFwtP1xcZHs0fSQpLyxcbiAgJ3B0LVBUJzogL14oXFwrPzM1MSk/OVsxMjM2XVxcZHs3fSQvLFxuICAncm8tUk8nOiAvXihcXCs/ND8wKVxccz83XFxkezJ9KFxcL3xcXHN8XFwufFxcLSk/XFxkezN9KFxcc3xcXC58XFwtKT9cXGR7M30kLyxcbiAgJ3J1LVJVJzogL14oXFwrPzd8OCk/OVxcZHs5fSQvLFxuICAnc2wtU0knOiAvXihcXCszODZcXHM/fDApKFxcZHsxfVxccz9cXGR7M31cXHM/XFxkezJ9XFxzP1xcZHsyfXxcXGR7Mn1cXHM/XFxkezN9XFxzP1xcZHszfSkkLyxcbiAgJ3NrLVNLJzogL14oXFwrPzQyMSk/ID9bMS05XVswLTldezJ9ID9bMC05XXszfSA/WzAtOV17M30kLyxcbiAgJ3NyLVJTJzogL14oXFwrMzgxNnwwNilbLSBcXGRdezUsOX0kLyxcbiAgJ3N2LVNFJzogL14oXFwrPzQ2fDApW1xcc1xcLV0/N1tcXHNcXC1dP1swMjM2OV0oW1xcc1xcLV0/XFxkKXs3fSQvLFxuICAndGgtVEgnOiAvXihcXCs2Nnw2NnwwKVxcZHs5fSQvLFxuICAndHItVFInOiAvXihcXCs/OTB8MCk/NVxcZHs5fSQvLFxuICAndWstVUEnOiAvXihcXCs/Mzh8OCk/MFxcZHs5fSQvLFxuICAndmktVk4nOiAvXihcXCs/ODR8MCkoKDMoWzItOV0pKXwoNShbMjY4OV0pKXwoNyhbMHw2LTldKSl8KDgoWzEtNnw4OV0pKXwoOShbMC05XSkpKShbMC05XXs3fSkkLyxcbiAgJ3poLUNOJzogL14oKFxcK3wwMCk4Nik/MShbMzU4XVswLTldfDRbNTc5XXw2WzY3XXw3WzAxMjM1Njc4XXw5WzE4OV0pWzAtOV17OH0kLyxcbiAgJ3poLVRXJzogL14oXFwrPzg4NlxcLT98MCk/OVxcZHs4fSQvXG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4vLyBhbGlhc2VzXG5cbnBob25lc1snZW4tQ0EnXSA9IHBob25lc1snZW4tVVMnXTtcbnBob25lc1snZnItQkUnXSA9IHBob25lc1snbmwtQkUnXTtcbnBob25lc1snemgtSEsnXSA9IHBob25lc1snZW4tSEsnXTtcbnBob25lc1snemgtTU8nXSA9IHBob25lc1snZW4tTU8nXTtcblxuZnVuY3Rpb24gaXNNb2JpbGVQaG9uZShzdHIsIGxvY2FsZSwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc3RyaWN0TW9kZSAmJiAhc3RyLnN0YXJ0c1dpdGgoJysnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGxvY2FsZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGhvbmVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHBob25lID0gcGhvbmVzW2tleV07XG5cbiAgICAgICAgaWYgKHBob25lLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsb2NhbGUgaW4gcGhvbmVzKSB7XG4gICAgcmV0dXJuIHBob25lc1tsb2NhbGVdLnRlc3Qoc3RyKTsgLy8gYWxpYXMgZmFsc2V5IGxvY2FsZSBhcyAnYW55J1xuICB9IGVsc2UgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSAnYW55Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBwaG9uZXMpIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGhvbmVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHBob25lID0gcGhvbmVzW2tleV07XG5cbiAgICAgICAgaWYgKHBob25lLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbnZhciBsb2NhbGVzID0gT2JqZWN0LmtleXMocGhvbmVzKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01vbmdvSWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNIZXhhZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNIZXhhZGVjaW1hbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzTW9uZ29JZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfaXNIZXhhZGVjaW1hbC5kZWZhdWx0KShzdHIpICYmIHN0ci5sZW5ndGggPT09IDI0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc011bHRpYnl0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIG11bHRpYnl0ZSA9IC9bXlxceDAwLVxceDdGXS87XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNNdWx0aWJ5dGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtdWx0aWJ5dGUudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWVyaWM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBudW1lcmljID0gL15bKy1dPyhbMC05XSpbLl0pP1swLTldKyQvO1xudmFyIG51bWVyaWNOb1N5bWJvbHMgPSAvXlswLTldKyQvO1xuXG5mdW5jdGlvbiBpc051bWVyaWMoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ub19zeW1ib2xzKSB7XG4gICAgcmV0dXJuIG51bWVyaWNOb1N5bWJvbHMudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIG51bWVyaWMudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc09jdGFsO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb2N0YWwgPSAvXigwbyk/WzAtN10rJC9pO1xuXG5mdW5jdGlvbiBpc09jdGFsKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gb2N0YWwudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1BvcnQ7XG5cbnZhciBfaXNJbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzSW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNQb3J0KHN0cikge1xuICByZXR1cm4gKDAsIF9pc0ludC5kZWZhdWx0KShzdHIsIHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiA2NTUzNVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGNvbW1vbiBwYXR0ZXJuc1xudmFyIHRocmVlRGlnaXQgPSAvXlxcZHszfSQvO1xudmFyIGZvdXJEaWdpdCA9IC9eXFxkezR9JC87XG52YXIgZml2ZURpZ2l0ID0gL15cXGR7NX0kLztcbnZhciBzaXhEaWdpdCA9IC9eXFxkezZ9JC87XG52YXIgcGF0dGVybnMgPSB7XG4gIEFEOiAvXkFEXFxkezN9JC8sXG4gIEFUOiBmb3VyRGlnaXQsXG4gIEFVOiBmb3VyRGlnaXQsXG4gIEJFOiBmb3VyRGlnaXQsXG4gIEJHOiBmb3VyRGlnaXQsXG4gIEJSOiAvXlxcZHs1fS1cXGR7M30kLyxcbiAgQ0E6IC9eW0FCQ0VHSEpLTE1OUFJTVFZYWV1cXGRbQUJDRUdISi1OUFJTVFYtWl1bXFxzXFwtXT9cXGRbQUJDRUdISi1OUFJTVFYtWl1cXGQkL2ksXG4gIENIOiBmb3VyRGlnaXQsXG4gIENaOiAvXlxcZHszfVxccz9cXGR7Mn0kLyxcbiAgREU6IGZpdmVEaWdpdCxcbiAgREs6IGZvdXJEaWdpdCxcbiAgRFo6IGZpdmVEaWdpdCxcbiAgRUU6IGZpdmVEaWdpdCxcbiAgRVM6IGZpdmVEaWdpdCxcbiAgRkk6IGZpdmVEaWdpdCxcbiAgRlI6IC9eXFxkezJ9XFxzP1xcZHszfSQvLFxuICBHQjogL14oZ2lyXFxzPzBhYXxbYS16XXsxLDJ9XFxkW1xcZGEtel0/XFxzPyhcXGRbYS16XXsyfSk/KSQvaSxcbiAgR1I6IC9eXFxkezN9XFxzP1xcZHsyfSQvLFxuICBIUjogL14oWzEtNV1cXGR7NH0kKS8sXG4gIEhVOiBmb3VyRGlnaXQsXG4gIElEOiBmaXZlRGlnaXQsXG4gIElFOiAvXig/IS4qKD86bykpW0Etel1cXGRbXFxkd11cXHNcXHd7NH0kL2ksXG4gIElMOiBmaXZlRGlnaXQsXG4gIElOOiAvXigoPyExMHwyOXwzNXw1NHw1NXw2NXw2Nnw4Nnw4N3w4OHw4OSlbMS05XVswLTldezV9KSQvLFxuICBJUzogdGhyZWVEaWdpdCxcbiAgSVQ6IGZpdmVEaWdpdCxcbiAgSlA6IC9eXFxkezN9XFwtXFxkezR9JC8sXG4gIEtFOiBmaXZlRGlnaXQsXG4gIExJOiAvXig5NDhbNS05XXw5NDlbMC03XSkkLyxcbiAgTFQ6IC9eTFRcXC1cXGR7NX0kLyxcbiAgTFU6IGZvdXJEaWdpdCxcbiAgTFY6IC9eTFZcXC1cXGR7NH0kLyxcbiAgTVg6IGZpdmVEaWdpdCxcbiAgTVQ6IC9eW0EtWmEtel17M31cXHN7MCwxfVxcZHs0fSQvLFxuICBOTDogL15cXGR7NH1cXHM/W2Etel17Mn0kL2ksXG4gIE5POiBmb3VyRGlnaXQsXG4gIE5aOiBmb3VyRGlnaXQsXG4gIFBMOiAvXlxcZHsyfVxcLVxcZHszfSQvLFxuICBQUjogL14wMFs2NzldXFxkezJ9KFsgLV1cXGR7NH0pPyQvLFxuICBQVDogL15cXGR7NH1cXC1cXGR7M30/JC8sXG4gIFJPOiBzaXhEaWdpdCxcbiAgUlU6IHNpeERpZ2l0LFxuICBTQTogZml2ZURpZ2l0LFxuICBTRTogL15bMS05XVxcZHsyfVxccz9cXGR7Mn0kLyxcbiAgU0k6IGZvdXJEaWdpdCxcbiAgU0s6IC9eXFxkezN9XFxzP1xcZHsyfSQvLFxuICBUTjogZm91ckRpZ2l0LFxuICBUVzogL15cXGR7M30oXFxkezJ9KT8kLyxcbiAgVUE6IGZpdmVEaWdpdCxcbiAgVVM6IC9eXFxkezV9KC1cXGR7NH0pPyQvLFxuICBaQTogZm91ckRpZ2l0LFxuICBaTTogZml2ZURpZ2l0XG59O1xudmFyIGxvY2FsZXMgPSBPYmplY3Qua2V5cyhwYXR0ZXJucyk7XG5leHBvcnRzLmxvY2FsZXMgPSBsb2NhbGVzO1xuXG5mdW5jdGlvbiBfZGVmYXVsdChzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChsb2NhbGUgaW4gcGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnNbbG9jYWxlXS50ZXN0KHN0cik7XG4gIH0gZWxzZSBpZiAobG9jYWxlID09PSAnYW55Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBwYXR0ZXJucykge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGF0dGVybnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2tleV07XG5cbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUkZDMzMzOTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogQmFzZWQgb24gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMzMzkjc2VjdGlvbi01LjYgKi9cbnZhciBkYXRlRnVsbFllYXIgPSAvWzAtOV17NH0vO1xudmFyIGRhdGVNb250aCA9IC8oMFsxLTldfDFbMC0yXSkvO1xudmFyIGRhdGVNRGF5ID0gLyhbMTJdXFxkfDBbMS05XXwzWzAxXSkvO1xudmFyIHRpbWVIb3VyID0gLyhbMDFdWzAtOV18MlswLTNdKS87XG52YXIgdGltZU1pbnV0ZSA9IC9bMC01XVswLTldLztcbnZhciB0aW1lU2Vjb25kID0gLyhbMC01XVswLTldfDYwKS87XG52YXIgdGltZVNlY0ZyYWMgPSAvKFxcLlswLTldKyk/LztcbnZhciB0aW1lTnVtT2Zmc2V0ID0gbmV3IFJlZ0V4cChcIlstK11cIi5jb25jYXQodGltZUhvdXIuc291cmNlLCBcIjpcIikuY29uY2F0KHRpbWVNaW51dGUuc291cmNlKSk7XG52YXIgdGltZU9mZnNldCA9IG5ldyBSZWdFeHAoXCIoW3paXXxcIi5jb25jYXQodGltZU51bU9mZnNldC5zb3VyY2UsIFwiKVwiKSk7XG52YXIgcGFydGlhbFRpbWUgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHRpbWVIb3VyLnNvdXJjZSwgXCI6XCIpLmNvbmNhdCh0aW1lTWludXRlLnNvdXJjZSwgXCI6XCIpLmNvbmNhdCh0aW1lU2Vjb25kLnNvdXJjZSkuY29uY2F0KHRpbWVTZWNGcmFjLnNvdXJjZSkpO1xudmFyIGZ1bGxEYXRlID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChkYXRlRnVsbFllYXIuc291cmNlLCBcIi1cIikuY29uY2F0KGRhdGVNb250aC5zb3VyY2UsIFwiLVwiKS5jb25jYXQoZGF0ZU1EYXkuc291cmNlKSk7XG52YXIgZnVsbFRpbWUgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHBhcnRpYWxUaW1lLnNvdXJjZSkuY29uY2F0KHRpbWVPZmZzZXQuc291cmNlKSk7XG52YXIgcmZjMzMzOSA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZnVsbERhdGUuc291cmNlLCBcIlsgdFRdXCIpLmNvbmNhdChmdWxsVGltZS5zb3VyY2UpKTtcblxuZnVuY3Rpb24gaXNSRkMzMzM5KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gcmZjMzMzOS50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzU2x1ZztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNoYXJzZXRSZWdleCA9IC9eW14tX10oPyEuKj9bLV9dezIsfSkoW2EtejAtOVxcXFwtXXsxLH0pLipbXi1fXSQvO1xuXG5mdW5jdGlvbiBpc1NsdWcoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBjaGFyc2V0UmVnZXgudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1N1cnJvZ2F0ZVBhaXI7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdXJyb2dhdGVQYWlyID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vO1xuXG5mdW5jdGlvbiBpc1N1cnJvZ2F0ZVBhaXIoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdXJyb2dhdGVQYWlyLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNGUUROID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0ZRRE5cIikpO1xuXG52YXIgX2lzSVAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzSVBcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbm9wdGlvbnMgZm9yIGlzVVJMIG1ldGhvZFxuXG5yZXF1aXJlX3Byb3RvY29sIC0gaWYgc2V0IGFzIHRydWUgaXNVUkwgd2lsbCByZXR1cm4gZmFsc2UgaWYgcHJvdG9jb2wgaXMgbm90IHByZXNlbnQgaW4gdGhlIFVSTFxucmVxdWlyZV92YWxpZF9wcm90b2NvbCAtIGlzVVJMIHdpbGwgY2hlY2sgaWYgdGhlIFVSTCdzIHByb3RvY29sIGlzIHByZXNlbnQgaW4gdGhlIHByb3RvY29scyBvcHRpb25cbnByb3RvY29scyAtIHZhbGlkIHByb3RvY29scyBjYW4gYmUgbW9kaWZpZWQgd2l0aCB0aGlzIG9wdGlvblxucmVxdWlyZV9ob3N0IC0gaWYgc2V0IGFzIGZhbHNlIGlzVVJMIHdpbGwgbm90IGNoZWNrIGlmIGhvc3QgaXMgcHJlc2VudCBpbiB0aGUgVVJMXG5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzIC0gaWYgc2V0IGFzIHRydWUgcHJvdG9jb2wgcmVsYXRpdmUgVVJMcyB3aWxsIGJlIGFsbG93ZWRcblxuKi9cbnZhciBkZWZhdWx0X3VybF9vcHRpb25zID0ge1xuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmdHAnXSxcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIHJlcXVpcmVfcHJvdG9jb2w6IGZhbHNlLFxuICByZXF1aXJlX2hvc3Q6IHRydWUsXG4gIHJlcXVpcmVfdmFsaWRfcHJvdG9jb2w6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZSxcbiAgYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJsczogZmFsc2Vcbn07XG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcblxuICAgIGlmIChob3N0ID09PSBtYXRjaCB8fCBpc1JlZ0V4cChtYXRjaCkgJiYgbWF0Y2gudGVzdChob3N0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1VSTCh1cmwsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkodXJsKTtcblxuICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID49IDIwODMgfHwgL1tcXHM8Pl0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1cmwuaW5kZXhPZignbWFpbHRvOicpID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF91cmxfb3B0aW9ucyk7XG4gIHZhciBwcm90b2NvbCwgYXV0aCwgaG9zdCwgaG9zdG5hbWUsIHBvcnQsIHBvcnRfc3RyLCBzcGxpdCwgaXB2NjtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJyMnKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJzovLycpO1xuXG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgcHJvdG9jb2wgPSBzcGxpdC5zaGlmdCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlX3ZhbGlkX3Byb3RvY29sICYmIG9wdGlvbnMucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAodXJsLnN1YnN0cigwLCAyKSA9PT0gJy8vJykge1xuICAgIGlmICghb3B0aW9ucy5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3BsaXRbMF0gPSB1cmwuc3Vic3RyKDIpO1xuICB9XG5cbiAgdXJsID0gc3BsaXQuam9pbignOi8vJyk7XG5cbiAgaWYgKHVybCA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnLycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIGlmICh1cmwgPT09ICcnICYmICFvcHRpb25zLnJlcXVpcmVfaG9zdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJ0AnKTtcblxuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGlmIChvcHRpb25zLmRpc2FsbG93X2F1dGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhdXRoID0gc3BsaXQuc2hpZnQoKTtcblxuICAgIGlmIChhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG4gIHBvcnRfc3RyID0gbnVsbDtcbiAgaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcblxuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgICBpZiAoc3BsaXQubGVuZ3RoKSB7XG4gICAgICBwb3J0X3N0ciA9IHNwbGl0LmpvaW4oJzonKTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9ydF9zdHIgIT09IG51bGwpIHtcbiAgICBwb3J0ID0gcGFyc2VJbnQocG9ydF9zdHIsIDEwKTtcblxuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROLmRlZmF1bHQpKGhvc3QsIG9wdGlvbnMpICYmICghaXB2NiB8fCAhKDAsIF9pc0lQLmRlZmF1bHQpKGlwdjYsIDYpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VVSUQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB1dWlkID0ge1xuICAzOiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTNbMC05QS1GXXszfS1bMC05QS1GXXs0fS1bMC05QS1GXXsxMn0kL2ksXG4gIDQ6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tNFswLTlBLUZdezN9LVs4OUFCXVswLTlBLUZdezN9LVswLTlBLUZdezEyfSQvaSxcbiAgNTogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS01WzAtOUEtRl17M30tWzg5QUJdWzAtOUEtRl17M30tWzAtOUEtRl17MTJ9JC9pLFxuICBhbGw6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9JC9pXG59O1xuXG5mdW5jdGlvbiBpc1VVSUQoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnYWxsJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHBhdHRlcm4gPSB1dWlkW3ZlcnNpb25dO1xuICByZXR1cm4gcGF0dGVybiAmJiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVcHBlcmNhc2U7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVXBwZXJjYXNlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBzdHIudG9VcHBlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWYXJpYWJsZVdpZHRoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gcmVxdWlyZShcIi4vaXNGdWxsV2lkdGhcIik7XG5cbnZhciBfaXNIYWxmV2lkdGggPSByZXF1aXJlKFwiLi9pc0hhbGZXaWR0aFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZVdpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gX2lzRnVsbFdpZHRoLmZ1bGxXaWR0aC50ZXN0KHN0cikgJiYgX2lzSGFsZldpZHRoLmhhbGZXaWR0aC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzV2hpdGVsaXN0ZWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzV2hpdGVsaXN0ZWQoc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGZvciAodmFyIGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoY2hhcnMuaW5kZXhPZihzdHJbaV0pID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsdHJpbTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbHRyaW0oc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjRXNjYXBpbmdcblxuICB2YXIgcGF0dGVybiA9IGNoYXJzID8gbmV3IFJlZ0V4cChcIl5bXCIuY29uY2F0KGNoYXJzLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksIFwiXStcIiksICdnJykgOiAvXlxccysvZztcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHBhdHRlcm4sICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWF0Y2hlcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbWF0Y2hlcyhzdHIsIHBhdHRlcm4sIG1vZGlmaWVycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGF0dGVybikgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgbW9kaWZpZXJzKTtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbm9ybWFsaXplRW1haWw7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9ub3JtYWxpemVfZW1haWxfb3B0aW9ucyA9IHtcbiAgLy8gVGhlIGZvbGxvd2luZyBvcHRpb25zIGFwcGx5IHRvIGFsbCBlbWFpbCBhZGRyZXNzZXNcbiAgLy8gTG93ZXJjYXNlcyB0aGUgbG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzcy5cbiAgLy8gUGxlYXNlIG5vdGUgdGhpcyBtYXkgdmlvbGF0ZSBSRkMgNTMyMSBhcyBwZXIgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTgwODMzMi8xOTIwMjQpLlxuICAvLyBUaGUgZG9tYWluIGlzIGFsd2F5cyBsb3dlcmNhc2VkLCBhcyBwZXIgUkZDIDEwMzVcbiAgYWxsX2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gR01haWxcbiAgLy8gTG93ZXJjYXNlcyB0aGUgbG9jYWwgcGFydCBvZiB0aGUgR01haWwgYWRkcmVzcyAoa25vd24gdG8gYmUgY2FzZS1pbnNlbnNpdGl2ZSlcbiAgZ21haWxfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBSZW1vdmVzIGRvdHMgZnJvbSB0aGUgbG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzcywgYXMgdGhhdCdzIGlnbm9yZWQgYnkgR01haWxcbiAgZ21haWxfcmVtb3ZlX2RvdHM6IHRydWUsXG4gIC8vIFJlbW92ZXMgdGhlIHN1YmFkZHJlc3MgKGUuZy4gXCIrZm9vXCIpIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAgZ21haWxfcmVtb3ZlX3N1YmFkZHJlc3M6IHRydWUsXG4gIC8vIENvbnZlcnN0cyB0aGUgZ29vZ2xlbWFpbC5jb20gZG9tYWluIHRvIGdtYWlsLmNvbVxuICBnbWFpbF9jb252ZXJ0X2dvb2dsZW1haWxkb3Rjb206IHRydWUsXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29udmVyc2lvbnMgYXJlIHNwZWNpZmljIHRvIE91dGxvb2suY29tIC8gV2luZG93cyBMaXZlIC8gSG90bWFpbFxuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBPdXRsb29rLmNvbSBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICBvdXRsb29rZG90Y29tX2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gUmVtb3ZlcyB0aGUgc3ViYWRkcmVzcyAoZS5nLiBcIitmb29cIikgZnJvbSB0aGUgZW1haWwgYWRkcmVzc1xuICBvdXRsb29rZG90Y29tX3JlbW92ZV9zdWJhZGRyZXNzOiB0cnVlLFxuICAvLyBUaGUgZm9sbG93aW5nIGNvbnZlcnNpb25zIGFyZSBzcGVjaWZpYyB0byBZYWhvb1xuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBZYWhvbyBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICB5YWhvb19sb3dlcmNhc2U6IHRydWUsXG4gIC8vIFJlbW92ZXMgdGhlIHN1YmFkZHJlc3MgKGUuZy4gXCItZm9vXCIpIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAgeWFob29fcmVtb3ZlX3N1YmFkZHJlc3M6IHRydWUsXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29udmVyc2lvbnMgYXJlIHNwZWNpZmljIHRvIFlhbmRleFxuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBZYW5kZXggYWRkcmVzcyAoa25vd24gdG8gYmUgY2FzZS1pbnNlbnNpdGl2ZSlcbiAgeWFuZGV4X2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gaUNsb3VkXG4gIC8vIExvd2VyY2FzZXMgdGhlIGxvY2FsIHBhcnQgb2YgdGhlIGlDbG91ZCBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICBpY2xvdWRfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBSZW1vdmVzIHRoZSBzdWJhZGRyZXNzIChlLmcuIFwiK2Zvb1wiKSBmcm9tIHRoZSBlbWFpbCBhZGRyZXNzXG4gIGljbG91ZF9yZW1vdmVfc3ViYWRkcmVzczogdHJ1ZVxufTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgaUNsb3VkXG5cbnZhciBpY2xvdWRfZG9tYWlucyA9IFsnaWNsb3VkLmNvbScsICdtZS5jb20nXTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgT3V0bG9vay5jb20gYW5kIGl0cyBwcmVkZWNlc3NvcnNcbi8vIFRoaXMgbGlzdCBpcyBsaWtlbHkgaW5jb21wbGV0ZS5cbi8vIFBhcnRpYWwgcmVmZXJlbmNlOlxuLy8gaHR0cHM6Ly9ibG9ncy5vZmZpY2UuY29tLzIwMTMvMDQvMTcvb3V0bG9vay1jb20tZ2V0cy10d28tc3RlcC12ZXJpZmljYXRpb24tc2lnbi1pbi1ieS1hbGlhcy1hbmQtbmV3LWludGVybmF0aW9uYWwtZG9tYWlucy9cblxudmFyIG91dGxvb2tkb3Rjb21fZG9tYWlucyA9IFsnaG90bWFpbC5hdCcsICdob3RtYWlsLmJlJywgJ2hvdG1haWwuY2EnLCAnaG90bWFpbC5jbCcsICdob3RtYWlsLmNvLmlsJywgJ2hvdG1haWwuY28ubnonLCAnaG90bWFpbC5jby50aCcsICdob3RtYWlsLmNvLnVrJywgJ2hvdG1haWwuY29tJywgJ2hvdG1haWwuY29tLmFyJywgJ2hvdG1haWwuY29tLmF1JywgJ2hvdG1haWwuY29tLmJyJywgJ2hvdG1haWwuY29tLmdyJywgJ2hvdG1haWwuY29tLm14JywgJ2hvdG1haWwuY29tLnBlJywgJ2hvdG1haWwuY29tLnRyJywgJ2hvdG1haWwuY29tLnZuJywgJ2hvdG1haWwuY3onLCAnaG90bWFpbC5kZScsICdob3RtYWlsLmRrJywgJ2hvdG1haWwuZXMnLCAnaG90bWFpbC5mcicsICdob3RtYWlsLmh1JywgJ2hvdG1haWwuaWQnLCAnaG90bWFpbC5pZScsICdob3RtYWlsLmluJywgJ2hvdG1haWwuaXQnLCAnaG90bWFpbC5qcCcsICdob3RtYWlsLmtyJywgJ2hvdG1haWwubHYnLCAnaG90bWFpbC5teScsICdob3RtYWlsLnBoJywgJ2hvdG1haWwucHQnLCAnaG90bWFpbC5zYScsICdob3RtYWlsLnNnJywgJ2hvdG1haWwuc2snLCAnbGl2ZS5iZScsICdsaXZlLmNvLnVrJywgJ2xpdmUuY29tJywgJ2xpdmUuY29tLmFyJywgJ2xpdmUuY29tLm14JywgJ2xpdmUuZGUnLCAnbGl2ZS5lcycsICdsaXZlLmV1JywgJ2xpdmUuZnInLCAnbGl2ZS5pdCcsICdsaXZlLm5sJywgJ21zbi5jb20nLCAnb3V0bG9vay5hdCcsICdvdXRsb29rLmJlJywgJ291dGxvb2suY2wnLCAnb3V0bG9vay5jby5pbCcsICdvdXRsb29rLmNvLm56JywgJ291dGxvb2suY28udGgnLCAnb3V0bG9vay5jb20nLCAnb3V0bG9vay5jb20uYXInLCAnb3V0bG9vay5jb20uYXUnLCAnb3V0bG9vay5jb20uYnInLCAnb3V0bG9vay5jb20uZ3InLCAnb3V0bG9vay5jb20ucGUnLCAnb3V0bG9vay5jb20udHInLCAnb3V0bG9vay5jb20udm4nLCAnb3V0bG9vay5jeicsICdvdXRsb29rLmRlJywgJ291dGxvb2suZGsnLCAnb3V0bG9vay5lcycsICdvdXRsb29rLmZyJywgJ291dGxvb2suaHUnLCAnb3V0bG9vay5pZCcsICdvdXRsb29rLmllJywgJ291dGxvb2suaW4nLCAnb3V0bG9vay5pdCcsICdvdXRsb29rLmpwJywgJ291dGxvb2sua3InLCAnb3V0bG9vay5sdicsICdvdXRsb29rLm15JywgJ291dGxvb2sucGgnLCAnb3V0bG9vay5wdCcsICdvdXRsb29rLnNhJywgJ291dGxvb2suc2cnLCAnb3V0bG9vay5zaycsICdwYXNzcG9ydC5jb20nXTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgWWFob28gTWFpbFxuLy8gVGhpcyBsaXN0IGlzIGxpa2VseSBpbmNvbXBsZXRlXG5cbnZhciB5YWhvb19kb21haW5zID0gWydyb2NrZXRtYWlsLmNvbScsICd5YWhvby5jYScsICd5YWhvby5jby51aycsICd5YWhvby5jb20nLCAneWFob28uZGUnLCAneWFob28uZnInLCAneWFob28uaW4nLCAneWFob28uaXQnLCAneW1haWwuY29tJ107IC8vIExpc3Qgb2YgZG9tYWlucyB1c2VkIGJ5IHlhbmRleC5ydVxuXG52YXIgeWFuZGV4X2RvbWFpbnMgPSBbJ3lhbmRleC5ydScsICd5YW5kZXgudWEnLCAneWFuZGV4Lmt6JywgJ3lhbmRleC5jb20nLCAneWFuZGV4LmJ5JywgJ3lhLnJ1J107IC8vIHJlcGxhY2Ugc2luZ2xlIGRvdHMsIGJ1dCBub3QgbXVsdGlwbGUgY29uc2VjdXRpdmUgZG90c1xuXG5mdW5jdGlvbiBkb3RzUmVwbGFjZXIobWF0Y2gpIHtcbiAgaWYgKG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVtYWlsKGVtYWlsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfbm9ybWFsaXplX2VtYWlsX29wdGlvbnMpO1xuICB2YXIgcmF3X3BhcnRzID0gZW1haWwuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHJhd19wYXJ0cy5wb3AoKTtcbiAgdmFyIHVzZXIgPSByYXdfcGFydHMuam9pbignQCcpO1xuICB2YXIgcGFydHMgPSBbdXNlciwgZG9tYWluXTsgLy8gVGhlIGRvbWFpbiBpcyBhbHdheXMgbG93ZXJjYXNlZCwgYXMgaXQncyBjYXNlLWluc2Vuc2l0aXZlIHBlciBSRkMgMTAzNVxuXG4gIHBhcnRzWzFdID0gcGFydHNbMV0udG9Mb3dlckNhc2UoKTtcblxuICBpZiAocGFydHNbMV0gPT09ICdnbWFpbC5jb20nIHx8IHBhcnRzWzFdID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBHTWFpbFxuICAgIGlmIChvcHRpb25zLmdtYWlsX3JlbW92ZV9zdWJhZGRyZXNzKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnNwbGl0KCcrJylbMF07XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZ21haWxfcmVtb3ZlX2RvdHMpIHtcbiAgICAgIC8vIHRoaXMgZG9lcyBub3QgcmVwbGFjZSBjb25zZWN1dGl2ZSBkb3RzIGxpa2UgZXhhbXBsZS4uZW1haWxAZ21haWwuY29tXG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcLisvZywgZG90c1JlcGxhY2VyKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5nbWFpbF9sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBwYXJ0c1sxXSA9IG9wdGlvbnMuZ21haWxfY29udmVydF9nb29nbGVtYWlsZG90Y29tID8gJ2dtYWlsLmNvbScgOiBwYXJ0c1sxXTtcbiAgfSBlbHNlIGlmIChpY2xvdWRfZG9tYWlucy5pbmRleE9mKHBhcnRzWzFdKSA+PSAwKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBpQ2xvdWRcbiAgICBpZiAob3B0aW9ucy5pY2xvdWRfcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0uc3BsaXQoJysnKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5pY2xvdWRfbG93ZXJjYXNlKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG91dGxvb2tkb3Rjb21fZG9tYWlucy5pbmRleE9mKHBhcnRzWzFdKSA+PSAwKSB7XG4gICAgLy8gQWRkcmVzcyBpcyBPdXRsb29rLmNvbVxuICAgIGlmIChvcHRpb25zLm91dGxvb2tkb3Rjb21fcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0uc3BsaXQoJysnKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy5vdXRsb29rZG90Y29tX2xvd2VyY2FzZSkge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5YWhvb19kb21haW5zLmluZGV4T2YocGFydHNbMV0pID49IDApIHtcbiAgICAvLyBBZGRyZXNzIGlzIFlhaG9vXG4gICAgaWYgKG9wdGlvbnMueWFob29fcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHZhciBjb21wb25lbnRzID0gcGFydHNbMF0uc3BsaXQoJy0nKTtcbiAgICAgIHBhcnRzWzBdID0gY29tcG9uZW50cy5sZW5ndGggPiAxID8gY29tcG9uZW50cy5zbGljZSgwLCAtMSkuam9pbignLScpIDogY29tcG9uZW50c1swXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy55YWhvb19sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeWFuZGV4X2RvbWFpbnMuaW5kZXhPZihwYXJ0c1sxXSkgPj0gMCkge1xuICAgIGlmIChvcHRpb25zLmFsbF9sb3dlcmNhc2UgfHwgb3B0aW9ucy55YW5kZXhfbG93ZXJjYXNlKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcGFydHNbMV0gPSAneWFuZGV4LnJ1JzsgLy8gYWxsIHlhbmRleCBkb21haW5zIGFyZSBlcXVhbCwgMXN0IHByZWZmZXJlZFxuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSkge1xuICAgIC8vIEFueSBvdGhlciBhZGRyZXNzXG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJ0AnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcnRyaW07XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTsgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI0VzY2FwaW5nXG5cbiAgdmFyIHBhdHRlcm4gPSBjaGFycyA/IG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGNoYXJzLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksIFwiXSskXCIpLCAnZycpIDogL1xccyskL2c7XG4gIHJldHVybiBzdHIucmVwbGFjZShwYXR0ZXJuLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmlwTG93O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2JsYWNrbGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmxhY2tsaXN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaXBMb3coc3RyLCBrZWVwX25ld19saW5lcykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgY2hhcnMgPSBrZWVwX25ld19saW5lcyA/ICdcXFxceDAwLVxcXFx4MDlcXFxceDBCXFxcXHgwQ1xcXFx4MEUtXFxcXHgxRlxcXFx4N0YnIDogJ1xcXFx4MDAtXFxcXHgxRlxcXFx4N0YnO1xuICByZXR1cm4gKDAsIF9ibGFja2xpc3QuZGVmYXVsdCkoc3RyLCBjaGFycyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9Cb29sZWFuKHN0ciwgc3RyaWN0KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKHN0cmljdCkge1xuICAgIHJldHVybiBzdHIgPT09ICcxJyB8fCBzdHIgPT09ICd0cnVlJztcbiAgfVxuXG4gIHJldHVybiBzdHIgIT09ICcwJyAmJiBzdHIgIT09ICdmYWxzZScgJiYgc3RyICE9PSAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9EYXRlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0RhdGUoZGF0ZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShkYXRlKTtcbiAgZGF0ZSA9IERhdGUucGFyc2UoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSkgPyBuZXcgRGF0ZShkYXRlKSA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvRmxvYXQ7XG5cbnZhciBfaXNGbG9hdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNGbG9hdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvRmxvYXQoc3RyKSB7XG4gIGlmICghKDAsIF9pc0Zsb2F0LmRlZmF1bHQpKHN0cikpIHJldHVybiBOYU47XG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvSW50O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0ludChzdHIsIHJhZGl4KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBwYXJzZUludChzdHIsIHJhZGl4IHx8IDEwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJpbTtcblxudmFyIF9ydHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcnRyaW1cIikpO1xuXG52YXIgX2x0cmltID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sdHJpbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyaW0oc3RyLCBjaGFycykge1xuICByZXR1cm4gKDAsIF9ydHJpbS5kZWZhdWx0KSgoMCwgX2x0cmltLmRlZmF1bHQpKHN0ciwgY2hhcnMpLCBjaGFycyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZXNjYXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB1bmVzY2FwZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKS5yZXBsYWNlKC8mI3gyNzsvZywgXCInXCIpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJiN4MkY7L2csICcvJykucmVwbGFjZSgvJiN4NUM7L2csICdcXFxcJykucmVwbGFjZSgvJiM5NjsvZywgJ2AnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXNzZXJ0U3RyaW5nO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBhc3NlcnRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcblxuICBpZiAoIWlzU3RyaW5nKSB7XG4gICAgdmFyIGludmFsaWRUeXBlO1xuXG4gICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICBpbnZhbGlkVHlwZSA9ICdudWxsJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFR5cGUgPSBfdHlwZW9mKGlucHV0KTtcblxuICAgICAgaWYgKGludmFsaWRUeXBlID09PSAnb2JqZWN0JyAmJiBpbnB1dC5jb25zdHJ1Y3RvciAmJiBpbnB1dC5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgIGludmFsaWRUeXBlID0gaW5wdXQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWRUeXBlID0gXCJhIFwiLmNvbmNhdChpbnZhbGlkVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBidXQgcmVjZWl2ZWQgXCIuY29uY2F0KGludmFsaWRUeXBlLCBcIi5cIikpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhcnJWYWwpIHtcbiAgICByZXR1cm4gdmFsID09PSBhcnJWYWw7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gaW5jbHVkZXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1lcmdlO1xuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmpba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9TdHJpbmc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGlucHV0KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSA9PT0gJ29iamVjdCcgJiYgaW5wdXQgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0ID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlucHV0ID09PSBudWxsIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oaW5wdXQpICYmICFpbnB1dC5sZW5ndGgpIHtcbiAgICBpbnB1dCA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyhpbnB1dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdoaXRlbGlzdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gd2hpdGVsaXN0KHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXlwiLmNvbmNhdChjaGFycywgXCJdK1wiKSwgJ2cnKSwgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZW1vLWZvcm0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9scCdcclxuY29uc29sZS5sb2coJ2J1bmRsZScpOyIsIlxyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XHJcblxyXG5cclxuY29uc3QgbGFuZ0xpc3QgPSBbJ2FyJywgJ2FyLUFFJywgJ2FyLUJIJywgJ2FyLURaJywgJ2FyLUVHJywgJ2FyLUlRJywgJ2FyLUpPJywgJ2FyLUtXJywgJ2FyLUxCJywgJ2FyLUxZJywgJ2FyLU1BJywgJ2FyLVFBJywgJ2FyLVFNJywgJ2FyLVNBJywgJ2FyLVNEJywgJ2FyLVNZJywgJ2FyLVROJywgJ2FyLVlFJywgJ2JnLUJHJywgJ2NzLUNaJywgJ2RhLURLJywgJ2RlLURFJywgJ2VsLUdSJywgJ2VuLUFVJywgJ2VuLUdCJywgJ2VuLUhLJywgJ2VuLUlOJywgJ2VuLU5aJywgJ2VuLVVTJywgJ2VuLVpBJywgJ2VuLVpNJywgJ2VzLUVTJywgJ2ZyLUZSJywgJ2ZhLUlSJywgJ2hlJywgJ2h1LUhVJywgJ2l0LUlUJywgJ2t1LUlRJywgJ25iLU5PJywgJ25sLU5MJywgJ25uLU5PJywgJ3BsLVBMJywgJ3B0LUJSJywgJ3B0LVBUJywgJ3J1LVJVJywgJ3NsLVNJJywgJ3NrLVNLJywgJ3NyLVJTJywgJ3NyLVJTQGxhdGluJywgJ3N2LVNFJywgJ3RyLVRSJywgJ3VrLVVBJ107XHJcblxyXG5jb25zdCBjaGVja1ZhbGlkYXRvciA9ICh0eXBlLCB2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmdMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvci5pc0FscGhhbnVtZXJpYyh2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLCBsYW5nTGlzdFtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgY2FzZSAnbmFtZSc6XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsYW5nTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IuaXNBbHBoYSh2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLCBsYW5nTGlzdFtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gISEodmFsdWUubWF0Y2goL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pKVxyXG5cclxuICAgICAgICBjYXNlICd0ZWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gKCEhKHZhbHVlLm1hdGNoKC9eWytdKlsoXXswLDF9WzAtOV17MSw0fVspXXswLDF9Wy1cXHNcXC4vMC05XSokLykpKSAmJiB2YWx1ZS5sZW5ndGggPiA1XHJcblxyXG4gICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgIHJldHVybiAhISh2YWx1ZS5tYXRjaCgvW1xcdy1dKyhcXC5bXFx3LV0rKSsoW1xcdy4sQD9ePSUmOlxcL34rIy1dKltcXHdAP149JSZcXC9+KyMtXSk/LykpO1xyXG5cclxuICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoKCQpID0+IHtcclxuXHJcbiAgICAkKCcudHlwaW5nIGlucHV0JykuY2xpY2soKGUpID0+IHtcclxuICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5maW5kKCcudHlwaW5nLWFyZWEnKS5mYWRlT3V0KDEwMCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy50eXBpbmctYXJlYScpLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgJChlLnRhcmdldCkuZmFkZU91dCgxMDApO1xyXG4gICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IHVpVmFsaWRhdG9yID0gKGVsZW1lbnQsIGlzdmFsaWQpID0+IHtcclxuICAgICAgICBpZiAoaXN2YWxpZCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0ZpbGVkVmFsaWQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVHlwZSA9ICQoZWxlbWVudCkuYXR0cignZGF0YS12YWxpZGF0b3InKVxyXG4gICAgICAgIGNvbnN0IGZpZWxkVGV4dCA9IGVsZW1lbnQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgY29uc3QgaXN2YWxpZCA9IGNoZWNrVmFsaWRhdG9yKGZpZWxkVHlwZSwgZmllbGRUZXh0KTtcclxuICAgICAgICByZXR1cm4gdWlWYWxpZGF0b3IoZWxlbWVudCwgaXN2YWxpZClcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZGVtby11c2VyLWZvcm0gI2FncmVlJykuY2hhbmdlKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmF0dHIoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS52YWwoJ1RSVUUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0ZpbGVkVmFsaWQoZS50YXJnZXQpXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnI2RlbW8tdXNlci1mb3JtIGlucHV0Jykua2V5dXAoKGUpID0+IHtcclxuICAgICAgICBpc0ZpbGVkVmFsaWQoZS50YXJnZXQpXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjZXZlbnRfZGVtb19hcGlcIikub24oXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtUGFzc1ZhaWxkYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICQoZS50YXJnZXQpLmZpbmQoJ2lucHV0JykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRQYXNzVmFpbGRhdGlvbiA9IGlzRmlsZWRWYWxpZChlbGVtZW50KVxyXG4gICAgICAgICAgICBpZiAoIWlucHV0UGFzc1ZhaWxkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1QYXNzVmFpbGRhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmb3JtUGFzc1ZhaWxkYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gJChlLnRhcmdldCkuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxvYWRlci1kaXYnKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVJbigxMDApO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogd3BfZ2xvYmFsLmFqYXhfdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2RlbW9faG9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9kYXRhOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzczogJyArIHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5sb2FkZXItZGl2JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbmZpcm1fbXNnJykuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUmVxdWVzdCBmYWlsZWQ6ICcgKyByZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5sb2FkZXItZGl2JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9