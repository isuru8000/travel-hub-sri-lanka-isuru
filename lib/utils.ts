/**
 * Global image optimizer to ensure high-speed loading by serving images in WebP format
 * and compressing them with target widths.
 */
export function getOptimizedImageUrl(url: string, targetWidth: number = 800): string {
  if (!url) return '';

  // If it's an Unsplash image, we can optimize parameters perfectly
  if (url.includes('images.unsplash.com') || url.includes('plus.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      
      // Force format to webp and reduce resolution
      urlObj.searchParams.set('auto', 'webp'); // Turns auto=format into webp
      urlObj.searchParams.set('fm', 'webp');   // Explicitly request webp format
      urlObj.searchParams.set('w', targetWidth.toString()); // Set optimized width
      
      // Set a compressed but beautiful quality of 75
      urlObj.searchParams.set('q', '75');
      
      return urlObj.toString();
    } catch (e) {
      // Fallback simple replacement if URL parsing fails
      let optimized = url;
      if (optimized.includes('auto=format')) {
        optimized = optimized.replace('auto=format', 'auto=webp&fm=webp');
      } else if (!optimized.includes('fm=webp')) {
        optimized += '&fm=webp';
      }
      if (!optimized.includes('w=')) {
        optimized += `&w=${targetWidth}&q=75`;
      }
      return optimized;
    }
  }

  // If it's a Pinterest image, we can optimize sizes using their standard width-folder paths
  if (url.includes('pinimg.com')) {
    try {
      let sizeSegment = '/1200x/';
      if (targetWidth <= 240) {
        sizeSegment = '/236x/';
      } else if (targetWidth <= 500) {
        sizeSegment = '/474x/';
      } else if (targetWidth <= 600) {
        sizeSegment = '/564x/';
      } else if (targetWidth <= 800) {
        sizeSegment = '/736x/';
      } else {
        sizeSegment = '/1200x/';
      }
      
      // Pinterest URL formats have /736x/ or /1200x/ or /originals/ in their path
      // We can dynamically replace this segment to load the perfectly sized thumbnail
      return url.replace(/(\/originals\/|\/\d+x\/)/, sizeSegment);
    } catch (e) {
      return url;
    }
  }

  return url;
}
