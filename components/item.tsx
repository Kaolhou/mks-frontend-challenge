import { Product } from "../app/page";
import { CloseButton } from "./error";
import classnames from "../app/page.module.scss";
import { ItemWithAmount } from "./sidebar";

interface ItemProps {
  item: ItemWithAmount;
  addItem: (item: Product, amount: number) => void;
  removeItem: () => void;
}
export default function Item({ item, addItem, removeItem }: ItemProps) {
  return (
    <div style={{ position: "relative" }}>
      <span
        className={classnames["button-card"]}
        onClick={removeItem}
        style={{ cursor: "pointer" }}
      >
        <CloseButton
          fill="#ffffff"
          stroke="hsl(180, 0%, 100%)"
          width={10}
          height={10}
        />
      </span>
      <div className={classnames["item-card"]}>
        <img src={item.photo} alt={item.name} />
        <span>{item.name}</span>
        <div className={classnames["plus-less"]}>
          <button
            onClick={() => {
              item.amount > 0 ? addItem(item, -1) : null;
            }}
          >
            -
          </button>
          <span>{item.amount}</span>
          <button onClick={() => addItem(item, 1)}>+</button>
        </div>
        <span>
          <strong>R${item.price}</strong>
        </span>
      </div>
    </div>
  );
}
