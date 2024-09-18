export default defineEventHandler((event) => {
  return {
    ipv4: event.node.req.headers['x-forwarded-for'],
  }
});
