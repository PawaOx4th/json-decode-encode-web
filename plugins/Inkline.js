import Vue from 'vue'
import Inkline from '@inkline/nuxt'

Vue.use(Inkline, {
  components: {},
  config: {
    variant: 'light',
    autodetectVariant: false,
    validation: {
      validateOn: ['input'],
      keys: {
        VALUE: 'value',
        NAME: 'name',
        FIELDS: 'fields',
        VALIDATE: 'validate',
        VALIDATE_ON: 'validateOn',
        VALIDATORS: 'validators',
        INVALID: 'invalid',
        VALID: 'valid',
        TOUCH: 'touch',
        TOUCHED: 'touched',
        UNTOUCHED: 'untouched',
        DIRTY: 'dirty',
        PRISTINE: 'pristine',
        SET: 'set',
        ADD: 'add',
        REMOVE: 'remove',
        ERRORS: 'errors',
      },
    },
  },
})
