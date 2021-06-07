import React from "react";
import { G, Path, Svg, Text } from "@react-pdf/renderer";

function Barcode({ fgColor = "#000", bgColor = "#fff" }) {
  return (
    <Svg width={234} height={142} viewBox="0 0 234 142" fill={fgColor}>
      <Path fill={bgColor} d="M0 0h234v142H0z" />
      <Text
        y={122}
        fontFamily="Courier"
        fontSize={20}
        fontWeight={700}
        transform="translate(10 10)"
      >
        9
      </Text>
      <Path d="M34 10h2v112h-2zM38 10h2v112h-2zM42 10h4v100h-4zM52 10h2v100h-2zM56 10h2v100h-2zM62 10h6v100h-6zM70 10h4v100h-4zM78 10h4v100h-4zM86 10h4v100h-4zM94 10h2v100h-2zM98 10h2v100h-2zM104 10h6v100h-6zM114 10h4v100h-4zM122 10h2v100h-2z" />
      <Text
        x={42}
        y={122}
        textAnchor="middle"
        fontFamily="Courier"
        fontSize={20}
        fontWeight={700}
        transform="translate(40 10)"
      >
        501101
      </Text>
      <G>
        <Path d="M126 10h2v112h-2zM130 10h2v112h-2z" />
      </G>
      <G>
        <Path d="M134 10h2v100h-2zM140 10h6v100h-6zM148 10h2v100h-2zM158 10h2v100h-2zM162 10h6v100h-6zM172 10h2v100h-2zM176 10h6v100h-6zM186 10h2v100h-2zM190 10h6v100h-6zM200 10h2v100h-2zM204 10h2v100h-2zM214 10h2v100h-2z" />
        <Text
          x={42}
          y={122}
          textAnchor="middle"
          fontFamily="Courier"
          fontSize={20}
          fontWeight={700}
          transform="translate(134 10)"
        >
          530003
        </Text>
      </G>
      <G>
        <Path d="M218 10h2v112h-2zM222 10h2v112h-2z" />
      </G>
    </Svg>
  );
}

export default Barcode;
