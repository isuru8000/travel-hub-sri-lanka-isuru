import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { Review } from '../types';
import { Star, Send, Loader2, User, Trash2 } from 'lucide-react';

interface ReviewComponentProps {
  destinationId: string;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ destinationId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      where('destinationId', '==', destinationId),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews: Review[] = [];
      snapshot.forEach((doc) => {
        fetchedReviews.push({ id: doc.id, ...doc.data() } as Review);
      });
      setReviews(fetchedReviews);
    });

    return () => unsubscribe();
  }, [destinationId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !newComment.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        destinationId,
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName || 'Anonymous',
        userPhoto: auth.currentUser.photoURL || '',
        rating: newRating,
        comment: newComment,
        createdAt: serverTimestamp(),
      });
      setNewComment('');
      setNewRating(5);
    } catch (e) {
      console.error('Error adding review: ', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (reviewId: string) => {
    // In a real app, we would use a custom modal. For now, we'll skip the native confirm.
    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
    } catch (e) {
      console.error('Error deleting review: ', e);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-[#5A5A40]/10 shadow-sm mt-12">
      <h3 className="text-2xl font-serif font-bold text-[#2d2d2d] uppercase tracking-tighter mb-8">
        Reviews & Ratings
      </h3>

      {auth.currentUser ? (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                className={`cursor-pointer ${star <= newRating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                onClick={() => setNewRating(star)}
              />
            ))}
          </div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your experience..."
            className="w-full p-4 rounded-2xl border border-[#5A5A40]/10 bg-white/50 focus:outline-none focus:border-[#5A5A40]"
            rows={3}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-[#5A5A40] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Submit Review
          </button>
        </form>
      ) : (
        <p className="mb-8 text-[#5A5A40]">Please sign in to leave a review.</p>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-[#5A5A40]/10 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {review.userPhoto ? (
                  <img src={review.userPhoto} alt={review.userName} className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={16} />
                  </div>
                )}
                <span className="font-bold text-sm">{review.userName}</span>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              {auth.currentUser?.uid === review.userId && (
                <button onClick={() => handleDelete(review.id)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              )}
            </div>
            <p className="text-[#2d2d2d]/80 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;
