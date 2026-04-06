import { Destination } from '../types';
import { DESTINATIONS } from '../constants';

export const getRecommendations = (viewedDestinationIds: string[], limit: number = 3): Destination[] => {
  // Simple recommendation logic:
  // 1. Get categories of viewed destinations.
  // 2. Find destinations in those categories that haven't been viewed.
  // 3. Return top N.
  
  const viewedDestinations = DESTINATIONS.filter(d => viewedDestinationIds.includes(d.id));
  const viewedCategories = Array.from(new Set(viewedDestinations.map(d => d.category)));
  
  const recommendations = DESTINATIONS.filter(d => 
    !viewedDestinationIds.includes(d.id) && 
    viewedCategories.includes(d.category)
  );
  
  // Shuffle and limit
  return recommendations.sort(() => 0.5 - Math.random()).slice(0, limit);
};
