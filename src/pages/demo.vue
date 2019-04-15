<template>
    <div class="hello">
        <h1>{{ msg }}1</h1>
        <h2>Essential Links</h2>
        <img src="@/assets/images/logo.png" alt="">
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">
                    Core Docs
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>