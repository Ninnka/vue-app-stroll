export default {
  indexArr: [
    'home',
    'member',
    'classify',
    'shoppingcar',
    'my'
  ],
  isIndexTabChange(toName, fromName) {
    return this.indexArr.indexOf(toName) !== -1 && this.indexArr.indexOf(fromName) !== -1;
  }
}
