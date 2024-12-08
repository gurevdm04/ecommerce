import { Grid } from "react-loader-spinner";
import style from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#b88e2f"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{ justifyContent: "center", margin: "20px" }}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};
