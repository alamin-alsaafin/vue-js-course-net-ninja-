new Vue({
	el : '#vue-app',
	data : {
		name : 'alamin alsaafin',
		jop : 'Vue.js Developer',
		FaceBookUrl : 'https://www.facebook.com/alamin.alsaafein.1',
		FacebookUser : 'alamin.alsaafein.1',
		FacebookPassword : 'alamin123465',
		age : '24'
	},
	methods : {
		sayGood : function (time) {
			return 'Good'+' '+time+' '+this.name;
		},
		addOne : function(){
			return this.age++;
		},
		subOne : function(){
			return this.age--;
		},
		addTen : function(num){
			return this.age+=num;
		},
		subTen : function(num){
			return this.age-=num;
		},
		hey : function(){
			alert('You clicked on me !');
		}
	}
})