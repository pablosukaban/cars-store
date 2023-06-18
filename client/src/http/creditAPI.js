import { $host } from ".";

export const createCredit = async (credit) => {
  const { data } = await $host.post("api/credit", credit);
  return data;
};
