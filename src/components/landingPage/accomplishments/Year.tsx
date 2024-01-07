import accomplishments from "./accomplishments.module.scss";
import AccomplishmentCard from "./AccomplishmentCard";

type accomplishmentsYearType = {
  year: string;
  accomplishments: {
    title: string;
    image: string;
    url: string;
  }[]
};
export default function Year(props: accomplishmentsYearType) {
  return (
    <div className={accomplishments.yearContainer}>
      <span className={accomplishments.yearTitle}>{props.year}</span>
      {props.accomplishments.length > 0 ? props.accomplishments.map((accomplishment, index) => {
        return <AccomplishmentCard key={index} accomplishment={accomplishment} />;
      }) : <span>No accomplishments? 😢</span>}
    </div>
  );
}
