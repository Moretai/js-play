function* gene() {
  yield 1;
  yield 2;
}

const g = gene();
console.log(g.next());
