const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function asFn() {
  console.log("before");
  await delay(2000);
  console.log("after");
}

asFn();
