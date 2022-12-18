import AdoptionItem from "./AdoptionItem";
import "./AdoptionsList.css";
const AdoptionsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="adoptions-list__fallback"> Not adoptions in this status</h2>;
  }

  return (
    <ul className="adoptions-list">
      {props.items.map((a) => (
        <li>
          <AdoptionItem
            id={a.id}
            key={a.id}
            title={a.title}
            status={a.status.name}
            birthdate={a.birthdate}
            onItemDelete={props.onItemDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default AdoptionsList;
