import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBlacklistUsersStore = defineStore('blacklistUsers', () => {
    const userList = ref<Array<UserList>>([
        {
            id: 'u001',
            name: 'วริศรา ถาภา',
            facebookName: 'Songpol Homdee',
            accountNumber: '0650867457',
            mobileNumber: '0650867457',
            refLink: ['https://www.blacklistseller.com/report/report_preview/395224', 'https://www.facebook.com/groups/STOUs/posts/25988095357501100/?paipv=0&eav=AfZ7f22_3YoT0OQrf2UaMD0sI-fJ6LTrlC0KPJ1Wb-nou63wiXH98FDrk9gegotBqmA&_rdr'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u002',
            name: '',
            facebookName: 'Leen Bubb',
            accountNumber: '',
            mobileNumber: '',
            refLink: ['https://www.facebook.com/share/JdP8PG41EvQqFxY3/'],
            imagesUrl: [],
            note: ''
        },
        {
            id: 'u003',
            name: 'กฤษดา ทรัพย์เจริญ',
            facebookName: 'Songpol Homdee',
            accountNumber: '0612575706',
            mobileNumber: '0612575706',
            refLink: ['https://www.blacklistseller.com/report/report_preview/395224', 'https://www.facebook.com/groups/STOUs/posts/25988095357501100/?paipv=0&eav=AfZ7f22_3YoT0OQrf2UaMD0sI-fJ6LTrlC0KPJ1Wb-nou63wiXH98FDrk9gegotBqmA&_rdr'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u004',
            name: 'ชลธิชา ปาลวัฒน์',
            facebookName: 'Songpol Homdee',
            accountNumber: '0800293723',
            mobileNumber: '0800293723',
            refLink: ['https://www.blacklistseller.com/report/report_preview/395224', 'https://www.facebook.com/groups/STOUs/posts/25988095357501100/?paipv=0&eav=AfZ7f22_3YoT0OQrf2UaMD0sI-fJ6LTrlC0KPJ1Wb-nou63wiXH98FDrk9gegotBqmA&_rdr'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
    ])
    const userData = ref<Array<UserList>>([])

    const getUser = computed(() => userData.value)

    async function findUser(selectId: String, searchValue: String) {

        if (selectId === 'Facebook') {
            const facebookId = userList.value.filter((user) => user.facebookName === searchValue)
            userData.value = facebookId
        }

        if (selectId === 'Account') {
            const AccountId = userList.value.filter((user) => user.accountNumber === searchValue)
            userData.value = AccountId
        }

        if (selectId === 'Mobile') {
            const mobileId = userList.value.filter((user) => user.mobileNumber === searchValue)
            userData.value = mobileId
        }
    }

    return { findUser, getUser }
})

interface UserList {
    id: String,
    name: String,
    facebookName: String,
    accountNumber: String,
    mobileNumber: String,
    refLink: Array<String>,
    imagesUrl: Array<String>,
    note: String
}