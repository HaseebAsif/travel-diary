import React, { useEffect } from "react";

// material-ui
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getPost, getPostsBySearch } from "../../actions/posts";

// Moment
import moment from "moment";

// Router
import { useParams, useHistory } from "react-router-dom";

// Styles
import useStyles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  // use Effect
  useEffect(() => {
    // Get Post by Id
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);
  console.log(post);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  let recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  if (recommendedPosts?.length > 4) {
    recommendedPosts = recommendedPosts.splice(0, 3);
  }

  const openPost = (_id) => history.push(`/posts/${_id}`);

  // Return
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography variant="body1">
            <span
              style={{ color: "green", fontWeight: "bold", margin: "14px 0" }}
            >
              My Travel Diary Date:
            </span>{" "}
            {post.date.slice(0, 10)}
          </Typography>
          <Typography variant="body1">
            {" "}
            <span
              style={{ color: "green", fontWeight: "bold", margin: "14px 0" }}
            >
              My Travel Diary Location:
            </span>{" "}
            {post.location}
          </Typography>
          <Typography
            style={{ padding: "50px 0" }}
            gutterBottom
            variant="body1"
            component="p"
          >
            {post.message}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "red", fontWeight: "bold", margin: "14px 0" }}
          >
            Created By: {post.name}
          </Typography>

          <Typography
            variant="body1"
            style={{ color: "red", fontWeight: "bold", margin: "14px 0" }}
          >
            <span>This Post was Created</span>{" "}
            {moment(post.createdAt).fromNow()}
          </Typography>

          <Divider style={{ margin: "20px 0" }} />

          <Divider style={{ margin: "20px 0" }} />

          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer", width: "115rem" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {message}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" alt="image12" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
