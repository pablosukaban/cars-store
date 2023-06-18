import { $host, $authHost } from ".";

export const createCredit = async (credit) => {
  const { data } = await $host.post("api/credit", credit);
  return data;
};

export const fetchCredits = async () => {
  const { data } = await $authHost.get("api/credit");
  return data;
}
