import React, { useState, useEffect } from "react";
import { getArticles } from "../api-calls";
import { cleanArticles } from "../utlis";

import { CountryPicker } from "./CountryPicker";
import { ArticleCard } from "./ArticleCard";
import { Article } from './Article';
import { Modal } from './Modal';


import { mockUSA } from "../mock-data";

export const ArticleListing = ({ articles, setArticles }) => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalOpen(true);
  }

  const createArticleCards = () => {
    if (!articles) {
      return <div>loading</div>
    }
    const articleCards = articles.map((art) => {
      return <ArticleCard key={art.id} article={art} selectArticle={openModal} />
    })

    return articleCards
  }

  useEffect(() => {
    setArticles(cleanArticles(mockUSA))

    // getArticles(selectedCountry)
    //   .then(data => {
    //     setArticles(data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }, [selectedCountry])


  return (
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