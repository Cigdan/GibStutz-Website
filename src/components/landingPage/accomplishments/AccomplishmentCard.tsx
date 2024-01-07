import { useState } from 'react'
import accomplishment from "./accomplishments.module.scss";

type accomplishmentType = {
    accomplishment: {
        title: string;
        image: string;
        url: string;
    }
}

export default function AccomplishmentCard(props : accomplishmentType) {
    const [image, setImage] = useState<string | null>(null)
    import(`../../../assets/images/accomplishments/${props.accomplishment.image}.webp`).then((path) => {
        setImage(path.default)
    })
  return (
    <a href={props.accomplishment.url} className={accomplishment.card}>
        {image && <img className={accomplishment.logo} src={image} alt={`${props.accomplishment.image}`} />}
        <span>{props.accomplishment.title}</span>
    </a>
  )
}
