/* eslint-disable react/prop-types */
import React from 'react';
import makeRequest from '../../api/axios';
import PostHeader from '../../components/news/post/header';
import PostText from '../../components/news/post/text';
import styles from './news.module.scss';
import * as requestFactory from '../../api/requestFactory';
import { New } from '../../models/New';
import { User } from '../../models/User';

interface NewsProps {
  post: New;
}

export default function News({ post }: NewsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.newsContent}>
        <PostHeader
          authorName={(post.Author as User).Name}
          authorProfile={(post.Author as User).ImageUrl}
          name={(post || {}).Name}
          description={(post || {}).Description}
        />
        <PostText
          saverows={post.Rows}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '10' } },
      { params: { id: '16' } },
    ],
    fallback: true || false,
  };
}

export async function getStaticProps({ params }) {
  const res = await makeRequest(requestFactory.getNewDetail(params.id));

  return { props: res };
}