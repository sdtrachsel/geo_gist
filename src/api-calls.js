const apiKey = '4844c8d920594b76a01af8ecf0c5a5b9$'

export const getArticles = ( country ) => {
 const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}` 
  return fetch(url)
     .then((res)=> {
      if(!res.ok){
        throw new Error(res)
      } 
      return res.json()
     })

}