import { type Ref } from "vue"; 

export interface IAnchorItem {
  sourceId: string;
  targetId: string;
  actived: boolean;
}

export function useAnchor(anchorList: Ref<IAnchorItem[]>, containerId?: string) {
  onMounted(() => {
    const container = containerId ? document.getElementById(containerId) : window;
    let activeIndex: number | undefined;
    container?.addEventListener("scroll", (e: any) => {
      anchorList.value.forEach((item, index) => {
        item.actived = false;
        const target = document.getElementById(item.targetId);
        const targetTop = target?.offsetTop ?? 0;
        if (e.target?.scrollTop === targetTop || e.target?.scrollTop > targetTop) {
          activeIndex = index
        }
      })
      if (e.target?.scrollTop + e.target?.offsetHeight === e.target?.scrollTop) {
        activeIndex = anchorList.value.length - 1;
      }
      if (activeIndex !== undefined) {
        anchorList.value[activeIndex].actived = true;
      }
    })
    anchorList.value.forEach((item) => {
      const source = document.getElementById(item.sourceId);
      const target = document.getElementById(item.targetId);
      source?.addEventListener("click", () => {
        target?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    })
  })
}