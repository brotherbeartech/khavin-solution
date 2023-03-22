<template>
    <section class="company-section w-100 h-100">
        <div class="member-details">

        </div>

        <div class="member-list">

        </div>
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
