const user = { id: 11, name: 'Gorib Amir', jib: 'Actor' }
const userStringified = JSON.stringify(user)
console.log(user)
console.log(userStringified)

const shop = {
    name: 'Siyam Sotre',
    address: '82/kha Indira Road',
    profit: 15000,
    owner: {
        name: 'Siyam Ahmed',
        profession: 'Doctor',
    },
    product: ['Laptop', 'Mobile', 'Pepsi'],
    isExclusive: false
}

const shopStringified = JSON.stringify(shop)
console.log(shop)
console.log(shopStringified)

const converted = JSON.parse(shopStringified)
console.log(converted)