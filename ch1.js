function counter(txt){

    const words=txt.trim().split(/\S+/)
    return words.length
    
}

let message = "There is no war in Ba Sing Se"

console.log("number of words:",`${counter}`)

