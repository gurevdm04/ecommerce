import { CartList } from "../components/CartList/CartList";
import { CartTotalPrice } from "../components/CartTotalPrice/CartTotalPrice";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const CartContainers = () => {
  const styles: React.CSSProperties | undefined = {
    display: "flex",
    gap: "30px",
    justifyContent: "space-between",
    margin: "72px 0",
  };
  return (
    <Wrapper>
      <div style={styles}>
        <CartList />
        <CartTotalPrice />
      </div>
    </Wrapper>
  );
};
