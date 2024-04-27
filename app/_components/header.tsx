import OpenCard from "./open-card";
import classnames from "../page.module.scss";
interface HeaderProps {
  amount: number;
  onClick: () => void;
}

export default function Header({ amount, onClick }: HeaderProps) {
  return (
    <header className={classnames["header"]}>
      <h1>
        MKS<span>Sistemas</span>
      </h1>
      <OpenCard amount={amount} onClick={onClick} />
    </header>
  );
}
