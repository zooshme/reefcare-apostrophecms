module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Parameter',
    pluralLabeL: 'Parameters'
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true
      },
      _products: {
        label: 'Products',
        type: 'relationship',
        withType: 'product'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title', '_products']
      }
    }
  }
};
