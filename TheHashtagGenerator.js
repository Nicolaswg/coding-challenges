// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
 const removeSpace = str.replace(/\s+/g, '')
 
 if(removeSpace.length === 0) {
    return false
   }
 
 const split = str.split(/\s+/g)
 let hashtag = '#'
 split.forEach((e) => {
   console.log(e)
  hashtag = `${hashtag}${e[0].toUpperCase().concat(e.slice(1))}`
 });
  
  if(hashtag.length > 140) {
    return false
  }
  return hashtag
}
