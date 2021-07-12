import { computed, ref } from "vue";

export const useSearch = (list) => {
  const searchQuery = ref("");

  const filteredList = computed(() =>
    list.value.filter((item) =>
      item.title.toLowerCase().startsWith(searchQuery.value.toLowerCase())
    )
  );

  return { searchQuery, filteredList };
};
