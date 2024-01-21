import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {

    const userInf = reactive<UserInf>({
        uid: '',
        email: '',
        isActive: false
    })

    const getUser = computed(() => userInf)

    async function setUser()  {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userInf.uid =  user.uid
                userInf.email =  user.email
                userInf.isActive =  true
            } else {
                userInf.uid =  ''
                userInf.email =  ''
                userInf.isActive =  false
            }
        })
}

    async function login(email: String | any, pass: String | any) {
        await signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                userInf.uid = userCredential.user.uid
                userInf.email = userCredential.user.email
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('Login fail => ' + errorCode + ' ' + errorMessage)
            })
    }

    function logOut() {
        signOut(auth).then(() => {
            userInf.uid = '',
                userInf.email = ''
            userInf.isActive = false
        }).catch((error) => {
            console.log('No logout => ', error)
        })
    }

    return { login, logOut, setUser, getUser }
})

interface UserInf {
    uid: String,
    email: String | any,
    isActive: Boolean
}