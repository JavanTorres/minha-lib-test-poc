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
export {
  User,
  printNow
};
