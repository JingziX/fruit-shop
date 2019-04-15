import Vue from 'vue'
import Router from 'vue-router'
import base from './base'

Vue.use(Router)

export default new Router({
  routes: mergeArray(base)
})


function mergeArray(){
	let newArray = [];
	for (let i =0;i< arguments.length; i++) {
		let arr = arguments[i];
		for(let j =0;j< arr.length; j++) {
			newArray.push(arr[j]);
		}
	}
	return newArray;
}
