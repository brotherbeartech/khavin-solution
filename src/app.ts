import { defineComponent, ref } from 'vue';

import { defaultMoonStyle } from './constants/style.constant';

class KhavinApp {
    public style: any;

    constructor() {
        this.style = defaultMoonStyle;
    }
}

export default defineComponent({
    setup() {
        const app = ref(new KhavinApp());

        return {
            style: app.value.style
        }
    },
  })
