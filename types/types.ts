export interface IUseImage {
  image: (imageName: string) => string;
}

export interface IUseSkills {
  getSkills: () => Promise<void>;
  skills: globalThis.Ref<ISkillItem[]>;
}

export interface ISkillItem {
  id: number;
  name: string;
}