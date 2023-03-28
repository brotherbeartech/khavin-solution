<template>
    <section class="company-section w-100 h-100">
        <div class="about-us w-100">
            <h1 class="khavin-title"> About Us </h1>
            <p>
                Khavin Solution is a hybrid company, we are always raise the profit of customer to the first priority.
            </p>
            <p>
                The value we are bring to our clients is always out of the expected.
            </p>
            <p>
                We are young and dynamic, always update and growth up the performance to develop the future.
            </p>
        </div>

        <div class="member-list w-100">
            <template v-for="(member, index) in companyMembers">
                <div class="member-box">
                    <div class="member-avatar">
                        <v-img v-if="member.avatar" :src="member.avatar" :width="150"></v-img>
                        <i class="fa-solid fa-circle-user" v-else></i>

                        <div class="devider-item"></div>
                    </div>

                    <div class="member-info">
                        <span class="name"> {{ member.name }}</span>
                        <span class="position"> {{ member.positions.name  }} </span>
                        <span class="sub-position" v-if="member.description"> {{ member.description }} </span>

                        <div class="slogan-content">
                            {{ member.slogan }}
                        </div>
                    </div>
                </div>

                <div class="member-devider" v-if="index < companyMembers.length - 1"></div>
            </template>
        </div>
    </section>
</template>

<script lang="ts">
    import { SUPPABASE_KEY } from '@/constants/khavin-data.constant';
    import { DatabaseService } from '../../services/database.service';
    import { CompanyMemberModel } from '../../models/company-members.model';

    const databaseService = new DatabaseService(SUPPABASE_KEY.URL, SUPPABASE_KEY.ANNON_KEY);

    export default ({
        data() {
            return <{
                companyMembers: Array<CompanyMemberModel>
            }>{
                companyMembers: []
            }
        },
        async mounted() {
            const resCompanyMembers = await databaseService.getMembers();
            this.companyMembers = [...resCompanyMembers.data];
        }
    })
</script>
