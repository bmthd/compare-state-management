import { FC, useEffect, useRef } from "react";

export const NotifyRerender: FC = () => {
  const elRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elRootRef.current == null) {
      return;
    }

    elRootRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      fill: "forwards",
    });
  });

  return (
    <div ref={elRootRef} style={{ color: "red" }}>
      Rerender
    </div>
  );
};
