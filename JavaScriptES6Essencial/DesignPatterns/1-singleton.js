function MyApp() {
  if (!MyApp.instance) {
    MyApp.instance = this;
  }

  return MyApp.instance;
}

const p = MyApp.call({ name: 'Custom Name' });
const p2 = MyApp.call({ name: 'Custom Name 2' });

console.log(p);
console.log(p2);
