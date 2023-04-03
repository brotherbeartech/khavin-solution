<template>
  <section id="khavin_banner" class="home-section">
    <div class="banner">
      <div class="banner-content">
        <div class="logo">
          <v-img :src="appLogo" height="400" />
        </div>

        <div class="banner-title">
          <h1 :style="{ 'color': style.priorityFontColor }"> Brother Bear Technology </h1>
          <h2> <i> EVERYTHING IS POSSIBLE </i> </h2>
          <div class="w-100 d-flex align-center justify-center">
            <button class="btn btn-trans-fill-primary" :style="{ 'font-size': '32px' }"
              @click="scrollToDiscoverySection('homeDiscoverySection')"> DISCOVERY
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="home-section discovery-section" id="homeDiscoverySection">
    <div class="discovery-switch">
      <template v-for="item in discoveries">
        <div class="discovery-node cursor-pointer" :class="{ 'discovery-active-node': discoverySection === item }"
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
              Of Technilogy <span>Beautiful</span>
            </h2>
            <p>
              We provide mission-critical IT services that transform global businesses. We deliver
              excellence for our customers, colleagues and communities around the world.
            </p>
          </div>

          <!-- <div class="discovery-content-item-image">
            <v-img :src="futureExplainPic" width="350" height="350"></v-img>
          </div> -->
        </div>
      </template>

      <template v-else-if="discoverySection === 2">
        <div class="discovery-content-item">
          <div class="discovery-content-item-details">
            <h1 class="khavin-title primary-font-color"> Deliver </h1>
            <h2 class="khavin-sub-title">
              The Mission Critical IT Services That Move The World
            </h2>

            <p>
              We appreciate products developed and operated by talented leaders and always listen to
              improve day by day.
            </p>
          </div>

          <!-- <div class="discovery-content-item-image">
            <v-img :src="handshakepic" width="350" height="350"></v-img>
          </div> -->
        </div>
      </template>

      <template v-else-if="discoverySection === 3">
        <div class="discovery-content-item">
          <div class="discovery-content-item-details">
            <h1 class="khavin-title primary-font-color"> Services </h1>

            <p>
              We are The Semi Product Company. We provide a platform service to manage the Software
              Projects. We are Professional Agency ready for listening, development also helps you
              grow your business. Don't be waiting we are here to listen to you.
            </p>
          </div>

          <!-- <div class="discovery-content-item-image">
            <v-img :src="constructionPic" width="350" height="350"></v-img>
          </div> -->
        </div>
      </template>
    </div>
  </section>

  <section class="home-section customer-section w-100 h-100">
    <div class="customers-info-container w-100 h-100">
      <h1 class="khavin-title primary-font-color"> Our Customers </h1>

      <div class="customer-container">
        <h2 class="khavin-sub-title"> {{ selectedCustomer.name }} </h2>

        <div class="w-100 h-100 d-flex customer-paragraphs">
          <v-img :src="selectedCustomer.icon" width="450" height="450"></v-img>

          <div class="pragraphs">
            <template v-for="paragraph in selectedCustomer.contents">
              <p class="customer-paragraph"> {{ paragraph }} </p>
            </template>
          </div>
        </div>
      </div>

      <div class="customer-list">
        <template v-for="customer in customers">
          <v-avatar rounded="1" :image="customer.icon" size="75"></v-avatar>
        </template>
      </div>
    </div>
  </section>

  <section class="home-section stay-connect-section w-100 h-100" id="stayConnectedSection">
    <div class="stay-connect-container w-100 h-100">
      <div class="stay-connect-logo">
        <v-img :src="appLogo" width="265" height="425"></v-img>
      </div>

      <div class="stay-connect-form">
        <h1 class="khavin-title primary-font-color font-style-italic"> Stay Connected </h1>

        <div class="stay-connect-line">
          <v-text-field class="m-r-15" v-model="firstName" label="First name" variant="outlined" bg-color="white"
            :rules="[v => !!v || 'Field is required']"></v-text-field>

          <v-text-field v-model="lastName" label="Last name" variant="outlined" bg-color="white"></v-text-field>
        </div>

        <div class="stay-connect-line">
          <v-text-field label="Email" v-model="email" variant="outlined" type="email" bg-color="white"
            :rules="[v => !!v || 'Field is required']"></v-text-field>
        </div>

        <div class="stay-connect-line">
          <v-select label="Purpose" v-model="contactPurpose" variant="outlined" bg-color="white" :hint="contactHint"
            :hide-selected="true" :items="contacts" :item-title="'name'" :item-value="'id'"></v-select>
        </div>

        <div class="stay-connect-line">
          <button class="btn btn-primary m-r-15" rounded="lg" @click="submitContactForm()"> Submit </button>

          <span class="danger-message" v-if="errorMessage"> {{ errorMessage }} </span>
          <span class="success-message" v-if="successMessage"> {{ successMessage }} </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
  import { defaultMoonStyle } from '../../constants/style.constant';
  import { Customers, ContactPurpose } from '../../constants/khavin-data.constant';
  import { APIFactoryService } from '../../services/api-factory.service';

  let intervalItem: any;
  const apiService: APIFactoryService = new APIFactoryService();

  export default ({
    data() {
      const prefixPath = `${apiService.isDevEnvironment() ? './src' : '.'}`;
      const _customerList = Customers.map(customer => ({
        ...customer,
        icon: `${prefixPath}/${customer.icon}`
      }));

      return {
        style: defaultMoonStyle,
        discoverySection: 1,
        discoveries: [1, 2, 3],
        selectedCustomer: _customerList[0],
        customers: _customerList,
        contacts: ContactPurpose,
        firstName: '',
        lastName: '',
        contactPurpose: null,
        email: '',
        contactHint: '',
        errorMessage: '',
        successMessage: '',
        appLogo: `${prefixPath}/assets/brother_bear_logo.png`,
        futureExplainPic: `${prefixPath}/assets/futures_explain.png`,
        handshakepic: `${prefixPath}/assets/HandShake.png`,
        constructionPic: `${prefixPath}/assets/construction.png`
      }
    },
    methods: {
      changeDiscoveryView(index: number, _clearInterval: boolean): void {
        if (_clearInterval) {
          clearInterval(intervalItem);
        }

        this.discoverySection = index;
      },
      autoChangeDiscoveryView(): void {
        intervalItem = setInterval(() => {
          const nextSection = this.discoverySection + 1 > this.discoveries.length
            ? 1
            : this.discoverySection + 1;

          this.changeDiscoveryView(nextSection, false);
        }, 5000);
      },
      scrollToDiscoverySection(id: string) {
        document.getElementById(id)?.scrollIntoView();
      },
      submitContactForm(): void {
        if (!this.firstName) {
          this.errorMessage = 'First Name field is missing value';
          return;
        }

        if (!this.email) {
          this.errorMessage = 'Email field is missing value';
          return;
        }

        if (!this.contactPurpose) {
          this.errorMessage = 'Please select contact purpose';
          return;
        }

        this.errorMessage = '';
        const selectPurpose = this.contacts.find(c => c.id === this.contactPurpose);

        apiService.post('email', {
          from: this.email,
          purposeContent: selectPurpose?.name,
          name: `${this.firstName} ${this.lastName}`
        }).then(response => {
          this.successMessage = 'Your request is sent to server, we will contact you imidiately';
          console.log(response);
        }).catch(error => {
          this.errorMessage = 'Can not request to server; Please send me throw email at the FOOTER';
          console.log(error);
        });
      }
    },
    mounted() {
      this.autoChangeDiscoveryView();
    },
    unmounted() {
      clearInterval(intervalItem);
    }
  })
</script>