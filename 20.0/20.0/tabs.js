let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
		icon: 'settings'
	}
];

const unactivateTabs = () => {
    document.querySelector(`.tab.active`).classList.remove(`active`);
}

const renderTab = (item, index) => {
    let tab = document.createElement(`button`);
    tab.className = `tab`;
    tab.innerHTML = item.tab;
    wrapperTabs.append(tab);

    tab.addEventListener(`click`, ()=>{
        unactivateTabs();
        tab.classList.add(`active`);
        renderContent(item);
    });

    if(!index){
        tab.classList.add(`active`);
        renderContent(item);
    }
}

const renderContent = item => {
    wrapperContentTitle.innerHTML = item.title;
    
    wrapperContentIcon.src = `icons/${item.icon}.svg`;
    wrapperContentIcon.alt = item.title;
    wrapperContentIcon.title = item.title;
    
    wrapperContentText.innerHTML = item.description;
}

const body = document.querySelector(`body`);

let wrapper = document.createElement(`div`);
wrapper.className = `wrapper`;
body.append(wrapper);

let wrapperTabs = document.createElement(`div`);
wrapperTabs.className = `wrapper__tabs`;
wrapper.append(wrapperTabs);

let wrapperContent = document.createElement(`div`);
wrapperContent.className = `wrapper__content`;
wrapper.append(wrapperContent);

let wrapperContentTitle = document.createElement(`h2`);
wrapperContentTitle.className = `wrapper__content--title`;
wrapperContent.append(wrapperContentTitle);

let wrapperContentImage = document.createElement(`div`);
wrapperContentImage.className = `wrapper__content--img`;
wrapperContent.append(wrapperContentImage);

let wrapperContentIcon = document.createElement(`img`);
wrapperContentImage.append(wrapperContentIcon);

let wrapperContentText = document.createElement(`p`);
wrapperContentText.className = `wrapper__content--text`;
wrapperContent.append(wrapperContentText);

menu.forEach((item,index) => renderTab(item,index));