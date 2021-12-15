<template>
    <div class="TattooIndex">
        <h1>{{'~紋繡~'}}</h1>
        <router-view>
            123
        </router-view>
    </div>
</template>

<script>
export default {
    name: 'TattooIndex',
    components: {},
    data () {
        return {}
    },
    beforeMount () {},
    methods: {},
    watch: {}
}
</script>

<style>
    .TattooIndex h1 {
        text-align: center;
        color: red;
        margin-bottom: 10px;
    }
</style>