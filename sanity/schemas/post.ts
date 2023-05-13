const post = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "date",
      title: "Publish Date",
      type: "date",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text description",
            },
          ],
        },
      ],
    },
  ],
  initialValue: () => ({
    date: new Date().toISOString().substr(0, 10),
  }),
  orderings: [
    {
      title: "Publish Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Publish Date, Old",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};

export default post;
