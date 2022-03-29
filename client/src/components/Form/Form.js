import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

// Image to String
import FileBase from "react-file-base64";

// Material-UI
import { TextField, Button, Typography, Paper } from "@material-ui/core";

// React Router
import { useHistory } from "react-router-dom";

// Styles
import useStyles from "./styles";
import MyEditor from "./Editor";
import Calendar from "react-calendar";
import Calender from "./Calender";
import GoogleMaps from "./GoogleMaps";

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    location: "",
    date: "",
  });
  const [dateValue, onChangeDate] = useState(new Date());

  // Styles
  const classes = useStyles();

  // Redux
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((postToFind) => postToFind._id === currentId)
      : null
  );

  // const post = useSelector((state) => state.posts.posts);

  const history = useHistory();

  // UseEffect
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  useEffect(() => {
    setPostData({ ...postData, date: dateValue });
    console.log(postData);
  }, [dateValue]);

  const user = JSON.parse(localStorage.getItem("profile"));

  // Handlers
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      location: "",
      date: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If we are updating
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      // If we are creating
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
    }

    clear();
  };

  // Get current id of the post

  // If no logged in user
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own travel diary, and like other's
          travel diaries.
        </Typography>
      </Paper>
    );
  }

  // Return
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={` ${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: "cursive",

            fontWeight: "bolder",
            fontSize: "2.4vw",
          }}
        >
          {" "}
          {currentId ? "Editing" : "Creating"} a Travel Diary
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <div>
          <p style={{ fontFamily: "cursive", textAlign: "center" }}>
            Please Select Your Travel Diary Date
          </p>
          <Calender value={dateValue} onChange={onChangeDate} />
        </div>

        <TextField
          name="location"
          variant="outlined"
          label="Please Enter Your Travel Location"
          fullWidth
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />

        <div
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          style={{
            height: "100%",
            width: "100%",
            border: "1px solid black",
            margin: "60px 0",
            padding: "20px",
          }}
        >
          <p style={{ fontFamily: "cursive", textAlign: "center" }}>
            Please Write Your Travel Diary Here
          </p>
          <MyEditor
            handleChange={(e) =>
              setPostData({ ...postData, message: e.blocks[0].text })
            }
          />
        </div>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInputs} style={{ margin: "1rem" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
