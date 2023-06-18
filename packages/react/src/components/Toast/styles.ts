import { styled } from "../../styles";

export const ToastContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray800",
  border: "1px solid $gray500",
  borderRadius: "$md",
  maxWidth: "500px",
  padding: "$3 $5",
  gap: "$4",

  "& p,span": {
    margin: "0",
    padding: "0",
  },

  "& span": {
    fontFamily: "$default",
    fontWeight: "$regular",
    cursor: "pointer",
  },
});

export const ToastHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "$white",
  fontSize: "$xl",
  alignItems: "center",
  fontFamily: "$code",

  "& span": {
    alignSelf: "flex-start",
  },

  "& p": {
    fontWeight: "$bold",
    wordBreak: "break-all",
    maxWidth: "90%",
  },
});

export const ToastContent = styled("p", {
  color: "$gray200",
  fontSize: "$sm",
  fontFamily: "$default",
  wordBreak: "break-all",
});
