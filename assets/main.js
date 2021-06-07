const app = new Vue({
    el: '#app',

    data:{
     archive:[],
    
    },

    methods: {

    },

    mounted() {

        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            console.log(response.data.response);
           this.archive.push(response.data.response);
           console.log(this.archive);
        })
        
    
    }


})