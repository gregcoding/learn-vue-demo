var app=new Vue({
	el:'#app',
	data:{
		math:90,
		english:20,
	},
	computed:{
		sum:function () {
			return parseFloat(this.math)+parseFloat(this.english)
		},
		avg:function () {
			return Math.round(this.sum/3)
		}
	}
})