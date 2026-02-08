import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed = 120, pause = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      setDisplayText(prev =>
        isDeleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === text) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
      }

      const delay = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(handleTyping, delay);
    };

    timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, pause]);

  return displayText;
}