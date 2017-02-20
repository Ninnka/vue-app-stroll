import checkTab from 'src/Hook/checkTabChange';

export default {
  beforeRouteEnter(to, from, next) {
    if (checkTab.isIndexTabChange(to.name, from.name)) {
      next((vm) => {
        vm.scrollWrapper.scrollTop = vm.sc;
        if (vm.swiper) {
          vm.swiper.startAutoplay();
        }
      });
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (checkTab.isIndexTabChange(to.name, from.name)) {
      this.sc = this.scrollWrapper.scrollTop;
      if (this.swiper) {
        this.swiper.stopAutoplay();
      }
    }
    next();
  }
}
