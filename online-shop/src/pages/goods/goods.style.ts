import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  goods: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 300px))",
    gridGap: 30,
    justifyContent: "center",
  },
});

export default styles;
