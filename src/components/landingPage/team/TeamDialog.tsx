import { useState } from "react";
import team from "./team.module.scss";
import { IoLogoTwitter } from "react-icons/io5";

type TeamDialogProps = {
  name: string;
  video: string;
  twitter: string;
  dialogIsOpen: boolean;
  setDialogIsOpen: (isOpen: boolean) => void;
};

export default function TeamDialog(props: TeamDialogProps) {
    const [image, setImage] = useState<string | null>(null)
  function cancel() {
    const dialog = document.getElementById(props.name) as HTMLDialogElement;
    dialog.close();
    props.setDialogIsOpen(false);
  }

  import(`../../../assets/images/roster/${props.name}.webp`).then((path) => {
    setImage(path.default)
  })

  return (
    <dialog onClick={() => cancel()} id={props.name} className={team.dialog}>
      <div onClick={(e) => e.stopPropagation()} className={team.dialogContent}>
        <div className={team.topBar}>
          {image && <img className={team.icon} alt="Icon" height="64" width="64" src={image}/>}
          <h2>{props.name}</h2>
          <a href={`https://twitter.com/${props.twitter}`} className={team.iconTwitter}><IoLogoTwitter/></a>
        </div>
        {props.dialogIsOpen && <iframe
          className={team.video}
          src={`https://www.youtube.com/embed/${props.video}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>}
        
      </div>
    </dialog>
  );
}
