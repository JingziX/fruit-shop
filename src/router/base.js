/**
 * 
 * @authors xiangjm (xiangjm@seaway.net.cn)
 * @date    2019-03-12 10:36:49
 * @version $Id$
 */
import HelloWorld from '@/components/HelloWorld'
import demo from '@/pages/demo'
import index from '@/pages/index'
import login from '@/pages/login/index'
export default [{
	path: '/index',
	name: 'index',
	component: index
},{
	path: '/demo',
	name: 'demo',
	component: demo
}, {
	path: '/',
	name: 'HelloWorld',
	component: HelloWorld
}, {
	path: '/login',
	name: 'login',
	component: login
}]

