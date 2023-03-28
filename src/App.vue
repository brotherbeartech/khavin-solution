<template>
  <v-app :class="style.appClassStyle">
    <v-app-bar :color="style.appBarBackgroundColor" :elevation="10" rounded>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar rounded="0" class="mr-3" :image="appLogo" />
          </div>
        </v-app-bar-title>

        <div class="d-flex align-center">
          <span class="company-menu cursor-pointer mr-3" @click="navigateToPage('home')"> HOME </span>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                class="btn btn-transparent"
                variant="text"
                :min-width="100"
                v-bind="props"
              >
                <span class="light-font-color"> Products </span>
              </v-btn>
            </template>

            <v-list
              class="dropdown-light-theme">
              <v-list-item
                v-for="(item, index) in products"
                :key="index"
                :value="index"
                @click="navigateToPage(item.route)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <span class="company-menu cursor-pointer mr-3" @click="navigateToPage('company')"> COMPANY </span>
          <button class="btn btn-primary" @click="scrollToDiscoverySection('stayConnectedSection')"> CONTACT US
          </button>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

      <section class="khavin-footer-element d-flex align-center justify-end">
        <div class="khavin-authorize d-flex align-center">
          <v-img :src="blueLogo" width="122" height="45"></v-img>

          <span>© 2021. All rights reserved. Khavin Solution</span>
        </div>

        <div class="contacts">
          <span> khangnguyen0318@gmail.com </span>
          <span> +84 903 100 458 </span>
        </div>
      </section>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defaultMoonStyle } from './constants/style.constant';
import { APIFactoryService } from './services/api-factory.service';
import router from './router';

const apiService: APIFactoryService = new APIFactoryService();

export default {
  data() {
    const prefixPath = `${apiService.isDevEnvironment() ? './src' : '.'}`;

    return {
      style: defaultMoonStyle,
      appLogo: `${prefixPath}/assets/logo.svg`,
      blueLogo: `${prefixPath}/assets/Logo_xanh.png`,
      products: [
        {
          id: 1,
          title: 'KangNG',
          route: 'kangng'
        }/* ,
        {
          id: 2, 
          title: 'Evy',
          route: 'assistantEve'
        } */
      ]
    }
  },
  methods: {
    scrollToDiscoverySection(id: string) {
      document.getElementById(id)?.scrollIntoView();
    },
    navigateToPage(pageName: string): void {
      router.push({ name: pageName });
    },
  },
}
</script>
