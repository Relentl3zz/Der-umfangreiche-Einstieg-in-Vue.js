import { ref, computed } from "vue";

export const useSearch = (list) => {
  const searchQuery = ref("");

  const filteredList = computed(() =>
    list.filter((item) =>
      item.title.toLowerCase().startsWith(searchQuery.value.toLowerCase())
    )
  );

  return { searchQuery, filteredList };
};
