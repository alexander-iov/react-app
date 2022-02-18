import React, {useState} from 'react';
import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''})
  }
  return (
        <form>
          {/*Управляемый компонент*/}
          <MyInput type={"text"} placeholder={"Название"} value={post.title}
                   onChange={e => setPost({...post, title: e.target.value})}/>
          <MyInput type={"text"} placeholder={"Описание"} value={post.body}
                   onChange={e => setPost({...post, body: e.target.value})}/>
          <MyButton onClick={addNewPost}>Создать новый пост</MyButton>
        </form>
  );
};

export default PostForm;