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
                    <span class="company-menu cursor-pointer mr-3"> HOME </span>
                    <span class="company-menu cursor-pointer mr-3"> PRODUCTS </span>
                    <span class="company-menu cursor-pointer mr-3"> COMPANY </span>
                    <v-button class="btn btn-primary"> CONTACT US </v-button>
                </div>
            </v-container>
        </v-app-bar>

        <v-main>
            <section id="khavin_banner" class="home-section">
                <div class="banner">
                    <div class="blur-layer"></div>
                    <div class="banner-content">
                        <div class="logo">
                            <v-img src="./src/assets/logo.svg" height="400" />
                        </div>

                        <div class="banner-title">
                            <h1 :style="{ 'color': style.priorityFontColor }"> KHAVIN SOLUTION </h1>
                            <h2> <i> EVERYTHING IS POSSIBLE </i> </h2>
                            <div class="w-100 d-flex align-center justify-center">
                                <v-button class="btn btn-trans-fill-primary" :style="{ 'font-size': '32px' }"> DISCOVERY
                                </v-button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="home-section discovery-section">
                <div class="discovery-switch">
                    <template v-for="item in discoveries">
                        <div 
                            class="discovery-node cursor-pointer"
                            :class="{'discovery-active-node': discoverySection === item}"
                            @click="changeDiscoveryView(item, true)">
                        </div>
    
                        <div class="discovery-devider" v-if="item < 3"></div>
                    </template>
                </div>

                <div class="discovery-content w-100 h-100">
                    <template v-if="discoverySection === 1">
                        <div class="discovery-content-item">
                            <div class="discovery-content-item-details">
                                <h1 class="khavin-title primary-font-color"> Make The Future </h1>
                                <h2 class="khavin-sub-title primary-font-color"> 
                                    Of Technilogy <span class="light-font-color">Beautiful</span> 
                                </h2>
                                <p class="light-font-color">
                                    We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.
                                </p>
                            </div>

                            <div class="discovery-content-item-image">
                                <v-img src="./src/assets/futures_explain.png" width="350" height="350"></v-img>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="discoverySection === 2">
                        <div class="discovery-content-item">
                            <div class="discovery-content-item-details">
                                <h1 class="khavin-title primary-font-color"> Deliver </h1>
                                <h2 class="khavin-sub-title light-font-color"> 
                                    The Mission Critical IT Services That Move The World
                                </h2>

                                <p class="light-font-color">
                                    We appreciate products developed and operated by talented leaders and always listen to improve day by day.
                                </p>
                            </div>

                            <div class="discovery-content-item-image">
                                <v-img src="./src/assets/HandShake.png" width="350" height="350"></v-img>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="discoverySection === 3"> 
                        <div class="discovery-content-item">
                            <div class="discovery-content-item-details">
                                <h1 class="khavin-title primary-font-color"> Services </h1>

                                <p class="light-font-color">
                                    We are The Semi Product Company. We provide a platform service to manage the Software Projects. We are Professional Agency ready for listening, development also helps you grow your business. Don't be waiting we are here to listen to you.
                                </p>
                            </div>

                            <div class="discovery-content-item-image">
                                <v-img src="./src/assets/construction.png" width="350" height="350"></v-img>
                            </div>
                        </div>
                    </template>
                </div>
            </section>

            <section class="home-section customer-section w-100 h-100">
                <div class="customers-info-container w-100 h-100"></div>
            </section>
        </v-main>

        <v-footer>
            <v-container class="text-overline d-flex align-center justify-space-between">

            </v-container>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import { defaultMoonStyle } from './constants/style.constant'

    let intervalItem: any;

    export default {
        data() {
            return {
                style: defaultMoonStyle,
                discoverySection: 1,
                discoveries: [1, 2, 3],
            }
        },
        methods: {
            changeDiscoveryView(index: number, _clearInterval: boolean): void {
                if (_clearInterval) {
                    clearInterval(intervalItem);
                }

                this.discoverySection = index;
                console.log(this.$refs.discoveryNodes);
            },
            autoChangeDiscoveryView(): void {
                intervalItem = setInterval(() => {
                    const nextSection = this.discoverySection + 1 > this.discoveries.length 
                        ? 1 
                        : this.discoverySection + 1;

                    this.changeDiscoveryView(nextSection, false);
                }, 5000);
            }
        },
        mounted() {
            this.autoChangeDiscoveryView();
        },
        unmounted() {
            clearInterval(intervalItem);
        }
    }
</script>
