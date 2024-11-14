import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
	*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    author -> {
			_id, name, image, bio
		},
    views,
    description,
    category,
    image,
		'slug': slug.current
}`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
    _id,
    title,
    _createdAt,
    author -> {
    _id, name, username, image, bio
    },
    views, 
    category,
    image,
    ptich
  }  
`)

export const USER_BY_ID = defineQuery(`
  *[_type == "author" && _id == $id][0] {
    _id, 
    name, 
    username,
    email,
    image,
    bio
  }
`)