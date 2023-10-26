// object.//

let a ={

    fname :'prakhar',
    lname : 'bajpai',
    age : 23,
    email : 'prakharbajpai234@gmail.com',
    favmovies : ['harrypotter' , 'jawan' , 'hum'],

    living : {
        city : 'gwalior',
        country : 'india'
    },


    salary : function (){
        return 25000;
    },
    fullname : function(){
        fname="ram"

        return this.fname;
    }
}

document.write(a)

// document.write(a.favmovies)
// document.write(JSON.stringify(a))
// document.write(a.salary())
document.write(a.living.city)
document.write(a.living.country)

console.log(a)
// console.log(a.fullname())
