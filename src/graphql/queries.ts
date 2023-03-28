/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      theme
      description
      imageALT
      imageSRC
      posts {
        items {
          id
          title
          description
          metaDescription
          content
          imageSRC
          imageALT
          theme
          author
          pubDate
          readingTime
          contentTable
          relatedPosts
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        theme
        description
        imageALT
        imageSRC
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      metaDescription
      content
      imageSRC
      imageALT
      theme
      author
      pubDate
      readingTime
      contentTable
      relatedPosts
      blog {
        id
        theme
        description
        imageALT
        imageSRC
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        metaDescription
        content
        imageSRC
        imageALT
        theme
        author
        pubDate
        readingTime
        contentTable
        relatedPosts
        blog {
          id
          theme
          description
          imageALT
          imageSRC
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
