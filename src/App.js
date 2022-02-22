import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./ui/modal/MyModal";
import MyButton from "./ui/button/MyButton";

function App() {

  const [posts, setPosts] = useState(
      [
        {id: 1, title: 'аа', body: 'вв'},
        {id: 2, title: 'бб', body: 'бб'},
        {id: 3, title: 'вв', body: 'аа'}
      ]
  );
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort(
          (a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
        post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return (
      <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Создать новый пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>

        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={'Список постов'}
        />
      </div>
  );
}

export default App;
