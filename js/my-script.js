Vue.config.devtools = true;

new Vue (  
    {
        el: '#app', 
        data:{  
            img1: [
                'https://manuelamimosaravasio.com/wp-content/uploads/2012/06/Brocolli-Forest_small2-e1463403755803.jpg',
                'https://cameranation.it/api/storage/images/2018/07/food-art-foodscapes-carl-warner-8.jpg' ,
                'https://www.105.net/resizer/1200/720/true/1437652070302.jpg--.jpg?1437652071000',
                'https://i.pinimg.com/originals/3d/4c/78/3d4c78d52d46cc3b1c3b8eb07da587b3.jpg',
                ],
                index_img: 0
        },
        methods:{
            prev: function(){
                if(this.index_img === 0){
                    this.index_img = this.img1.length
                }
                this.index_img--
            },

            next: function(){
                        //0        =              
                if(this.index_img === this.img1.length - 1){   
                    this.index_img = 0
                }
                this.index_img++
              }
        }
    })