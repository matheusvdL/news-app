import React from 'react';
import Card from '../../common/Card';
import styles from './hot.module.scss';

const HotNews = () => (
  <div className={styles.container}>
    <div className={styles.cardscontainer}>
      <div className={styles.cardleft}>
        <div className={styles.firstCard}>
          <Card
            category="Automotivos"
            title="Afinal, Santana tem carburador ou não tem carburador ?"
            backgroundColor="#620607"
            margin={0}
            image="https://images.uncyc.org/pt/thumb/d/d5/Ti%C3%A3o_Carburador.jpg/1200px-Ti%C3%A3o_Carburador.jpg"
          />
        </div>
        <div className={styles.secondCard}>
          <Card
            category="Games"
            title="Confirmada nova capa do GTA VI"
            backgroundColor="#1A1A10"
            margin={0}
            image="https://theshoppers.com/pt-br/wp-content/uploads/sites/10/agostinho-carrara-no-gta-6-arte-de-dann1230-twitter-the-shoppers.jpg"
          />
        </div>
      </div>
      <div className={styles.cardright}>
        <Card
          category="Games"
          title="Saber jogar rpg de tabuleiro não te faz melhor que ninguém, diz filósofo Albert Vanquestien"
          backgroundColor="#CA2E30"
          marginLeft={10}
          image="https://porvir-prod.s3.amazonaws.com/wp-content/uploads/2020/06/17175322/dadosrpg.jpg"
        />
      </div>
    </div>
    <div className={styles.cardscontainer}>
      <div className={styles.newsBellow}>
        <div className={styles.newsBellowItem}>
          <Card
            category="Cinema"
            title="Mamaco vs Godzila em breve nos cinemas"
            backgroundColor="#620607"
            margin={0}
            image="https://64.media.tumblr.com/f2dc10439bc1ee81fcccdb388ddabee8/fe135097f81936bb-e3/s500x750/645ad101f8753b0d490b040d017d13a100e850b4.gifv"
          />
        </div>
        <div className={styles.newsBellowItem}>
          <Card
            category="Economia"
            title="O Jovem que ficou milionário com jogo do bixo"
            backgroundColor="#16224C"
            margin={0}
            image="https://blog.rico.com.vc/hs-fs/hubfs/o-que-e-ser-trader.jpg?width=607&name=o-que-e-ser-trader.jpg"
          />
        </div>
        <div className={styles.newsBellowItem}>
          <Card
            category="Automotivos"
            title="Aprenda a capotar seu UNO"
            backgroundColor="#7DC0D1"
            margin={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnx--cqeiQi3FkjBoZduHI0P2D83xkPx79g&usqp=CAU"
          />
        </div>
      </div>
    </div>
  </div>
);
export default HotNews;
