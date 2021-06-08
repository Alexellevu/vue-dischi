const app = new Vue({
    el: '#app',

    data:{
     albums:'',
     error:''
        
    },

    methods: {

    },

    mounted() {

        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            console.log(response.data.response);
           this.albums = response.data.response;
           console.log(this.albums);
         })
         .catch(e => {
             console.error(e);
             this.error ='non è possibile connettersi all API'
         })
        
    
    }


})

//BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
//BONUS 2: Ordinare i dischi per anno di uscita.