import { useMutation } from "@tanstack/react-query";

export const useMutationHooks = (fnCallBack) => {
  console.log("useMutationHooks fnCallBack: ", fnCallBack);
  const mutationHook = useMutation({ mutationFn: fnCallBack() });
  return mutationHook;
};
