"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  User: () => User,
  printNow: () => printNow
});
module.exports = __toCommonJS(index_exports);

// src/application/useCases/printNow.ts
function printNow() {
  const now = /* @__PURE__ */ new Date();
  const message = `Agora \xE9: ${now.toISOString()}`;
  console.log(message);
  return message;
}

// src/domain/entities/user.ts
var User = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `Usu\xE1rio(a): ${this.name}, idade ${this.age}.`;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User,
  printNow
});
