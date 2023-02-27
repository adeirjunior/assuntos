import ReactDOM from "react-dom";
import { useEffect, useState, useRef } from "react";

const DropdownPortal = ({ children }) => {
  const portalRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const portalNode = document.createElement("div");
    portalRef.current = portalNode;
    document.body.appendChild(portalNode);
    setMounted(true);

    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRef.current);
};

export default DropdownPortal;
