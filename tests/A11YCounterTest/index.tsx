import { AdoptedStyle, createCustomElement, EventDispatcher, h, ElementInternals } from '../../src';
import { counterStyle } from '../shared/counterStyle';

export const A11YCounterTest = createCustomElement('a11y-counter', {
  formAssociated: true,
  attributes: {
    value: 0,
  },
  reflectedAttributes: {
    count: 0
  },
  methods: {
    decrementCount() {
      if (!this.matches(':disabled'))
        this.value--;
    },
    incrementCount() {
      if (!this.matches(':disabled'))
        this.value++;
    },
  },
  lifecycle: {
    willMount(){
      this.value = this.count;
    },
    formAssociatedCallback(form) {
      console.log('Form associated', form);
    },
    formDisabledCallback(disabled) {
      console.log('Form disabled', disabled);
    },
    formResetCallback() {
      this.value = this.count;
      console.log('Form reset');
    },
    formStateRestoreCallback(state, mode) {
      console.log('Form state restore', state, mode);
    },
  },
  events: {
    countChanged: new EventDispatcher<number>()
  },
  observe: {
    value(){
      this.countChanged(this.value);
    },
    count() {
      this.value = this.count;
    }
  },
  render() {
    return (
      <>
        <ElementInternals
          ariaValueText={this.value.toString()}
          formValue={this.value.toString()}
          errorMessage={this.value > 0 ? null : 'Value should be greater than 0'} />
        <AdoptedStyle id="style">{counterStyle}</AdoptedStyle>
        <button type='button' onpointerup={this.decrementCount}>-</button>
        <span>{this.value}</span>
        <button type='button' onpointerup={this.incrementCount}>+</button>
      </>
    );
  }
});