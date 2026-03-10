export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug parameter is required',
    });
  }

  const storage = useStorage('assets:server');
  const item = await storage.getItem(`articles/${slug}.json`);

  if (!item) {
    throw createError({ statusCode: 404, message: `'${slug}' not found` });
  }

  // item is already parsed if it's json, but can be string depending on adapter:
  return typeof item === 'string' ? JSON.parse(item) : item;
});
