const eventBackgrounds: Record<string, any> = {
    football: require("@/assets/images/uefa-football-match-free-vector.jpg"),
    wedding: require("@/assets/images/wedding-bg.jpg"),
    ruracio: require("@/assets/images/ruracio-bg.jpg"),
    harambee: require("@/assets/images/harambee-bg.jpg"),
  };
  
  // Function to get background image, defaulting to a fallback
  export const getBackgroundImage = (eventType: string) => 
    eventBackgrounds[eventType.toLowerCase()] || require("@/assets/images/default-bg.jpg");
  