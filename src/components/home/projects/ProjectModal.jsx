// components
import ProjectModalContent from './children/ProjectModalContent'
// mui
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Dialog from "@mui/material/Dialog"

const ProjectModal = ({ open, setOpen, project }) => {

    const closeModal = (e) => {
        if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift') ) {
            return
        }
        setOpen(false)  
    }
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={true}
            PaperProps={{ sx: { maxWidth: '1200px', position: 'relative' } }}
        >
            <CloseRoundedIcon 
                role='button'
                ariaLabel='Close'
                tabIndex={0}
                onClick={() => setOpen(false)} 
                onKeyDown={(e) => closeModal(e)}
                sx={{ 
                    position: 'absolute', 
                    top: 14, 
                    right: 14, 
                    cursor: 'pointer',
                    zIndex: 100000, 
                }}
            />
            <ProjectModalContent open={open} project={project} />
        </Dialog>
    )
}

export default ProjectModal