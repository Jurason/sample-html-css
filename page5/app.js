const hero = [
    {name: 'Wolf', family: 'Marv', isEvil: false},
    {name: 'Fox', family: 'Conf', isEvil: false},
    {name: 'Rabbit', family: 'Aleu', isEvil: false},
]

const newHero = hero.map(el => {
    return Object.assign({}, el, {name: el.name.toUpperCase()}, {fullName: el.name + ' ' + el.family})
})
console.log(newHero);