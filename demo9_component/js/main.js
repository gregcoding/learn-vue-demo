// 全局作用
Vue.component('alert1',{
	template:'<button @click="on_clock">测试</button>',
	methods:{
		on_clock:function() {
			alert('asd');
		}
	}
})


var Alert={
	template:'<button @click="on_clock">测试</button>',
	methods:{
		on_clock:function() {
			alert('asd');
		}
	}
}
new Vue({
	el:'#app',
	//局部组件
	components:{
		alert:Alert
	}
})
new Vue({
	el:'#app1'
})