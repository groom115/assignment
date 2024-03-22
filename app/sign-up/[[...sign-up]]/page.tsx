import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <SignUp />
    </div>
  );
}
