import React, {useState, useEffect} from "react";
import { CountryPicker } from "./CountryPicker";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../api-calls";
import { cleanArticles } from "../utlis";
import { mockUSA } from "../mock-data";

export const ArticleListing = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSeletedArticle] = useState('')

  const articlesView = articles.map((art, index) => {
   return <ArticleCard key={index+1} title={art.title} source={art.source} date={art.publishedAt} urlToImage={art.urlToImage} description={art.description}/>
  })

  // <article>
  //     <div>
  //     <h2>{title}</h2>
  //     <p>{source}</p>
  //     <p>{date}</p>
  //     </div>
  //     <img src={urlToImage} alt=""/>
  //     <p>{desciption}</p>
  //   </article>

  useEffect(()=>{
    setArticles(cleanArticles(mockUSA))

    // getArticles(selectedCountry)
    //   .then(data => {
    //     setArticles(data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }, [selectedCountry])


  return(
    <main>
      <CountryPicker 
        selectedCountry={selectedCountry} 
        setSelectedCountry={setSelectedCountry}
        />
        <section className="articles-display">
        {articlesView }

        </section>
    </main>

  )
}