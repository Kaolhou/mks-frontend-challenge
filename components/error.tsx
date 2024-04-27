import { motion } from "framer-motion";
import classnames from "../app/page.module.scss";
import React from "react";

interface PathProps {
  [key: string]: string;
}

const Path = (props: PathProps) => (
  <motion.path
    {...props}
    strokeWidth="3"
    stroke={props.stroke ?? "hsl(0, 0%, 18%)"}
    strokeLinecap="round"
  />
);
export const CloseButton = (props: React.SVGProps<any>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <Path d="M 3 16.5 L 17 2.5" stroke={props.stroke!} />
      <Path d="M 3 2.5 L 17 16.346" stroke={props.stroke!} />
    </svg>
  );
};
interface ErrorRendererProps {
  setErrorNotification: (message: string) => void;
  message?: string;
}
export default function ErrorRenderer({
  setErrorNotification,
  message,
}: ErrorRendererProps) {
  return (
    <motion.div
      // positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={classnames["error_banner"]}
    >
      <button
        onClick={() => setErrorNotification("")}
        className={classnames["close"]}
      >
        <CloseButton />
      </button>
      {message}
    </motion.div>
  );
}
