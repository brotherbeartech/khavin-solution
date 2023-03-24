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
                We are young and dynamic, always update and growth up the performance to develop future.
            </p>
        </div>

        <div ></div>
    </section>
</template>

<script lang="ts">
    import { SUPPABASE_KEY } from '@/constants/khavin-data.constant';
    import { DatabaseService } from '../../services/database.service';

    const databaseService = new DatabaseService(SUPPABASE_KEY.URL, SUPPABASE_KEY.ANNON_KEY);

    export default ({
        data() {

        },
        async mounted() {
            const members = await databaseService.getMembers();
            console.log(members);
        }
    })
</script>
