import React from "react";

export default function BlockInfo() {
  return (
    <div>
      <div className="container mx-auto max-w-[1760px] bg-[url('./assets/greenFrame.png')] bg-auto bg-no-repeat min-h-[680px] p-4">
        {/* Info frontend */}
        <div className="container mx-auto max-w-[1400px] sm:p-2">
          <div className="w-full sm:w-[90%] lg:w-[70%] xl:w-[55%]">
            <h2 className="font-semibold text-[28px] sm:text-[40px] lg:text-[54px] text-white tracking-[0.01em]">
              Профессия Frontend — разработчик
            </h2>
            <h5 className="font-semibold -z-10 md:z-10 text-[22px] sm:text-2xl md:text-3xl sm:leading-[42px] sm:mt-10 mt-5 text-white tracking-[0.005em]">
              Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
              знанием технологий больше, чем у других кандидатов
            </h5>
            <p className="text-lg sm:mt-[26px] mt-[15px] text-white font-normal tracking-[0.005em]">
              Начиная с основ изучишь JavaScript, разберешься с самыми
              популярными технологиями, научишься писать Frontend &nbsp;
              <b className="font-semibold">на фреймворке </b>и связывать его с
              Backend.&nbsp;
              <b className="font-semibold">
                Навыки после курса оцениваются от 100 т.р.
              </b>
            </p>
            <button className="py-4 px-6 md:py-[28px] md:px-[40px] sm:mt-[60px] mt-[30px] text-white bg-orange font-normal text-lg rounded-full">
              Задать вопрос об обучении
            </button>
          </div>
          <div className="px-6 pt-10 mt-14 sm:mt-12 pb-[30px] bg-white w-full h-full max-w-[396px] min-h-[166px] rounded-3xl ml-auto lg:ml-[52%] relative shadow-md">
            <span className="absolute -translate-y-[80px] translate-x-[25px] mx-auto w-[76px] h-[76px] bg-indigo rounded-[24px] shadow-sm flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.2706 1.72559C22.1461 0.758136 17.8538 0.758136 13.7295 1.72559C7.77333 3.1227 3.12272 7.77331 1.72559 13.7294C0.758136 17.8538 0.758136 22.1461 1.72559 26.2706C3.12272 32.2267 7.77333 36.8772 13.7295 38.2744C17.8538 39.2419 22.1461 39.2419 26.2706 38.2744C32.2267 36.8772 36.8772 32.2267 38.2744 26.2706C39.2419 22.1461 39.2419 17.8538 38.2744 13.7295C36.8772 7.77333 32.2267 3.1227 26.2706 1.72559V1.72559ZM10.9847 14.1713C11.4134 13.6569 12.178 13.5874 12.6924 14.0161L16.8922 17.5158C18.4435 18.8087 18.4435 21.1913 16.8922 22.4839L12.6924 25.9837C12.178 26.4125 11.4134 26.343 10.9847 25.8285C10.556 25.3141 10.6255 24.5494 11.1399 24.1206L15.3397 20.6209C15.7275 20.2976 15.7275 19.7021 15.3397 19.3789L11.1399 15.8791C10.6255 15.4504 10.556 14.6858 10.9847 14.1713V14.1713ZM21.0104 23.8397C20.3407 23.8397 19.7977 24.3826 19.7977 25.0523C19.7977 25.7219 20.3407 26.2649 21.0104 26.2649H28.0836C28.7533 26.2649 29.2962 25.7219 29.2962 25.0523C29.2962 24.3826 28.7533 23.8397 28.0836 23.8397H21.0104Z"
                  fill="white"
                />
              </svg>
            </span>
            <p className="text-base font-normal tracking-[0.005em]">
              <span className="text-orange">Обучение</span> для тех,&nbsp;
              <span className="text-gray-500">
                кто готов учиться 10 часов в неделю
              </span>
              , <span className="text-orange">чтобы получить результат</span>.
              Мы даем <span className="text-gray-500">необходимые навыки </span>
              на продвинутом уровне,
              <span className="text-gray-500"> убирая все лишнее</span>
            </p>
          </div>
        </div>
        {/* Numbers info */}
        <div className="container mx-auto max-w-[1400px] p-2 mt-8 md:mt-4">
          <div className="flex lg:justify-evenly items-center flex-wrap lg:flex-nowrap">
            <div className="flex items-center lg:pr-[60px]">
              <span className="mr-5">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8 10.41C4.12 10.41 3.48533 10.2853 2.896 10.036C2.32933 9.78667 1.83067 9.458 1.4 9.05C0.992 8.61933 0.663333 8.12067 0.414 7.554C0.164667 6.96467 0.0400001 6.33 0.0400001 5.65C0.0400001 4.97 0.164667 4.34667 0.414 3.78C0.663333 3.19067 0.992 2.692 1.4 2.284C1.83067 1.85333 2.32933 1.51333 2.896 1.264C3.48533 1.01467 4.12 0.889999 4.8 0.889999C5.48 0.889999 6.10333 1.01467 6.67 1.264C7.25933 1.51333 7.758 1.85333 8.166 2.284C8.59667 2.692 8.93667 3.19067 9.186 3.78C9.43533 4.34667 9.56 4.97 9.56 5.65C9.56 6.33 9.43533 6.96467 9.186 7.554C8.93667 8.12067 8.59667 8.61933 8.166 9.05C7.758 9.458 7.25933 9.78667 6.67 10.036C6.10333 10.2853 5.48 10.41 4.8 10.41Z"
                    fill="#E0E6E9"
                  />
                </svg>
              </span>
              <b className="font-semibold text-[54px] md:text-[78px] text-orange">
                293
              </b>
              <span className="text-base font-normal ml-4">
                HD видеоурока длительностью 3 - 15 минут
              </span>
            </div>
            <div className="flex items-center lg:pr-[60px]">
              <span className="mr-5">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8 10.41C4.12 10.41 3.48533 10.2853 2.896 10.036C2.32933 9.78667 1.83067 9.458 1.4 9.05C0.992 8.61933 0.663333 8.12067 0.414 7.554C0.164667 6.96467 0.0400001 6.33 0.0400001 5.65C0.0400001 4.97 0.164667 4.34667 0.414 3.78C0.663333 3.19067 0.992 2.692 1.4 2.284C1.83067 1.85333 2.32933 1.51333 2.896 1.264C3.48533 1.01467 4.12 0.889999 4.8 0.889999C5.48 0.889999 6.10333 1.01467 6.67 1.264C7.25933 1.51333 7.758 1.85333 8.166 2.284C8.59667 2.692 8.93667 3.19067 9.186 3.78C9.43533 4.34667 9.56 4.97 9.56 5.65C9.56 6.33 9.43533 6.96467 9.186 7.554C8.93667 8.12067 8.59667 8.61933 8.166 9.05C7.758 9.458 7.25933 9.78667 6.67 10.036C6.10333 10.2853 5.48 10.41 4.8 10.41Z"
                    fill="#E0E6E9"
                  />
                </svg>
              </span>
              <b className="font-semibold text-[54px] md:text-[78px] text-orange">
                6
              </b>
              <span className="text-base font-normal ml-4">
                Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-5">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8 10.41C4.12 10.41 3.48533 10.2853 2.896 10.036C2.32933 9.78667 1.83067 9.458 1.4 9.05C0.992 8.61933 0.663333 8.12067 0.414 7.554C0.164667 6.96467 0.0400001 6.33 0.0400001 5.65C0.0400001 4.97 0.164667 4.34667 0.414 3.78C0.663333 3.19067 0.992 2.692 1.4 2.284C1.83067 1.85333 2.32933 1.51333 2.896 1.264C3.48533 1.01467 4.12 0.889999 4.8 0.889999C5.48 0.889999 6.10333 1.01467 6.67 1.264C7.25933 1.51333 7.758 1.85333 8.166 2.284C8.59667 2.692 8.93667 3.19067 9.186 3.78C9.43533 4.34667 9.56 4.97 9.56 5.65C9.56 6.33 9.43533 6.96467 9.186 7.554C8.93667 8.12067 8.59667 8.61933 8.166 9.05C7.758 9.458 7.25933 9.78667 6.67 10.036C6.10333 10.2853 5.48 10.41 4.8 10.41Z"
                    fill="#E0E6E9"
                  />
                </svg>
              </span>
              <b className="font-semibold text-[54px] md:text-[78px] text-orange">
                193
              </b>
              <span className="text-base font-normal ml-4">
                заданий и тестов для закрепления
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
