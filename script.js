const app = Vue.createApp({
    data() {
        return {
            message: "banana"
        }
    },
    methods: {
        testMethod() {
            return this.message + "!";
        }
    }
})
app.mount('#app')
