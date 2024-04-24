"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var INFURA_ID = "a591ef7ae9b64d9394f0ffd48a7d24ad";
var provider = new ethers_1.ethers.JsonRpcProvider("https://mainnet.infura.io/v3/".concat(INFURA_ID));
var ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];
var address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
var contract = new ethers_1.ethers.Contract(address, ERC20_ABI, provider);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var name, symbol, totalSupply, balance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.name()];
            case 1:
                name = _a.sent();
                return [4 /*yield*/, contract.symbol()];
            case 2:
                symbol = _a.sent();
                return [4 /*yield*/, contract.totalSupply()];
            case 3:
                totalSupply = _a.sent();
                console.log("\nReading from --> ".concat(address, "\n"));
                console.log("name: ".concat(name));
                console.log("symbol: ".concat(symbol));
                console.log("totalSupply: ".concat(ethers_1.ethers.formatEther(totalSupply), "\n"));
                return [4 /*yield*/, contract.balanceOf("0x6c6Bc977E13Df9b0de53b251522280BB72383700")];
            case 4:
                balance = _a.sent();
                console.log("\nReturned balance ".concat(ethers_1.ethers.formatEther(balance), " ETH\n"));
                return [2 /*return*/];
        }
    });
}); };
main();
