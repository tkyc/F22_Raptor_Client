import { withStyles, TextField } from '@material-ui/core';

export const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        }
    }
})(TextField);

export const styles = {
    container: {
        marginTop: "13%",
        position: "absolute",
        left: "50%", 
        transform: "translateX(-50%)" //Left and transform properties to centre an absolutely positioned element
    },

    playPaperBox: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: "20px",
        marginBottom: "5%"
    },

    playButton: {
        backgroundColor: "#296d98",
        color: "white",
        marginTop: "5%",
    },

    loginInput: {
        fontSize: "20px"
    },

    divider: {
        marginTop: "5%"
    },

    styledLink: {
        textDecoration: "none",
        outline: "none",
        display: "inline"
    }
};