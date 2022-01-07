module.exports = mongoose => {
  var model = mongoose.Schema(
    {
      title: String,
      description: String,
      featuredImage: String,
      published: Boolean
    },
    { timestamps: true }
  );

  model.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const schema = mongoose.model("schema", model);
  return schema;
};
