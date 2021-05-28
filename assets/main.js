const app = new Vue({
    el: '#app',

    data:{
     archive:[]

    },

    methods: {

    },

    mounted() {

        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            
          archive =response.data;
          console.log(archive);
        })
        
    
    }


})