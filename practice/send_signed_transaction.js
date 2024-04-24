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
var provider = new ethers_1.ethers.JsonRpcProvider("https://sepolia.infura.io/v3/".concat(INFURA_ID));
var account1 = "0xD8ca2cF94f701AaB3792A818cf514e894869839C";
var account2 = "0x3252Cb5011c7a07354a099A9cc5900a5DE7c34dA";
var privateKey1 = "6f3940c54d518f9b70ddbd9378431b140e30b5212fee9c75f0bf1bd066325a76";
var wallet = new ethers_1.ethers.Wallet(privateKey1, provider);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var senderBalanceBefore, recieverBalanceBefore, txRequest, tx, senderBalanceAfter, recieverBalanceAfter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.getBalance(account1)];
            case 1:
                senderBalanceBefore = _a.sent();
                return [4 /*yield*/, provider.getBalance(account2)];
            case 2:
                recieverBalanceBefore = _a.sent();
                console.log("\n Sender balance before: ".concat(ethers_1.ethers.formatEther(senderBalanceBefore)));
                console.log("reciever balance before: ".concat(ethers_1.ethers.formatEther(recieverBalanceBefore)));
                txRequest = {
                    to: account2,
                    value: ethers_1.ethers.parseEther("0.025"),
                };
                return [4 /*yield*/, wallet.sendTransaction(txRequest)];
            case 3:
                tx = _a.sent();
                // wait for transaction to be mined
                return [4 /*yield*/, tx.wait()];
            case 4:
                // wait for transaction to be mined
                _a.sent();
                console.log(tx);
                return [4 /*yield*/, provider.getBalance(account1)];
            case 5:
                senderBalanceAfter = _a.sent();
                return [4 /*yield*/, provider.getBalance(account2)];
            case 6:
                recieverBalanceAfter = _a.sent();
                console.log("\n Sender balance after: ".concat(ethers_1.ethers.formatEther(senderBalanceAfter)));
                console.log("reciever balance after: ".concat(ethers_1.ethers.formatEther(recieverBalanceAfter)));
                return [2 /*return*/];
        }
    });
}); };
main();
