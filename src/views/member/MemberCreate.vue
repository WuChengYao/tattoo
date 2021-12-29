<template>
    <div class="MemberCreate">
        <b-container>
            <h2 style="text-align: center;">新增會員</h2>
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
            <!-- 圖片上傳 -->
            <b-row align-h="center" align-v="center" class="mt-5 mb-3">
                <b-col cols="auto">
                    <p>
                        上傳貴賓照片
                    </p>
                </b-col>
                <b-row class="img_content">
                    <b-col cols="auto" class="show_img mb-1" style="margin-right: 10px" v-for="item, idx in img_previews" :key="idx">
                        <button @click="del_img(idx)" class="img_x">X</button>
                        <img class="show_this_img" :src="item">
                    </b-col>
                    <b-col cols="auto" class="mb-1" v-show="none_upimg == 1">
                        <label for="upload" class="btn-upload">
                            <img :src="no_img">
                            <input hidden id="upload" multiple="multiple" type="file" accept="image/jpeg,image/jpg,image/png" @change="imgUpData">
                        </label>
                    </b-col>
                </b-row>
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
                        <b-form-radio v-model="takeMedicine" :aria-describedby="take_medicine" name="take_medicine" value="nDrug">無</b-form-radio>
                        <b-form-radio v-model="takeMedicine" :aria-describedby="take_medicine" name="take_medicine" value="yDrug">有</b-form-radio>
                        <b-form-input v-show="takeMedicine == 'yDrug'" v-model.trim="drugName" placeholder="藥名" type="text"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <!-- 曾經有做過項目經驗 -->
            <b-row class="mb-2">
                <b-col sm="7">
                    <b-form-group label="曾經有做過項目經驗" v-slot="{user_experience}">
                        <b-form-checkbox-group
                            id="user_experience"
                            v-model="userExperience"
                            :options="userExperienceOptions"
                            :aria-describedby="user_experience"
                            name="user_experience"
                        ></b-form-checkbox-group>
                    </b-form-group>
                </b-col>
                <b-col sm="5">
                    <label>部位</label>
                    <b-form-input v-model.trim="userExperienceLocation" placeholder="部位敘述" type="text"></b-form-input>
                </b-col>
            </b-row>
            <hr>
            <!-- 臉部疾病 -->
            <b-row class="mb-2">
                <b-col sm="12">
                    <b-form-group label="有無其他臉部、眼睛、唇部疾病或損害等情況需說明" v-slot="{ face_wound }">
                        <b-form-radio v-model="hasFaceWound" :aria-describedby="face_wound" name="face_wound" value="notHave">無</b-form-radio>
                        <b-form-radio v-model="hasFaceWound" :aria-describedby="face_wound" name="face_wound" value="have">有</b-form-radio>
                        <b-form-input v-show="hasFaceWound == 'have'" v-model.trim="faceWoundName" placeholder="請描述..." type="text"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <!-- 如何得知本店 -->
            <b-row class="mb-2">
                <b-col sm="7">
                    <b-form-group label="如何得知本店" v-slot="{get_message}">
                        <b-form-checkbox-group
                            id="get_message"
                            v-model="getMessage"
                            :options="getMessageOptions"
                            :aria-describedby="get_message"
                            name="get_message"
                        ></b-form-checkbox-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="around" align-v="center" class="m-5 sign_content">
                <b-col xl="4" lg="4" md="12" class="sign_recipient">
                    <h5>
                        貴賓簽名
                    </h5>
                    <div class="sign_box" @click="signatureOpen('sign_recipient')">
                        <img v-show="recipient_sign != ''" style="width:100%; height:100%" :src="recipient_sign" alt="貴賓簽名">
                    </div>
                </b-col>
            </b-row>
            <b-row class="mb-2" align-h="center">
                <b-col cols="auto">
                    <b-button variant="primary" @click="send">確認新增</b-button>
                </b-col>
                <b-col cols="auto">
                    <router-link class="btn btn-secondary" :to="{name: 'MemberList'}">
                        取消
                    </router-link>
                </b-col>
            </b-row>
            <!-- 簽名 -->
            <b-modal ref="canvas_view_modal" id="canvas_99" :title="canvas_title" hide-footer>
                <div class="container">
                    <div class="container">
                        <VueSignaturePad
                        id="signature"
                        width="100%"
                        height="80vh"
                        ref="signaturePad"
                        :options="options"
                        v-show="isShow"
                        />
                    </div>
                    <div class="buttons">
                        <b-button @click="save(push_title)" class="m-2">
                            <i>
                                <img :src="canvas_icon_checked">
                            </i>
                            確定
                        </b-button>
                        <b-button @click="clear" class="m-2">
                            <i>
                                <img :src="canvas_icon_clear">
                            </i>
                            清除
                        </b-button>
                        <b-button @click="close" class="m-2">
                            <i>
                                <img :src="canvas_icon_clear">
                            </i>
                            關閉
                        </b-button>
                    </div>
                </div>
            </b-modal>
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
            userBirthday: '2021-01-01',
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
            takeMedicine: 'nDrug',
            drugName: '',
            //曾經有做過項目經驗
            userExperience: [],
            userExperienceOptions: [
                { text: '嫁接睫毛', value: 'eyelashExtension' },
                { text: '紋繡眉', value: 'tattooEyebrow' },
                { text: '紋唇', value: 'lipTattoo' },
                { text: '紋眼線', value: 'eyeliner' },
                { text: '雷射', value: 'laser' },
                { text: '彩妝造型', value: 'makeupStyling' },
                { text: '做臉', value: 'faceCare' },
                { text: '從來沒有', value: 'noHave' }
            ],
            userExperienceLocation: '',
            //臉部疾病
            hasFaceWound: 'notHave',
            faceWoundName: '',
            //如何得知本店
            getMessage: [],
            getMessageOptions: [
                { text: '網路', value: 'network' },
                { text: '廣告單張', value: 'advertisingFlyer' },
                { text: '親友介紹', value: 'friendIntroduced' },
                { text: '經過', value: 'goThrough' }
            ],
            //照片
            no_img: require('@/assets/images/upload.png'),
            img_previews_length: 1,
            img_previews: [],
            none_upimg: 1,
            //簽名
            options: {
                minWidth: 3,
                maxWidth: 8,
                penColor: "#000",
                onBegin: () => {this.$refs.signaturePad.resizeCanvas()} //父層渲染完後重置寬高
            },
            isShow: false,
            canvas_icon_checked: require('@/assets/images/canvasView/icon_checked.svg'),
            canvas_icon_clear: require('@/assets/images/canvasView/icon_clear.svg'),
            canvas_title: '', //賦予modal名字
            push_title: '', //傳遞title
            recipient_sign: '',
        }
    },
    beforeMount () {
    },
    methods: {
        //照片
        imgUpData: function (event) {
            let input = event.target;
            let count = input.files.length;
            let img_type = input.files.item(0).type;    //副檔名
            let img_size = Math.ceil((input.files.item(0).size / 1024) / 1024); //計算檔案大小
            let index = 0;
            switch (img_type) {
                case "image/jpeg":
                case "image/jpg":
                case "image/png":
                    if (img_size > 10) {
                        alert('檔案過大');
                    }
                    else {
                        if (input.files) {
                            if (count > this.img_previews_length) {
                                alert('檔案數量過多');
                                return;
                            } else {
                                if ((this.img_previews.length + count) >= (this.img_previews_length + 1)) {
                                    alert('檔案數量過多');
                                    return;
                                } else {
                                    while(count --) {
                                        let reader = new FileReader();
                                        reader.onload = (e) => {
                                            this.img_previews.push(e.target.result);
                                        }
                                        reader.readAsDataURL(input.files[index]);
                                        index ++;
                                    }
                                }
                            }
                        }
                    }
                    break;

                default:
                    alert('格式錯誤');
                    break;
            }
        },
        del_img: function(idx) {
            let yes_del = confirm('確定刪除此照片');
            if (yes_del) {
                this.img_previews.splice(idx, 1);
                if (this.img_previews.length <= this.img_previews_length) {
                    this.none_upimg = 1;
                }
            }
        },
        //簽名打開
        signatureOpen (name) {
            if (name == 'sign_recipient') {
                this.canvas_title = '貴賓簽名';
                this.push_title = name;
            }
            this.$refs['canvas_view_modal'].show();
            this.isShow = true;
            this.$nextTick(() => { //父層渲染完後重置寬高
                this.$refs.signaturePad.resizeCanvas();
            })
        },
        //簽名傳圖
        save(get_title) {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(isEmpty);
            if (get_title == 'sign_recipient') {
                this.recipient_sign = data;
            }
            this.$refs['canvas_view_modal'].hide();
            this.isShow = false;
        },
        clear () {
            this.$refs.signaturePad.clearSignature(); //清除簽名
        },
        close () {
            this.$refs.signaturePad.clearCacheImages(); //清除緩存圖像
            this.$refs.signaturePad.clearSignature(); //清除簽名
            this.$refs['canvas_view_modal'].hide(); //關閉modal
        },
        // undo() {
        //     this.$refs.signaturePad.undoSignature(); //返回上一動
        // },
        // change() {
        //     this.options = {
        //         penColor: "#00f",
        //     };
        // },
        // resume() {
        //     this.options = {
        //         penColor: "#c0f",
        //     };
        // },
        send () {
            console.log('送出');
            const getDatas = JSON.parse(localStorage.getItem('user_lists'));
            const getlocalItem = [];
            if (getDatas != null) {
                getDatas.forEach(getData => {
                    getlocalItem.push(getData);
                });
            }
            const pushData = {
                id:getlocalItem.length+1,
                userName: this.userName,
                userPhone: this.userPhone,
                userLine: this.userLine,
                userBirthday: this.userBirthday,
                skinCondition: this.skinCondition,
                skinConditionNarrate: this.skinConditionNarrate,
                userFettle: this.userFettle,
                userFettleNarrate: this.userFettleNarrate,
                takeMedicine: this.takeMedicine,
                drugName: this.drugName,
                userExperience: this.userExperience,
                userExperienceLocation: this.userExperienceLocation,
                hasFaceWound: this.hasFaceWound,
                faceWoundName: this.faceWoundName,
                getMessage: this.getMessage,
                userImg: this.img_previews,
                recipientSign: this.recipient_sign,
            }
            getlocalItem.push(pushData);
            const dataJsonString = JSON.stringify(getlocalItem);
            localStorage.setItem('user_lists', dataJsonString);

            alert('目前只是測試用，使用完請至首頁按下清除測試按鈕');
            alert('新增成功');
            this.$router.push({ name: 'MemberList'});
        }
    },
    watch: {
        img_previews () {
            if (this.img_previews.length >= this.img_previews_length) {
                this.none_upimg = 0;
            } else if (this.img_previews.length <= this.img_previews_length) {
                this.none_upimg = 1;
            }
        }
    }
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
    /* 照片 */
    .img_content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .img_content img{
        width: 60px;
        cursor: pointer;
    }
    .img_content .show_img {
        position: relative;
    }
    .img_content .show_img .show_this_img{
        width: 150px;
    }
    .img_content .show_img .img_x{
        font-size: 25px;
        font-weight: bold;
        color: #666;
        position: absolute;
        top: 0;
        right: 12px;
        border-radius: 50%;
        padding: 0px 10px;
        cursor: pointer;
    }
    .show_img {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .show_img img{
        width: 200px;
    }
    @media screen and (max-width: 480px) {
        .show_img {
            justify-content: center;
        }
        .show_img img{
            width: 100%;
        }
    }

    /* 畫冊 */
    #canvas_99 .modal-dialog{
        max-width: 90%;
    }
    @media (max-width:996px) {
        #canvas_99 .modal-dialog{
            max-width: 100%;
        }
        #canvas_99 .modal-dialog .modal-body .container{
            padding: 0px;
            max-width: 98%;
        }
    }
    #signature {
        border: double 3px transparent;
        border-radius: 5px;
        background-image: linear-gradient(white, white),
            radial-gradient(circle at top left, #4bc5e8, #9f6274);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
    .MemberCreate #canvas_99 .container {
        width: "100%";
        padding: 8px 16px;
    }
    .MemberCreate .show_this_img {
        width: 300px;
    }
    /* canvas mode */
    #canvas_99 .modal-dialog .modal-header {
        justify-content: center;
    }#canvas_99 .modal-dialog .modal-header h5 {
        font-size: 26px;
    }
    #canvas_99 .modal-dialog .modal-header .close {
        display: none;
    }
    #canvas_99 .buttons {
        display: flex;
        justify-content: center;
    }
    #canvas_99 .buttons button i img{
        width: 20px;
    }
    /* ---- */
    .MemberCreate .sign_content .sign_box{
        width: 400px;
        height: 300px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 1px 0px 5px #666;
        cursor: pointer;
    }
    @media (max-width:1400px) {
        .MemberCreate .sign_content .sign_box{
            width: 350px;
            height: 300px;
        }
    }
    @media (max-width:1200px) {
        .MemberCreate .sign_content .sign_box{
            width: 300px;
            height: 300px;
        }
    }
    @media (max-width:996px) {
        .MemberCreate .sign_content .sign_recipient,
        .MemberCreate .sign_content .sign_administrator {
            margin-bottom: 10px;
        }
        .MemberCreate .sign_content .sign_box{
            width: 400px;
            height: 250px;
        }
    }
    @media (max-width:490px) {
        .MemberCreate .sign_content .sign_box{
            width: 100%;
            height: 250px;
        }
    }
</style>