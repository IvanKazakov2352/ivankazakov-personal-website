<template>
  <div
    class="flex flex-col mx-auto max-w-[600px] sm:mx-4 1sm:mx-4 h-auto mt-4"
  >
    <div class="flex flex-row items-center">
      <img
        id="siba-inu-two"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('siba.svg')"
        alt="siba-inu-two"
      />
      <h1
        class="font-raleway font-bold text-2xl whitespace-pre-wrap break-words 1sm:text-lg ml-2"
      >
        Иван Казаков
      </h1>
    </div>
    <div class="flex flex-row font-raleway">
      <div class="1sm:text-sm">
        Я Fullstack Developer с общим стажем в разработке и проектировании
        более пяти лет!
      </div>
    </div>
    <div class="flex flex-row font-raleway mt-2 border-b-[1px] pb-2 1sm:text-sm">
      Языки программирования которые использую для решения технических задач: JavaScript, TypeScript, NodeJS, C#, ASP.NET Core!
    </div>
    <div class="flex flex-row items-center mt-10 border-b-[1px] pb-2">
      <img
        id="my-contacts"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('user.png')"
        alt="my-contacts"
      />
      <h3
        class="font-raleway font-bold text-xl whitespace-pre-wrap break-words 1sm:text-sm ml-2"
        title="Моё резюме и GitHub"
      >
        Моё резюме и GitHub
      </h3>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="my-github"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('github.svg')"
        alt="my-github"
      />
      <NuxtLink
        to="https://github.com/IvanKazakov2352"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        GitHub
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-2 border-b-[1px] pb-2">
      <img
        id="my-resume"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('resume.png')"
        alt="my-resume"
      />
      <NuxtLink
        to="https://hh.ru/resume/dfdf215dff07b276aa0039ed1f64736178526c"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Резюме на Head Hunter
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-10 border-b-[1px] pb-2">
      <img
        id="my-contacts"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('contacts.svg')"
        alt="my-contacts"
      />
      <h3
        class="font-raleway font-bold text-xl whitespace-pre-wrap break-words 1sm:text-sm ml-2"
        title="Связь со мной"
      >
        Связь со мной
      </h3>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="my-gmail"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('gmail.svg')"
        alt="my-gmail"
      />
      <NuxtLink
        to="mailto:ivankazakov3344@gmail.com"
        tag="a"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        ivankazakov3344@gmail.com
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="my-vk"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('vk.svg')"
        alt="my-vk"
      />
      <NuxtLink
        to="https://vk.com/id612110777"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        https://vk.com/id612110777
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-2 border-b-[1px] pb-2">
      <img
        id="my-telegram"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('telegram.svg')"
        alt="my-telegram"
      />
      <NuxtLink
        to="https://t.me/ivankazakov2233"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        https://t.me/ivankazakov2233
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-10 border-b-[1px] pb-2">
      <img
        id="working-now"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('office.png')"
        alt="working-now"
      />
      <h3
        class="font-raleway font-bold text-xl whitespace-nowrap break-words text-ellipsis overflow-hidden ml-2 1sm:text-sm"
        title="Над чем сейчас работаю"
      >
        Над чем сейчас работаю
      </h3>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="freelance-finder-image"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('ff.jpg')"
        alt="freelance-finder-image"
      />
      <NuxtLink
        to="https://vk.com/freelance.finder"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Freelance Finder
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 border-b-[1px] pb-2 1sm:text-sm">
      Freelance Finder - это удобная площадка
      как для специалистов, так и для заказчиков, позволяющая комфортно работать и зарабатывать!
    </div>
    <div class="flex flex-row items-center mt-10 border-b-[1px] pb-2">
      <img
        id="my-companies"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('project.png')"
        alt="my-companies"
      />
      <h3
        class="font-raleway font-bold text-xl text-ellipsis overflow-hidden ml-2 1sm:text-sm"
        title="Компании c которыми работал/работаю"
      >
        Компании c которыми работал или работаю
      </h3>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="sber-tech"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('sber.jpg')"
        alt="sber-tech"
      />
      <NuxtLink
        to="https://sbertech.ru/"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        SberTech
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 1sm:text-sm">
      Разработка некоторых компонентов серверной части на NodeJS для платформ: Школа 21 и Сбер Муза!
    </div>
    <div class="flex flex-row font-raleway mt-2">
      <NuxtLink
        tag="a"
        to="https://21-school.ru/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
      >
        Школа 21
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 border-b-[1px] pb-2">
      <NuxtLink
        tag="a"
        to="https://muse.edutoria.ru/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Сбер Муза
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="monitel"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('electricity.png')"
        alt="monitel"
      />
      <NuxtLink
        to="https://monitel.ru/"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        АО Монитор Электрик
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 1sm:text-sm">
      Принимаю активное участие в разработке комплекса CK11Proxy, который
      предназначен для гибкой организации потоков информационного обмена по
      стандартным телеметрическим и другим протоколам на базе стека TCP/IP с
      обеспечением первичной обработки и маршрутизации данных на прикладном
      уровне обмена информацией.
    </div>
    <div class="flex flex-row font-raleway mt-2">
      <NuxtLink
        tag="a"
        to="https://monitel.ru/products/ck11-proxy/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Более подробное описание
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 border-b-[1px] pb-2 1sm:text-sm">
      Принимаю активное участие в разработке компонентов для CK11 которые используют в «СО ЕЭС» это Единая энергетическая система России!
      Занимаюсь разработкой от различных журналов до систем отображения частоты в реальном времени и систем управления серверами
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="redsoft"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('company.png')"
        alt="redsoft"
      />
      <NuxtLink
        to="https://redsoft.ru/"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Red Soft
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 1sm:text-sm">
      Это Московский digital integrator для интернет решений для крупного и
      среднего бизнеса
    </div>
    <div class="flex flex-row font-raleway mt-1 1sm:text-sm">
      Занимался развитием основных сайтов для ОТП Банка, Уралсиб Банка и личного кабинета пользователя НПФ «САФМАР»
    </div>
    <div class="flex flex-row font-raleway mt-1 1sm:text-sm">
      Принимал участие в создании внутреннего инструмента для динамической генерации обложки продукции компании Coca-Cola! На стеке Java + VueJS!
    </div>
    <div class="flex flex-row font-raleway mt-1 1sm:text-sm">
      Занимался созданием интернет магазина компании для продажи электронной техники! На фреймворке NuxtJS 2.0 + VueJS 2.0
    </div>
    <div class="flex flex-row font-raleway mt-2">
      <NuxtLink
        tag="a"
        to="https://www.otpbank.ru/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Сайт ОТП банка
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2">
      <NuxtLink
        tag="a"
        to="https://dfnpf.ru/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        НПФ «САФМАР» ныне "Достойное будущее"
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 border-b-[1px] pb-2">
      <NuxtLink
        tag="a"
        to="https://uralsib.ru/"
        target="_blank"
        class="font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        Уралсиб
      </NuxtLink>
    </div>
    <div class="flex flex-row items-center mt-2">
      <img
        id="web-cosmos"
        class="h-6 w-6 select-none pointer-events-none"
        :src="image('cosmos.png')"
        alt="web-cosmos"
      />
      <NuxtLink
        to="https://webcosmos.ru/"
        tag="a"
        target="_blank"
        class="ml-3 font-raleway hover:underline hover:underline-offset-4 text-[rgba(55,53,47,.4)] cursor-pointer 1sm:text-sm"
        rel="nofollow"
      >
        WebCosmos
      </NuxtLink>
    </div>
    <div class="flex flex-row font-raleway mt-2 1sm:text-sm">
      Ставропольская компания которая занимается контекстной рекламой и продвижением сайтов
    </div>
    <div class="flex flex-row font-raleway mt-2 1sm:text-sm">
      Принимал участие в развитии системы дистанционного образования "СДО PRO" проект не получил жизнь!
    </div>
    <div class="flex flex-row font-raleway mt-2 mb-14 border-b-[1px] pb-2 1sm:text-sm">
      Занимался разработкой простых лендингов и одностраничных сайтов визиток с использованием HTML, CSS, Bitrix CMS
    </div>
  </div>
</template>
<script setup lang="ts">
const { image } = useImage()
</script>