
import {firebase} from '~/plugins/firebase.js'

const strict = false;
const db = firebase.firestore();

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
            id:null, registeredMeetups:null, name: null
        }
    }
}

const mutations = {
    createMeetup(state, payload){
        state.loadedMeetup.push(payload)
    },
    fetchAllpost(state, payload){
        state.loadedMeetup = payload
    },
    currentUser(state, payload){
        state.users.id = payload.id; 
        state.users.registeredMeetups = payload.registeredMeetups;
        state.users.name = payload.name;
    }
}

const actions={
    createMeetup({commit}, payload){
        const otis = {
            title: payload.title,
            description: payload.description,
            date: payload.date.toISOString(),
            imageUrl: payload.imageUrl,
            auth: payload.auth
        }

        db.collection('posters').add(otis)
            .then((data) => {
                commit('createMeetup', { ...otis, id: data.id})
            })
            .catch((err) => {
                console.log(err);
            })
    },

    fetchAllpost({commit}){
        let cold = [];
        db.collection('posters').get()
        .then(s => {
            s.forEach(d => {
                let h = d.data();
                cold.push({...h, id: d.id})
            });
            commit('fetchAllpost', cold);
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    },

    newUser({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
            cred => {
                console.log(cred);
                let fish = {
                    id: cred.user.uid,
                    registeredMeetups: [],
                    name: payload.name
                }

                db.collection('users').doc(cred.user.uid).set({
                    name: payload.name,
                    mail: payload.email
                })
                .catch((err) => {
                    console.log({newUserAtStore:err});
                })
                
                commit('currentUser', fish)

            })
        .catch(function(error) {
            console.log({ errorCode:error.code, errorMessage: error.message });
          });
    },

    logIn({commit}, payload){
        firebase.auth().signInWithEmailAndPassword( payload.mail, payload.password )
        .then(
            credlogin => {
                
                db.collection('users').doc(credlogin.user.uid).get()

                  .then( sst => {
                    let ship = {
                        id: credlogin.user.uid,
                        registeredMeetups: [],
                        name: sst.data().name
                    }
                    commit('currentUser', ship)
                  })
                  .catch(err => {
                    console.log('Error getting documents', err);
                  });
        })
        .catch()
    },

    logOut({commit}){
        firebase.auth().signOut()
        .then(
            ()=>{
                commit('currentUser', {
                    id: null,
                    registeredMeetups: null,
                    name: null
                })

                this.$router.push('/user/signin')

                // let auth2 = gapi.auth2.getAuthInstance();
                // auth2.signOut().then(function () {
                // console.log('User signed out.');
                // });

                // console.log("logge ou ??")

                //// aprender mas de esto:VVVVV
            })
        .catch(function(error) {
            console.log({name: "login", err: error});
            
        });
          
    }
}


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
    getUser(state){
        return state.users
    }
}

export {
    state,
    actions,
    getters,
    mutations,
    strict
}

