"use client";

import { montserrat } from "../layout";
import { Product, Root } from "../page";
import classnames from "../page.module.scss";

interface CardProps extends Product {
  toggleSidebar: (prev: boolean) => void;
  addItem: (item: Product, amount: number) => void;
}

export default function Card(props: CardProps) {
  return (
    <div className={classnames["card"]}>
      <div>
        <span className={classnames["img-container"]}>
          <img src={props.photo} alt={props.name} aria-hidden />
        </span>
        <div className={classnames["name-price"]}>
          <h2>{props.name}</h2>
          <div>
            <span>R${props.price}</span>
          </div>
        </div>
        <div className={classnames["description"]}>{props.description}</div>
      </div>
      <button
        onClick={() => {
          props.addItem(props, 1);
          props.toggleSidebar(true);
        }}
        className={montserrat.className}
      >
        <span>
          <img src="/shop.svg" />
        </span>
        Comprar
      </button>
    </div>
  );
}
