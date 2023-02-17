import { useState } from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";

const Storage = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

    setOpen(false);
  };

    return(
        <GridWrapper>
            <CommonButton variant="contained" onClick={handleClick}>
                Open success snackbar
            </CommonButton>
            <BasicSnackbar
                open={open}
                severity='success'
                onClose={handleClose}
                message="Success"
            />
        </GridWrapper>
    );
};

export default Storage;