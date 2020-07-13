<template>
    <div class="dialog" v-show="dialogIsShow">
        <div class="dialog-content" :style="{width:innerWidth+'%'}">
            <div class="dialog-header">
                <h3 class="title">{{title}}</h3>
                <span class="close" @click="cancelBtn">x</span>
            </div>
            <div class="dialog-body">
                <slot name="content"></slot>
            </div>
            <div class="dialog-footer">
                <a href="javascript:;" class="cancel" @click="cancelBtn">取消</a>
                <a href="javascript:;" class="submit" @click="submitBtn">注册</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Dialog",
    props:{
        dialogVisible:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'提示'
        },
        innerWidth:{
            type:Number,
            default:30
        }
    },
    watch:{
        'dialogVisible'(newVal){
            this.dialogIsShow = newVal;
        }
    },
    data(){
        return{
            dialogIsShow:this.dialogVisible
        }
    },
    methods:{
        cancelBtn(){
            this.dialogIsShow = false;
            this.$emit('onCancel',false)
        },
        submitBtn(){
            // this.dialogIsShow = false;
            this.$emit('onSubmit',false)
        }
    }
}
</script>
<style lang="less" scoped>
.dialog{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    .dialog-content{
        background: #fff;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .dialog-header{
            padding:20px 20px 10px;
            display: flex;
            justify-content:space-between;
            .title{
                padding: 0;
                margin: 0;
                font-weight: 400;
                font-size: #303133;
            }
            .close{
                color:#666;
                cursor: pointer;
            }
        }
        .dialog-body{
            padding:30px 20px;
        }
        .dialog-footer{
            display: flex;
            justify-content: flex-end;
            padding:10px 20px 20px;
            a{
                text-decoration: none;
                color:#606266;
                &.cancel,&.submit{
                    padding:10px 20px;
                    border:1px solid #dcdfe6;
                    margin:0 8px;
                }
                &.submit{
                    background: #409eff;
                    color:#fff;
                }
            }
        }
    }
}
</style>


