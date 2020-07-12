import Dialog from './Dialog.vue';
import Login from './Login.vue';
const components = [
    Dialog,
    Login
]
const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
export default{
    install,
    ...components
}