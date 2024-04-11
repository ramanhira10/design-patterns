function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  }
};

const items = [1, "someName", false, 1.24];
const iter = new Iterator(items);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
