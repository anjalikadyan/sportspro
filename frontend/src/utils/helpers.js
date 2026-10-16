// Helper functions for the sports management system

/**
 * Formats a date string to a readable format
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Formats time to HH:MM format
 */
export const formatTime = (timeString) => {
  return timeString;
};

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generates random particle configurations
 */
export const generateParticles = (count = 20) => {
  return Array.from({ length: count }, () => ({
    width: `${Math.random() * 20 + 5}px`,
    height: `${Math.random() * 20 + 5}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 10}s`,
    animationDelay: `${Math.random() * 5}s`
  }));
};

/**
 * Gets sport icon by name
 */
export const getSportIcon = (sportName) => {
  const iconMap = {
    'Football': '⚽',
    'Basketball': '🏀',
    'Cricket': '🏏',
    'Tennis': '🎾'
  };
  return iconMap[sportName] || '🏆';
};
