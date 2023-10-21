// import { Html, useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";

/* eslint react/prop-types: 0 */
const Loader = ({ isSmall }) => {
  // const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <p
        style={{
          fontSize: isSmall ? 14 : 20,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: isSmall ? 40 : 10,
        }}
      >
        {/* {isSmall ? "" : "Loading:"}&nbsp; */}
        {/* {progress.toFixed(2)}% */}
      </p>
    </Html>
  );
};

export default Loader;
