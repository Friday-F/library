<template>
    <div class="login">
        <v-dialog
            :title="title"
            :dialogVisible='dialogVisible'
            @onCancel='onCancel'
            @onSubmit='onSubmit'
        >
        <div slot="content">
            <div class="input_item">
                <label for="username" class="label">用户名:</label>
                <input type="text" id="username" class="inp" v-model="formLogin.username" @blur="onBlur(formLogin.username,'username')">
                <p class="tip" v-show="is_username">用户名必填</p>
            </div>
            <div class="input_item">
                <label for="password" class="label">密码:</label>
                <input type="text" id="password" class="inp" v-model="formLogin.password" @blur="onBlur(formLogin.password,'password')">
                <p class="tip" v-show="is_password">密码必填</p>
            </div>
        </div>
        </v-dialog>
    </div>
</template>
<script>
import Dialog from './Dialog'
export default {
    components:{
        'v-dialog':Dialog
    },
    props:{
        form:{
            type:Object,
            default:()=>{}
        }
    },
    watch:{
        'form'(newVal){
            this.formLogin = Object.assign({},this.formLogin,newVal)
        }
    },
    data(){
        return{
            title:'登陆',
            dialogVisible:true,
            formLogin:{
                username:'',
                password:""
            },
            is_username:false,
            is_password:false,
        }
    },
    methods:{
        onCancel(data){
            this.dialogVisible = data;
        },
        onSubmit(data){
            for(let key in this.formLogin){
                if(this.formLogin[key].trim() === ''){
                   return this[`is_${key}`] = true;
                    
                }
                this[`is_${key}`] = false;
            }
            this.dialogVisible = data;
            this.$emit('onSetForm',this.formLogin)
        },
        onBlur(value,key){
            if(!value.trim()){
                return this[`is_${key}`] = true;
            }
            this[`is_${key}`] = false;
        }
    }
}
</script>
<style lang="less" scoped>
@import '../style/common.less';
.login{
    width: 100%;
    height: 100%;
}
</style>


