import React from 'react';
import MyInput from "../ui/input/MyInput";
import MySelect from "../ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
      <div>
        <MyInput
            placeholder={"Поиск..."}
            value={filter.query}
            onChange={e => setFilter({...filter, query : e.target.value})}
        />
        <MySelect
            defaultValue={'Сортировка'}
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
              {value: 'title', name: 'по названию'},
              {value: 'body', name: 'по описанию'}
            ]}/>
      </div>
  );
};

export default PostFilter;