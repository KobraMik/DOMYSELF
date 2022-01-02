//примитивы: string, number, boolean, null, undefined, NaN, Infinity, Simbol, BigInt.
//Infinity and NaN это number!
//объекты: object, array, function
//проверка typeof
//литерал объекта это {}

const test = "str"
console.log(typeof test)

const test1 = []
console.log(Array.isArray(test1)) //проверка массива

const user = {
    name: "Bob", //примитив
    friends: ["Alex", "Donald"], // ссылка на массив
    technologies: []
}

//поверхностная копия объекта юзер! совеременная копирование объектов
const copyUser = {...user} // копи юзер равно новый примитив name и ССЫЛКА на массив friends! получилось две ссылки на один объект
copyUser.name = "Nik"
console.log(user)
console.log(copyUser)
console.log(user === copyUser) //false, тк разные объекты из-за {...user} делает разные объекты, а не один ссылочный!
copyUser.friends.push("Anna") //добавится в два объекта юсер и копиюсер

//Глубокая копия объекта юзер!  деструктуризация
const deepCopyUser = {...user, friends: [...user.friends], technologies: [...user.technologies]} //реально новый объект с такими же данными, а не ссылки
deepCopyUser.friends.push("Olga") //добавит только в дипкопиюзер, юзер остаётся неизменным
console.log(deepCopyUser)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]
const newArray = students.map((st) => `Hi, ${st.name}! How are you?`)
console.log(newArray)
