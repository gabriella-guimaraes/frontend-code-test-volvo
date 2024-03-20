import React, { useState } from "react";
import { useCars } from "./hooks/useCars";
import { CarCard } from "./CarCard";
import { Text } from "vcc-ui";
import { Spacer } from "./Spacer";

import styles from "../../public/css/home.module.css"
import PaginationDesktop from "./PaginationDesktop";

export const Home: React.FC = () => {
  const { cars } = useCars();
  const [selected, setSelected] = useState(0);

  const onClickNavigate = (left: boolean) => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24; //tamanho do card + padding
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if(left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

  // const onClickMobile = (index: number) => {
  //   let cardList = document.getElementById("card-list");
  //   let card = cardList?.firstElementChild;
  //   let cardSize = (card?.clientWidth ?? 0) + 24;
  //   let scrollSize = cardList?.scrollWidth ?? 0;
  //   let scrollPosition = cardList?.scrollLeft ?? 0;

  //   cardList?.scrollTo({ left: index * cardSize})
  //   setSelected(index);
  // }

  const onClickLeft = () => {}
  const onClickRight = () => {}

  return(
    <div className={styles.homeWrapper}>
      {/* <h1 className="introText">For a better future.</h1> */}
      <Text variant="cook" className="introText">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <PaginationDesktop onClickLeft={() => onClickNavigate(true)} onClickRight={() => onClickNavigate(false)}/>
    </div>
  )
};
