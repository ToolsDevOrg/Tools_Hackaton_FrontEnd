import Svg, { Defs, G, Path, Rect } from "react-native-svg";

export const Logo = ({
  color = "#717171",
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <Svg
      className={className}
      width="98"
      height="114"
      viewBox="0 0 98 114"
      fill="none"
    >
      <G style="mix-blend-mode:luminosity" opacity="0.2">
        <Path
          d="M34.7996 -6.02662C37.8969 -13.1026 46.144 -16.328 53.22 -13.2308L130.894 20.7683L91.287 111.255L13.6128 77.2557C6.5368 74.1584 3.31141 65.9113 6.40861 58.8354L34.7996 -6.02662Z"
          fill={color}
        />
        <Path
          d="M109.771 26.1533L94.6021 19.5138L72.4057 70.2237L58.9012 64.3124C49.8857 60.3662 46.452 51.5174 50.4137 42.4664L60.8259 18.6788C63.6557 12.2137 60.7294 4.68769 54.2897 1.86893L50.7811 0.333161L35.245 35.8269C27.8874 52.636 35.4962 72.2035 52.2393 79.5322L80.9128 92.0826L109.771 26.1533Z"
          fill="white"
        />
      </G>
      <Defs>
        <Rect
          width="98.9469"
          height="102.039"
          fill="white"
          transform="translate(40.916 -20) rotate(23.6397)"
        />
      </Defs>
    </Svg>
  );
};
