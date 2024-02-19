`use strict`;
class Storage {
  #items;
  constructor(arr) {
    this.#items = [...arr];
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexItemToRemove = this.#items.indexOf(itemToRemove);
    if (indexItemToRemove !== -1) {
      this.#items.splice(indexItemToRemove, 1);
    }
    return this.#items;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
