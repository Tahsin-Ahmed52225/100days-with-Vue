const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            link: 'www.dev.to',
            message2: '<b>Hello Vue!</b>'
        }
    },
    methods: {
        output() {
            return "Hello";
        },
        changeMessage() {
            this.message = 'Hello Vue from Methods!'
        }
    }
});

app.mount('#user-goal');