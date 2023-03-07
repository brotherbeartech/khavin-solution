import { defineComponent, ref } from 'vue';

import { defaultMoonStyle } from './constants/style.constant';
import { AppStyleModel } from './models/app-style-model';

class KhavinApp {
    public style: AppStyleModel;

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
