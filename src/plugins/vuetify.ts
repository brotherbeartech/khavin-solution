// Vuetify
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { VBtn } from 'vuetify/components'

const vuetify = createVuetify({
    aliases: {
        VBtnAlt: VBtn,
    },
    // https://next.vuetifyjs.com/features/global-configuration/
    defaults: {
        global: {
            rounded: 'sm',
        },
        VAppBar: {
            flat: true,
        },
        VBtn: {
            color: 'primary',
            height: 44,
            minWidth: 190,
        },
        VBtnAlt: {
            color: 'primary',
            height: 48,
            minWidth: 190,
            variant: 'outlined',
        },
        VSheet: {
            color: '#212121',
        },
    },
    // https://next.vuetifyjs.com/features/theme/
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                dark: true,
                colors: {
                    primary: '#1697f6',
                },
            },
        },
    },
    components,
    directives,
});

export default vuetify;
