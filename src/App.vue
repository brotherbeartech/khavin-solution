<template>
    <v-app :class="style.appClassStyle">
        <v-app-bar :color="style.appBarBackgroundColor" :elevation="10" rounded>
            <v-container class="d-flex align-center py-0">
                <v-app-bar-title class="pl-0">
                    <div class="d-flex align-center">
                        <v-avatar rounded="0" class="mr-3" image="./src/assets/logo.svg" />
                    </div>
                </v-app-bar-title>

                <div class="d-flex align-center">
                    <span class="company-menu mr-3"> HOME </span>
                    <span class="company-menu mr-3"> PRODUCTS </span>
                    <span class="company-menu mr-3"> COMPANY </span>
                    <v-button class="btn btn-primary"> CONTACT US </v-button>
                </div>
            </v-container>
        </v-app-bar>

        <v-main>
            <section id="khavin_banner">
                <div class="banner">
                    <div class="blur-layer"></div>
                    <div class="banner-content">
                        <div class="logo">
                            <v-img src="./src/assets/logo.svg" height="400" />
                        </div>

                        <div class="banner-title">
                            <h1 :style="{'color': style.priorityFontColor }"> KHAVIN SOLUTION </h1>
                            <h2> <i> EVERYTHING IS POSSIBLE </i> </h2>
                            <div class="w-100 d-flex align-center justify-center">
                                <v-button class="btn btn-trans-fill-primary" :style="{'font-size': '32px'}"> DISCOVERY </v-button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </v-main>

        <v-footer>
            <v-container class="text-overline d-flex align-center justify-space-between">

            </v-container>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import app from './app';
export default app;
</script>
