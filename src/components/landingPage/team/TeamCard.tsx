import React, { useState } from 'react';
import team from './team.module.scss';

import TeamDialog from './TeamDialog';

type TeamCardProps = {
  name: string;
};

export default function TeamCard(props: TeamCardProps) {
    const [image, setImage] = useState<string | null>(null)

    function openDialog() {
        const dialog = document.getElementById(props.name) as HTMLDialogElement;
        if(!dialog.open) {
            dialog.showModal();
        }
        
    }

    import(`../../../assets/images/roster/${props.name}.webp`).then((path) => {
        setImage(path.default)
    })

  return (
    <>
    <TeamDialog name={props.name} image={image} />
    <div className={team.card} onClick={() => openDialog()}>
      <div className={team.cardImage}>
        {image && <img src={image} alt={`${props.name} Profile Picture`} />}
      </div>
      <div className={team.cardText}>
        <h2>{props.name}</h2>
      </div>
    </div>
    </>
  );
}
