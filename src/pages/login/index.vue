<template>
    <div class="login">
        <h5>{{msg}}</h5>
        <ul class="login-list">
            <li class="login-item">
                <label for="email">邮箱</label>
                <input id="email" type="email" placeholder="请输入您的邮箱">
            </li>
            <li class="login-item">
                <label for="password">密码</label>
                <input id="password" type="password" placeholder="请设置您的密码">
            </li>
        </ul>
        <div class="login-btn">
            登录
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            msg: '欢迎来到karleraess'
        }
    }
}
</script>