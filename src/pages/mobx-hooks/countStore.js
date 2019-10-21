import { observable, action, computed } from 'mobx';

class Count {
  @observable
  count = 0;

  @computed
  get doubleCount() {
    return this.count * 2;
  }

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrease() {
    this.count--;
  }

  @action.bound
  set(num) {
    this.count = num;
  }
}



export default Count;
