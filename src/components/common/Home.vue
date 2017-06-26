<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
        <!-- <v-new></v-new> -->
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vFooter from './Footer.vue';
    import vNew from './NewOrder.vue'
    export default {
        components:{
            vHead, vSidebar,vFooter,vNew
        }
    }
</script>

