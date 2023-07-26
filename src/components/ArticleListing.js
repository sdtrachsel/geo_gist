import React, { useState, useEffect } from "react";
import { getArticles } from "../api-calls";
import { cleanArticles } from "../utlis";

import { CountryPicker } from "./CountryPicker";
import { ArticleCard } from "./ArticleCard";
import { Article } from './Article';
import { Modal } from './Modal';
import { Error } from './Error'


export const ArticleListing = ({ articles, setArticles }) => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]= useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalOpen(true);
  }

  const createArticleCards = () => {
    if (isLoading) {
      return <div>loading</div>
    }
    const articleCards = articles.map((art) => {
      return <ArticleCard key={art.id} article={art} selectArticle={openModal} />
    })

    return articleCards
  }

  useEffect(() => {
    getArticles(selectedCountry)
      .then(data => {
        console.log(data)
        setArticles(cleanArticles(data.articles))
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        setError(true)
      })

  }, [selectedCountry])


  return (
    error? <Error />:
    <main>
      <CountryPicker
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <section className="articles-display">
        {createArticleCards()}
      </section>
      <Modal modalOpen={modalOpen} closeModal={() => setModalOpen(false)}>
        <Article article={selectedArticle} />
      </Modal>
    </main>

  )
}