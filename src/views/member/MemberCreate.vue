<template>
  <div class="MemberCreate">
    <b-container>
        <h2>新增會員</h2>
        <!-- 基本資料 -->
        <b-row class="mb-2">
            <b-col sm="3">
                <label>姓名</label>
                <b-form-input v-model.trim="userName" placeholder="姓名" type="text"></b-form-input>
            </b-col>
            <b-col sm="3">
                <label>電話</label>
                <b-form-input v-model.trim="userPhone" placeholder="電話" type="number"></b-form-input>
            </b-col>
            <b-col sm="3">
                <label>LINE</label>
                <b-form-input v-model.trim="userLine" placeholder="LINE" type="text"></b-form-input>
            </b-col>
            <b-col sm="3">
                <label>生日</label>
                <b-form-input v-model.trim="userBirthday" placeholder="生日" type="date"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <!-- 膚質狀況 -->
        <b-row class="mb-2">
            <b-col sm="7">
                <b-form-group label="膚質狀況" v-slot="{skin_condition}">
                    <b-form-checkbox-group
                        id="skin_condition"
                        v-model="skinCondition"
                        :options="skinConditionOptions"
                        :aria-describedby="skin_condition"
                        name="skin_condition"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-col>
            <b-col sm="5">
                <label>情況敘述</label>
                <b-form-input v-model.trim="skinConditionNarrate" placeholder="情況敘述" type="text"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <!-- 身體狀況 -->
        <b-row class="mb-2">
            <b-col sm="7">
                <b-form-group label="身體狀況" v-slot="{user_fettle}">
                    <b-form-checkbox-group
                        id="user_fettle"
                        v-model="userFettle"
                        :options="userFettleOptions"
                        :aria-describedby="user_fettle"
                        name="user_fettle"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-col>
            <b-col sm="5">
                <label>其他</label>
                <b-form-input v-model.trim="userFettleNarrate" placeholder="其他敘述" type="text"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <!-- 現有服用過藥物 -->
        <b-row class="mb-2">
            <b-col sm="12">
                <b-form-group label="現有服用過藥物" v-slot="{ take_medicine }">
                    <b-form-radio v-model="takeMedicine" :aria-describedby="take_medicine" name="some-radios" value="nDrug">無</b-form-radio>
                    <b-form-radio v-model="takeMedicine" :aria-describedby="take_medicine" name="some-radios" value="yDrug">有</b-form-radio>
                    <b-form-input v-show="takeMedicine == 'yDrug'" v-model.trim="drugName" placeholder="藥名" type="text"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <hr>
        <!-- 曾經有做過項目經驗 -->
        <b-row class="mb-2">
            <b-col sm="12">
                曾經有做過項目經驗
            </b-col>
        </b-row>
        <hr>
        <!-- 臉部疾病 -->
        <b-row class="mb-2">
            <b-col sm="12">
                <b-form-group label="有無其他臉部、眼睛、唇部疾病或損害等情況需說明" v-slot="{ face_wound }">
                    <b-form-radio v-model="hasFaceWound" :aria-describedby="face_wound" name="some-radios" value="notHave">無</b-form-radio>
                    <b-form-radio v-model="hasFaceWound" :aria-describedby="face_wound" name="some-radios" value="have">有</b-form-radio>
                    <b-form-input v-show="hasFaceWound == 'have'" v-model.trim="faceWoundName" placeholder="請描述..." type="text"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <hr>
        <!-- 如何得知本店 -->
        <b-row class="mb-2">
            <b-col sm="12">
                如何得知本店
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'MemberCreate',
    components: {},
    data () {
        return {
            //基本資料
            userName: '',
            userPhone: '',
            userLine: '',
            userBirthday: '2021/01/01',
            //膚質狀況
            skinCondition: [], // Must be an array reference!
            skinConditionOptions: [
                { text: '油性', value: 'oily' },
                { text: '混和肌', value: 'mixedMuscle' },
                { text: '乾性', value: 'dryness' },
                { text: '敏感型', value: 'sensitive' }
            ],
            skinConditionNarrate: '',
            //身體狀況
            userFettle: [], // Must be an array reference!
            userFettleOptions: [
                { text: '高血壓', value: 'hypertension' },
                { text: '糖尿病', value: 'diabetes' },
                { text: '蟹足腫', value: 'keloid' },
                { text: '心血管疾病', value: 'cardiovascular' },
                { text: '懷孕', value: 'pregnant' },
                { text: '皮膚過敏', value: 'skinAllergies' },
                { text: '藥物過敏', value: 'drugAllergy' },
                { text: '血液疾病', value: 'bloodDisease' },
                { text: '皰疹', value: 'herpes' }
            ],
            userFettleNarrate: '',
            //曾有服用過藥物
            takeMedicine: '',
            drugName: '',
            //曾經有做過項目經驗
            //臉部疾病
            hasFaceWound: '',
            faceWoundName: '',
            //如何得知本店
        }
    },
    beforeMount () {},
    methods: {},
    watch: {}
}
</script>

<style>
    /* Chrome, Safari, Edge, Opera */
    .MemberCreate input[type=number]::-webkit-outer-spin-button,
    .MemberCreate input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    .MemberCreate input[type=number] {
        -moz-appearance: textfield;
    }
</style>