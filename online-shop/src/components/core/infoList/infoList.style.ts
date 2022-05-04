import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    list__item: {
        listStyle: "none",
        margin: "5px 0",
    
        "&:hover": {
          background: "#eaecef",
        },
      },
});

export default styles;