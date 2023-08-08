/** @satisfies { import('./$types').PageServerLoad } */
export const load = async ({ fetch }) => {
  const res = await fetch("/api/quack");
  return await res.json();
};

export const actions = {
  /** @satisfies { import('./$types').PageServerLoad } */
  default: async ({ fetch }) => {
    const res = await fetch("/api/quack");
    return await res.json();
  },
};