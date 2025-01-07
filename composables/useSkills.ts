import type { ISkillItem, IUseSkills } from "~/types/types";

export default function (): IUseSkills {
  const { cdnUrl } = useAppConfig();
  const skills: globalThis.Ref<ISkillItem[]> = ref<ISkillItem[]>([])

  const getSkills = async (): Promise<void> => {
    try {
      const response: ISkillItem[] = await $fetch(
        cdnUrl + "skills.json", 
        { credentials: 'include', method: "GET" }
      )
      if(response && Array.isArray(response)) {
        skills.value = response
      }
    } catch (error) {
      throw new Error("Ошибка получения списка навыков");
    }
  };

  return {
    getSkills,
    skills
  }
}
