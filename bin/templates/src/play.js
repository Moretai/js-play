function test(target) {
  console.log("Class Decorator target", target);
}

function readonly(target, name, descriptor) {
  console.log("readonly", target, name, descriptor);
}

function memo(target, name, descriptor) {
  console.log("memo", target, name, descriptor);
}

@test
class MyMath {
  @readonly PI = 3.1415;

  @memo
  add(a, b) {
    return a + b;
  }
}
