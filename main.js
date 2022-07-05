// const str = `
// 010-1234-5678.
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록`

// //const regexp = new RegExp('the', 'gi')
// const regexp = /the/g
// //console.log(str.match(regexp))
// //console.log(regexp.test(str))
// //console.log(str.replace(regexp, 'AAA'))
// //console.log(str)

// //console.log(str.match(/\.$/gi))

// const h = `  the hello  world   !

// `

// console.log(
//   h.replace(/\s/g, '')
// )

const str = `
  010-1234-5678
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)