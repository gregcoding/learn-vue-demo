var app=new Vue({
	el:'#app',
	data:{
		url:'http://baidu.com',
		className:'btn',
		isActive:true,
		sex:'female',
		sexTest:[],
		text:"asdasdasd",
		form:null,
		dest:[],
		role:'admin'
	},
	methods:{
		onClickTest:function (test) {
			alert(test);
		},
		on:function () {
			console.log('on')
		},
		leave:function () {
			console.log('leave')
		},
		onSubmit:function () {
			alert('测试')
		},
		onSubmitTest:function (e) {
			e.preventDefault();
			console.log('测试');
		}
	}
})