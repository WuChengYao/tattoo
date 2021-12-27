<template>
  <div class="Index">
      <b-container>
          <!-- <h2>路徑測試</h2> -->
          <b-row align-h="center" align-v="center">
            <b-col cols="auto">
              <router-link class="btn btn-primary idxBtnStyle" :to="{name: 'MemberList'}">
                會員列表
              </router-link>
            </b-col>
            <b-col cols="auto">
              <router-link class="btn btn-primary idxBtnStyle" :to="{name: 'MemberCreate'}">
                新增會員
              </router-link>
            </b-col>
            <!-- <b-col cols="4">
              <router-link class="btn btn-primary m-1" :to="{name: 'MemberEdit', params: {id: 1}}">
                編輯會員
              </router-link>
            </b-col> -->
          </b-row>
          <b-button variant="danger" @click="remove">清除測試</b-button>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'Index',
    components: {},
    methods: {
        remove () {
            localStorage.clear();
        }
    }
}
</script>

<style>
    .Index .idxBtnStyle {
        margin: 10px;
        padding: 50px 100px;
        box-shadow: 1px 1px 5px black;
    }
</style>