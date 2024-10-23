import Dialog from "@mui/material/Dialog"

const ProjectModal = ({ open, setOpen }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={true}
            PaperProps={{ sx: { height: '400px'} }}
        >
        
        </Dialog>
    )
}

export default ProjectModal