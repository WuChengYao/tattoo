<template>
  <div class="MemberList">
      <b-container>
          <b-row align-h="end" align-v="center" class="mb-3">
            <b-col cols="auto">
              <router-link class="btn btn-primary" :to="{name: 'MemberCreate'}">
                新增會員
              </router-link>
            </b-col>
          </b-row>
          
          <b-row align-h="center" align-v="center">
            <b-col cols="12">
                <table class="table" ref="oTable">
                    <thead>
                        <tr>
                            <th>項次</th>
                            <th>姓名</th>
                            <th>電話</th>
                            <th>LINE</th>
                            <th>生日</th>
                            <th>其他</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr v-for="item, idx in user_lists" :key="item.id">
                        <td>
                            {{ idx + 1 }}
                        </td>
                        <td>
                            {{ item.userName }}
                        </td>
                        <td>
                            {{ item.userPhone }}
                        </td>
                        <td>
                            {{ item.userLine }}
                        </td>
                        <td>
                            {{ item.userBirthday }}
                        </td>
                        <td>
                            <!-- <router-link class="btn" :class="status_btn_style[item.maintain_status]" :to="{ name: 'MaintainContent', params: {id: parseInt(item.id)} }">
                                {{maintain_status_btn[item.maintain_status]}}
                            </router-link> -->
                            <router-link class="btn btn-success" :to="{ name: 'MemberEdit', params: {id: parseInt(item.id)} }">
                                內容
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

export default {
    name: 'MemberList',
    components: {},
    data () {
        return {
            user_lists: [
                // {id:1, userName:'吳承耀', userPhone: '0963106821', userLine: '63106821', userBirthday: '1987-11-27'},
                // {id:2, userName:'吳人要', userPhone: '09631-06821', userLine: '63106821', userBirthday: '1987/11/27'},
                // {id:3, userName:'沒人要', userPhone: '0963-106-821', userLine: 'chengyao', userBirthday: '76/11/27'}
            ]
        }
    },
    beforeMount () {
        const getDatas = JSON.parse(localStorage.getItem('user_lists'));
        if (getDatas != null) {
            getDatas.forEach(getData => {
                this.user_lists.push(getData);
            });
        }
        this.$nextTick(() =>{ //請求成功的回調里使用
            $(this.$refs.oTable).DataTable({
                searching: true, //搜尋功能, 預設是開啟
                paging: true, //分頁功能, 預設是開啟
                ordering: false, //排序功能, 預設是開啟
                lengthMenu: [10, 20],
                language: {
                    processing: "處理中...",
                    loadingRecords: "載入中...",
                    lengthMenu: "一頁顯示 _MENU_ 筆",
                    zeroRecords: "沒有數據....",
                    info: "第 _START_ ~ _END_ 筆，共 _TOTAL_ 筆",
                    infoEmpty: "",
                    infoFiltered: "(從 _MAX_ 項結果中過濾)",
                    infoPostFix: "",
                    search: "搜尋:",
                    paginate: {
                        first: "第一頁",
                        previous: "上一頁",
                        next: "下一頁",
                        last: "最後一頁"
                    }
                }
            });
        })
        //test
        //  this.$axios.get('')
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    },
    methods: {},
    watch: {},
    beforeDestroy : function () {
        $('#datatable').DataTable({
            destroy: true
        });
    }
}
</script>

<style>

</style>