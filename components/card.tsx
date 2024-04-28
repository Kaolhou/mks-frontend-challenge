"use client";

import { Product, Root } from "../app/page";
import classnames from "../app/page.module.scss";

interface CardProps extends Product {
  toggleSidebar: (prev: boolean) => void;
  addItem: (item: Product, amount: number) => void;
  isSqueleton: boolean;
}

export default function Card(props: CardProps) {
  return (
    <div className={`${classnames["card"]}`}>
      <div>
        <span className={classnames["img-container"]}>
          {props.isSqueleton ? (
            <div
              style={{
                height: 138,
                width: "90%",
                margin: "14px 0",
                borderRadius: 8,
              }}
              className={classnames["pulse"]}
            ></div>
          ) : (
            <img src={props.photo} alt={props.name} aria-hidden />
          )}
        </span>
        <div className={classnames["name-price"]}>
          <h2>{props.name}</h2>
          <div>
            <span>R${props.isSqueleton ? " -----" : props.price}</span>
          </div>
        </div>
        {props.isSqueleton ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              style={{
                width: "90%",
                height: 20,
                margin: "10px",
                borderRadius: "8px",
              }}
              className={classnames["pulse"]}
              key={i}
            ></div>
          ))
        ) : (
          <div className={classnames["description"]}>{props.description}</div>
        )}
      </div>
      <button
        onClick={() => {
          props.addItem(props, 1);
          props.toggleSidebar(true);
        }}
      >
        {props.isSqueleton ? (
          <>---------</>
        ) : (
          <>
            <span>
              <img src="/shop.svg" />
            </span>
            Comprar
          </>
        )}
      </button>
    </div>
  );
}
