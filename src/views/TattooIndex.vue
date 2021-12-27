<template>
    <div class="TattooIndex">
        <h1>
            <router-link class="logo_txt_style" :to="{name: 'Index'}">
                {{'~紋繡~'}}
            </router-link>
        </h1>
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
        margin-bottom: 20px;
    }
    .TattooIndex h1 .logo_txt_style{
        color: red;
        text-decoration:none;
    }
</style>