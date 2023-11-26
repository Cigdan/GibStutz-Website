import { useState } from 'react';
import team from './team.module.scss';

import TeamDialog from './TeamDialog';

type TeamCardProps = {
  name: string;
  video: string;
  twitter: string;
};

export default function TeamCard(props: TeamCardProps) {
    const [image, setImage] = useState<string | null>(null)
    
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)

    function openDialog() {
        const dialog = document.getElementById(props.name) as HTMLDialogElement;
        if(!dialog.open) {
            dialog.showModal();
            setDialogIsOpen(true)
        }
        
    }

    import(`../../../assets/images/roster/${props.name}.webp`).then((path) => {
        setImage(path.default)
    })

  return (
    <>
    <TeamDialog name={props.name} video={props.video} twitter={props.twitter} dialogIsOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
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
