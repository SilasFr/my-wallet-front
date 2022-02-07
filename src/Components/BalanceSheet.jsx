import { Extract } from "../style/style";

export default function BalanceSheet({ balanceSheetObject }) {
  return (
    <Extract>
      {balanceSheetObject?.balanceSheet?.map((item, index) => {
        return (
          <div className="registry" key={index}>
            <div className="date-description">
              <span>{item.date}</span>
              <p>{item.description}</p>
            </div>
            <div className={item.character}>
              <p>{parseFloat(item.value).toFixed(2)}</p>
            </div>
          </div>
        );
      })}
      <div className="extract">
        <p>SALDO</p>
        <span>{balanceSheetObject?.extract}</span>
      </div>
    </Extract>
  );
}
