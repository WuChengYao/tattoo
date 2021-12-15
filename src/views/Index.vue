<template>
  <div class="Index">
      <b-container>
          <h2>路徑測試</h2>
          <b-row>
            <b-col cols="4">
              <router-link class="btn btn-primary m-1" :to="{name: 'MemberList'}">
                會員列表
              </router-link>
            </b-col>
            <b-col cols="4">
              <router-link class="btn btn-primary" :to="{name: 'MemberCreate'}">
                新增會員
              </router-link>
            </b-col>
            <b-col cols="4">
              <router-link class="btn btn-primary m-1" :to="{name: 'MemberEdit', params: {id: 1}}">
                編輯會員
              </router-link>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},

}
</script>
