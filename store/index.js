
const state = () => {
    return {
        loadedMeetup:[
            {
                imageUrl:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg", id:"squirrelid", title:"Squirrel", date:"2017-07-11"
            },
            {
                imageUrl: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg", id:"skyid", title:"Sky", date:"2017-02-26"
            },
            {
                imageUrl: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg", id:"birdid", title:"Bird", date:"2017-08-20"
            },
            {
                imageUrl: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg", id:"planetid", title:"Planet", date:"2017-05-12"
            }
        ],
        users:{
            id:"nemo", registeredMeetups:["squirrelid"]
        }
    }
}

const mutations = {}

const actions={}

const getters = {
    loadedMeetups(state){  
        let some = [];
        let x = state.loadedMeetup;  //I had to make another array of state.loadedMeetup cause it is immutable
        x.forEach((element)=>{
            some.push(element);
        });

        return some.sort( (meetupA, meetupB) => {
            return meetupA.date > meetupB.date
        })
    },
    loadedMeet(state){
        return (meetId)=>{
            return state.loadedMeetup.find( (meetup) => {
                return meetId === meetup.id
            })
        }
    },    
    featuredMeetups(state, getters){
        let kima = getters;
        return kima.loadedMeetups.slice(0,5)
    },
}

export {
    state,
    actions,
    getters,
    mutations
}

