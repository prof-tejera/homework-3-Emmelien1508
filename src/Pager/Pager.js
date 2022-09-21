import Panel from "components/Panel/Panel";
import "./Pager.css";

const Pager = () => {
  const nr = 12;
  const items = [...Array(nr + 1).keys()].slice(1)
  return (
    <div className="pagination">
      <div>&laquo;</div>
      {items.map((item, index) => {
        if (item === 5) {
          return <Panel key={index} active={true}>{item}</Panel>
        } else {
          return <Panel key={index}>{item}</Panel>
        }
      })}
      <div>&raquo;</div>
    </div>
  )
};

export default Pager;
