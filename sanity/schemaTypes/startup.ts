import { defineField, defineType } from "sanity";

export const startup = defineType({
	name: "startup",
  title: "Startup",
  type: "document",
  fields: [
		defineField({
			name: "title",
			title: "Titolo",
			type: "string",
		}),
		defineField({
			name: "slug",
      type: "slug",
			options: {
				source: "title"
			}
		}),
		defineField({
			name: "author",
      title: "Autore",
      type: "reference",
			to: [{ type: "author" }]
		}),
		defineField({
			name: "views",
      title: "Visualizzazioni",
      type: "number",
		}),
		defineField({
			name: "description",
      title: "Descrizione",
      type: "text",
		}),
		defineField({
			name: "category",
      type: "string",
			validation: (Rule) => Rule.min(1).max(20).required().error("Inserire una categoria"),
		}),
		defineField({
			name: "image",
      title: "Immagine",
      type: "url",
			validation: (Rule) => Rule.required().error("Inserire un'immagine"),
		}),
		defineField({
			name: "pitch",
      title: "Testo",
      type: "text",
		}),
  ],
	preview: {
		select: {
			title: "name",
		}
	}
})