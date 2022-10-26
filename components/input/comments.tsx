import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { Comment } from '../../types';

type CommentsProps = {
  eventId: string;
};

const Comments = ({ eventId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[] | []>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`/api/comments/${eventId}`);
      const data = await response.json();
      const { comments }: { comments: Comment[] } = data;
      setComments(comments);
    };

    if (showComments) {
      getComments();
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData: Comment) => {
    // send data to API
    const response = await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('data::', data);
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
