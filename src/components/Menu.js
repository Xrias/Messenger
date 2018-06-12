import React from 'react';
import '../static/css/menu';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu_profile">
                    <img className="menu_profile_avatar" src="../images/avatar.png" />
                    <div className="menu_profile_name">
                        Артем Решетников
                    </div>
                    <div className="menu_profile_phone">
                        +7 966 707 09 85
                    </div>
                    <span className="menu_profile_favorites" />
                </div>
                <div className="menu_group">
                    <img />
                    <span >Создать группу</span>
                </div>
                <div className="menu_channel">
                    <img />
                    <span >Создать канал</span>
                </div>
                <div className="menu_contacts">
                    <img />
                    <span >Контакты</span>
                </div>
                <div className="menu_calls">
                    <img />
                    <span >Звонки</span>
                </div>
                <div className="menu_properties">
                    <img />
                    <span >Настройки</span>
                </div>
                <div className="menu_nightTheme">
                    <img />
                    <span>Ночная тема</span>
                </div>
                <div className="menu_footer">
                    <span> K1logramm </span>
                </div>
            </div>
        );
    }
}

export default Menu;
