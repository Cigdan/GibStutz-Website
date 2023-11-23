import team from "./team.module.scss"

type TeamDialogProps = {
    name: string,
    image: string | null
}

export default function TeamDialog(props: TeamDialogProps) {
    function cancel() {
        const dialog = document.getElementById(props.name) as HTMLDialogElement;
        dialog.close()
    }
  return (
    <dialog onClick={() => cancel()} id={props.name} className={team.dialog}>
        <div onClick={(e) => e.stopPropagation()} className={team.dialogContent}>
            <h2>{props.name}</h2>
        </div>
    </dialog>
  )
}
