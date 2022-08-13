import React from "react";
import quesImg from "../../assets/ques.png";

export default function BloсkQues() {
  return (
    <div className="container mx-auto md:my-28 my-8 p-4">
      <div>
        <h2 className="flex items-center justify-center text-center md:leading-none text-[25px] leading-7 md:text-[54px] font-bold">
          <span className="hidden md:block md:mr-[30px]">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4609 0C6.29245 0 0.460938 5.83151 0.460938 13C0.460938 20.1685 6.29245 26 13.4609 26C20.6294 26 26.4609 20.1685 26.4609 13C26.4609 5.83151 20.6294 0 13.4609 0ZM13.4609 20.5833C12.8629 20.5833 12.3777 20.0981 12.3777 19.5C12.3777 18.9019 12.8629 18.4167 13.4609 18.4167C14.059 18.4167 14.5442 18.9019 14.5442 19.5C14.5442 20.0981 14.059 20.5833 13.4609 20.5833ZM15.1758 13.6955C14.7924 13.872 14.5442 14.2588 14.5442 14.6803V15.1667C14.5442 15.7646 14.06 16.25 13.4609 16.25C12.8619 16.25 12.3777 15.7646 12.3777 15.1667V14.6803C12.3777 13.416 13.1207 12.2569 14.2681 11.7271C15.372 11.2191 16.1692 9.87021 16.1692 9.20827C16.1692 7.71558 14.9548 6.5 13.4609 6.5C11.9671 6.5 10.7527 7.71558 10.7527 9.20827C10.7527 9.80634 10.2683 10.2917 9.6692 10.2917C9.07014 10.2917 8.58594 9.80634 8.58594 9.20827C8.58594 6.52063 10.7731 4.33327 13.4609 4.33327C16.1488 4.33327 18.3359 6.52063 18.3359 9.20827C18.3359 10.672 17.0662 12.8235 15.1758 13.6955Z"
                fill="#7B72FE"
              />
            </svg>
          </span>
          <span>Как именно ты станешь разработчиком</span>
        </h2>
        <p className="max-w-[970px] font-normal text-center text-base md:text-2xl mx-auto sm:mt-10 mt-2">
          На курсе ты не просто изучаешь теоретический материал. в процессе
          изучения ты повторяете за действующим разработчиком, после чего &nbsp;
          <b className="font-semibold">
            закрепляешь знания на заданиях и проектах.
          </b>
        </p>
      </div>
      <div className="relative mt-[60px]">
        <div className="lg:flex-none flex justify-between flex-wrap">
          {/* Two command`s project */}
          <div className="max-w-[324px] lg:mb-0 mb-5 py-6 px-5 border border-indigo rounded-[14px] shadow-md lg:absolute bg-white lg:mt-[8%]">
            <b className="font-semibold text-indigo uppercase ">
              2 Командных проекта
            </b>
            <p className="text-sm font-medium mt-3 leading-6">
              Симуляция комерческого проекта - получаете ТЗ и организовываете
              командную разработку. Прокачивая навыки для будущей работы.
            </p>
            <p className="text-sm mt-3 font-medium leading-6">
              <b className="font-semibold">Проекты на тему:</b>
              <br />- JavaScript плагин "Контекстное меню"
              <br />- Cайт на React, презентующий команду участников
            </p>
          </div>
          {/* personal projects */}
          <div className="max-w-[390px] lg:mb-0 mb-5 py-6 px-5 border border-indigo rounded-[14px] shadow-md lg:absolute bg-white lg:top-[35%] lg:right-0">
            <b className="font-semibold text-indigo uppercase ">
              Индивидуальные проекты
            </b>
            <p className="text-sm font-medium mt-3 leading-6">
              Чтобы свободно чуствовать себя на позиции junior необходим опыт
              разработки. <br /> Вы создадите 3 проекта изучая материал от
              простого к сложному:
            </p>
            <p className="text-sm mt-4 leading-6 font-medium">
              1. Проект корзина с товарами для интернет-магазина
              <br />
              2. Социальная сеть для поиска и знакомств
              <br />
              3.Дипломный проект на выбранную вами тему:
              <br /> - Учет доходов и рассходов <br />- Бронирование отелей{" "}
              <br />- Интернет-магазин или схожий по сложности проект, которым
              вы выберети и утвердите с куратором
            </p>
          </div>
        </div>
        {/* image overview */}
        <img src={quesImg} alt="work" className="mx-auto" />
        <span className="flex justify-center font-normal text-sm leading-5 mt-5">
          Проекты учеников
        </span>
      </div>
    </div>
  );
}
