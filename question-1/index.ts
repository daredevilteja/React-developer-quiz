function candyBar(x: number): void {
  if (x % 2 == 0 && x % 11 == 0) {
    console.log("candybar");
    return;
  }
  if (x % 2 == 0) {
    console.log("candy");
    return;
  }
  if (x % 11 == 0) {
    console.log("bar");
    return;
  }
  console.log(`${x}`);
}
