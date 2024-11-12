import { defineField, defineType } from "sanity";
import {UserIcon} from '@sanity/icons'

export const author = defineType({
	name: "author",
  title: "Author",
  type: "document",
	icon: UserIcon,
  fields: [
		defineField({
			name: "id",
      type: "number",
		}),
		defineField({
			name: "name",
      title: "Nome",
      type: "string",
		}),
		defineField({
			name: "username",
      title: "Username",
      type: "string",
		}),
		defineField({
			name: "email",
      title: "Email",
      type: "string",
		}),
		defineField({
			name: "image",
      title: "Image",
      type: "url",
		}),
		defineField({
			name: "bio",
      title: "Bio",
      type: "text",
		}),
  ],
	preview: {
		select: {
			title: "name",
		}
	}
})