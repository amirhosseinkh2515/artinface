import { useState, useEffect } from "react";

export default function UseIsKeyboardOpen(value) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(value);
  const MIN_KEYBOARD_HEIGHT = 300 
  const isMobile = typeof window !== 'undefined' && navigator.userAgent.includes("Mobile") && window.innerWidth < 768

  useEffect(() => {
    setIsKeyboardOpen(isMobile && window.screen.height - MIN_KEYBOARD_HEIGHT > window.visualViewport.height)
  }, [window.visualViewport.height]);

  return isKeyboardOpen;
}