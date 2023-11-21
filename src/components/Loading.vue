<script setup>
import { useUtilityStore } from '@/stores/utility' 

const utility = useUtilityStore()

</script>

<template>
    <div class="vl-parent">
        <loading v-model:active="utility.isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>

        <!-- <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click="utility.setLoading(true)">fetch Data</button> -->
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';

    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                }, 5000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        }
    }
</script>