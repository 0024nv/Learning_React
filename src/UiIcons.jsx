// search material ui icon npm
// https://www.npmjs.com/package/@material-ui/icons
// npm install @material-ui/icons
// npm install @material-ui/core

// search material ui icons
// https://mui.com/material-ui/icons/
// import AddIcon from '@mui/icons-material/Add'; NOt Working
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';
// https://v4.mui.com/components/tooltips/

function UiIcons(){
    return(
        <>
        <div style={{backgroundColor:'pink'}}>
        <Tooltip title="Delete">
        <Button><AddIcon/></Button>
        </Tooltip>
        </div>
        </>
    )
}
export default UiIcons;