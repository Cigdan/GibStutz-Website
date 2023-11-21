import React, { useState } from 'react';
import team from './team.module.scss';

type TeamCardProps = {
  name: string;
};

export default function TeamCard(props: TeamCardProps) {
    const [image, setImage] = useState<string | null>(null)

    import(`../../../assets/images/roster/${props.name}.webp`).then((path) => {
        setImage(path.default)
    })

  return (
    <div className={team.card}>
      <div className={team.cardImage}>
        {image && <img src={image} alt={`${props.name} Profile Picture`} />}
      </div>
      <div className={team.cardText}>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
