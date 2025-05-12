import { useState, useEffect } from "react";

// This hook checks if the user has scrolled to near the bottom of the page
const useScrollVisibility = (threshold = 100): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY + window.innerHeight;
      const documentHeight: number = document.documentElement.scrollHeight;

      // Check if user has scrolled to threshold pixels from the bottom
      setIsVisible(documentHeight - scrollPosition < threshold);
    };

    // Call once to check initial position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
};

export default useScrollVisibility;
