module.exports = {
    //[NICKNAME] - Для использование ника в тексте Start. (Вызов при /start или "Главная')
    Start: `Доброго времени суток, [NICKNAME], в нашем магазине podsSell 😉\
        \nУ нас есть все, что угодно твоей душе🤭\
        \nПродаем, даже если нет 18 🔞\
        \nДоставка производится за наш счет🤝\
        \nЕсли вы не нашли того, что угодно вашей душе..👀\
        \nНапишите администратору, он вам точно, что-нибудь подберет🥰`,

    //[NICKNAME] - Для использования ника администратора в тексте FAQ
    FAQ: `😀 Только у нас ты найдёшь самые лучшие цены, \
только оригинальный товар и бесплатная доставка на все заказы! \
Мы любим наших покупателей, поэтому делаем всё для их комфорта. \
\n🤔 Ответы на часто задаваемые вопросы: \
\n\n❓ Вопрос: Как сделать заказ?\
\n❗ Ответ: Нажимайте на кнопки ниже, выбирайте нужный товар и оплачиваете, следуя инструкции. \
Когда оплата пройдет, то нажмите на кнопку проверки. \
Если все хорошо, то ожидайте сообщения от нашего менеджера(в течение двух часов). \
\n❓ Вопрос: Как вы доставляете товар? \
\n❗ Ответ: На все заказы действует бесплатная доставка при помощи Почты России. \
После оплаты с вами свяжется менеджер для уточнения точного адреса проживания.\
\n❓ Вопрос: Можно ли у вас заказывать, если мне нет 18 лет? \
\n❗ Ответ: Мы не проверяем ваш возраст, поэтому в нашем магазине можно заказывать людям любого возраста.\
\n❓ Вопрос: Что делать, если моего города нет в списке?\
\n❗ Ответ: Вам нужно выбрать ближайший к вам город миллионик. Из этого города с вами свяжется менеджер с обсуждением точного адреса.\
\n\n❓ У вас остались вопросы?\
\n❗ Задайте их нашему менеджеру и он вам обязательно ответит: [NICKNAME]\
\nСпасибо, что выбрали наш магазин!`,

    //[ID] - Для использование ID Киви кошелька в тексте Киви платежа
    //[PRICE] - Для использование суммы транзакции в тексте Киви платежа
    //[COMMENT] - Для использования нужного коментария для транзакции в тексте Киви платежа
    //[NICKNAME] - Для использования ника администратора для тех поддержки в тексте Киви платежа
    QIWI_info: `➖➖➖➖➖➖➖➖➖➖➖\
        \nТовар зарезервирован на складе.\
        \nСовершите платёж на QIWI кошелёк, обязательно прикрепив комментарий\
        \n➖➖➖➖➖➖➖➖➖➖➖\
        \n🏷 QIWI кошелек: +[ID] 🏷\
        \n💵 Сумма: [PRICE] рублей.\
        \n💬 Комментарий к платежу: [COMMENT]\
        \n➖➖➖➖➖➖➖➖➖➖➖\
        \nБез комментария оплата не засчитается!\
        \nЕсли остались вопросы, пишите Тех. Администратору: [NICKNAME]`,

    //Текст при начале проверки оплаты
    Starting: `Начинается проверка. Ожидайте ...`,

    //Текст при удачном получении оплаты
    //[NICKNAME] - Для использования ника администратора для тех поддержки в тексте
    Payment_Success: `Платеж успешно получен ✅\
\nОжидайте! Наш менеджер с вами свяжется в течение двух часов.\
\nВсе вопросы к Администратору.`,

    //Текст, когда оплата не найдена
    //[NICKNAME] - Для использования ника администратора для тех поддержки в тексте
    Payment_Failed: `Мы не нашли ваш платеж.\
        \nПросим проверить еще через 2-3 минуты.\
        \nВсе вопросы к Администратору`,

    //Текст, когда человек слищком быстро проверяет оплату
    //[TIME] - Для использования остатка времени которое нужно еще подождать. (Пример 2м 47с)
    Cooldown_Text: `Следующий запрос можно провести только через [TIME].`,

    //Текст Кнопки для возврата в начальное менью
    Return_Button: `❤ Главная`,

    //Текст Кнопки для выбора покупки в начальном менью
    Buy_Button: `💰Ассортимент`,

    //Текст Кнопки для выбора F.A.Q. (Часто задаваемые вопросы) в начальном менью
    FAQ_Button: `❓ F.A.Q ❓`,

    //Текст Кнопки для проверки оплаты
    Check_Button: `Я Оплатил 👍`,

    //Текст Кнопки для перехода назад
    Back_Button: `⬅️ Назад`,

    //Текст Меню с выбором типа    
    Main_Choose: `↪ Выберите Тип ↩`,

    //Текст Меню с выбором типа Картритджа    
    Cartridj_Choose: 'Выберите Картритдж',

    //Текст Меню с выбором типа ПОД-систем
    Pods_Choose: `Выберите свою под-систему`,

    //Текст Меню с выбором цвета Juul
    JuulColor_Choose: `Выберите цвет Juul`,

    //Текст Меню с выбором цвета Logic
    LogicColor_Choose: `Выберите цвет Lodic`,

    //Текст Меню с выбором типа HQD    
    HQD_Choose: 'Выберите Тип HQD',

    //Текст Меню с выбором вкуса (для всех)    
    Taste_Choose: '🌺 Выберите Вкус',

    //Текст Меню с выбором Города    
    City_Choose: '📫 Выберите свой Город ',

    //Список всех вкусов для JUUL
    JUUL_TasteList: [
        `🥒Огурец 5.0%(4 шт)`,
        `🍓🍇Фруктовый микс 5.0%(4 шт)`,
        `🥬Мята 5.0%(4 шт)`,
        `🚬Классический табак 5.0%(4 шт)`,
    ],

    //Список всех вкусов для LOGIC
    LOGIC_TasteList: [
        `🥭Экзотическое Манго 5.0%(2шт)`,
        `🍒Ягодный Фреш 5.0%(2шт)`,
        `🥥Тропический Мусс 5.0%(2шт)`,
    ],

    //Список всех вкусов для HQD
    HQD_TasteList: [
        `🍓Клубника`,
        `Черника`,
        `🍒Вишня`,
        `🍌Банан`,
        `🍉Арбуз`,
        `🍑Персик`,
        `🍇Виноград`,
        `🍎Яблоко`,
        `🥭Манго`,
        `Личи`,
        `🍊Апельсин`,
        `🍈Дыня`,
        `🍓🍇Мультифрукт`,
        `🍍Ананас`,
        `🍋Лимонный пирог`,
        `🏺Корица`,
        `🍬Жвачка`,
        `🥬Мята, хвоя и лесные ягоды`,
        `🍹Кола`,
        `🍸Розовый лимонад`,
    ],

    //Список всех городов
    City_List: [
        `Москва`,
        `Санкт-Петербург`,
        `Челябинск`,
        `Самара`,
        `Тверь`,
        `Тула`,
        `Пермь`,
        `Ростов`,
    ],

    //Список всех цветов под-систем Logic
    Logic_Colors: [
        `⚫Черный`,
        `🔴Лиловый бархат`,
        `🟢Неоновая мята`,
        `🎀Розовое золото`,
    ],

    //Список всех цветов под-систем Juul
    Juul_Colors: [
        `⚫Черный`,
        `🔴Красный`,
    ],
    //Главный текст для обработки общих ошибок
    //[ERROR] - Для использования названия ошибки в тексте Ошибки
    //[NICKNAME] - Для использования ника администратора для тех поддержки в тексте
    Error: `Произошла ошибка. Сообщите Администрации!`,

    //Разные другие ошибки, не поддерживают ввод названий Ошибки
    Couldnt_Find_Error: `Мы не смогли обнаружить у вас дейстующих запросов.`,
    Check_Error: `Возникла проблема с проверкой оплаты!`
}