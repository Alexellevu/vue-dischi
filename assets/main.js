const app = new Vue({
    el: '#app',

    data:{
        response:''

    },

    methods: {

    },

    mounted() {

        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            console.log(response.poster);
        })
        
    
    }


})