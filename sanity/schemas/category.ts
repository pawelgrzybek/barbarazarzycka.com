const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "category",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default category;
