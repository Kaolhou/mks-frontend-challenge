import classnames from "../app/page.module.scss";

interface OpenCardProps {
  amount: number;
  onClick: () => void;
}

export default function OpenCard({ amount, onClick }: OpenCardProps) {
  return (
    <button className={classnames["open-card"]} onClick={onClick}>
      <img src="/card.svg" alt="card" />
      <span>{amount}</span>
    </button>
  );
}
