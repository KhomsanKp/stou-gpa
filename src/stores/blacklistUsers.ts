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
        {
            id: 'u005',
            name: 'ซุลฮาซาน ยูโซะ',
            facebookName: 'Thanes Rakkaew',
            accountNumber: '0910576883',
            mobileNumber: '0910576883',
            refLink: ['https://www.facebook.com/groups/183972356165914/posts/1043226193573855/?paipv=0&eav=AfacMBzCNRo1_HQT0sq996H5-UtqlvRMopscHEYbLF-6FPWrJ0nZIhXu69eZ_vs3Pfw&_rdr'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u006',
            name: '',
            facebookName: 'Andy Love',
            accountNumber: '0928623060',
            mobileNumber: '0928623060',
            refLink: ['https://www.facebook.com/groups/306852489780684/posts/%E0%B9%82%E0%B8%81%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%B2%EF%B8%8F%E0%B8%A1%E0%B8%B4%E0%B8%88%E0%B8%89%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B9%87%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89-%E0%B9%82%E0%B8%94%E0%B8%99%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81-%E0%B9%81%E0%B8%96%E0%B8%A1%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%82%E0%B8%9E%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%AD%E0%B8%B5%E0%B8%81/1876157436183507/'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u007',
            name: 'ศุภชัย คหินทพงศ์',
            facebookName: 'ศศุภชัย คหินทพงศ์',
            accountNumber: '4341561909',
            mobileNumber: '',
            refLink: ['https://www.blacklistseller.com/report/report_preview/319794'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u008',
            name: 'ศุภชัย คหินทพงศ์',
            facebookName: 'ศุภชัย คหินทพงศ์',
            accountNumber: '5980388400',
            mobileNumber: '',
            refLink: ['https://www.blacklistseller.com/report/report_preview/92671'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u009',
            name: 'มะลิวัลย์ ขวัญสุข',
            facebookName: 'ช่างหนึ่ง ครับ',
            accountNumber: '2009093959',
            mobileNumber: '',
            refLink: ['https://www.facebook.com/groups/403099806369301/posts/5953525761326650/?paipv=0&eav=AfboxbwHS4Fpdi3DUy_IUN6z8XdXgV2Yway5ebjFSZRA0WBO0Q2Kl5unF9q9rk1Suj0&_rdr'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
        {
            id: 'u010',
            name: 'มะลิวัลย์ ขวัญสุข',
            facebookName: 'ช่างหนึ่ง ครับ',
            accountNumber: '5632800923',
            mobileNumber: '',
            refLink: ['https://www.blacklistseller.com/report/report_preview/100037'],
            imagesUrl: [],
            note: 'ใช้หมายเลยบัญชีหลากหลาย เช่น บัญชีม้า, พร้อมเพย์, True wallet, Lazada, Shopee'
        },
    ])
    const userData = ref<Array<UserList>>([])

    const getUser = computed(() => userData.value)

    async function findUser(selectId: String, searchValue: String) {

        if (selectId === 'Name') {
            const nameId = userList.value.filter((user) => user.name === searchValue)
            userData.value = nameId
        }

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