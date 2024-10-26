// mui
import Dialog from "@mui/material/Dialog"
import ProjectModalContent from './ProjectModalContent'

const ProjectModal = ({ open, setOpen, project }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={true}
            PaperProps={{ sx: { minHeight: '400px'} }}
        >
            <ProjectModalContent open={open} project={project} />
        </Dialog>
    )
}

export default ProjectModal