import UnderlineBlock from "../UI/UnderlineBlock";
import BottomImage from "../components/BottomImage";
import SubHero from "../components/SubHero";
import { creditArr } from "../utils/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../hooks/redux.js";
import { createCredit } from "../http/creditAPI.js";

const imageLink =
  "https://static.wixstatic.com/media/548a7f_658a8daed2714200abe5ce17cd7a141f.jpg/v1/fill/w_728,h_640,al_b,q_85,enc_auto/548a7f_658a8daed2714200abe5ce17cd7a141f.jpg";

const Credit = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { user, isAuth } = useAppSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_email: isAuth ? user.email : email,
      user_name: name,
      user_phone: phone,
      message,
    };

    // console.log(data);

    createCredit(data).then((data) => {
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");

      console.log(data);
    });
  };

  return (
    <motion.main>
      <SubHero imageLink={imageLink} mainText="Кредитование" />
      <div className="bg-secondaryLightGray">
        <div className="mx-auto max-w-5xl px-6 py-12 ">
          <div className="mb-8 flex w-full flex-col justify-center gap-4 bg-secondaryLightGray md:mb-16 md:flex-row">
            {creditArr.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col items-center justify-between gap-2 text-center text-gray-500">
                <div className="grid h-24 w-24 place-items-center rounded-full ">
                  <img src={item.image} className="object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-bold ">{item.title}</h2>
                  <p className="max-w-[300px]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center md:-mb-24 md:gap-8 ">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
              Получите <br /> кредит сегодня
            </h1>
            <UnderlineBlock />
            <p className="max-w-[500px] text-gray-500 md:text-lg">
              Получите финансовую поддержку на покупку автомобиля уже сегодня и осуществите свои планы без лишних
              ожиданий и затруднений.
            </p>
            <p className="max-w-[500px] text-gray-500 md:text-lg">
              Наша команда специалистов готова оказать профессиональную помощь в оформлении кредита, чтобы вы могли
              владеть своим новым авто гораздо быстрее, чем вы ожидали.
            </p>
          </div>
          <div className="relative z-40 grid gap-y-2 bg-transparent md:-bottom-64 md:grid-cols-2">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid place-items-center bg-primaryOrange p-8 text-center text-secondaryGray md:p-4">
              <div className="px-4">
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">Обратитесь сегодня!</h2>
                <p className="text-lg uppercase md:text-xl">
                  УКАЖИТЕ ВАШИ ДАННЫЕ, <br /> И МЫ СКОРО СВЯЖЕМСЯ С ВАМИ
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 md:p-12">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Имя"
                  required
                  className="border border-gray-500 p-2 md:p-4 md:text-lg"
                />
                <input
                  value={isAuth ? user.email : email}
                  readOnly={isAuth ? true : false}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Эл. почта"
                  className="border border-gray-500 p-2 md:p-4 md:text-lg"
                  type="email"
                  required
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  className="border border-gray-500 p-2 md:p-4 md:text-lg"
                  type="tel"
                  required
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Сообщение"
                  className="border border-gray-500 p-2 md:p-4 md:text-lg"></textarea>
                <button className="w-full rounded border border-transparent bg-secondaryGray px-6 py-3 font-semibold uppercase text-white transition hover:border-secondaryGray hover:bg-white hover:text-secondaryGray sm:w-auto sm:px-12 sm:py-4 md:self-end">
                  Отправить
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <BottomImage />
    </motion.main>
  );
};

export default Credit;
