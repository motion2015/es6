const oldHeroes = ['Superman', 'Batman', 'Spiderman', 'Hulk']
const newHeroes = ['Ironman', 'Antman', 'Storm', 'X-man']

const totalHeroes = oldHeroes.concat(newHeroes)

console.log(totalHeroes)

const newTotal = [ 'Aquaman', 'Thunderman', ...oldHeroes, ...newHeroes]

console.log(newTotal)


function validate(arg) {
    if(totalHeroes.indexOf(arg) < 0 ) {
        return [arg, ...totalHeroes]
    }
}

const v = validate('Atom');

console.log(v)
const ttt = [{type: 'Flying', feePerMinL: 100},{type: 'Flying2', feePerMinL: 100},{type: 'Flying3', feePerMinL: 100},{type: 'Flying4', feePerMinL: 100},'','yyy','uuu']
console.log(ttt)

const uuu = ttt.filter(item => typeof item === 'string' && (item).toString().length > 0 )
console.log(uuu)